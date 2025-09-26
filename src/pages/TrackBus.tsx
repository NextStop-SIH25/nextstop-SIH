import { ArrowLeft, MapPin, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TrackBus = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-border bg-card">
        <button 
          onClick={() => navigate(-1)}
          className="touch-target mr-3"
          aria-label="Go back"
        >
          <ArrowLeft className="icon-md" />
        </button>
        <h1 className="text-xl font-semibold">Track Nearby Buses</h1>
      </div>

      {/* Content */}
      <div className="p-4 space-y-6">
        <div className="map-container">
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <MapPin className="icon-lg mx-auto mb-2" />
              <p className="text-accessible">Real-time bus tracking map</p>
            </div>
          </div>
        </div>

        {/* Nearby Buses */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Nearby Buses</h2>
          
          <div className="schedule-item">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-route-active rounded-full"></div>
              <div>
                <p className="font-medium">Bus #142 - Downtown Express</p>
                <p className="text-sm text-muted-foreground">2 min away</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Next Stop</p>
              <p className="font-medium">Main & 5th St</p>
            </div>
          </div>

          <div className="schedule-item">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-route-active rounded-full"></div>
              <div>
                <p className="font-medium">Bus #67 - University Line</p>
                <p className="text-sm text-muted-foreground">5 min away</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Next Stop</p>
              <p className="font-medium">Campus Center</p>
            </div>
          </div>

          <div className="schedule-item">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-route-inactive rounded-full"></div>
              <div>
                <p className="font-medium">Bus #89 - Airport Shuttle</p>
                <p className="text-sm text-muted-foreground">12 min away</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Next Stop</p>
              <p className="font-medium">Terminal A</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackBus;