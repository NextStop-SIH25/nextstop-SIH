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
import Profile from "./pages/Profile";
import Languages from "./pages/Languages";
import UpdateVersion from "./pages/UpdateVersion";
import GetStarted from "./pages/GetStarted";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SOS from "./pages/SOS";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Index />} />
          <Route path="/track-bus" element={<TrackBus />} />
          <Route path="/booked-tickets" element={<BookedTickets />} />
          <Route path="/passes" element={<Passes />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/saved-routes" element={<SavedRoutes />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/update" element={<UpdateVersion />} />
          <Route path="/sos" element={<SOS />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
