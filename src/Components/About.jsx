import React from "react";
import {
  Users,
  Target,
  Award,
  Globe,
  Zap,
  BarChart3,
} from "lucide-react";
import About2 from "./About2";

const About = ({ watchlistCount = 0 }) => {
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
              🚀 About CryptoWatch
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent inline-block leading-normal py-2 px-1">
            Empowering the Future of
            <br />
            Crypto Trading
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Since 2019, CryptoWatch has been at the forefront of cryptocurrency
            innovation, providing millions of users with the tools, insights,
            and security they need to navigate the digital asset landscape with
            confidence.
          </p>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-transparent p-6 rounded-lg border border-cyan-500/20 text-center">
            <div className="text-cyan-400 text-sm font-medium flex items-center justify-center space-x-2 mb-2">
              <Users className="w-4 h-4" />
              <span>Users</span>
            </div>
            <div className="text-white text-3xl font-bold">10M+</div>
            <div className="text-gray-400 text-xs">Active Globally</div>
          </div>
          <div className="bg-gradient-to-r from-purple-500/10 to-transparent p-6 rounded-lg border border-purple-500/20 text-center">
            <div className="text-purple-400 text-sm font-medium flex items-center justify-center space-x-2 mb-2">
              <BarChart3 className="w-4 h-4" />
              <span>Volume</span>
            </div>
            <div className="text-white text-3xl font-bold">$50B+</div>
            <div className="text-gray-400 text-xs">Traded Monthly</div>
          </div>
          <div className="bg-gradient-to-r from-green-500/10 to-transparent p-6 rounded-lg border border-green-500/20 text-center">
            <div className="text-green-400 text-sm font-medium flex items-center justify-center space-x-2 mb-2">
              <Globe className="w-4 h-4" />
              <span>Countries</span>
            </div>
            <div className="text-white text-3xl font-bold">50+</div>
            <div className="text-gray-400 text-xs">Worldwide</div>
          </div>
          <div className="bg-gradient-to-r from-orange-500/10 to-transparent p-6 rounded-lg border border-orange-500/20 text-center">
            <div className="text-orange-400 text-sm font-medium flex items-center justify-center space-x-2 mb-2">
              <Award className="w-4 h-4" />
              <span>Uptime</span>
            </div>
            <div className="text-white text-3xl font-bold">99.9%</div>
            <div className="text-gray-400 text-xs">Reliability</div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To democratize access to cryptocurrency markets by providing
                institutional-grade tools and insights to retail investors
                worldwide. We believe everyone deserves the opportunity to
                participate in the digital economy revolution.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To become the world's most trusted and innovative cryptocurrency
                platform, empowering the next generation of digital asset
                investors with cutting-edge technology, unparalleled security,
                and community-driven insights.
              </p>
            </div>
          </div>
        </div>

        {/* Modular Component for Values, Timeline, Team, and Contact */}
        <About2 />
      </div>
    </div>
  );
};

export default About;