import { ArrowLeft, Download, CheckCircle, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UpdateVersion = () => {
  const navigate = useNavigate();
  const currentVersion = "1.2.3";
  const latestVersion = "1.3.0";
  const isUpdateAvailable = true; // Simulate update available

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-card border-b border-border">
        <button 
          onClick={() => navigate('/')}
          className="touch-target"
          aria-label="Go back"
        >
          <ArrowLeft className="icon-md" />
        </button>
        <h1 className="text-lg font-semibold">App Version</h1>
        <div className="w-6"></div>
      </div>

      {/* Version Content */}
      <div className="p-4 space-y-6">
        {/* Current Version */}
        <div className="bg-card rounded-lg border border-border p-4">
          <div className="flex items-center space-x-3 mb-3">
            <CheckCircle className="icon-md text-accent" />
            <h2 className="font-semibold">Current Version</h2>
          </div>
          <p className="text-2xl font-bold text-primary">{currentVersion}</p>
          <p className="text-sm text-muted-foreground mt-1">Installed on your device</p>
        </div>

        {/* Update Available */}
        {isUpdateAvailable ? (
          <div className="bg-accent/10 rounded-lg border border-accent/20 p-4">
            <div className="flex items-center space-x-3 mb-3">
              <AlertCircle className="icon-md text-accent" />
              <h2 className="font-semibold text-accent">Update Available</h2>
            </div>
            <p className="text-2xl font-bold text-accent mb-2">{latestVersion}</p>
            <p className="text-sm text-muted-foreground mb-4">
              New features and improvements are available
            </p>
            
            <div className="space-y-3">
              <div className="text-sm">
                <h3 className="font-medium mb-2">What's New:</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Improved real-time tracking</li>
                  <li>• Better route optimization</li>
                  <li>• Enhanced accessibility features</li>
                  <li>• Bug fixes and performance improvements</li>
                </ul>
              </div>
              
              <button className="w-full btn-primary flex items-center justify-center space-x-2">
                <Download className="icon-sm" />
                <span>Download Update</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-accent/10 rounded-lg border border-accent/20 p-4 text-center">
            <CheckCircle className="icon-lg text-accent mx-auto mb-3" />
            <h2 className="font-semibold text-accent mb-2">You're Up to Date</h2>
            <p className="text-sm text-muted-foreground">
              You have the latest version of NextStop
            </p>
          </div>
        )}

        {/* Auto Update Settings */}
        <div className="bg-card rounded-lg border border-border p-4">
          <h3 className="font-medium mb-3">Update Settings</h3>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span className="text-sm">Auto-update over Wi-Fi</span>
              <input type="checkbox" className="toggle" defaultChecked />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-sm">Notify about updates</span>
              <input type="checkbox" className="toggle" defaultChecked />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateVersion;