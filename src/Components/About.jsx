import React from "react";
import {
  Users,
  Target,
  Award,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  Code,
  Database,
  BarChart3,
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const About = ({ watchlistCount = 0 }) => {
  // Team members data
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "CEO & Co-Founder",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Former Goldman Sachs trader with 10+ years in traditional finance and blockchain technology.",
      linkedin: "#",
    },
    {
      name: "Sarah Rodriguez",
      role: "CTO & Co-Founder",
      image:
        "data:image/jpeg;base64,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",
      bio: "Ex-Google engineer specializing in distributed systems and cryptocurrency infrastructure.",
      linkedin: "#",
    },
    {
      name: "Marcus Johnson",
      role: "Head of Product",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Product leader from Tesla with expertise in user experience and financial technology.",
      linkedin: "#",
    },
    {
      name: "Emily Zhang",
      role: "Lead Data Scientist",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "PhD in Machine Learning from MIT, specializing in predictive analytics and market modeling.",
      linkedin: "#",
    },
  ];

  // Company values
  const values = [
    {
      icon: Shield,
      title: "Security First",
      description:
        "Your assets and data are protected with bank-grade security and encryption.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description:
        "Cutting-edge technology and AI-powered insights to stay ahead of the market.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Building a global community of informed crypto traders and investors.",
    },
    {
      icon: Heart,
      title: "Transparency",
      description:
        "Open, honest communication and clear pricing with no hidden fees.",
    },
  ];

  // Company milestones
  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description:
        "CryptoWatch was born with a vision to democratize crypto trading",
    },
    {
      year: "2020",
      title: "Series A Funding",
      description: "Raised $15M to expand our platform and team",
    },
    {
      year: "2021",
      title: "1M+ Users",
      description: "Reached our first million active users milestone",
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Launched in 50+ countries with multi-language support",
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Introduced advanced AI-powered trading insights",
    },
    {
      year: "2024",
      title: "10M+ Users",
      description: "Growing community of crypto enthusiasts worldwide",
    },
  ];

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

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
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

        {/* Company Values */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Our Journey
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full"></div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                    }`}
                  >
                    <div className="bg-gray-900/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6">
                      <div className="text-cyan-400 font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <h4 className="text-white font-semibold text-xl mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="relative z-10 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-md border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-1">
                    {member.name}
                  </h4>
                  <p className="text-cyan-400 text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                    <span className="text-sm">Connect</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-900/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-cyan-400" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Email Us
              </h4>
              <p className="text-gray-400">hello@cryptowatch.com</p>
              <p className="text-gray-400">support@cryptowatch.com</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-purple-400" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Call Us</h4>
              <p className="text-gray-400">+1 (555) 123-4567</p>
              <p className="text-gray-400">24/7 Support</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Visit Us
              </h4>
              <p className="text-gray-400">123 Blockchain Street</p>
              <p className="text-gray-400">San Francisco, CA 94105</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-cyan-600 to-purple-600 px-8 py-3 rounded-full text-white font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all transform hover:scale-105">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
