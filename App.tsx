import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import RiskExplorer from "./pages/RiskExplorer";
import IndividualScoring from "./pages/IndividualScoring";
import Interventions from "./pages/Interventions";
import ROISimulator from "./pages/ROISimulator";
import ModelPerformance from "./pages/ModelPerformance";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/risk-explorer" element={<RiskExplorer />} />
          <Route path="/scoring" element={<IndividualScoring />} />
          <Route path="/interventions" element={<Interventions />} />
          <Route path="/roi" element={<ROISimulator />} />
          <Route path="/model" element={<ModelPerformance />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
