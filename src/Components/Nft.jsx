import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Palette,
  TrendingUp,
  Star,
  ExternalLink,
  Search,
  Grid,
  List,
  Heart,
  DollarSign,
  Activity,
} from "lucide-react";

const ITEMS_PER_PAGE = 8;

const NFT = ({ watchlistCount = 0 }) => {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCollection, setSelectedCollection] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const collections = [
    { slug: "boredapeyachtclub", name: "Bored Ape Yacht Club" },
    { slug: "cryptopunks", name: "CryptoPunks" },
    { slug: "azuki", name: "Azuki" },
    { slug: "mutant-ape-yacht-club", name: "Mutant Ape Yacht Club" },
    { slug: "pudgypenguins", name: "Pudgy Penguins" },
    { slug: "doodles-official", name: "Doodles" },
  ];

  useEffect(() => {
    console.log("API Key from env:", import.meta.env.VITE_OPENSEA_API_KEY);
console.log("All env vars:", import.meta.env);
  const fetchNFTs = async () => {
    setLoading(true);
    try {
      const allNFTs = [];

      for (const collection of collections.slice(0, 3)) {
        const res = await axios.get(
          `https://api.opensea.io/api/v2/collection/${collection.slug}/nfts`,
          {
            headers: {
              accept: "application/json",
              "x-api-key": import.meta.env.VITE_OPENSEA_API_KEY, // ← ONLY THIS LINE CHANGED
            },
            params: { limit: 10 },
          }
        );

        const mapped =
          res.data?.nfts?.map((nft) => ({
            ...nft,
            collection_name: collection.name,
            collection_slug: collection.slug,
          })) || [];

        allNFTs.push(...mapped);
      }

      setNfts(allNFTs);
    } catch (err) {
      setError("Error fetching NFTs");
    } finally {
      setLoading(false);
    }
  };

  fetchNFTs();
}, []);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCollection]);

  const filteredNFTs = nfts.filter((nft) => {
    const matchesSearch =
      nft.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      nft.collection_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      nft.token_id?.toString().includes(searchTerm);

    const matchesCollection =
      selectedCollection === "all" ||
      nft.collection_slug === selectedCollection;

    return matchesSearch && matchesCollection;
  });

  const totalPages = Math.ceil(filteredNFTs.length / ITEMS_PER_PAGE);

  const paginatedNFTs = filteredNFTs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const generateMockPrice = (tokenId) =>
    (0.1 + (parseInt(tokenId) % 50) / 10).toFixed(2);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-red-400">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            NFT Marketplace
          </h1>
          <p className="text-gray-400">
            Discover NFTs from premium collections
          </p>
        </div>

        <div className="flex gap-3 items-center">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search NFTs..."
              className="pl-9 pr-4 py-2 bg-gray-800 rounded-full border border-gray-600 focus:border-cyan-500 outline-none"
            />
          </div>

          <select
            value={selectedCollection}
            onChange={(e) => setSelectedCollection(e.target.value)}
            className="px-4 py-2 bg-gray-800 rounded-full border border-gray-600"
          >
            <option value="all">All</option>
            {collections.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>

          <div className="flex rounded-full overflow-hidden border border-gray-600">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 ${
                viewMode === "grid" ? "bg-cyan-600" : "bg-gray-800"
              }`}
            >
              <Grid size={16} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 ${
                viewMode === "list" ? "bg-cyan-600" : "bg-gray-800"
              }`}
            >
              <List size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* NFT Grid */}
      <div
        className={`grid gap-6 ${
          viewMode === "grid"
            ? "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            : "grid-cols-1"
        }`}
      >
        {paginatedNFTs.map((nft, idx) => (
          <div
            key={idx}
            className="bg-gray-900/60 rounded-2xl border border-gray-700 hover:border-cyan-500/40 transition transform hover:scale-105"
          >
            <img
              src={nft.image_url || "https://via.placeholder.com/400"}
              alt={nft.name}
              className={`w-full object-cover ${
                viewMode === "grid" ? "h-64" : "h-32"
              }`}
            />

            <div className="p-5">
              <div className="flex justify-between mb-2">
                <div>
                  <h3 className="font-semibold">
                    {nft.name || `#${nft.token_id}`}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {nft.collection_name}
                  </p>
                </div>
                <Heart className="w-5 h-5 text-gray-400 hover:text-red-400 cursor-pointer" />
              </div>

              <p className="text-sm text-gray-400">Price</p>
              <p className="font-semibold">
                {generateMockPrice(nft.token_id)} ETH
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12 gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-4 py-2 rounded-full bg-gray-800 disabled:opacity-40"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-10 h-10 rounded-full ${
                currentPage === i + 1
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500"
                  : "bg-gray-800"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-4 py-2 rounded-full bg-gray-800 disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default NFT;
