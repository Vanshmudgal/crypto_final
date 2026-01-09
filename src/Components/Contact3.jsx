import React from "react";
import { MapPin, Phone, Clock, AlertCircle } from "lucide-react";

const Contact3 = () => {
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

  return (
    <>
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
                  <span className="text-gray-300 text-sm">{office.phone}</span>
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
          If you're experiencing a security issue or urgent account problem that
          requires immediate attention, please contact our emergency support
          line.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-gradient-to-r from-red-600 to-orange-600 px-8 py-3 rounded-full text-white font-semibold hover:from-red-700 hover:to-orange-700 transition-all transform hover:scale-105">
            Emergency Hotline: +1 (555) 911-HELP
          </button>
          <span className="text-gray-400 text-sm">Available 24/7</span>
        </div>
      </div>
    </>
  );
};

export default Contact3;