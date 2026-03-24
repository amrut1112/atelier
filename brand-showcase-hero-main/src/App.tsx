import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import ProductsPage from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "@/components/WhatsAppButton";
import CatalogueModal from "@/components/CatalogueModal";

const queryClient = new QueryClient();

// Global catalogue modal — works on every page
const GlobalCatalogueModal = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("openCatalogueModal", handler);
    return () => window.removeEventListener("openCatalogueModal", handler);
  }, []);
  return <CatalogueModal open={open} onClose={() => setOpen(false)} />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <GlobalCatalogueModal />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
