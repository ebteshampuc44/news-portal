// pages/SearchResults.jsx
import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import axios from "axios";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");

  const API_KEY = "df43bba9778a35b8cc21a6106da959a9";

  useEffect(() => {
    const searchNews = async () => {
      if (!query) return;
      
      setLoading(true);
      try {
        const response = await axios.get(
          `https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}&lang=en&country=us&max=30&apikey=${API_KEY}`
        );
        
        if (response.data.articles) {
          const formattedResults = response.data.articles.map((article, index) => {
            // Detect category based on keywords
            let category = "General";
            const title = article.title?.toLowerCase() || "";
            const desc = article.description?.toLowerCase() || "";
            
            if (title.includes("travel") || desc.includes("travel") || 
                title.includes("tourism") || desc.includes("tourism")) {
              category = "Travel";
            } else if (title.includes("fashion") || desc.includes("fashion") || 
                       title.includes("style") || desc.includes("style")) {
              category = "Fashion";
            } else if (title.includes("food") || desc.includes("food") || 
                       title.includes("recipe") || desc.includes("recipe")) {
              category = "Food";
            } else if (title.includes("sport") || desc.includes("sport") || 
                       title.includes("game") || desc.includes("game")) {
              category = "Sport";
            } else if (title.includes("lifestyle") || desc.includes("lifestyle") || 
                       title.includes("health") || desc.includes("health")) {
              category = "Lifestyle";
            }
            
            return {
              id: index,
              title: article.title || "No title",
              description: article.description || "No description available",
              image: article.image || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop",
              url: article.url,
              source: article.source?.name || "Unknown",
              publishedAt: article.publishedAt,
              category: category
            };
          });
          setResults(formattedResults);
        }
      } catch (error) {
        console.error("Search error:", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    searchNews();
  }, [query]);

  const filteredResults = activeFilter === "all" 
    ? results 
    : results.filter(item => item.category === activeFilter);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-black mb-2">
            Search Results for "{query}"
          </h1>
          <p className="text-gray-600">
            Found {results.length} articles
          </p>
          <div className="h-1 w-32 bg-red-600 mt-3"></div>
        </div>

        {/* Category Filters */}
        {results.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                activeFilter === "all" 
                  ? "bg-red-600 text-white" 
                  : "bg-white text-gray-700 hover:bg-red-100"
              }`}
            >
              All ({results.length})
            </button>
            {["Travel", "Fashion", "Food", "Sport", "Lifestyle", "General"].map(cat => {
              const count = results.filter(r => r.category === cat).length;
              if (count === 0) return null;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                    activeFilter === cat 
                      ? "bg-red-600 text-white" 
                      : "bg-white text-gray-700 hover:bg-red-100"
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-red-600 border-t-transparent"></div>
            <p className="mt-2 text-gray-600">Searching...</p>
          </div>
        )}

        {/* Results Grid */}
        {!loading && (
          <>
            {filteredResults.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl shadow">
                <p className="text-gray-500 text-lg mb-4">No results found</p>
                <p className="text-gray-400">Try different keywords</p>
                <Link 
                  to="/" 
                  className="inline-block mt-6 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700"
                >
                  Back to Home
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResults.map((item) => (
                  <article key={item.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-200">
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop";
                        }}
                      />
                      <span className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {item.category}
                      </span>
                    </div>
                    
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <span>{item.source}</span>
                        <span>•</span>
                        <span>{formatDate(item.publishedAt)}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-black mb-2 hover:text-red-600 cursor-pointer leading-tight">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                        <span className="text-xs text-gray-500">Source: {item.source}</span>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-600 hover:text-red-700 text-sm font-semibold flex items-center gap-1"
                        >
                          Read More
                          <span className="text-lg">→</span>
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchResults;