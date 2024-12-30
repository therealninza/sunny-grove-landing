import { ArrowRight, Bitcoin, Cpu, Sun, Twitter, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VinylPlayer } from "@/components/VinylPlayer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Hero = () => {
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
      
      {/* VinylPlayer positioned in top right */}
      <div className="absolute top-4 right-4 z-20">
        <VinylPlayer />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Frog House - A Solar-Powered Greenhouse Mining Project
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
              <Cpu className="h-5 w-5 text-blue-400" />
              <span className="text-white">ASIC Mining</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Bitcoin className="h-5 w-5 text-orange-400" />
              <span className="text-white">Bitcoin Rewards</span>
            </div>
          </div>
          <div className="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-accent hover:bg-accent/90 text-white px-6 py-6">
                  Join the Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuItem className="cursor-pointer">
                  <Twitter className="mr-2 h-4 w-4" />
                  <span>Twitter</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Bitcoin className="mr-2 h-4 w-4" />
                  <span>Nostr</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  <span>Telegram</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Github className="mr-2 h-4 w-4" />
                  <span>GitHub</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 px-6 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};