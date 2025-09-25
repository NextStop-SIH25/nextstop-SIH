import { ArrowLeft, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Languages = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languages = [
    { code: "en", name: "English", native: "English" },
    { code: "hi", name: "Hindi", native: "हिंदी" },
    { code: "mr", name: "Marathi", native: "मराठी" },
    { code: "es", name: "Spanish", native: "Español" },
    { code: "fr", name: "French", native: "Français" },
    { code: "de", name: "German", native: "Deutsch" },
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
        <h1 className="text-lg font-semibold">Languages</h1>
        <div className="w-6"></div>
      </div>

      {/* Languages List */}
      <div className="p-4">
        <p className="text-muted-foreground mb-4">Select your preferred language</p>
        
        <div className="space-y-2">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => setSelectedLanguage(language.name)}
              className={`w-full flex items-center justify-between p-4 rounded-lg border transition-colors touch-target ${
                selectedLanguage === language.name
                  ? 'bg-primary/10 border-primary text-primary'
                  : 'bg-card border-border hover:bg-accent/10'
              }`}
            >
              <div className="text-left">
                <p className="font-medium">{language.name}</p>
                <p className="text-sm text-muted-foreground">{language.native}</p>
              </div>
              {selectedLanguage === language.name && (
                <Check className="icon-md text-primary" />
              )}
            </button>
          ))}
        </div>

        <button className="w-full btn-primary mt-6">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Languages;