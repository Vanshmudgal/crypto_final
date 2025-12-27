import React, { useEffect, useState } from "react";
import {
  Zap,
  Menu,
  X,
  TrendingUp,
  TrendingDown,
  Star,
  Filter,
  Search,
} from "lucide-react";

function Crypto({ watchlist, addToWatchlist }) {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
        );
        const data = await response.json();
        setCoins(data);
      } catch (error) {
        console.error("Error fetching coins:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
  }, []);

  const isInWatchlist = (coinId) => {
    return watchlist.some((coin) => coin.id === coinId);
  };

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white overflow-hidden relative">
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
        </div>

        <div className="flex justify-center items-center h-screen">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg">Loading market data...</p>
          </div>
        </div>
      </div>
    );
  }

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

      {/* Navbar */}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Live Markets
              </h1>
              <p className="text-gray-300 text-lg">
                Real-time cryptocurrency prices and market data
              </p>
            </div>

            {/* Search and Filter */}
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search coins..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
              <button className="p-2 bg-gray-800/50 border border-gray-600 rounded-full hover:border-cyan-500 transition-colors">
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Market Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-r from-cyan-500/10 to-transparent p-4 rounded-lg border border-cyan-500/20">
              <div className="text-cyan-400 text-sm font-medium">
                Market Cap
              </div>
              <div className="text-white text-xl font-bold">$2.1T</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/10 to-transparent p-4 rounded-lg border border-purple-500/20">
              <div className="text-purple-400 text-sm font-medium">
                24h Volume
              </div>
              <div className="text-white text-xl font-bold">$89.2B</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/10 to-transparent p-4 rounded-lg border border-green-500/20">
              <div className="text-green-400 text-sm font-medium">
                BTC Dominance
              </div>
              <div className="text-white text-xl font-bold">52.4%</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500/10 to-transparent p-4 rounded-lg border border-orange-500/20">
              <div className="text-orange-400 text-sm font-medium">
                Active Coins
              </div>
              <div className="text-white text-xl font-bold">2,847</div>
            </div>
          </div>
        </div>

        {/* Trading Table */}
        <div className="bg-gray-900/50 backdrop-blur-md border border-gray-700/50 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800/50 border-b border-gray-700">
                <tr>
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">
                    #
                  </th>
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">
                    Asset
                  </th>
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">
                    Price
                  </th>
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">
                    24h Change
                  </th>
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">
                    Market Cap
                  </th>
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredCoins.map((coin, index) => (
                  <tr
                    key={coin.id}
                    className="border-b border-gray-700/30 hover:bg-gray-800/30 transition-colors"
                  >
                    <td className="py-4 px-6 text-gray-400 font-mono">
                      {index + 1}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <img
                          src={coin.image}
                          alt={coin.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <div className="text-white font-semibold">
                            {coin.name}
                          </div>
                          <div className="text-gray-400 text-sm font-mono uppercase">
                            {coin.symbol}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-white font-semibold font-mono">
                        ${coin.current_price?.toLocaleString() || "0"}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div
                        className={`flex items-center space-x-1 font-semibold ${
                          coin.price_change_percentage_24h >= 0
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {coin.price_change_percentage_24h >= 0 ? (
                          <TrendingUp className="w-4 h-4" />
                        ) : (
                          <TrendingDown className="w-4 h-4" />
                        )}
                        <span className="font-mono">
                          {coin.price_change_percentage_24h?.toFixed(2) || "0"}%
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-gray-300 font-mono">
                        $
                        {coin.market_cap
                          ? (coin.market_cap / 1e9).toFixed(2)
                          : "0"}
                        B
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <button
                        className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all transform hover:scale-105 ${
                          isInWatchlist(coin.id)
                            ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                            : "bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700"
                        }`}
                        onClick={() => addToWatchlist(coin)}
                        disabled={isInWatchlist(coin.id)}
                      >
                        <Star
                          className={`w-4 h-4 ${
                            isInWatchlist(coin.id) ? "fill-current" : ""
                          }`}
                        />
                        <span>
                          {isInWatchlist(coin.id) ? "Added" : "Watch"}
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crypto;
