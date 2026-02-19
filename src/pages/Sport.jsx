import React, { useState, useEffect } from "react";
import axios from "axios";

const Sport = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [activeCategory, setActiveCategory] = useState("all");
  const [visiblePosts, setVisiblePosts] = useState(9);

  // ---------- Your GNews API Key Here ----------
  const API_KEY = "df43bba9778a35b8cc21a6106da959a9";

  // ---------- Fetch News Function ----------
  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://gnews.io/api/v4/top-headlines?category=sports&lang=en&country=us&max=20&apikey=${API_KEY}`
      );
      
      const data = response.data;
      
      if (data.articles && data.articles.length > 0) {
        const formattedNews = data.articles.map((article, index) => {
          const title = article.title?.toLowerCase() || "";
          const description = article.description?.toLowerCase() || "";
          
          let category = "Other";
          let country = "international";
          
          if (title.includes("cricket") || description.includes("cricket")) {
            category = "Cricket";
          } else if (title.includes("football") || description.includes("football") || 
                     title.includes("soccer")) {
            category = "Football";
          } else if (title.includes("olympic") || description.includes("olympic")) {
            category = "Olympics";
          } else if (title.includes("tennis") || description.includes("tennis") || 
                     title.includes("grand slam")) {
            category = "Tennis";
          } else if (title.includes("basketball") || description.includes("basketball") || 
                     title.includes("nba")) {
            category = "Basketball";
          } else if (title.includes("hockey") || description.includes("hockey")) {
            category = "Hockey";
          }
          
          if (title.includes("bangladesh") || description.includes("bangladesh")) {
            country = "bangladesh";
          }
          
          const getRandomImage = () => {
            const images = [
              "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=2023&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2069&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?q=80&w=2070&auto=format&fit=crop"
            ];
            return images[index % images.length];
          };
          
          return {
            id: index + 1,
            title: article.title || "Title not available",
            image: article.image || getRandomImage(),
            date: new Date(article.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }),
            time: new Date(article.publishedAt).toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit'
            }),
            author: article.source?.name || "Sports Desk",
            category: category,
            country: country,
            excerpt: article.description?.substring(0, 150) + "..." || "Read full article...",
            url: article.url,
            isLive: index < 2 ? true : false,
            isBreaking: index === 0 ? true : false
          };
        });
        
        setNews(formattedNews);
      } else {
        setNews(getDemoNews());
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      setNews(getDemoNews());
    } finally {
      setLoading(false);
      setLastUpdated(new Date());
    }
  };

  // ---------- Demo News (shown if API fails) ----------
  const getDemoNews = () => {
    return [
      {
        id: 1,
        title: "Bangladesh-India Cricket Series: BCB in talks with BCCI",
        image: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?q=80&w=2070&auto=format&fit=crop",
        date: "February 19, 2026",
        time: "10:30 AM",
        author: "Sports Desk",
        category: "Cricket",
        country: "bangladesh",
        excerpt: "BCB and BCCI are in talks for a bilateral series. The Indian team may tour Bangladesh next month.",
        isLive: true,
        isBreaking: true
      },
      {
        id: 2,
        title: "Champions League Final: Real Madrid vs Bayern Munich",
        image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=2023&auto=format&fit=crop",
        date: "February 18, 2026",
        time: "11:15 PM",
        author: "Football Desk",
        category: "Football",
        country: "international",
        excerpt: "Real Madrid and Bayern Munich will face each other in the UEFA Champions League final at Wembley on June 1.",
        isLive: true,
        isBreaking: false
      },
      {
        id: 3,
        title: "Paris Olympics 2026: Bangladesh's medal hopes",
        image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=2070&auto=format&fit=crop",
        date: "February 18, 2026",
        time: "04:40 PM",
        author: "Olympics Desk",
        category: "Olympics",
        country: "bangladesh",
        excerpt: "Bangladesh will participate in 5 events at the Paris Olympics. Medal hopes in swimming and athletics."
      },
      {
        id: 4,
        title: "NBA Finals: Lakers vs Celtics",
        image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop",
        date: "February 17, 2026",
        time: "11:20 AM",
        author: "Basketball Desk",
        category: "Basketball",
        country: "international",
        excerpt: "LeBron James scored 40 points in Game 3 of the NBA Finals. Celtics lead the series 2-1."
      },
      {
        id: 5,
        title: "Australian Open: Djokovic wins 25th Grand Slam",
        image: "https://images.unsplash.com/photo-1542144582-1ba00456b5e3?q=80&w=2070&auto=format&fit=crop",
        date: "February 16, 2026",
        time: "02:30 PM",
        author: "Tennis Desk",
        category: "Tennis",
        country: "international",
        excerpt: "Novak Djokovic won the Australian Open, securing his 25th Grand Slam title."
      }
    ];
  };

  // ---------- Auto Update ----------
  useEffect(() => {
    fetchNews();
    
    const interval = setInterval(() => {
      console.log("Auto-updating sports news...");
      fetchNews();
    }, 600000);
    
    return () => clearInterval(interval);
  }, []);

  // ---------- Category Filter ----------
  const categories = [
    { id: "all", name: "All News", count: news.length },
    { id: "bangladesh", name: "Bangladesh", count: news.filter(n => n.country === "bangladesh").length },
    { id: "cricket", name: "Cricket", count: news.filter(n => n.category === "Cricket").length },
    { id: "football", name: "Football", count: news.filter(n => n.category === "Football").length },
    { id: "olympics", name: "Olympics", count: news.filter(n => n.category === "Olympics").length },
    { id: "others", name: "Others", count: news.filter(n => !["Cricket", "Football", "Olympics"].includes(n.category)).length }
  ];

  const filteredPosts = activeCategory === "all" 
    ? news 
    : activeCategory === "bangladesh"
      ? news.filter(n => n.country === "bangladesh")
      : activeCategory === "cricket"
        ? news.filter(n => n.category === "Cricket")
        : activeCategory === "football"
          ? news.filter(n => n.category === "Football")
          : activeCategory === "olympics"
            ? news.filter(n => n.category === "Olympics")
            : news.filter(n => !["Cricket", "Football", "Olympics"].includes(n.category));

  const liveMatches = news.filter(post => post.isLive);

  const handleLoadMore = () => {
    setVisiblePosts(prev => Math.min(prev + 6, filteredPosts.length));
  };

  const today = lastUpdated.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const currentTime = lastUpdated.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="bg-gray-100 min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-black">Sports World</h1>
              <p className="text-gray-600 mt-1">Latest sports news from Bangladesh and around the world</p>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
              <div className="text-lg font-semibold text-gray-800">{today}</div>
              <div className="text-sm text-gray-500">Last updated: {currentTime}</div>
            </div>
          </div>
          <div className="h-1 w-32 bg-blue-600"></div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-10">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-600 border-t-transparent"></div>
            <p className="mt-2 text-gray-600">Loading news...</p>
          </div>
        )}

        {/* Breaking News Ticker */}
        {!loading && news.filter(n => n.isBreaking).length > 0 && (
          <div className="bg-red-600 text-white p-3 rounded-lg mb-6 flex items-center shadow-md">
            <span className="bg-white text-red-600 px-3 py-1 rounded-full text-sm font-bold mr-3 whitespace-nowrap">
              BREAKING NEWS
            </span>
            <div className="overflow-hidden whitespace-nowrap flex-1">
              <div className="animate-marquee inline-block">
                {news.filter(n => n.isBreaking).map((item, idx) => (
                  <span key={idx} className="mr-8">• {item.title}</span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Live Matches Section */}
        {!loading && liveMatches.length > 0 && (
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl p-6 mb-8 text-white">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
              <h2 className="text-xl font-bold">Live Updates</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {liveMatches.slice(0, 2).map(match => (
                <div key={match.id} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <span className="bg-red-500 text-xs font-bold px-2 py-1 rounded-full">LIVE</span>
                    <div>
                      <h3 className="font-bold text-sm mb-1">{match.title}</h3>
                      <p className="text-xs text-blue-100">{match.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Category Tabs */}
        {!loading && (
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setVisiblePosts(9);
                }}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition flex items-center gap-2 ${
                  activeCategory === category.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-blue-100'
                }`}
              >
                {category.name}
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeCategory === category.id 
                    ? 'bg-white text-blue-600' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Quick Stats */}
        {!loading && news.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <div className="text-xl font-bold text-blue-600">{news.filter(n => n.category === "Cricket").length}</div>
              <div className="text-xs text-gray-500">Cricket</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <div className="text-xl font-bold text-blue-600">{news.filter(n => n.category === "Football").length}</div>
              <div className="text-xs text-gray-500">Football</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <div className="text-xl font-bold text-blue-600">{news.filter(n => n.country === "bangladesh").length}</div>
              <div className="text-xs text-gray-500">Bangladesh</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <div className="text-xl font-bold text-blue-600">{news.length}</div>
              <div className="text-xs text-gray-500">Total</div>
            </div>
          </div>
        )}

        {/* News Grid */}
        {!loading && (
          <>
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl shadow">
                <p className="text-gray-500 text-lg">No news found</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.slice(0, visiblePosts).map((post) => (
                  <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-200">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover hover:scale-105 transition duration-500"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop";
                        }}
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        {post.isBreaking && (
                          <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                            BREAKING
                          </span>
                        )}
                        {post.isLive && (
                          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                            LIVE
                          </span>
                        )}
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                          post.country === "bangladesh" 
                            ? "bg-green-600 text-white" 
                            : "bg-blue-600 text-white"
                        }`}>
                          {post.country === "bangladesh" ? "BANGLADESH" : "INTERNATIONAL"}
                        </span>
                      </div>
                      <span className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {post.category}
                      </span>
                    </div>
                    
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.time}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-black mb-3 hover:text-blue-600 cursor-pointer leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                        <span className="text-xs text-gray-500">{post.author}</span>
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center gap-1"
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

            {/* Load More Button */}
            {visiblePosts < filteredPosts.length && (
              <div className="text-center mt-8">
                <button 
                  onClick={handleLoadMore}
                  className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-full font-bold transition shadow-md"
                >
                  Load More ({filteredPosts.length - visiblePosts})
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Sport;