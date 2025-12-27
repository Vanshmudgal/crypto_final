import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Zap,
  Twitter,
  Github,
  Linkedin,
  MessageSquare,
  Mail,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/crypto", label: "Markets" },
    { path: "/nft", label: "NFTs" },
    { path: "/news", label: "News" },
  ];

  const companyLinks = [
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" },
    { label: "Privacy Policy", external: true },
    { label: "Terms of Service", external: true },
  ];

  const socialLinks = [
    { icon: Twitter, label: "Twitter", color: "text-blue-400" },
    { icon: Github, label: "GitHub", color: "text-gray-300" },
    { icon: Linkedin, label: "LinkedIn", color: "text-blue-400" },
    { icon: MessageSquare, label: "Discord", color: "text-purple-400" },
  ];

  return (
    <footer className="relative z-10 bg-gray-900/50 backdrop-blur-md border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                CryptoWatch
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Your trusted platform for cryptocurrency and NFT listings.
              Building the future of digital assets.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Mail className="w-4 h-4" />
              <span>hello@cryptonova.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavigation(link.path)}
                  className="block text-gray-400 text-sm hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <div className="space-y-2">
              {companyLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => !link.external && handleNavigation(link.path)}
                  className="block text-gray-400 text-sm hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <button
                    key={index}
                    className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Icon className={`w-4 h-4 ${social.color}`} />
                    <span className="text-sm">{social.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 CryptoNova. All rights reserved.
            </div>

            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">
                Made with ❤️ for crypto enthusiasts
              </span>
              <button
                onClick={scrollToTop}
                className="p-2 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 rounded-full text-cyan-400 hover:bg-cyan-600/30 transition-all transform hover:scale-110"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
