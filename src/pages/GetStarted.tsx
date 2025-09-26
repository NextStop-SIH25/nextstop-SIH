import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src={logo} 
            alt="NextStop Logo" 
            className="w-24 h-24 object-contain rounded-2xl shadow-lg"
          />
        </div>



        {/* Tagline */}
        <div className="text-center mb-12 space-y-2">
          <h1 className="text-4xl font-bold text-foreground leading-tight">
            Catch Your Bus,
          </h1>
          <h1 className="text-4xl font-bold text-primary leading-tight">
            Not the Wait
          </h1>
          <p className="text-muted-foreground text-lg mt-4 max-w-md">
            Real-time bus tracking, smart route planning, and seamless booking - all in one app.
          </p>
        </div>

        {/* Get Started Button */}
        <Button 
          onClick={() => navigate('/login')}
          className="w-full max-w-sm h-14 text-lg font-semibold rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Get Started
        </Button>

        {/* Features Preview */}
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-xl">🕒</span>
            </div>
            <p className="text-xs text-muted-foreground">Real-time</p>
          </div>
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-xl">🗺️</span>
            </div>
            <p className="text-xs text-muted-foreground">Smart Routes</p>
          </div>
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-xl">🎫</span>
            </div>
            <p className="text-xs text-muted-foreground">Easy Booking</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pb-6 text-center">
        <p className="text-xs text-muted-foreground">
          Your smart companion for urban transit
        </p>
      </div>
    </div>
  );
};

export default GetStarted;