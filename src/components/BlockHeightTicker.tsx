import { useQuery } from "@tanstack/react-query";
import { Blocks } from "lucide-react";

export const BlockHeightTicker = () => {
  const fetchBlockHeight = async () => {
    const response = await fetch('https://mempool.space/api/blocks/tip/height');
    return response.json();
  };

  const { data: blockHeight } = useQuery({
    queryKey: ['blockHeight'],
    queryFn: fetchBlockHeight,
    refetchInterval: 10000, // Check every 10 seconds for new blocks
  });

  return (
    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
      <Blocks className="h-5 w-5 text-blue-400" />
      <span className="text-white font-medium">
        Block #{blockHeight?.toLocaleString() ?? '...'}
      </span>
    </div>
  );
};