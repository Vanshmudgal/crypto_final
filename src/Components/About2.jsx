import React from "react";
import {
  Shield,
  TrendingUp,
  Users,
  Heart,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const About2 = () => {
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
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
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
    <>
      {/* Company Values */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent inline-block pb-1">
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
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent inline-block pb-1">
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
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent inline-block pb-1">
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
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent inline-block pb-1">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-cyan-400" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Email Us</h4>
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
            <h4 className="text-xl font-semibold text-white mb-2">Visit Us</h4>
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
    </>
  );
};

export default About2;