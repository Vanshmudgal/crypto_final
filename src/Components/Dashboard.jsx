import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Zap,
  Menu,
  X,
  TrendingUp,
  TrendingDown,
  Star,
  Trash2,
  ArrowLeft,
  Eye,
  BarChart3,
} from "lucide-react";

function Dashboard({ watchlist, removeFromWatchlist }) {
  const navigate = useNavigate();
  const [watchlistData, setWatchlistData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchWatchlistData = async () => {
      if (watchlist.length === 0) {
        setWatchlistData([]);
        return;
      }

      setLoading(true);
      try {
        // Get the coin IDs from watchlist
        const coinIds = watchlist.map((coin) => coin.id).join(",");

        // Fetch fresh data for watchlisted coins
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              ids: coinIds,
              order: "market_cap_desc",
              sparkline: false,
            },
          }
        );

        setWatchlistData(res.data);
      } catch (error) {
        console.error("Error fetching watchlist data:", error);
        // Fallback to original watchlist data if API fails
        setWatchlistData(watchlist);
      } finally {
        setLoading(false);
      }
    };

    fetchWatchlistData();
  }, [watchlist]);

  const handleNavigation = (path) => {
    navigate(path);
  };

  // Calculate portfolio stats
  const totalValue = watchlistData.reduce(
    (sum, coin) => sum + (coin.current_price || 0),
    0
  );
  const avgChange =
    watchlistData.length > 0
      ? watchlistData.reduce(
          (sum, coin) => sum + (coin.price_change_percentage_24h || 0),
          0
        ) / watchlistData.length
      : 0;

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
            <p className="text-gray-400 text-lg">Loading your portfolio...</p>
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
                Your Portfolio
              </h1>
              <p className="text-gray-300 text-lg">
                Track your favorite cryptocurrencies in real-time
              </p>
            </div>

            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              <button
                onClick={() => handleNavigation("/crypto")}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full hover:from-cyan-700 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Market</span>
              </button>
            </div>
          </div>

          {/* Portfolio Stats */}
          {watchlist.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gradient-to-r from-cyan-500/10 to-transparent p-4 rounded-lg border border-cyan-500/20">
                <div className="text-cyan-400 text-sm font-medium flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>Watching</span>
                </div>
                <div className="text-white text-xl font-bold">
                  {watchlist.length}
                </div>
                <div className="text-gray-400 text-xs">Assets</div>
              </div>
              <div className="bg-gradient-to-r from-purple-500/10 to-transparent p-4 rounded-lg border border-purple-500/20">
                <div className="text-purple-400 text-sm font-medium flex items-center space-x-2">
                  <BarChart3 className="w-4 h-4" />
                  <span>Total Value</span>
                </div>
                <div className="text-white text-xl font-bold">
                  ${totalValue.toLocaleString()}
                </div>
                <div className="text-gray-400 text-xs">Combined Price</div>
              </div>
              <div className="bg-gradient-to-r from-green-500/10 to-transparent p-4 rounded-lg border border-green-500/20">
                <div className="text-green-400 text-sm font-medium flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>Avg Change</span>
                </div>
                <div
                  className={`text-xl font-bold ${
                    avgChange >= 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {avgChange.toFixed(2)}%
                </div>
                <div className="text-gray-400 text-xs">24h Average</div>
              </div>
              <div className="bg-gradient-to-r from-orange-500/10 to-transparent p-4 rounded-lg border border-orange-500/20">
                <div className="text-orange-400 text-sm font-medium flex items-center space-x-2">
                  <Star className="w-4 h-4" />
                  <span>Status</span>
                </div>
                <div className="text-white text-xl font-bold">Active</div>
                <div className="text-gray-400 text-xs">Portfolio</div>
              </div>
            </div>
          )}
        </div>

        {/* Empty State */}
        {watchlist.length === 0 ? (
          <div className="bg-gray-900/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Your Watchlist is Empty
              </h3>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                Start building your portfolio by adding cryptocurrencies to
                track their performance and market movements.
              </p>
              <button
                onClick={() => handleNavigation("/crypto")}
                className="bg-gradient-to-r from-cyan-600 to-purple-600 px-8 py-3 rounded-full text-white font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                Browse Cryptocurrencies
              </button>
            </div>
          </div>
        ) : (
          /* Watchlist Table */
          <div className="bg-gray-900/50 backdrop-blur-md border border-gray-700/50 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/50 border-b border-gray-700">
                  <tr>
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
                  {watchlistData.map((coin) => (
                    <tr
                      key={coin.id}
                      className="border-b border-gray-700/30 hover:bg-gray-800/30 transition-colors"
                    >
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
                            {coin.price_change_percentage_24h?.toFixed(2) ||
                              "0"}
                            %
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
                          className="flex items-center space-x-2 px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full text-red-400 hover:bg-red-600/30 hover:border-red-500/50 transition-all transform hover:scale-105"
                          onClick={() => removeFromWatchlist(coin.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                          <span>Remove</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
