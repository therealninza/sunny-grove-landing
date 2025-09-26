import { Sun, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export const SolarTicker = () => {
  const [solarWatts, setSolarWatts] = useState<number | null>(null);

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
    </div>
  );
};