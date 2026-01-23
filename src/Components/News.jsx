import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Zap,
  Menu,
  X,
  ExternalLink,
  Calendar,
  Newspaper,
  Clock,
  TrendingUp,
  Globe,
} from "lucide-react";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Custom dummy image URL
  const fallbackImage =
    "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop&crop=center";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // 1. Get the API Key from the environment variables
        const apiKey = import.meta.env.VITE_NEWSDATA_API_KEY;

        // 2. Safety check: If key is missing, stop here
        if (!apiKey) {
          console.error("API Key is missing! Check your .env file.");
          setError("API Key configuration error");
          setLoading(false);
          return;
        }

        const response = await axios.get("https://newsdata.io/api/1/latest", {
          params: {
            apikey: apiKey, // Using the variable from .env
            q: "crypto",
          },
        });

        // Filter out the buggy Amadeus article by title
        const filteredArticles = response.data.results.filter(
          (article) =>
            article.title !==
            "Amadeus Introduces World's First Thinking Blockchain: Turning Wasted Mining Power into AI Intelligence"
        );

        setArticles(filteredArticles);
      } catch (err) {
        console.error(err);
        setError("Error fetching news");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

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
            <p className="text-gray-400 text-lg">
              Loading latest crypto news...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
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
            <div className="w-20 h-20 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <X className="w-10 h-10 text-red-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Unable to Load News
            </h3>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              {error}. Please try again later.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-cyan-600 to-purple-600 px-8 py-3 rounded-full text-white font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              Retry
            </button>
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

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <div>
              {/* FIXED: Added inline-block, leading-normal, and pb-2 to prevent clipping */}
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent inline-block leading-normal pb-2">
                Crypto News
              </h1>
              <p className="text-gray-300 text-lg">
                Stay updated with the latest cryptocurrency news and market
                insights
              </p>
            </div>
          </div>

          {/* News Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-r from-cyan-500/10 to-transparent p-4 rounded-lg border border-cyan-500/20">
              <div className="text-cyan-400 text-sm font-medium flex items-center space-x-2">
                <Newspaper className="w-4 h-4" />
                <span>Articles</span>
              </div>
              <div className="text-white text-xl font-bold">
                {articles.length}
              </div>
              <div className="text-gray-400 text-xs">Latest Stories</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/10 to-transparent p-4 rounded-lg border border-purple-500/20">
              <div className="text-purple-400 text-sm font-medium flex items-center space-x-2">
                <TrendingUp className="w-4 h-4" />
                <span>Trending</span>
              </div>
              <div className="text-white text-xl font-bold">Live</div>
              <div className="text-gray-400 text-xs">Updates</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/10 to-transparent p-4 rounded-lg border border-green-500/20">
              <div className="text-green-400 text-sm font-medium flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>Sources</span>
              </div>
              <div className="text-white text-xl font-bold">Global</div>
              <div className="text-gray-400 text-xs">Coverage</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500/10 to-transparent p-4 rounded-lg border border-orange-500/20">
              <div className="text-orange-400 text-sm font-medium flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Updated</span>
              </div>
              <div className="text-white text-xl font-bold">Real-time</div>
              <div className="text-gray-400 text-xs">Data</div>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-md border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800/50"
            >
              {/* Article Image */}
              <div className="relative overflow-hidden">
                <img
                  src={article.image_url || fallbackImage}
                  alt={article.title}
                  loading="lazy" // <--- LAZY LOADING ADDED HERE
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    e.target.src = fallbackImage;
                  }}
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                    <span className="text-cyan-400 text-xs font-medium">
                      CRYPTO
                    </span>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                </a>

                {article.description && (
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {article.description}
                  </p>
                )}

                {/* Article Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-500 text-xs">
                    <Calendar className="w-3 h-3" />
                    <span>
                      {new Date(article.pubDate).toLocaleDateString()}
                    </span>
                  </div>

                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors text-sm group"
                  >
                    <span>Read More</span>
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {articles.length === 0 && (
          <div className="bg-gray-900/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Newspaper className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                No News Available
              </h3>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                We couldn't find any crypto news articles at the moment. Please
                try again later.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="bg-gradient-to-r from-cyan-600 to-purple-600 px-8 py-3 rounded-full text-white font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                Refresh News
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;