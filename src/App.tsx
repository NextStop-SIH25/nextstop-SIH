import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TrackBus from "./pages/TrackBus";
import BookedTickets from "./pages/BookedTickets";
import Passes from "./pages/Passes";
import Schedule from "./pages/Schedule";
import SavedRoutes from "./pages/SavedRoutes";
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
          <Route path="/track-bus" element={<TrackBus />} />
          <Route path="/booked-tickets" element={<BookedTickets />} />
          <Route path="/passes" element={<Passes />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/saved-routes" element={<SavedRoutes />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
