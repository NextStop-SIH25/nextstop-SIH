import { useState } from "react";
import TopBar from "@/components/TopBar";
import MapSection from "@/components/MapSection";
import SchedulePreview from "@/components/SchedulePreview";
import BottomNavigation from "@/components/BottomNavigation";
import Sidebar from "@/components/Sidebar";

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
