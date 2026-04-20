import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Bitcoin, Hash, Loader2, TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BTC_ADDRESS = "bc1q7pza7k7xme4yzt84n87mr47r0ugpwdcukclh9y";
const CAN_PRICE_CAD = 0.10;

interface AddressData {
  chain_stats: {
    funded_txo_count: number;
    funded_txo_sum: number;
    tx_count: number;
  };
}

interface Transaction {
  txid: string;
  status: { confirmed: boolean; block_time?: number };
  vout: { scriptpubkey_address: string; value: number }[];
}

const CanWall = () => {
  const [addressData, setAddressData] = useState<AddressData | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [btcCadPrice, setBtcCadPrice] = useState<number | null>(null);
  const [historicalPrices, setHistoricalPrices] = useState<Record<number, number>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [addrRes, txRes, priceRes] = await Promise.all([
          fetch(`https://mempool.space/api/address/${BTC_ADDRESS}`),
          fetch(`https://mempool.space/api/address/${BTC_ADDRESS}/txs`),
          fetch("https://mempool.space/api/v1/prices"),
        ]);

        const addrData = await addrRes.json();
        const txData: Transaction[] = await txRes.json();
        const priceData = await priceRes.json();

        setAddressData(addrData);
        setTransactions(txData);
        setBtcCadPrice(priceData.CAD);

        // Fetch historical BTC/CAD prices for cost basis calculation
        const confirmedTxs = txData.filter((tx: Transaction) => tx.status.block_time);
        if (confirmedTxs.length > 0) {
          const timestamps = confirmedTxs.map((tx: Transaction) => tx.status.block_time!);
          const minTime = Math.min(...timestamps);
          const maxTime = Math.max(...timestamps);

          try {
            const histRes = await fetch(
              `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=cad&from=${minTime}&to=${maxTime + 86400}`
            );
            const histData = await histRes.json();

            if (histData.prices) {
              const priceMap: Record<number, number> = {};
              for (const tx of confirmedTxs) {
                const txTime = tx.status.block_time! * 1000;
                let closest = histData.prices[0];
                let minDiff = Math.abs(histData.prices[0][0] - txTime);
                for (const p of histData.prices) {
                  const diff = Math.abs(p[0] - txTime);
                  if (diff < minDiff) {
                    minDiff = diff;
                    closest = p;
                  }
                }
                priceMap[tx.status.block_time!] = closest[1];
              }
              setHistoricalPrices(priceMap);
            }
          } catch (e) {
            console.error("Failed to fetch historical prices:", e);
          }
        }
      } catch (err) {
        console.error("Failed to fetch data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalBtc = addressData
    ? addressData.chain_stats.funded_txo_sum / 1e8
    : 0;

  const getReceivedAmount = (tx: Transaction) => {
    return tx.vout
      .filter((v) => v.scriptpubkey_address === BTC_ADDRESS)
      .reduce((sum, v) => sum + v.value, 0);
  };

  const getCostBasis = (tx: Transaction) => {
    if (!tx.status.block_time || !historicalPrices[tx.status.block_time]) return null;
    const sats = getReceivedAmount(tx);
    return (sats / 1e8) * historicalPrices[tx.status.block_time];
  };

  const totalCostBasis = transactions.reduce((sum, tx) => {
    const cost = getCostBasis(tx);
    return sum + (cost ?? 0);
  }, 0);

  const totalCurrentValue = btcCadPrice ? totalBtc * btcCadPrice : 0;
  const totalGainLoss = totalCurrentValue - totalCostBasis;
  const totalGainLossPercent = totalCostBasis > 0 ? (totalGainLoss / totalCostBasis) * 100 : 0;
  const hasCostData = Object.keys(historicalPrices).length > 0;

  const satsToCans = (sats: number) => {
    if (!btcCadPrice) return 0;
    const cadValue = (sats / 1e8) * btcCadPrice;
    return Math.floor(cadValue / CAN_PRICE_CAD);
  };

  const formatDate = (timestamp?: number) => {
    if (!timestamp) return "Unconfirmed";
    return new Date(timestamp * 1000).toLocaleDateString("en-CA", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "hsl(150, 30%, 10%)" }}>
        <Loader2 className="h-10 w-10 animate-spin text-emerald-400" />
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "hsl(150, 30%, 10%)" }}>
      {/* Header */}
      <div className="border-b" style={{ borderColor: "hsl(150, 20%, 20%)" }}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" className="text-emerald-300 hover:text-emerald-100 hover:bg-emerald-900/30">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-emerald-100">🥫 The Can Wall</h1>
          <div />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-100 mb-4">
            The Can Wall
          </h2>
          <p className="text-lg text-emerald-300/80 max-w-2xl mx-auto">
            Every donation to the greenhouse treasury is commemorated here. Each transaction is converted to its equivalent in cans — because every little bit counts. 🌱
          </p>
        </div>

        {/* Treasury Performance */}
        {hasCostData && btcCadPrice && (
          <Card className="border-emerald-800/50 mb-8 max-w-4xl mx-auto" style={{ background: "hsl(150, 25%, 15%)" }}>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                {totalGainLoss >= 0 ? (
                  <TrendingUp className="h-5 w-5 text-green-400" />
                ) : (
                  <TrendingDown className="h-5 w-5 text-red-400" />
                )}
                <h3 className="text-lg font-bold text-emerald-100">Treasury Performance</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <p className="text-xs text-emerald-400 mb-1">Cost Basis</p>
                  <p className="text-2xl font-bold text-emerald-100">${totalCostBasis.toFixed(2)}</p>
                  <p className="text-xs text-emerald-300/50">CAD at time of donation</p>
                </div>
                <div>
                  <p className="text-xs text-emerald-400 mb-1">Current Value</p>
                  <p className="text-2xl font-bold text-emerald-100">${totalCurrentValue.toFixed(2)}</p>
                  <p className="text-xs text-emerald-300/50">CAD at current price</p>
                </div>
                <div>
                  <p className="text-xs text-emerald-400 mb-1">Unrealized Gain/Loss</p>
                  <p className={`text-2xl font-bold ${totalGainLoss >= 0 ? "text-green-400" : "text-red-400"}`}>
                    {totalGainLoss >= 0 ? "+" : ""}${totalGainLoss.toFixed(2)}
                  </p>
                  <p className={`text-xs ${totalGainLoss >= 0 ? "text-green-400/60" : "text-red-400/60"}`}>
                    {totalGainLossPercent >= 0 ? "+" : ""}{totalGainLossPercent.toFixed(1)}%
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <Card className="border-emerald-800/50" style={{ background: "hsl(150, 25%, 15%)" }}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-emerald-400 flex items-center gap-2">
                <Bitcoin className="h-4 w-4" />
                Total Balance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-emerald-100">
                {totalBtc.toFixed(8)} <span className="text-lg text-emerald-400">BTC</span>
              </p>
              {btcCadPrice && (
                <p className="text-sm text-emerald-300/60 mt-1">
                  ≈ ${(totalBtc * btcCadPrice).toFixed(2)} CAD
                </p>
              )}
            </CardContent>
          </Card>

          <Card className="border-emerald-800/50" style={{ background: "hsl(150, 25%, 15%)" }}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-emerald-400 flex items-center gap-2">
                <Hash className="h-4 w-4" />
                Transactions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-emerald-100">
                {addressData?.chain_stats.funded_txo_count ?? 0}
              </p>
              <p className="text-sm text-emerald-300/60 mt-1">donations received</p>
            </CardContent>
          </Card>

          <Card className="border-emerald-800/50" style={{ background: "hsl(150, 25%, 15%)" }}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-emerald-400 flex items-center gap-2">
                🥫 Total Cans
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-emerald-100">
                {satsToCans(addressData?.chain_stats.funded_txo_sum ?? 0).toLocaleString()}
              </p>
              <p className="text-sm text-emerald-300/60 mt-1">cans equivalent @ $0.10 CAD each</p>
            </CardContent>
          </Card>
        </div>

        {/* Transaction Grid */}
        <h3 className="text-2xl font-bold text-emerald-100 mb-6 text-center">
          Donation Wall
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {transactions.map((tx) => {
            const receivedSats = getReceivedAmount(tx);
            const cans = satsToCans(receivedSats);
            const btcAmount = receivedSats / 1e8;
            const costBasis = getCostBasis(tx);
            const currentVal = btcCadPrice ? btcAmount * btcCadPrice : 0;
            const gl = costBasis ? currentVal - costBasis : null;

            return (
              <Card
                key={tx.txid}
                className="border-emerald-800/40 hover:border-emerald-600/60 transition-colors"
                style={{ background: "hsl(150, 22%, 13%)" }}
              >
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-4xl">🥫</span>
                    <span className="text-xs text-emerald-400/70 font-mono">
                      {formatDate(tx.status.block_time)}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-emerald-100 mb-1">
                    {cans.toLocaleString()} <span className="text-sm text-emerald-400">cans</span>
                  </p>
                  <p className="text-sm text-emerald-300/60">
                    {btcAmount.toFixed(8)} BTC ({receivedSats.toLocaleString()} sats)
                  </p>
                  {costBasis !== null && gl !== null && (
                    <div className="mt-2 pt-2 border-t border-emerald-800/30">
                      <div className="flex justify-between text-xs">
                        <span className="text-emerald-300/50">Cost: ${costBasis.toFixed(2)}</span>
                        <span className={gl >= 0 ? "text-green-400" : "text-red-400"}>
                          {gl >= 0 ? "+" : ""}${gl.toFixed(2)} ({((gl / costBasis) * 100).toFixed(1)}%)
                        </span>
                      </div>
                    </div>
                  )}
                  <a
                    href={`https://mempool.space/tx/${tx.txid}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-500 hover:text-emerald-300 mt-3 inline-block font-mono truncate max-w-full"
                  >
                    {tx.txid.slice(0, 16)}…
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="text-center mt-12">
          <a
            href={`https://mempool.space/address/${BTC_ADDRESS}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-emerald-500 hover:text-emerald-300 underline"
          >
            View full address on mempool.space ↗
          </a>
        </div>
      </div>
    </div>
  );
};

export default CanWall;
