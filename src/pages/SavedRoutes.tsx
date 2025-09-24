import { ArrowLeft, Star, MapPin, Clock, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SavedRoutes = () => {
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
        <h1 className="text-xl font-semibold">Saved Routes</h1>
      </div>

      {/* Content */}
      <div className="p-4 space-y-6">
        {/* Favorite Routes */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold flex items-center space-x-2">
            <Star className="icon-md text-notification" />
            <span>Favorites</span>
          </h2>
          
          <div className="schedule-item">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="flex-1">
                <p className="font-medium">Home to Work</p>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  <span>Oak Street → Downtown Plaza</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>Usually 25 min • Bus #142</span>
                </div>
              </div>
            </div>
            <button className="touch-target" aria-label="Remove from favorites">
              <Heart className="icon-sm text-notification fill-current" />
            </button>
          </div>

          <div className="schedule-item">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <div className="flex-1">
                <p className="font-medium">University Route</p>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  <span>Home → Campus Center</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>Usually 35 min • Bus #67</span>
                </div>
              </div>
            </div>
            <button className="touch-target" aria-label="Remove from favorites">
              <Heart className="icon-sm text-notification fill-current" />
            </button>
          </div>
        </div>

        {/* Recent Routes */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Recent Routes</h2>
          
          <div className="schedule-item">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-route-inactive rounded-full"></div>
              <div className="flex-1">
                <p className="font-medium">Airport Trip</p>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  <span>Downtown → Airport Terminal</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>Used yesterday • Bus #89</span>
                </div>
              </div>
            </div>
            <button className="touch-target" aria-label="Add to favorites">
              <Heart className="icon-sm text-muted-foreground" />
            </button>
          </div>

          <div className="schedule-item">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="flex-1">
                <p className="font-medium">Mall Shopping</p>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  <span>Campus → Mall District</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>Used 3 days ago • Bus #67</span>
                </div>
              </div>
            </div>
            <button className="touch-target" aria-label="Add to favorites">
              <Heart className="icon-sm text-muted-foreground" />
            </button>
          </div>

          <div className="schedule-item">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <div className="flex-1">
                <p className="font-medium">Evening Return</p>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  <span>Downtown Plaza → Oak Street</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>Used 1 week ago • Bus #142</span>
                </div>
              </div>
            </div>
            <button className="touch-target" aria-label="Add to favorites">
              <Heart className="icon-sm text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-muted rounded-lg p-4">
          <h3 className="font-semibold mb-3">Quick Actions</h3>
          <div className="space-y-2">
            <button className="btn-secondary w-full">
              Plan New Route
            </button>
            <button className="btn-secondary w-full">
              Browse All Routes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedRoutes;