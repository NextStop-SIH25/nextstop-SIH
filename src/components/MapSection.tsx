import { Search, Calendar, MapPin, Navigation } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MapSection = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 space-y-4">
      {/* Map Container */}
      <div className="map-container">
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
          <div className="text-center">
            <Navigation className="icon-lg mx-auto mb-2" />
            <p className="text-accessible">Real-time bus map</p>
            <p className="text-sm text-muted-foreground mt-1">Loading routes...</p>
          </div>
        </div>
        
        {/* Mock bus indicators */}
        <div className="absolute top-16 left-12 w-3 h-3 bg-route-active rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-16 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
      </div>

      {/* Route Input Section */}
      <div className="space-y-3">
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 icon-sm text-muted-foreground" />
          <input
            type="text"
            placeholder="From: Current location"
            className="route-input pl-12"
            aria-label="Starting location"
          />
        </div>

        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 icon-sm text-muted-foreground" />
          <input
            type="text"
            placeholder="To: Where to?"
            className="route-input pl-12"
            aria-label="Destination"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button 
            onClick={() => navigate('/track-bus')}
            className="btn-primary flex-1 flex items-center justify-center space-x-2"
          >
            <Search className="icon-sm" />
            <span>Find Bus</span>
          </button>
          <button 
            onClick={() => navigate('/schedule')}
            className="btn-secondary flex items-center justify-center space-x-2 px-6"
          >
            <Calendar className="icon-sm" />
            <span>Schedule</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapSection;