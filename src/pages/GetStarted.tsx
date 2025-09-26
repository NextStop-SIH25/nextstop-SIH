import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";
import busStopIllustration from "@/assets/bus-stop-illustration.jpg";

const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10 flex flex-col items-center justify-center px-6 py-8">
      {/* Logo Section */}
      <div className="mb-8">
        <img 
          src={logo} 
          alt="NextStop Logo" 
          className="h-20 w-auto object-contain"
        />
      </div>

      {/* Illustration Section */}
      <div className="mb-8">
        <img 
          src={busStopIllustration} 
          alt="People waiting at bus stop" 
          className="w-72 h-72 object-contain"
        />
      </div>

      {/* Tagline Section */}
      <div className="text-center mb-12 space-y-2">
        <h1 className="text-3xl font-bold text-foreground">
          Catch Your Bus, Not the Wait
        </h1>
        <p className="text-muted-foreground text-base max-w-sm">
          Smart bus tracking and route planning for your daily commute
        </p>
      </div>

      {/* Get Started Button */}
      <div className="w-full max-w-sm">
        <Button 
          onClick={() => navigate('/login')}
          className="w-full h-12 text-base font-semibold rounded-xl"
          size="lg"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default GetStarted;