import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import RealEstate from "./pages/RealEstate.tsx";
import Destinations from "./pages/Destinations.tsx";
import ForAttorneys from "./pages/ForAttorneys.tsx";
import Insights from "./pages/Insights.tsx";
import Contact from "./pages/Contact.tsx";
import Article from "./pages/Article.tsx";
import NotFound from "./pages/NotFound.tsx";
import Unsubscribe from "./pages/Unsubscribe.tsx";
// Hub pages
import CBIHub from "./pages/CBIHub.tsx";
import GoldenVisaHub from "./pages/GoldenVisaHub.tsx";
// CBI destination pages
import AntiguaBarbuda from "./pages/destinations/AntiguaBarbuda.tsx";
import SaintKittsNevis from "./pages/destinations/SaintKittsNevis.tsx";
import Grenada from "./pages/destinations/Grenada.tsx";
import Dominica from "./pages/destinations/Dominica.tsx";
import SaintLucia from "./pages/destinations/SaintLucia.tsx";
// Golden Visa destination pages
import Portugal from "./pages/destinations/Portugal.tsx";
import Greece from "./pages/destinations/Greece.tsx";
import Latvia from "./pages/destinations/Latvia.tsx";
import Hungary from "./pages/destinations/Hungary.tsx";
import Bulgaria from "./pages/destinations/Bulgaria.tsx";
// Resources
import BlogIndex from "./pages/resources/BlogIndex.tsx";
import BestCBI2026 from "./pages/resources/BestCBI2026.tsx";
import AntiguaVsGrenada from "./pages/resources/AntiguaVsGrenada.tsx";
import CBIForUSCitizens from "./pages/resources/CBIForUSCitizens.tsx";
import GoldenVisaVsCBI from "./pages/resources/GoldenVisaVsCBI.tsx";
import ResourcesFAQ from "./pages/resources/ResourcesFAQ.tsx";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/for-attorneys" element={<ForAttorneys />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/unsubscribe" element={<Unsubscribe />} />
          {/* Hub pages */}
          <Route path="/citizenship-by-investment" element={<CBIHub />} />
          <Route path="/golden-visa" element={<GoldenVisaHub />} />
          {/* Keep old golden-visas route working */}
          <Route path="/golden-visas" element={<Navigate to="/golden-visa" replace />} />
          {/* CBI destination pages */}
          <Route path="/citizenship-by-investment/antigua-barbuda" element={<AntiguaBarbuda />} />
          <Route path="/citizenship-by-investment/saint-kitts-nevis" element={<SaintKittsNevis />} />
          <Route path="/citizenship-by-investment/grenada" element={<Grenada />} />
          <Route path="/citizenship-by-investment/dominica" element={<Dominica />} />
          <Route path="/citizenship-by-investment/saint-lucia" element={<SaintLucia />} />
          {/* Old Antigua URL redirect */}
          <Route path="/antigua-barbuda" element={<Navigate to="/citizenship-by-investment/antigua-barbuda" replace />} />
          {/* Golden Visa destination pages */}
          <Route path="/golden-visa/portugal" element={<Portugal />} />
          <Route path="/golden-visa/greece" element={<Greece />} />
          <Route path="/golden-visa/latvia" element={<Latvia />} />
          <Route path="/golden-visa/hungary" element={<Hungary />} />
          <Route path="/golden-visa/bulgaria" element={<Bulgaria />} />
          {/* Resources */}
          <Route path="/resources/blog" element={<BlogIndex />} />
          <Route path="/resources/blog/best-citizenship-by-investment-programs-2026" element={<BestCBI2026 />} />
          <Route path="/resources/blog/antigua-vs-grenada-cbi" element={<AntiguaVsGrenada />} />
          <Route path="/resources/blog/citizenship-by-investment-us-citizens" element={<CBIForUSCitizens />} />
          <Route path="/resources/blog/golden-visa-vs-citizenship-by-investment" element={<GoldenVisaVsCBI />} />
          <Route path="/resources/faq" element={<ResourcesFAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
