import { ArrowLeft, CreditCard, Calendar, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Passes = () => {
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
        <h1 className="text-xl font-semibold">My Passes</h1>
      </div>

      {/* Content */}
      <div className="p-4 space-y-6">
        {/* Active Pass */}
        <div className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Monthly Pass</h2>
            <CreditCard className="icon-lg" />
          </div>
          
          <div className="space-y-2">
            <p className="text-sm opacity-90">Valid until</p>
            <p className="text-lg font-semibold">March 31, 2024</p>
            <p className="text-sm opacity-90">Rides remaining: Unlimited</p>
          </div>
          
          <div className="mt-4 pt-4 border-t border-primary-foreground/20">
            <p className="text-xs opacity-75">Pass ID: #MP2024003</p>
          </div>
        </div>

        {/* Pass Options */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Available Passes</h2>
          
          <div className="schedule-item">
            <div className="flex items-center space-x-3">
              <Calendar className="icon-sm text-muted-foreground" />
              <div>
                <p className="font-medium">Weekly Pass</p>
                <p className="text-sm text-muted-foreground">7 days unlimited rides</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">$25.00</p>
              <button className="btn-secondary text-sm py-2 px-4 mt-1">
                Buy Now
              </button>
            </div>
          </div>

          <div className="schedule-item">
            <div className="flex items-center space-x-3">
              <Calendar className="icon-sm text-muted-foreground" />
              <div>
                <p className="font-medium">Day Pass</p>
                <p className="text-sm text-muted-foreground">24 hours unlimited rides</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">$8.00</p>
              <button className="btn-secondary text-sm py-2 px-4 mt-1">
                Buy Now
              </button>
            </div>
          </div>

          <div className="schedule-item">
            <div className="flex items-center space-x-3">
              <CreditCard className="icon-sm text-muted-foreground" />
              <div>
                <p className="font-medium">10-Ride Bundle</p>
                <p className="text-sm text-muted-foreground">10 individual rides</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">$30.00</p>
              <button className="btn-secondary text-sm py-2 px-4 mt-1">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-muted rounded-lg p-4">
          <h3 className="font-semibold mb-3">Pass Benefits</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Check className="icon-sm text-accent" />
              <p className="text-sm">Skip the ticket line</p>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="icon-sm text-accent" />
              <p className="text-sm">Automatic boarding</p>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="icon-sm text-accent" />
              <p className="text-sm">Save up to 30% on regular fares</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passes;