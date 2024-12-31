import { Sun } from "lucide-react";
import { useState, useEffect } from "react";

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
    <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
      <Sun className="h-5 w-5 text-yellow-400" />
      <span>
        {solarWatts !== null ? `${solarWatts.toLocaleString()} W` : "Loading..."}
      </span>
    </div>
  );
};