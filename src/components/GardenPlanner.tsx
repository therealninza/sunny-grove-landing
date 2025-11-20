import { Sprout } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const GardenPlanner = () => {
  return (
    <div className="bg-secondary py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sprout className="h-10 w-10 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Interactive Garden Planner
            </h2>
          </div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Design your garden layout, plan your crops, and optimize your growing space with our interactive planning tool.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-background rounded-lg shadow-xl overflow-hidden border border-border">
            <AspectRatio ratio={16/9}>
              <iframe
                src="https://shell-garden-planner-ee690316.base44.app/"
                className="w-full h-full"
                title="Garden Planning Tool"
                allow="fullscreen"
              />
            </AspectRatio>
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://shell-garden-planner-ee690316.base44.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:text-accent/80 underline transition-colors inline-flex items-center gap-2"
            >
              Open in full screen
              <span className="text-xs">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
