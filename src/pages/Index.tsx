import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import TopBar from "@/components/TopBar";
import MapSection from "@/components/MapSection";
import SchedulePreview from "@/components/SchedulePreview";
import BottomNavigation from "@/components/BottomNavigation";
import Sidebar from "@/components/Sidebar";

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  // Redirect to get started if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      navigate("/get-started");
    }
  }, [user, loading, navigate]);

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // Don't render if not authenticated (will redirect)
  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Top Bar */}
      <TopBar onSidebarToggle={() => setIsSidebarOpen(true)} />
      
      {/* Map Section */}
      <MapSection />
      
      {/* Schedule Section */}
      <SchedulePreview />
      
      {/* Bottom Navigation */}
      <BottomNavigation />
      
      {/* Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
    </div>
  );
};

export default Index;
