import React, { useState, useEffect } from "react";
import axios from "axios";

const Travel = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [activeCategory, setActiveCategory] = useState("all");
  const [visiblePosts, setVisiblePosts] = useState(6);

  // ---------- Your GNews API Key Here ----------
  const API_KEY = "df43bba9778a35b8cc21a6106da959a9";

  // ---------- Fetch Travel News Function ----------
  const fetchTravelNews = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://gnews.io/api/v4/search?q=travel tourism vacation holiday destination hotel&lang=en&country=us&max=20&apikey=${API_KEY}`
      );
      
      const data = response.data;
      
      if (data.articles && data.articles.length > 0) {
        const formattedNews = data.articles.map((article, index) => {
          const title = article.title?.toLowerCase() || "";
          const description = article.description?.toLowerCase() || "";
          
          let travelType = "Other";
          let destination = "International";
          let budget = "Medium";
          
          // Detect travel type
          if (title.includes("beach") || description.includes("beach") || 
              title.includes("coast") || description.includes("ocean")) {
            travelType = "Beach";
          } else if (title.includes("mountain") || description.includes("mountain") || 
                     title.includes("hiking") || description.includes("trekking")) {
            travelType = "Mountain";
          } else if (title.includes("city") || description.includes("city") || 
                     title.includes("urban") || description.includes("metro")) {
            travelType = "City Break";
          } else if (title.includes("adventure") || description.includes("adventure") || 
                     title.includes("extreme") || description.includes("safari")) {
            travelType = "Adventure";
          } else if (title.includes("luxury") || description.includes("luxury") || 
                     title.includes("resort") || description.includes("5-star")) {
            travelType = "Luxury";
            budget = "Luxury";
          } else if (title.includes("budget") || description.includes("budget") || 
                     title.includes("cheap") || description.includes("affordable")) {
            travelType = "Budget";
            budget = "Budget";
          } else if (title.includes("solo") || description.includes("solo") || 
                     title.includes("alone")) {
            travelType = "Solo Travel";
          } else if (title.includes("family") || description.includes("family") || 
                     title.includes("kids") || description.includes("children")) {
            travelType = "Family";
          }
          
          // Detect destination
          if (title.includes("europe") || description.includes("europe")) {
            destination = "Europe";
          } else if (title.includes("asia") || description.includes("asia")) {
            destination = "Asia";
          } else if (title.includes("africa") || description.includes("africa")) {
            destination = "Africa";
          } else if (title.includes("america") || description.includes("america") || 
                     title.includes("usa")) {
            destination = "America";
          } else if (title.includes("australia") || description.includes("australia")) {
            destination = "Australia";
          } else if (title.includes("bangladesh") || description.includes("bangladesh") ||
                     title.includes("dhaka") || title.includes("cox's bazar") || 
                     title.includes("saint martin")) {
            destination = "Bangladesh";
          } else if (title.includes("india") || description.includes("india") || 
                     title.includes("delhi") || title.includes("goa")) {
            destination = "India";
          } else if (title.includes("thailand") || description.includes("thailand") || 
                     title.includes("bangkok")) {
            destination = "Thailand";
          } else if (title.includes("japan") || description.includes("japan") || 
                     title.includes("tokyo")) {
            destination = "Japan";
          }
          
          const getRandomTravelImage = () => {
            const images = [
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2031&auto=format&fit=crop"
            ];
            return images[index % images.length];
          };
          
          return {
            id: index + 1,
            title: article.title || "Title not available",
            image: article.image || getRandomTravelImage(),
            date: new Date(article.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }),
            time: new Date(article.publishedAt).toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit'
            }),
            author: article.source?.name || "Travel Desk",
            travelType: travelType,
            destination: destination,
            budget: budget,
            excerpt: article.description?.substring(0, 150) + "..." || "Read full article...",
            url: article.url,
            readTime: Math.floor(3 + Math.random() * 8),
            likes: Math.floor(50 + Math.random() * 500),
            saves: Math.floor(20 + Math.random() * 200)
          };
        });
        
        setNews(formattedNews);
      } else {
        setNews(getDemoTravelNews());
      }
    } catch (error) {
      console.error("Error fetching travel news:", error);
      setNews(getDemoTravelNews());
    } finally {
      setLoading(false);
      setLastUpdated(new Date());
    }
  };

  // ---------- Demo Travel News (shown if API fails) ----------
  const getDemoTravelNews = () => {
    return [
      {
        id: 1,
        title: "We are a Full-Time Travel Family. How?",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop",
        date: "February 19, 2026",
        time: "10:30 AM",
        author: "Victoria Anderson",
        travelType: "Family",
        destination: "International",
        budget: "Medium",
        excerpt: "Products allow you to create something once and earn revenue while sleeping, sightseeing, or getting a suntan on a beach!",
        readTime: 6,
        likes: 345,
        saves: 89
      },
      {
        id: 2,
        title: "How To Work From-Home While Also Traveling",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop",
        date: "February 18, 2026",
        time: "11:45 AM",
        author: "Michael Chen",
        travelType: "Digital Nomad",
        destination: "International",
        budget: "Medium",
        excerpt: "Discover the best practices for maintaining productivity while exploring the world. Learn how to balance work and travel effectively.",
        readTime: 8,
        likes: 567,
        saves: 123
      },
      {
        id: 3,
        title: "5 Things We Know About Flying This Summer",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2070&auto=format&fit=crop",
        date: "February 17, 2026",
        time: "09:15 AM",
        author: "Sarah Johnson",
        travelType: "Travel Tips",
        destination: "International",
        budget: "Budget",
        excerpt: "Summer travel is back! Here's everything you need to know about flight regulations, baggage policies, and safety measures.",
        readTime: 5,
        likes: 890,
        saves: 234
      },
      {
        id: 4,
        title: "Top 10 Hidden Gems in Europe",
        image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop",
        date: "February 16, 2026",
        time: "02:20 PM",
        author: "David Kim",
        travelType: "Hidden Gems",
        destination: "Europe",
        budget: "Budget",
        excerpt: "Skip the crowded tourist spots and discover these amazing hidden locations across Europe that offer authentic experiences.",
        readTime: 7,
        likes: 678,
        saves: 156
      },
      {
        id: 5,
        title: "Budget Travel: How to See the World on $50/Day",
        image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2070&auto=format&fit=crop",
        date: "February 15, 2026",
        time: "04:50 PM",
        author: "Victoria Anderson",
        travelType: "Budget",
        destination: "International",
        budget: "Budget",
        excerpt: "Traveling doesn't have to break the bank. Learn proven strategies to stretch your travel budget while maximizing experiences.",
        readTime: 6,
        likes: 945,
        saves: 267
      },
      {
        id: 6,
        title: "Solo Travel Guide for Beginners",
        image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?q=80&w=2070&auto=format&fit=crop",
        date: "February 14, 2026",
        time: "12:30 PM",
        author: "Emily Roberts",
        travelType: "Solo Travel",
        destination: "International",
        budget: "Medium",
        excerpt: "Embarking on your first solo journey? Here's everything you need to know about safety, planning, and making the most of it.",
        readTime: 9,
        likes: 756,
        saves: 189
      },
      {
        id: 7,
        title: "Cox's Bazar: The World's Longest Sea Beach",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop",
        date: "February 13, 2026",
        time: "10:00 AM",
        author: "Bangla Travel Team",
        travelType: "Beach",
        destination: "Bangladesh",
        budget: "Budget",
        excerpt: "Detailed guide to Cox's Bazar's beauty, sea beach, tourist spots, and accommodation.",
        readTime: 5,
        likes: 234,
        saves: 67
      },
      {
        id: 8,
        title: "Saint Martin Island: The Coral Island Beauty",
        image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2031&auto=format&fit=crop",
        date: "February 12, 2026",
        time: "03:45 PM",
        author: "Travel Expert",
        travelType: "Island",
        destination: "Bangladesh",
        budget: "Medium",
        excerpt: "Complete guide to Saint Martin, Bangladesh's only coral island. How to go, where to stay, what to see.",
        readTime: 6,
        likes: 567,
        saves: 145
      },
      {
        id: 9,
        title: "Bandarban: A Few Days in the Hills",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
        date: "February 11, 2026",
        time: "11:20 AM",
        author: "Adventure Team",
        travelType: "Mountain",
        destination: "Bangladesh",
        budget: "Budget",
        excerpt: "Detailed information about Nilgiri, Chimbuk, Bogalake and various tourist spots and trekking routes in Bandarban.",
        readTime: 7,
        likes: 432,
        saves: 98
      }
    ];
  };

  // ---------- Auto Update ----------
  useEffect(() => {
    fetchTravelNews();
    
    const interval = setInterval(() => {
      console.log("Auto-updating travel news...");
      fetchTravelNews();
    }, 600000);
    
    return () => clearInterval(interval);
  }, []);

  // ---------- Category Filter ----------
  const categories = [
    { id: "all", name: "All News", count: news.length },
    { id: "beach", name: "Beach", count: news.filter(n => n.travelType === "Beach").length },
    { id: "mountain", name: "Mountain", count: news.filter(n => n.travelType === "Mountain").length },
    { id: "budget", name: "Budget", count: news.filter(n => n.budget === "Budget").length },
    { id: "solo", name: "Solo Travel", count: news.filter(n => n.travelType === "Solo Travel").length },
    { id: "family", name: "Family", count: news.filter(n => n.travelType === "Family").length },
    { id: "bangladesh", name: "Bangladesh", count: news.filter(n => n.destination === "Bangladesh").length }
  ];

  const filteredPosts = activeCategory === "all" 
    ? news 
    : activeCategory === "bangladesh"
      ? news.filter(n => n.destination === "Bangladesh")
      : activeCategory === "beach"
        ? news.filter(n => n.travelType === "Beach")
        : activeCategory === "mountain"
          ? news.filter(n => n.travelType === "Mountain")
          : activeCategory === "budget"
            ? news.filter(n => n.budget === "Budget")
            : activeCategory === "solo"
              ? news.filter(n => n.travelType === "Solo Travel")
              : activeCategory === "family"
                ? news.filter(n => n.travelType === "Family")
                : news;

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

  const featuredPost = news.length > 0 ? 
    news.sort((a, b) => b.likes - a.likes)[0] : null;

  return (
    <div className="bg-gray-100 min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-black">Travel World</h1>
              <p className="text-gray-600 mt-1">Travel guides, tips, and experiences from around the world</p>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
              <div className="text-lg font-semibold text-gray-800">{today}</div>
              <div className="text-sm text-gray-500">Last updated: {currentTime}</div>
            </div>
          </div>
          <div className="h-1 w-32 bg-red-600"></div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-10">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-red-600 border-t-transparent"></div>
            <p className="mt-2 text-gray-600">Loading travel news...</p>
          </div>
        )}

        {/* Featured Post */}
        {!loading && featuredPost && (
          <div className="relative h-[350px] md:h-[400px] rounded-2xl overflow-hidden mb-8 group">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white max-w-2xl">
              <div className="flex gap-2 mb-2">
                <span className="bg-red-600 text-white px-3 py-1 text-xs font-bold rounded-full">
                  FEATURED
                </span>
                <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 text-xs font-bold rounded-full">
                  {featuredPost.destination}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{featuredPost.title}</h2>
              <p className="text-gray-200 text-sm mb-3">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-4 text-sm">
                <span>👤 {featuredPost.author}</span>
                <span>⏱️ {featuredPost.readTime} min read</span>
                <span>❤️ {featuredPost.likes}</span>
              </div>
            </div>
          </div>
        )}

        {/* Category Tabs */}
        {!loading && (
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setVisiblePosts(6);
                }}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition flex items-center gap-2 ${
                  activeCategory === category.id 
                    ? 'bg-red-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-red-100'
                }`}
              >
                {category.name}
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeCategory === category.id 
                    ? 'bg-white text-red-600' 
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
              <div className="text-xl font-bold text-red-600">
                {news.filter(n => n.budget === "Budget").length}
              </div>
              <div className="text-xs text-gray-500">Budget Trips</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <div className="text-xl font-bold text-red-600">
                {news.filter(n => n.destination === "Bangladesh").length}
              </div>
              <div className="text-xs text-gray-500">Bangladesh</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <div className="text-xl font-bold text-red-600">
                {news.filter(n => n.travelType === "Beach" || n.travelType === "Mountain").length}
              </div>
              <div className="text-xs text-gray-500">Nature</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <div className="text-xl font-bold text-red-600">
                {Math.floor(news.reduce((acc, item) => acc + item.saves, 0) / news.length)}
              </div>
              <div className="text-xs text-gray-500">Avg Saves</div>
            </div>
          </div>
        )}

        {/* News Grid */}
        {!loading && (
          <>
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl shadow">
                <p className="text-gray-500 text-lg">No travel news found</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.slice(0, visiblePosts).map((post) => (
                  <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-200">
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop";
                        }}
                      />
                      {post.destination === "Bangladesh" && (
                        <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          🇧🇩 Bangladesh
                        </span>
                      )}
                      {post.budget === "Budget" && (
                        <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          💰 Budget
                        </span>
                      )}
                      <span className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {post.travelType}
                      </span>
                    </div>
                    
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.time}</span>
                        <span>•</span>
                        <span>{post.readTime} min</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-black mb-2 hover:text-red-600 cursor-pointer leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      {/* Destination & Engagement */}
                      <div className="flex items-center justify-between mb-3 text-xs">
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                          {post.destination}
                        </span>
                        <div className="flex gap-2">
                          <span className="text-pink-600">❤️ {post.likes}</span>
                          <span className="text-blue-600">🔖 {post.saves}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                        <span className="text-xs text-gray-500">{post.author}</span>
                        <a
                          href={post.url}
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

            {/* Load More Button */}
            {visiblePosts < filteredPosts.length && (
              <div className="text-center mt-8">
                <button 
                  onClick={handleLoadMore}
                  className="bg-red-600 text-white hover:bg-red-700 px-8 py-3 rounded-full font-bold transition shadow-md"
                >
                  Load More ({filteredPosts.length - visiblePosts})
                </button>
              </div>
            )}
          </>
        )}

        {/* Travel Tip of the Day */}
        {!loading && (
          <div className="mt-8 bg-gradient-to-r from-red-500 to-red-700 rounded-2xl p-6 text-white">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">✈️</span>
              <h3 className="text-xl font-bold">Travel Tip of the Day</h3>
            </div>
            <p className="text-sm opacity-90 mb-3">
              Always check hotel and flight booking reviews before traveling.
              Keep local currency with you and save emergency contact numbers.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Travel;