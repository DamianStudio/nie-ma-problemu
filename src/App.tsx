import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Otwieraj from "./pages/Otwieraj";
import TrzymajPoziom from "./pages/TrzymajPoziom";
import Dekoruj from "./pages/Dekoruj";
import Ogladaj from "./pages/Ogladaj";
import Kontakt from "./pages/Kontakt";
import NotFound from "./pages/NotFound";
import { Suspense, lazy } from "react";
import { Loader2 } from "lucide-react";

const OtwierajGaleria1 = lazy(() => import("./pages/OtwierajGaleria1"));
const OtwierajGaleria2 = lazy(() => import("./pages/OtwierajGaleria2"));
const OtwierajGaleria3 = lazy(() => import("./pages/OtwierajGaleria3"));
const OtwierajGaleria4 = lazy(() => import("./pages/OtwierajGaleria4"));
const OtwierajGaleria5 = lazy(() => import("./pages/OtwierajGaleria5"));

const DekorujGaleria1 = lazy(() => import("./pages/DekorujGaleria1"));
const DekorujGaleria2 = lazy(() => import("./pages/DekorujGaleria2"));
const DekorujGaleria3 = lazy(() => import("./pages/DekorujGaleria3"));

const OgladajGaleria1 = lazy(() => import("./pages/OgladajGaleria1"));

const TrzymajPoziomGaleria1 = lazy(() => import("./pages/TrzymajPoziomGaleria1"));
const TrzymajPoziomGaleria2 = lazy(() => import("./pages/TrzymajPoziomGaleria2"));
const TrzymajPoziomGaleria3 = lazy(() => import("./pages/TrzymajPoziomGaleria3"));
const TrzymajPoziomGaleria4 = lazy(() => import("./pages/TrzymajPoziomGaleria4"));  

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <Loader2 className="w-8 h-8 animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/otwieraj" element={<Otwieraj />} />
          <Route path="/trzymaj-poziom" element={<TrzymajPoziom />} />
          <Route path="/dekoruj" element={<Dekoruj />} />
          <Route path="/ogladaj" element={<Ogladaj />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route
            path="/otwieraj/otwieraj-galeria-1"
            element={
              <Suspense fallback={<PageLoader />}>
                <OtwierajGaleria1 />
              </Suspense>
            }
          />
          <Route
            path="/otwieraj/otwieraj-galeria-2"
            element={
              <Suspense fallback={<PageLoader />}>
                <OtwierajGaleria2 />
              </Suspense>
            }
          />
          <Route
            path="/otwieraj/otwieraj-galeria-3"
            element={
              <Suspense fallback={<PageLoader />}>
                <OtwierajGaleria3 />
              </Suspense>
            }
          />
          <Route
            path="/otwieraj/otwieraj-galeria-4"
            element={
              <Suspense fallback={<PageLoader />}>
                <OtwierajGaleria4 />
              </Suspense>
            }
          />
          <Route
            path="/otwieraj/otwieraj-galeria-5"
            element={
              <Suspense fallback={<PageLoader />}>
                <OtwierajGaleria5 />
              </Suspense>
            }
          />
          <Route
            path="/dekoruj/dekoruj-galeria-1"
            element={
              <Suspense fallback={<PageLoader />}>
                <DekorujGaleria1 />
              </Suspense>
            }
          />
          <Route
            path="/dekoruj/dekoruj-galeria-2"
            element={
              <Suspense fallback={<PageLoader />}>
                <DekorujGaleria2 />
              </Suspense>
            }
          />
          <Route
            path="/dekoruj/dekoruj-galeria-3"
            element={
              <Suspense fallback={<PageLoader />}>
                <DekorujGaleria3 />
              </Suspense>
            }
          />
          <Route
            path="/ogladaj/ogladaj-galeria-1"
            element={
              <Suspense fallback={<PageLoader />}>
                <OgladajGaleria1 />
              </Suspense>
            }
          />
          <Route
            path="/trzymaj-poziom/trzymaj-poziom-galeria-1"
            element={
              <Suspense fallback={<PageLoader />}>
                <TrzymajPoziomGaleria1 />
              </Suspense>
            }
          />
          <Route
            path="/trzymaj-poziom/trzymaj-poziom-galeria-2"
            element={
              <Suspense fallback={<PageLoader />}>
                <TrzymajPoziomGaleria2 />
              </Suspense>
            }
          />
          <Route
            path="/trzymaj-poziom/trzymaj-poziom-galeria-3"
            element={
              <Suspense fallback={<PageLoader />}>
                <TrzymajPoziomGaleria3 />
              </Suspense>
            }
          />
          <Route
            path="/trzymaj-poziom/trzymaj-poziom-galeria-4"
            element={
              <Suspense fallback={<PageLoader />}>
                <TrzymajPoziomGaleria4 />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
