import { Bell, Menu } from "lucide-react";
import { useState } from "react";
import { useNotifications } from "@/hooks/useNotifications";

interface TopBarProps {
  onSidebarToggle: () => void;
}

const TopBar = ({ onSidebarToggle }: TopBarProps) => {
  const { notifications, unreadCount, markAllAsRead } = useNotifications();
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(o => !o);
  const handleOpen = () => {
    setOpen(true);
    void markAllAsRead();
  };

  return (
    <div className="flex items-center justify-between p-4 bg-card border-b border-border">
      {/* Notification Section */}
      <div className="flex items-center space-x-3 relative">
        <button 
          className="touch-target relative"
          aria-label="View notifications"
          onClick={open ? () => setOpen(false) : handleOpen}
        >
          <Bell className="icon-md" />
          {unreadCount > 0 && (
            <div className="absolute -top-1 -right-1 min-w-4 h-4 px-1 bg-notification text-[10px] leading-4 text-white rounded-full text-center">
              {unreadCount}
            </div>
          )}
        </button>
        {open && (
          <div className="absolute top-10 left-0 w-72 bg-popover border border-border rounded-md shadow-lg z-50">
            <div className="p-2 border-b border-border flex items-center justify-between">
              <span className="text-sm font-medium">Notifications</span>
              <button className="text-xs text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>Close</button>
            </div>
            <div className="max-h-80 overflow-auto">
              {notifications.length === 0 ? (
                <div className="p-4 text-sm text-muted-foreground">You're all caught up.</div>
              ) : (
                notifications.map(n => (
                  <div key={n.id} className="p-3 hover:bg-accent/10 border-b border-border">
                    {n.title && <div className="text-sm font-semibold mb-0.5">{n.title}</div>}
                    <div className="text-sm text-accessible">{n.message}</div>
                    <div className="text-[10px] text-muted-foreground mt-1">{new Date(n.created_at).toLocaleString()}</div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
        <div>
          <p className="text-sm text-muted-foreground">Good morning</p>
          <p className="font-semibold">NextStop</p>
        </div>
      </div>

      {/* Sidebar Toggle */}
      <button 
        className="touch-target"
        onClick={onSidebarToggle}
        aria-label="Open menu"
      >
        <Menu className="icon-md" />
      </button>
    </div>
  );
};

export default TopBar;