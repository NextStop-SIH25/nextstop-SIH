import { Home, MapPin, CreditCard, Badge, Calendar, Star } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
      <div className="flex items-center justify-around px-2 py-1">
        {/* Home */}
        <button
          onClick={() => navigate('/')}
          className={`nav-button ${isActive('/') ? 'active' : ''}`}
          aria-label="Home"
        >
          <Home className="icon-md mb-1" />
          <span>Home</span>
        </button>

        {/* Track Bus */}
        <button
          onClick={() => navigate('/track-bus')}
          className={`nav-button ${isActive('/track-bus') ? 'active' : ''}`}
          aria-label="Track Bus"
        >
          <MapPin className="icon-md mb-1" />
          <span>Track</span>
        </button>

        {/* Book Ticket */}
        <button
          onClick={() => navigate('/booked-tickets')}
          className={`nav-button ${isActive('/booked-tickets') ? 'active' : ''}`}
          aria-label="Book Ticket"
        >
          <CreditCard className="icon-md mb-1" />
          <span>Tickets</span>
        </button>

        {/* Pass */}
        <button
          onClick={() => navigate('/passes')}
          className={`nav-button ${isActive('/passes') ? 'active' : ''}`}
          aria-label="Passes"
        >
          <Badge className="icon-md mb-1" />
          <span>Pass</span>
        </button>

        {/* Schedule */}
        <button
          onClick={() => navigate('/schedule')}
          className={`nav-button ${isActive('/schedule') ? 'active' : ''}`}
          aria-label="Schedule"
        >
          <Calendar className="icon-md mb-1" />
          <span>Schedule</span>
        </button>

        {/* Saved */}
        <button
          onClick={() => navigate('/saved-routes')}
          className={`nav-button ${isActive('/saved-routes') ? 'active' : ''}`}
          aria-label="Saved Routes"
        >
          <Star className="icon-md mb-1" />
          <span>Saved</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNavigation;