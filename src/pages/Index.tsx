
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { CTA } from "@/components/CTA";
import { GreenhouseSlideshow } from "@/components/GreenhouseSlideshow";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl italic text-foreground/80 max-w-4xl mx-auto leading-relaxed mb-10">
            "A garden returns 50x the investment you put into it. Not just food, but joy, peace and a real connection with creation. A spiritual retreat from a noisy world and hurried people. Grow a garden."
          </blockquote>
          
          <div className="max-w-4xl mx-auto">
            <GreenhouseSlideshow />
            <div className="mt-3 flex items-center justify-center gap-4 flex-wrap">
              <a 
                href="https://api2.enscape3d.com/v1/view/6af3e7ae-6baa-4747-b671-9119db07076e" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-accent hover:text-accent/80 underline transition-colors inline-flex items-center gap-1"
              >
                View Enscape 3D Preview
                <span className="text-xs">↗</span>
              </a>
              <a 
                href="/greenhouse_2.blend" 
                download 
                className="text-sm text-accent hover:text-accent/80 underline transition-colors"
              >
                Download Blender File
              </a>
            </div>
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
