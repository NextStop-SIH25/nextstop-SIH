import TopBar from "@/components/TopBar";
import MapSection from "@/components/MapSection";
import SchedulePreview from "@/components/SchedulePreview";
import BottomNavigation from "@/components/BottomNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Top Bar */}
      <TopBar />
      
      {/* Map Section */}
      <MapSection />
      
      {/* Schedule Section */}
      <SchedulePreview />
      
      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Index;
