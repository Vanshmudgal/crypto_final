import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  HeadphonesIcon,
  Users,
  Shield,
  Zap,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  FileText,
  Globe,
  Twitter,
  Github,
  Linkedin,
  MessageSquare,
} from "lucide-react";

const Contact = ({ watchlistCount = 0 }) => {
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

  // Contact methods
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

  // Office locations
  const offices = [
    {
      city: "San Francisco",
      country: "USA",
      address: "123 Blockchain Street, Suite 400",
      zipcode: "San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      timezone: "PST (UTC-8)",
    },
    {
      city: "London",
      country: "UK",
      address: "45 Crypto Lane, Floor 12",
      zipcode: "London, EC2M 4RH",
      phone: "+44 20 7123 4567",
      timezone: "GMT (UTC+0)",
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "88 Digital Plaza, Level 25",
      zipcode: "Singapore 018956",
      phone: "+65 6123 4567",
      timezone: "SGT (UTC+8)",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "",
        message: "",
        priority: "medium",
      });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

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

        {/* Contact Methods */}
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

        {/* Contact Form and Quick Help */}
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
                    <option value="technical">Technical Issues</option>
                    <option value="feedback">Feedback & Suggestions</option>
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

          {/* Quick Help */}
          <div className="space-y-6">
            {/* FAQ Categories */}
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

            {/* Response Time */}
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
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Phone Support</span>
                  <span className="text-purple-400 font-medium">Immediate</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Premium Support</span>
                  <span className="text-orange-400 font-medium">~30 mins</span>
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

        {/* Office Locations */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Our Global Offices
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">
                      {office.city}
                    </h4>
                    <p className="text-gray-400 text-sm">{office.country}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-300 text-sm">{office.address}</p>
                  <p className="text-gray-300 text-sm">{office.zipcode}</p>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm">
                      {office.phone}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-300 text-sm">
                      {office.timezone}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-md border border-red-500/20 rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-red-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Emergency Support
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            If you're experiencing a security issue or urgent account problem
            that requires immediate attention, please contact our emergency
            support line.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-red-600 to-orange-600 px-8 py-3 rounded-full text-white font-semibold hover:from-red-700 hover:to-orange-700 transition-all transform hover:scale-105">
              Emergency Hotline: +1 (555) 911-HELP
            </button>
            <span className="text-gray-400 text-sm">Available 24/7</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
