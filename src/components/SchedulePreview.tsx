import { Clock, ChevronRight, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SchedulePreview = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Upcoming Buses</h2>
        <button 
          onClick={() => navigate('/schedule')}
          className="flex items-center space-x-1 text-primary font-medium touch-target"
          aria-label="View full schedule"
        >
          <span>See More</span>
          <ChevronRight className="icon-sm" />
        </button>
      </div>

      {/* Schedule Items */}
      <div className="space-y-3">
        <div className="schedule-item">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-route-active rounded-full"></div>
            <div>
              <p className="font-medium">Bus #142 - Downtown Express</p>
              <p className="text-sm text-muted-foreground">Main St → Central Station</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-semibold text-accent">2 min</p>
            <p className="text-xs text-muted-foreground">On time</p>
          </div>
        </div>

        <div className="schedule-item">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <div>
              <p className="font-medium">Bus #67 - University Line</p>
              <p className="text-sm text-muted-foreground">Campus → Mall District</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-semibold">8 min</p>
            <p className="text-xs text-muted-foreground">Scheduled</p>
          </div>
        </div>

        <div className="schedule-item">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-route-inactive rounded-full"></div>
            <div>
              <p className="font-medium">Bus #89 - Airport Shuttle</p>
              <p className="text-sm text-muted-foreground">Downtown → Airport</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-semibold">15 min</p>
            <p className="text-xs text-notification">2 min delay</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="pt-2 border-t border-border">
        <div className="flex space-x-3">
          <button className="btn-secondary flex-1 text-sm">
            Set Reminder
          </button>
          <button className="btn-secondary flex-1 text-sm">
            Live Updates
          </button>
        </div>
      </div>
    </div>
  );
};

export default SchedulePreview;