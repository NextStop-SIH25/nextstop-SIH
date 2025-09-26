import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import logo from "@/assets/logo.jpg";
import busArrivalIllustration from "@/assets/bus-arrival-illustration.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10 flex flex-col justify-center px-6 py-8">
      {/* Logo Section */}
      <div className="text-center mb-6">
        <img 
          src={logo} 
          alt="NextStop Logo" 
          className="h-12 w-auto object-contain mx-auto"
        />
      </div>

      {/* Illustration Section */}
      <div className="text-center mb-8">
        <img 
          src={busArrivalIllustration} 
          alt="Bus arriving at stop" 
          className="w-64 h-48 object-contain mx-auto"
        />
      </div>

      {/* Form Section */}
      <Card className="w-full max-w-sm mx-auto">
        <CardHeader className="text-center pb-4">
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="text-muted-foreground text-sm">Sign in to your account</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email or Phone Number</Label>
              <Input
                id="email"
                type="text"
                placeholder="Enter your email or phone"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div className="text-right">
              <Button 
                variant="link" 
                className="p-0 h-auto text-sm"
                onClick={() => navigate('/forgot-password')}
              >
                Forgot Password?
              </Button>
            </div>

            <Button type="submit" className="w-full h-11 rounded-xl font-semibold">
              Login
            </Button>
          </form>

          {/* Alternative Login Options */}
          <div className="mt-6 space-y-3">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-11 rounded-xl">
                Google
              </Button>
              <Button variant="outline" className="h-11 rounded-xl">
                OTP
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Button 
                variant="link" 
                className="p-0 h-auto font-semibold"
                onClick={() => navigate('/signup')}
              >
                Sign Up
              </Button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;