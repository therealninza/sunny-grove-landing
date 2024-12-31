import { useQuery } from "@tanstack/react-query";
import { Bitcoin } from "lucide-react";
import { useState, useEffect } from "react";

export const BitcoinTicker = () => {
  const fetchBitcoinPrice = async () => {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    const data = await response.json();
    return data.bitcoin.usd;
  };

  const { data: price, refetch } = useQuery({
    queryKey: ['bitcoinPrice'],
    queryFn: fetchBitcoinPrice,
    refetchInterval: 30000, // 30 seconds
  });

  return (
    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
      <Bitcoin className="h-5 w-5 text-orange-400" />
      <span className="text-white font-medium">
        ${price?.toLocaleString() ?? '...'}
      </span>
    </div>
  );
};