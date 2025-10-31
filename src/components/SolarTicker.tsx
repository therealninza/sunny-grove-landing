import { Sun, Zap, Wallet } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { QRCodeSVG } from "qrcode.react";

const BITCOIN_ADDRESS = "bc1q7pza7k7xme4yzt84n87mr47r0ugpwdcukclh9y";

export const SolarTicker = () => {
  const [solarWatts, setSolarWatts] = useState<number | null>(null);
  const [btcBalance, setBtcBalance] = useState<number | null>(null);

  useEffect(() => {
    // Simulated data until panels are hooked up
    const fetchSolarData = () => {
      // This will be replaced with actual API call when panels are connected
      setSolarWatts(0);
    };

    fetchSolarData();
    const interval = setInterval(fetchSolarData, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchBtcBalance = async () => {
      try {
        const response = await fetch(`https://mempool.space/api/address/${BITCOIN_ADDRESS}`);
        const data = await response.json();
        // Convert satoshis to BTC
        const balanceInBTC = (data.chain_stats.funded_txo_sum - data.chain_stats.spent_txo_sum) / 100000000;
        setBtcBalance(balanceInBTC);
      } catch (error) {
        console.error("Error fetching BTC balance:", error);
      }
    };

    fetchBtcBalance();
    const interval = setInterval(fetchBtcBalance, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-3 bg-black/30 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
      <Sun className="h-5 w-5 text-yellow-400" />
      <span>
        {solarWatts !== null ? `${solarWatts.toLocaleString()} W` : "Loading..."}
      </span>
      
      <Popover>
        <PopoverTrigger asChild>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-6 px-2 text-xs bg-white/10 hover:bg-white/20 text-white border-white/20"
          >
            <Zap className="h-3 w-3 mr-1" />
            mine2us
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64 p-3">
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Mining Information</h4>
            <div className="text-xs space-y-1">
              <div>
                <span className="font-medium">Stratum:</span><br />
                <code className="text-xs bg-muted px-1 py-0.5 rounded">
                  stratum+tcp://stratum.braiins.com:3333
                </code>
              </div>
              <div>
                <span className="font-medium">Worker:</span><br />
                <code className="text-xs bg-muted px-1 py-0.5 rounded">
                  frogchilling
                </code>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-6 px-2 text-xs bg-orange-500/20 hover:bg-orange-500/30 text-white border-orange-500/30"
            onClick={() => window.open(`https://mempool.space/address/${BITCOIN_ADDRESS}`, '_blank')}
          >
            <Wallet className="h-3 w-3 mr-1" />
            {btcBalance !== null ? `${btcBalance.toFixed(8)} BTC` : "Loading..."}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64 p-4">
          <div className="space-y-3 flex flex-col items-center">
            <h4 className="font-medium text-sm">Donation Address</h4>
            <div className="bg-white p-3 rounded-lg">
              <QRCodeSVG 
                value={`bitcoin:${BITCOIN_ADDRESS}`}
                size={180}
                level="H"
              />
            </div>
            <code className="text-xs bg-muted px-2 py-1 rounded break-all text-center">
              {BITCOIN_ADDRESS}
            </code>
            <a 
              href={`https://mempool.space/address/${BITCOIN_ADDRESS}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-500 hover:underline"
            >
              View on Mempool.space
            </a>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};