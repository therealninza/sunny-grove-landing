
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Overview from "./pages/Overview";
import PropertyLayout from "./pages/PropertyLayout";
import CanWall from "./pages/CanWall";
import BuildingSpec from "./pages/BuildingSpec";
import MiningEconomics from "./pages/MiningEconomics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/property-layout" element={<PropertyLayout />} />
          <Route path="/can-wall" element={<CanWall />} />
          <Route path="/building-spec" element={<BuildingSpec />} />
          <Route path="/economics" element={<MiningEconomics />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
