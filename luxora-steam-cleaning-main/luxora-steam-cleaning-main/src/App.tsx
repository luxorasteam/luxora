import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import HomePage from "./pages/HomePage";

const ServicesPage     = lazy(() => import("./pages/ServicesPage"));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage"));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={
            <Suspense fallback={<PageLoader />}><ServicesPage /></Suspense>
          } />
          <Route path="/services/:slug" element={
            <Suspense fallback={<PageLoader />}><ServiceDetailPage /></Suspense>
          } />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </ThemeProvider>
  );
}
