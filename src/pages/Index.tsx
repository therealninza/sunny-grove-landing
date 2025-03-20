
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { CTA } from "@/components/CTA";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl italic text-foreground/80 max-w-4xl mx-auto leading-relaxed mb-10">
            "A garden returns 50x the investment you put into it. Not just food, but joy, peace and a real connection with creation. A spiritual retreat from a noisy world and hurried people. Grow a garden."
          </blockquote>
          
          <div className="max-w-3xl mx-auto">
            <AspectRatio ratio={16/9} className="bg-white/20 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/a69a6a90-6e01-4468-995d-ef0b14ebb3c3.png" 
                alt="3D model of the greenhouse structure" 
                className="w-full h-full object-cover"
              />
            </AspectRatio>
            <p className="mt-3 text-sm text-foreground/70">3D model of our planned greenhouse structure</p>
          </div>
        </div>
      </div>
      <Features />
      <Stats />
      <CTA />
    </main>
  );
};

export default Index;
