import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Otwieraj from "./pages/Otwieraj";
import TrzymajPoziom from "./pages/TrzymajPoziom";
import Dekoruj from "./pages/Dekoruj";
import Ogladaj from "./pages/Ogladaj";
import Kontakt from "./pages/Kontakt";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/otwieraj" element={<Otwieraj />} />
          <Route path="/trzymaj-poziom" element={<TrzymajPoziom />} />
          <Route path="/dekoruj" element={<Dekoruj />} />
          <Route path="/ogladaj" element={<Ogladaj />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
