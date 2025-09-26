import { User, Mail, Phone, MapPin, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const fullName = (user?.user_metadata as { full_name?: string } | undefined)?.full_name || "User";
  const email = user?.email || "";

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
        <h1 className="text-lg font-semibold">Profile</h1>
        <div className="w-6"></div>
      </div>

      {/* Profile Content */}
      <div className="p-4 space-y-6">
        {/* Profile Picture and Name */}
        <div className="text-center">
          <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-12 h-12 text-primary-foreground" />
          </div>
          <h2 className="text-xl font-semibold">{fullName}</h2>
          <p className="text-muted-foreground">NextStop User</p>
        </div>

        {/* Profile Information */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-3 bg-card rounded-lg border border-border">
            <Mail className="icon-md text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium">{email || "Not set"}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-card rounded-lg border border-border">
            <Phone className="icon-md text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="font-medium">+1 234 567 8900</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-card rounded-lg border border-border">
            <MapPin className="icon-md text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-medium">Nashik, Maharashtra</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-4">
          <button className="w-full btn-primary">
            Edit Profile
          </button>
          <button className="w-full btn-secondary">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;