import { ArrowLeft, Clock, MapPin, Calendar, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Schedule = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-card">
        <div className="flex items-center">
          <button 
            onClick={() => navigate(-1)}
            className="touch-target mr-3"
            aria-label="Go back"
          >
            <ArrowLeft className="icon-md" />
          </button>
          <h1 className="text-xl font-semibold">Bus Schedule</h1>
        </div>
        <button className="touch-target" aria-label="Filter schedule">
          <Filter className="icon-md" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-6">
        {/* Date Selector */}
        <div className="flex items-center space-x-3 p-3 bg-card rounded-lg">
          <Calendar className="icon-sm text-muted-foreground" />
          <p className="font-medium">Today, March 15, 2024</p>
        </div>

        {/* Route Sections */}
        <div className="space-y-6">
          {/* Downtown Express */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-primary rounded-full"></div>
              <h2 className="text-lg font-semibold">Downtown Express #142</h2>
            </div>
            
            <div className="space-y-2 ml-7">
              <div className="schedule-item">
                <div className="flex items-center space-x-3">
                  <Clock className="icon-sm text-muted-foreground" />
                  <div>
                    <p className="font-medium">8:15 AM</p>
                    <p className="text-sm text-muted-foreground">Main St → Central Station</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-accent font-medium">On Time</p>
                  <p className="text-xs text-muted-foreground">25 min</p>
                </div>
              </div>

              <div className="schedule-item">
                <div className="flex items-center space-x-3">
                  <Clock className="icon-sm text-muted-foreground" />
                  <div>
                    <p className="font-medium">8:45 AM</p>
                    <p className="text-sm text-muted-foreground">Main St → Central Station</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-notification font-medium">2 min delay</p>
                  <p className="text-xs text-muted-foreground">25 min</p>
                </div>
              </div>

              <div className="schedule-item">
                <div className="flex items-center space-x-3">
                  <Clock className="icon-sm text-muted-foreground" />
                  <div>
                    <p className="font-medium">9:15 AM</p>
                    <p className="text-sm text-muted-foreground">Main St → Central Station</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Scheduled</p>
                  <p className="text-xs text-muted-foreground">25 min</p>
                </div>
              </div>
            </div>
          </div>

          {/* University Line */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-accent rounded-full"></div>
              <h2 className="text-lg font-semibold">University Line #67</h2>
            </div>
            
            <div className="space-y-2 ml-7">
              <div className="schedule-item">
                <div className="flex items-center space-x-3">
                  <Clock className="icon-sm text-muted-foreground" />
                  <div>
                    <p className="font-medium">8:30 AM</p>
                    <p className="text-sm text-muted-foreground">Campus → Mall District</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-accent font-medium">On Time</p>
                  <p className="text-xs text-muted-foreground">35 min</p>
                </div>
              </div>

              <div className="schedule-item">
                <div className="flex items-center space-x-3">
                  <Clock className="icon-sm text-muted-foreground" />
                  <div>
                    <p className="font-medium">9:00 AM</p>
                    <p className="text-sm text-muted-foreground">Campus → Mall District</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Scheduled</p>
                  <p className="text-xs text-muted-foreground">35 min</p>
                </div>
              </div>
            </div>
          </div>

          {/* Airport Shuttle */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-route-inactive rounded-full"></div>
              <h2 className="text-lg font-semibold">Airport Shuttle #89</h2>
            </div>
            
            <div className="space-y-2 ml-7">
              <div className="schedule-item">
                <div className="flex items-center space-x-3">
                  <Clock className="icon-sm text-muted-foreground" />
                  <div>
                    <p className="font-medium">6:00 AM</p>
                    <p className="text-sm text-muted-foreground">Downtown → Airport</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Completed</p>
                  <p className="text-xs text-muted-foreground">45 min</p>
                </div>
              </div>

              <div className="schedule-item">
                <div className="flex items-center space-x-3">
                  <Clock className="icon-sm text-muted-foreground" />
                  <div>
                    <p className="font-medium">10:00 AM</p>
                    <p className="text-sm text-muted-foreground">Downtown → Airport</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Scheduled</p>
                  <p className="text-xs text-muted-foreground">45 min</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;