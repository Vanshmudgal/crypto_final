import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Zap,
  Menu,
  X,
  Home,
  TrendingUp,
  Eye,
  Newspaper,
  Palette,
  Info,
  Phone,
} from "lucide-react";

const Navbar = ({ watchlistCount = 0 }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  // All navigation items in one array
  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/crypto", label: "Markets", icon: TrendingUp },
    { path: "/dash", label: "Portfolio", icon: Eye, showBadge: true },
    { path: "/news", label: "News", icon: Newspaper },
    { path: "/nft", label: "NFTs", icon: Palette },
    { path: "/about", label: "About", icon: Info },
    { path: "/contact", label: "Contact", icon: Phone },
  ];

  return (
    <nav className="relative z-50 px-6 py-4 backdrop-blur-md bg-black/30 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => handleNavigation("/")}
          className="flex items-center space-x-2 group"
        >
          <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <Zap className="w-5 h-5" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            CryptoWatch
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive(item.path)
                    ? "bg-gradient-to-r from-cyan-600/20 to-purple-600/20 text-cyan-400 border border-cyan-500/30"
                    : "hover:text-cyan-400 hover:bg-cyan-500/10"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
                {item.showBadge && watchlistCount > 0 && (
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full">
                    {watchlistCount}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-cyan-500/10 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 space-y-2 backdrop-blur-md bg-black/60 rounded-2xl p-6 border border-gray-700/50">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive(item.path)
                    ? "bg-gradient-to-r from-cyan-600/20 to-purple-600/20 text-cyan-400 border border-cyan-500/30"
                    : "hover:text-cyan-400 hover:bg-cyan-500/10"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
                {item.showBadge && watchlistCount > 0 && (
                  <span className="ml-auto bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full">
                    {watchlistCount}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
