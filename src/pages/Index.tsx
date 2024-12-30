import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { CTA } from "@/components/CTA";
import { VinylPlayer } from "@/components/VinylPlayer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl italic text-foreground/80 max-w-4xl mx-auto leading-relaxed">
            "A garden returns 50x the investment you put into it. Not just food, but joy, peace and a real connection with creation. A spiritual retreat from a noisy world and hurried people. Grow a garden."
          </blockquote>
        </div>
      </div>
      <div className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Greenhouse Radio</h2>
          <VinylPlayer />
        </div>
      </div>
      <Features />
      <Stats />
      <CTA />
    </main>
  );
};

export default Index;