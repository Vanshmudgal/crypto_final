import React, { useState } from "react";
import {
  Send,
  CheckCircle,
  HelpCircle,
  Shield,
  Users,
  Zap,
  FileText,
  Clock,
  Twitter,
  Linkedin,
  Github,
  MessageSquare,
} from "lucide-react";

const Contact2 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
    priority: "medium",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // FAQ categories
  const faqCategories = [
    {
      icon: Shield,
      title: "Security & Safety",
      description: "Account security, 2FA, and safety measures",
      count: "15 articles",
    },
    {
      icon: Users,
      title: "Account Management",
      description: "Profile settings, verification, and account issues",
      count: "22 articles",
    },
    {
      icon: Zap,
      title: "Trading & Features",
      description: "Platform features, trading guides, and tools",
      count: "35 articles",
    },
    {
      icon: FileText,
      title: "Billing & Payments",
      description: "Subscriptions, payments, and billing questions",
      count: "18 articles",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "",
        message: "",
        priority: "medium",
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  return (
    <div className="grid lg:grid-cols-3 gap-8 mb-16">
      {/* Contact Form */}
      <div className="lg:col-span-2 bg-gray-900/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-white mb-6">
          Send us a Message
        </h3>

        {submitStatus === "success" && (
          <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-green-300">
              Message sent successfully! We'll get back to you soon.
            </span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
              >
                <option value="">Select a category</option>
                <option value="account">Account Issues</option>
                <option value="trading">Trading Support</option>
                <option value="security">Security Concerns</option>
                <option value="billing">Billing & Payments</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Priority
              </label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Subject *
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="Brief description of your inquiry"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
              placeholder="Please provide detailed information about your inquiry..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-600 to-purple-600 px-8 py-3 rounded-lg text-white font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </div>

      {/* Quick Help Sidebar */}
      <div className="space-y-6">
        <div className="bg-gray-900/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
            <HelpCircle className="w-5 h-5 text-cyan-400" />
            <span>Quick Help</span>
          </h3>
          <div className="space-y-3">
            {faqCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={index}
                  className="w-full flex items-center space-x-3 p-3 bg-gray-800/30 hover:bg-gray-700/30 rounded-lg transition-colors"
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                  <div className="flex-1 text-left">
                    <div className="text-white font-medium text-sm">
                      {category.title}
                    </div>
                    <div className="text-gray-400 text-xs">
                      {category.count}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
            <Clock className="w-5 h-5 text-green-400" />
            <span>Response Times</span>
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Live Chat</span>
              <span className="text-green-400 font-medium">~2 mins</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Email Support</span>
              <span className="text-cyan-400 font-medium">~4 hours</span>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-gray-900/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center space-x-2 p-3 bg-blue-600/20 border border-blue-500/30 rounded-lg hover:bg-blue-600/30 transition-colors">
              <Twitter className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-sm">Twitter</span>
            </button>
            <button className="flex items-center space-x-2 p-3 bg-blue-800/20 border border-blue-700/30 rounded-lg hover:bg-blue-800/30 transition-colors">
              <Linkedin className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-sm">LinkedIn</span>
            </button>
            <button className="flex items-center space-x-2 p-3 bg-gray-700/20 border border-gray-600/30 rounded-lg hover:bg-gray-700/30 transition-colors">
              <Github className="w-4 h-4 text-gray-300" />
              <span className="text-gray-300 text-sm">GitHub</span>
            </button>
            <button className="flex items-center space-x-2 p-3 bg-green-600/20 border border-green-500/30 rounded-lg hover:bg-green-600/30 transition-colors">
              <MessageSquare className="w-4 h-4 text-green-400" />
              <span className="text-green-300 text-sm">Discord</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact2;