import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Bitcoin, Hash, Loader2, TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const BTC_ADDRESS = "bc1q7pza7k7xme4yzt84n87mr47r0ugpwdcukclh9y";
const CAN_PRICE_CAD = 0.10;

const Coin = ({ small = false }: { small?: boolean }) => (
  <span className={small ? "game-coin game-coin--small" : "game-coin"} aria-hidden="true">
    <span className="game-coin__shine" />
    <span className="game-coin__sprout">✦</span>
  </span>
);


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
          const timestamps = confirmedTxs
            .map((tx: Transaction) => tx.status.block_time)
            .filter((timestamp): timestamp is number => typeof timestamp === "number");
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
                const blockTime = tx.status.block_time;
                if (!blockTime) continue;
                const txTime = blockTime * 1000;
                let closest = histData.prices[0];
                let minDiff = Math.abs(histData.prices[0][0] - txTime);
                for (const p of histData.prices) {
                  const diff = Math.abs(p[0] - txTime);
                  if (diff < minDiff) {
                    minDiff = diff;
                    closest = p;
                  }
                }
                priceMap[blockTime] = closest[1];
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

  // Live exchange rate: how many sats one $0.10 CAD can costs right now
  const satsPerCan = btcCadPrice
    ? Math.round((CAN_PRICE_CAD / btcCadPrice) * 1e8)
    : null;

  const satsToCans = (sats: number, priceCad?: number | null) => {
    const price = priceCad ?? btcCadPrice;
    if (!price) return 0;
    const cadValue = (sats / 1e8) * price;
    return Math.floor(cadValue / CAN_PRICE_CAD);
  };

  // Total cans is the sum of each donation's cans locked at its historical price.
  // Falls back to current price only for transactions missing historical data.
  const totalCans = transactions.reduce((sum, tx) => {
    const sats = getReceivedAmount(tx);
    const histPrice = tx.status.block_time ? historicalPrices[tx.status.block_time] : undefined;
    return sum + satsToCans(sats, histPrice);
  }, 0);

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
      <div className="can-game min-h-screen flex flex-col items-center justify-center gap-5">
        <Coin />
        <Loader2 className="h-8 w-8 animate-spin text-game-ink" />
        <p className="game-pixel text-xs text-game-ink">LOADING TREASURY…</p>
      </div>
    );
  }

  return (
    <main className="can-game min-h-screen relative overflow-hidden pb-36">
      <Cloud className="game-cloud--one" />
      <Cloud className="game-cloud--two" />
      <Cloud className="game-cloud--three" />

      <header className="relative z-20 border-b-4 border-game-ink bg-game-sky-deep/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-3">
          <Link to="/">
            <Button variant="ghost" className="game-pixel text-game-ink hover:text-game-ink hover:bg-game-cloud text-[10px] sm:text-xs">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
          <p className="game-pixel text-[9px] sm:text-xs text-game-ink text-right">WORLD 2-1 · CAN WALL</p>
        </div>
      </header>

      <div className="container relative z-10 mx-auto px-4 pt-10 sm:pt-14">
        <section className="text-center mb-10 sm:mb-14">
          <div className="flex justify-center gap-5 mb-5"><Coin small /><Coin /><Coin small /></div>
          <p className="game-pixel text-[9px] sm:text-xs text-game-ink mb-4">FROG CHILLING PLACE PRESENTS</p>
          <h1 className="game-pixel text-3xl sm:text-5xl md:text-6xl text-game-cloud game-title-shadow mb-6">THE CAN WALL</h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base font-bold text-game-ink bg-game-cloud/90 border-4 border-game-ink px-5 py-4 game-hard-shadow">
            Every treasury donation becomes a permanent can collectible, locked at its value on the day it arrived.
          </p>
        </section>

        {hasCostData && btcCadPrice && (
          <section className="game-panel max-w-5xl mx-auto mb-8">
            <div className="game-panel__title">
                {totalGainLoss >= 0 ? (
                  <TrendingUp className="h-5 w-5" />
                ) : (
                  <TrendingDown className="h-5 w-5" />
                )}
                <h2 className="game-pixel text-[10px] sm:text-sm">TREASURY PERFORMANCE</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3">
                <div className="game-score-cell">
                  <p className="game-label">COST BASIS</p>
                  <p className="game-value">${totalCostBasis.toFixed(2)}</p>
                  <p className="game-note">CAD WHEN COLLECTED</p>
                </div>
                <div className="game-score-cell">
                  <p className="game-label">CURRENT VALUE</p>
                  <p className="game-value">${totalCurrentValue.toFixed(2)}</p>
                  <p className="game-note">CAD RIGHT NOW</p>
                </div>
                <div className="game-score-cell">
                  <p className="game-label">GAIN / LOSS</p>
                  <p className={`game-value ${totalGainLoss >= 0 ? "text-game-positive" : "text-game-negative"}`}>
                    {totalGainLoss >= 0 ? "+" : ""}${totalGainLoss.toFixed(2)}
                  </p>
                  <p className={`game-note ${totalGainLoss >= 0 ? "text-game-positive" : "text-game-negative"}`}>
                    {totalGainLossPercent >= 0 ? "+" : ""}{totalGainLossPercent.toFixed(1)}%
                  </p>
                </div>
            </div>
          </section>
        )}

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          <article className="game-block game-block--brick">
              <div className="game-label flex items-center justify-center gap-2"><Bitcoin className="h-4 w-4" /> BALANCE</div>
              <p className="game-stat">
                {totalBtc.toFixed(8)} <span>BTC</span>
              </p>
              {btcCadPrice && (
                <p className="game-note mt-2">
                  ≈ ${(totalBtc * btcCadPrice).toFixed(2)} CAD
                </p>
              )}
          </article>

          <article className="game-block game-block--question">
              <span className="game-question" aria-hidden="true">?</span>
              <div className="game-label flex items-center justify-center gap-2"><Hash className="h-4 w-4" /> TRANSACTIONS</div>
              <p className="game-stat">
                {addressData?.chain_stats.funded_txo_count ?? 0}
              </p>
              <p className="game-note mt-2">DONATIONS COLLECTED</p>
          </article>

          <article className="game-block game-block--pipe">
              <div className="game-label flex items-center justify-center gap-2"><Coin small /> TOTAL CANS</div>
              <p className="game-stat">
                {totalCans.toLocaleString()}
              </p>
              <p className="game-note mt-2">LOCKED AT $0.10 CAD EACH</p>
              {satsPerCan !== null && (
                <p className="game-note mt-2">
                  1 CAN ≈ {satsPerCan.toLocaleString()} SATS RIGHT NOW
                </p>
              )}
          </article>
        </section>

        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="game-brick-mini" aria-hidden="true" />
          <h2 className="game-pixel text-lg sm:text-2xl text-game-cloud game-title-shadow text-center">DONATION WALL</h2>
          <span className="game-brick-mini" aria-hidden="true" />
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {transactions.map((tx) => {
            const receivedSats = getReceivedAmount(tx);
            const histPrice = tx.status.block_time ? historicalPrices[tx.status.block_time] : undefined;
            const cans = satsToCans(receivedSats, histPrice);
            const btcAmount = receivedSats / 1e8;
            const costBasis = getCostBasis(tx);
            const currentVal = btcCadPrice ? btcAmount * btcCadPrice : 0;
            const gl = costBasis ? currentVal - costBasis : null;

            return (
              <article
                key={tx.txid}
                className="game-donation group"
              >
                  <Coin />
                  <div className="flex items-start justify-between gap-3 mb-5 pt-1">
                    <span className="game-pixel text-2xl text-game-brick-dark" aria-hidden="true">?</span>
                    <span className="game-pixel text-[8px] text-game-ink text-right leading-relaxed">
                      {formatDate(tx.status.block_time)}
                    </span>
                  </div>
                  <p className="text-2xl font-black text-game-ink mb-1">
                    {cans.toLocaleString()} <span className="game-pixel text-[9px]">CANS</span>
                  </p>
                  <p className="text-xs font-bold text-game-brick-dark break-words">
                    {btcAmount.toFixed(8)} BTC ({receivedSats.toLocaleString()} sats)
                  </p>
                  {costBasis !== null && gl !== null && (
                    <div className="mt-4 pt-3 border-t-2 border-game-brick-dark/30">
                      <div className="flex justify-between gap-2 text-xs font-black">
                        <span>COST ${costBasis.toFixed(2)}</span>
                        <span className={gl >= 0 ? "text-game-positive" : "text-game-negative"}>
                          {gl >= 0 ? "+" : ""}${gl.toFixed(2)} ({((gl / costBasis) * 100).toFixed(1)}%)
                        </span>
                      </div>
                    </div>
                  )}
                  <a
                    href={`https://mempool.space/tx/${tx.txid}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="game-pixel text-[7px] text-game-ink hover:text-game-brick-dark mt-4 inline-block truncate max-w-full underline decoration-2 underline-offset-4"
                  >
                    {tx.txid.slice(0, 16)}…
                  </a>
              </article>
            );
          })}
        </section>

        <div className="text-center mt-14">
          <a
            href={`https://mempool.space/address/${BTC_ADDRESS}`}
            target="_blank"
            rel="noopener noreferrer"
            className="game-pixel inline-flex text-[9px] sm:text-xs text-game-cloud bg-game-pipe border-4 border-game-ink px-5 py-4 game-hard-shadow hover:-translate-y-1 transition-transform"
          >
            VIEW ON MEMPOOL.SPACE ↗
          </a>
        </div>
      </div>
      <div className="game-ground" aria-hidden="true"><div className="game-grass" /><div className="game-dirt" /></div>
    </main>
  );
};

export default CanWall;
