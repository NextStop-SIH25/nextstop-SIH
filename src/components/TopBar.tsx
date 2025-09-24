import { Bell, Menu } from "lucide-react";

const TopBar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-card border-b border-border">
      {/* Notification Section */}
      <div className="flex items-center space-x-3">
        <button 
          className="touch-target relative"
          aria-label="View notifications"
        >
          <Bell className="icon-md" />
          {/* Notification badge */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-notification rounded-full"></div>
        </button>
        <div>
          <p className="text-sm text-muted-foreground">Good morning</p>
          <p className="font-semibold">NextStop</p>
        </div>
      </div>

      {/* Sidebar Toggle */}
      <button 
        className="touch-target"
        aria-label="Open menu"
      >
        <Menu className="icon-md" />
      </button>
    </div>
  );
};

export default TopBar;