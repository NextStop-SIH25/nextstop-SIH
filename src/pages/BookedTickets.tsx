import { ArrowLeft, Calendar, Clock, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BookedTickets = () => {
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
        <h1 className="text-xl font-semibold">My Tickets</h1>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Active Ticket */}
        <div className="bg-card border-2 border-accent rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="bg-accent text-accent-foreground text-sm font-medium px-3 py-1 rounded-full">
              Active
            </span>
            <span className="text-sm text-muted-foreground">Expires in 45 min</span>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <MapPin className="icon-sm text-muted-foreground" />
              <div>
                <p className="font-medium">Downtown Express #142</p>
                <p className="text-sm text-muted-foreground">Main St → Central Station</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Clock className="icon-sm text-muted-foreground" />
              <p className="text-sm">Boarded at 2:15 PM</p>
            </div>
            
            <div className="pt-2 border-t border-border">
              <p className="text-xs text-muted-foreground">Ticket ID: #TK4567892</p>
            </div>
          </div>
        </div>

        {/* Upcoming Tickets */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Upcoming</h2>
          
          <div className="schedule-item">
            <div className="flex items-center space-x-3">
              <Calendar className="icon-sm text-muted-foreground" />
              <div>
                <p className="font-medium">University Line #67</p>
                <p className="text-sm text-muted-foreground">Campus → Mall District</p>
                <p className="text-xs text-muted-foreground">Tomorrow, 9:30 AM</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">$3.50</p>
              <p className="text-xs text-muted-foreground">#TK4567893</p>
            </div>
          </div>
        </div>

        {/* Recent Tickets */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Recent</h2>
          
          <div className="schedule-item opacity-60">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-muted rounded-full"></div>
              <div>
                <p className="font-medium">Airport Shuttle #89</p>
                <p className="text-sm text-muted-foreground">Downtown → Airport</p>
                <p className="text-xs text-muted-foreground">Yesterday, 6:00 AM</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Completed</p>
              <p className="text-xs text-muted-foreground">#TK4567891</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookedTickets;