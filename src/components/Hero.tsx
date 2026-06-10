
import { ArrowRight, Bitcoin, Cpu, Sun, Sprout, Twitter, Github, Heart, Map, Copy, Building2, Compass, Mic, Archive, Calculator, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VinylPlayer } from "@/components/VinylPlayer";
import { BitcoinTicker } from "@/components/BitcoinTicker";
import { BlockHeightTicker } from "@/components/BlockHeightTicker";
import { SolarTicker } from "@/components/SolarTicker";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Hero = () => {
  const [isFundraisingOpen, setIsFundraisingOpen] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    });
  };

  return (
    <div className="relative min-h-[80vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518495973542-4542c06a5843')",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Header: thin ticker strip on top, nav row below */}
      <div className="absolute top-0 left-0 right-0 z-20">
        {/* Thin top strip: tickers */}
        <div className="w-full bg-black/40 backdrop-blur-sm border-b border-white/10">
          <div className="container mx-auto px-4 py-1.5 flex items-center justify-center sm:justify-start gap-2 overflow-x-auto">
            <BitcoinTicker />
            <BlockHeightTicker />
            <SolarTicker />
          </div>
        </div>

        {/* Nav row */}
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-2">
          <div className="text-white/80 text-sm font-medium tracking-wide hidden sm:block">
            🐸 Frog Chilling Place
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="sm"
                  className="group bg-gradient-to-r from-emerald-500/20 to-orange-500/20 hover:from-emerald-500/30 hover:to-orange-500/30 text-white border border-white/20 backdrop-blur-md h-9 px-4 rounded-full shadow-lg shadow-black/20"
                >
                  <Compass className="h-4 w-4 mr-2 transition-transform group-hover:rotate-45" />
                  Explore the greenhouse
                  <ChevronDown className="h-4 w-4 ml-2 opacity-70 transition-transform group-data-[state=open]:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-72 bg-black/80 backdrop-blur-xl border border-white/10 text-white p-2"
              >
                <a
                  href="https://fountain.fm/episode/u8MQlUOrfZriD8mDuVNf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-2.5 rounded-md hover:bg-white/10 transition-colors"
                >
                  <Mic className="h-4 w-4 mt-0.5 text-orange-400 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">Podcast</span>
                    <span className="text-xs text-white/60">Totem poles, proof of work & bitcoin</span>
                  </div>
                </a>
                <Link to="/property-layout" className="flex items-start gap-3 p-2.5 rounded-md hover:bg-white/10 transition-colors">
                  <Map className="h-4 w-4 mt-0.5 text-emerald-400 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">Property layout</span>
                    <span className="text-xs text-white/60">Walk the land: greenhouse, orchard, mill</span>
                  </div>
                </Link>
                <Link to="/can-wall" className="flex items-start gap-3 p-2.5 rounded-md hover:bg-white/10 transition-colors">
                  <Archive className="h-4 w-4 mt-0.5 text-yellow-400 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">Can wall 🥫</span>
                    <span className="text-xs text-white/60">Sats stacked, visualized as cans</span>
                  </div>
                </Link>
                <Link to="/building-spec" className="flex items-start gap-3 p-2.5 rounded-md hover:bg-white/10 transition-colors">
                  <Building2 className="h-4 w-4 mt-0.5 text-blue-400 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">Building spec</span>
                    <span className="text-xs text-white/60">Structure, systems & BOM</span>
                  </div>
                </Link>
                <Link to="/economics" className="flex items-start gap-3 p-2.5 rounded-md hover:bg-white/10 transition-colors">
                  <Calculator className="h-4 w-4 mt-0.5 text-pink-400 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">Mining economics</span>
                    <span className="text-xs text-white/60">Heat-to-revenue calculator</span>
                  </div>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
            <VinylPlayer />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Frog Chilling Place - A bitcoin powered community greenhouse
          </h1>
          <p className="text-xl text-white/90 mb-8">
            A greenhouse combining solar energy and ASIC mining to provide year-round food production. 
            Contribute to sustainable agriculture and earn Bitcoin rewards from our mining operations.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Sun className="h-5 w-5 text-yellow-400" />
              <span className="text-white">Solar Powered</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Sprout className="h-5 w-5 text-green-400" />
              <span className="text-white">Agrivoltaics</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Cpu className="h-5 w-5 text-blue-400" />
              <span className="text-white">ASIC Mining</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Bitcoin className="h-5 w-5 text-orange-400" />
              <span className="text-white">Bitcoin Rewards</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Dialog open={isFundraisingOpen} onOpenChange={setIsFundraisingOpen}>
              <DialogTrigger asChild>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-6">
                  <Heart className="mr-2 h-5 w-5" />
                  Support Our Fundraising
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl bg-background">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Fundraising 🌱</DialogTitle>
                  <DialogDescription>
                    Support our Bitcoin-powered greenhouse project through various channels
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-6 py-4">
                  {/* Geyser Fund */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      <Heart className="h-5 w-5 text-orange-500" />
                      Geyser Fund Campaign
                    </h3>
                    <a 
                      href="https://geyser.fund/project/bitcoingreenhouse" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:underline block"
                    >
                      Visit our Geyser Fund page →
                    </a>
                  </div>

                  {/* Treasury */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      <Bitcoin className="h-5 w-5 text-orange-500" />
                      Treasury Address
                    </h3>
                    <div className="flex items-center gap-2 bg-muted p-3 rounded-lg">
                      <code className="text-sm flex-1 break-all">
                        bc1q7pza7k7xme4yzt84n87mr47r0ugpwdcukclh9y
                      </code>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard("bc1q7pza7k7xme4yzt84n87mr47r0ugpwdcukclh9y", "Treasury address")}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <a 
                      href="https://mempool.space/address/bc1q7pza7k7xme4yzt84n87mr47r0ugpwdcukclh9y" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-accent hover:underline"
                    >
                      View on Mempool →
                    </a>
                  </div>

                  {/* Lightning Address */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      ⚡ Lightning Address
                    </h3>
                    <div className="flex items-center gap-2 bg-muted p-3 rounded-lg">
                      <code className="text-sm flex-1">btcgreenhouse@coinos.io</code>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard("btcgreenhouse@coinos.io", "Lightning address")}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Mining Information */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      <Cpu className="h-5 w-5 text-blue-400" />
                      For Miners
                    </h3>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Stratum URL:</p>
                      <div className="flex items-center gap-2 bg-muted p-3 rounded-lg">
                        <code className="text-sm flex-1">stratum+tcp://stratum.braiins.com:3333</code>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard("stratum+tcp://stratum.braiins.com:3333", "Stratum URL")}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium">Worker:</p>
                      <div className="flex items-center gap-2 bg-muted p-3 rounded-lg">
                        <code className="text-sm flex-1">frogchilling</code>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard("frogchilling", "Worker name")}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium">Solo Mining Address:</p>
                      <div className="flex items-center gap-2 bg-muted p-3 rounded-lg">
                        <code className="text-sm flex-1 break-all">bc1q7pza7k7xme4yzt84n87mr47r0ugpwdcukclh9y</code>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard("bc1q7pza7k7xme4yzt84n87mr47r0ugpwdcukclh9y", "Solo mining address")}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-accent hover:bg-accent/90 text-white px-6 py-6">
                  Join the Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuItem 
                  className="cursor-pointer"
                  onClick={() => window.open('https://x.com/btcgreenhouse', '_blank')}
                >
                  <Twitter className="mr-2 h-4 w-4" />
                  <span>Twitter</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="cursor-pointer"
                  onClick={() => window.open('https://njump.me/npub1m32waq4klf2m065xet5kpd4zph7z8g46wlza2f7q4dhmrzvul8qsjwefzq', '_blank')}
                >
                  <Bitcoin className="mr-2 h-4 w-4" />
                  <span>Nostr</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="cursor-pointer"
                  onClick={() => window.open('https://t.co/jmKnpjcBS2', '_blank')}
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  <span>Telegram</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="cursor-pointer"
                  onClick={() => window.open('https://github.com/therealninza/sunny-grove-landing', '_blank')}
                >
                  <Github className="mr-2 h-4 w-4" />
                  <span>GitHub</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/overview">
              <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 px-6 py-6">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
