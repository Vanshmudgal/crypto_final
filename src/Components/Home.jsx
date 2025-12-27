import React, { useState } from "react";
import { Zap, ArrowRight, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

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

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full backdrop-blur-sm">
            <span className="text-cyan-300 text-sm font-medium">
              🚀 Next Generation Trading Platform
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-cyan-200 to-purple-400 bg-clip-text text-transparent leading-tight">
            Watch The
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Future
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover, analyze, and trade the most promising cryptocurrencies
            with our advanced AI-powered platform. Join millions of traders
            worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => navigate("/crypto")}
              className="group bg-gradient-to-r from-cyan-600 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-2xl shadow-cyan-500/30"
            >
              Watch the Markets
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-cyan-500 rounded-full text-lg font-semibold hover:bg-cyan-500/10 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
