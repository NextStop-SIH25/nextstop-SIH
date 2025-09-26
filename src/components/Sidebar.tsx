import { X, User, Globe, RefreshCw, AlertTriangle, LogOut, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const displayName = (user?.user_metadata as { full_name?: string } | undefined)?.full_name || user?.email || "User";
  const displayEmail = user?.email || "";

  const handleLogout = async () => {
    await signOut();
    navigate('/get-started');
    onClose();
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={onClose}
          aria-label="Close sidebar"
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 right-0 h-full w-80 bg-card border-l border-border z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        flex flex-col
      `}>
        {/* Top Section */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between mb-4">
            <div className="text-primary font-bold text-xl">NextStop</div>
            <button 
              onClick={onClose}
              className="touch-target"
              aria-label="Close sidebar"
            >
              <X className="icon-md" />
            </button>
          </div>
          
          {/* User Info */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <User className="icon-md text-primary-foreground" />
            </div>
            <div>
              <p className="font-semibold text-accessible">{displayName}</p>
              {displayEmail && (
                <p className="text-sm text-muted-foreground">{displayEmail}</p>
              )}
            </div>
          </div>
        </div>

        {/* Center Section - Navigation */}
        <div className="flex-1 p-4">
          <nav className="space-y-2">
            <button 
              onClick={() => handleNavigation('/profile')}
              className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/10 text-left touch-target"
            >
              <User className="icon-md" />
              <span className="text-accessible">Profile</span>
            </button>
            
            <button 
              onClick={() => handleNavigation('/languages')}
              className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/10 text-left touch-target"
            >
              <Globe className="icon-md" />
              <span className="text-accessible">Languages</span>
            </button>
            
            <button 
              onClick={() => handleNavigation('/update')}
              className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/10 text-left touch-target"
            >
              <RefreshCw className="icon-md" />
              <span className="text-accessible">Update Version</span>
            </button>
            
            <button 
              onClick={() => handleNavigation('/sos')}
              className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/10 text-left touch-target"
            >
              <AlertTriangle className="icon-md" />
              <span className="text-accessible">SOS</span>
            </button>
            
            <button 
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/10 text-left touch-target text-notification"
            >
              <LogOut className="icon-md" />
              <span className="text-accessible">Logout</span>
            </button>
          </nav>
        </div>

        {/* Bottom Section - Social Links */}
        <div className="p-4 border-t border-border">
          <p className="text-sm text-muted-foreground mb-3">Connect with us</p>
          <div className="flex space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="touch-target hover:text-primary"
              aria-label="Visit our GitHub"
            >
              <Github className="icon-md" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="touch-target hover:text-primary"
              aria-label="Visit our Twitter"
            >
              <svg className="icon-md" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="touch-target hover:text-primary"
              aria-label="Visit our YouTube"
            >
              <svg className="icon-md" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;