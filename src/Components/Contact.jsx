import React from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  HeadphonesIcon,
} from "lucide-react";
import Contact2 from "./Contact2";
import Contact3 from "./Contact3";

const Contact = () => {
  // Contact methods data
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email within 24 hours",
      contact: "support@cryptowatch.com",
      action: "Send Email",
      color: "cyan",
      available: "24/7",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team instantly",
      contact: "Available now",
      action: "Start Chat",
      color: "purple",
      available: "24/7",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our experts",
      contact: "+1 (555) 123-4567",
      action: "Call Now",
      color: "green",
      available: "Mon-Fri 9AM-6PM PST",
    },
    {
      icon: HeadphonesIcon,
      title: "Premium Support",
      description: "Priority support for premium users",
      contact: "premium@cryptowatch.com",
      action: "Contact Premium",
      color: "orange",
      available: "24/7 Priority",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      cyan: "from-cyan-500/10 to-transparent border-cyan-500/20 text-cyan-400",
      purple:
        "from-purple-500/10 to-transparent border-purple-500/20 text-purple-400",
      green:
        "from-green-500/10 to-transparent border-green-500/20 text-green-400",
      orange:
        "from-orange-500/10 to-transparent border-orange-500/20 text-orange-400",
    };
    return colors[color] || colors.cyan;
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative font-sans">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
        <div
          className="absolute top-20 right-10 w-64 h-64 border border-cyan-400/20 rounded-full animate-spin"
          style={{ animationDuration: "20s" }}
        />
        <div className="absolute bottom-20 left-10 w-32 h-32 border-2 border-purple-400/30 rotate-45 animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-full blur-xl animate-pulse" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full backdrop-blur-sm">
            <span className="text-cyan-300 text-sm font-medium">
              💬 Get In Touch
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Contact Our Team
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Have questions about CryptoWatch? Need help with your account? Our
            dedicated support team is here to assist you 24/7. Choose your
            preferred way to connect.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            How Can We Help?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-r ${
                    getColorClasses(method.color).split(" ")[0]
                  } ${
                    getColorClasses(method.color).split(" ")[1]
                  } backdrop-blur-md border ${
                    getColorClasses(method.color).split(" ")[2]
                  } rounded-2xl p-6 hover:border-opacity-50 transition-all duration-300 transform hover:scale-105`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-black/20 to-transparent rounded-lg flex items-center justify-center mb-4">
                    <Icon
                      className={`w-6 h-6 ${
                        getColorClasses(method.color).split(" ")[3]
                      }`}
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {method.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3">
                    {method.description}
                  </p>
                  <div className="text-white font-medium mb-2">
                    {method.contact}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {method.available}
                    </span>
                    <button
                      className={`px-3 py-1 bg-gradient-to-r from-${method.color}-600 to-${method.color}-700 rounded-full text-xs text-white hover:from-${method.color}-700 hover:to-${method.color}-800 transition-all`}
                    >
                      {method.action}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modular Components */}
        <Contact2 />
        <Contact3 />
      </div>
    </div>
  );
};

export default Contact;