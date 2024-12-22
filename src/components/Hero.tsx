import { ArrowRight, Sun, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Sustainable Farming with Solar Power
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Transform your agriculture with our innovative solar-powered greenhouse solutions. 
            Grow more while reducing your carbon footprint.
          </p>
          <div className="flex gap-4">
            <Button className="bg-accent hover:bg-accent/90 text-white px-6 py-6">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 px-6 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};