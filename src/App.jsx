import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Components/Home";
import Crypto from "./Components/Crypto";
import Dashboard from "./Components/Dashboard";
import News from "./Components/News";
import NFT from "./Components/Nft";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const [watchlist, setWatchlist] = useState([]);

  // Add coin to watchlist
  const addToWatchlist = (coin) => {
    const isAlreadyInWatchlist = watchlist.some((item) => item.id === coin.id);
    if (!isAlreadyInWatchlist) {
      setWatchlist((prev) => [...prev, coin]);
    }
  };

  // Remove coin from watchlist
  const removeFromWatchlist = (coinId) => {
    setWatchlist((prev) => prev.filter((coin) => coin.id !== coinId));
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Home Route */}

          <Route
            path="/"
            element={<Home watchlistCount={watchlist.length} />}
          />

          <Route path="/nft" element={<NFT />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/about" element={<About />} />
          {/* Crypto Markets Route */}
          <Route
            path="/crypto"
            element={
              <Crypto watchlist={watchlist} addToWatchlist={addToWatchlist} />
            }
          />

          {/* Portfolio Dashboard Route */}
          <Route
            path="/dash"
            element={
              <Dashboard
                watchlist={watchlist}
                removeFromWatchlist={removeFromWatchlist}
              />
            }
          />

          {/* News Route */}
          <Route
            path="/news"
            element={<News watchlistCount={watchlist.length} />}
          />

          {/* 404 Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// 404 Not Found Component
const NotFound = () => {
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

      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🚀</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            404
          </h1>
          <h3 className="text-2xl font-bold text-white mb-4">Page Not Found</h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist. Let's get you back on
            track.
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="bg-gradient-to-r from-cyan-600 to-purple-600 px-8 py-3 rounded-full text-white font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all transform hover:scale-105"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
