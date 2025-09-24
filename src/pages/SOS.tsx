import { ArrowLeft, Phone, MessageSquare, MapPin, AlertTriangle, Shield, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SOS = () => {
  const navigate = useNavigate();

  const emergencyContacts = [
    { name: "Police", number: "100", icon: Shield, color: "text-blue-600" },
    { name: "Fire Service", number: "101", icon: AlertTriangle, color: "text-red-600" },
    { name: "Ambulance", number: "108", icon: Users, color: "text-green-600" },
  ];

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
        <h1 className="text-lg font-semibold">Emergency SOS</h1>
        <div className="w-6"></div>
      </div>

      {/* SOS Content */}
      <div className="p-4 space-y-6">
        {/* Main SOS Button */}
        <div className="text-center">
          <div className="relative mb-6">
            <button className="w-32 h-32 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center mx-auto shadow-lg transform transition-transform active:scale-95">
              <div className="text-center">
                <AlertTriangle className="w-12 h-12 text-white mb-2 mx-auto" />
                <p className="text-white font-bold text-sm">SOS</p>
              </div>
            </button>
            <div className="absolute inset-0 rounded-full bg-red-600/20 animate-ping"></div>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs mx-auto">
            Press and hold the SOS button for 3 seconds to send emergency alert
          </p>
        </div>

        {/* Emergency Contacts */}
        <div>
          <h2 className="font-semibold mb-4">Emergency Contacts</h2>
          <div className="space-y-3">
            {emergencyContacts.map((contact) => (
              <button
                key={contact.name}
                className="w-full flex items-center justify-between p-4 bg-card rounded-lg border border-border hover:bg-accent/10 touch-target"
              >
                <div className="flex items-center space-x-3">
                  <contact.icon className={`icon-md ${contact.color}`} />
                  <div className="text-left">
                    <p className="font-medium">{contact.name}</p>
                    <p className="text-sm text-muted-foreground">{contact.number}</p>
                  </div>
                </div>
                <Phone className="icon-md text-muted-foreground" />
              </button>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full flex items-center space-x-3 p-4 bg-card rounded-lg border border-border hover:bg-accent/10 touch-target">
              <MapPin className="icon-md text-primary" />
              <div className="text-left">
                <p className="font-medium">Share Live Location</p>
                <p className="text-sm text-muted-foreground">Send current location to emergency contacts</p>
              </div>
            </button>
            
            <button className="w-full flex items-center space-x-3 p-4 bg-card rounded-lg border border-border hover:bg-accent/10 touch-target">
              <MessageSquare className="icon-md text-primary" />
              <div className="text-left">
                <p className="font-medium">Send Alert Message</p>
                <p className="text-sm text-muted-foreground">Notify emergency contacts with predefined message</p>
              </div>
            </button>
          </div>
        </div>

        {/* Safety Tips */}
        <div className="bg-accent/10 rounded-lg border border-accent/20 p-4">
          <h3 className="font-medium text-accent mb-2">Safety Tips</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Stay calm and assess your surroundings</li>
            <li>• Move to a safe location if possible</li>
            <li>• Keep your phone charged for emergencies</li>
            <li>• Share your travel plans with trusted contacts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SOS;