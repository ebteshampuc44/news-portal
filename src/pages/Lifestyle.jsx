import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Lifestyle = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [activeCategory, setActiveCategory] = useState("all");
  const [visiblePosts, setVisiblePosts] = useState(6);

  // ---------- Your GNews API Key Here ----------
  const API_KEY = "df43bba9778a35b8cc21a6106da959a9";

  // ---------- Fetch Lifestyle News Function ----------
  const fetchLifestyleNews = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://gnews.io/api/v4/search?q=lifestyle wellness fitness health beauty productivity&lang=en&country=us&max=20&apikey=${API_KEY}`
      );
      
      const data = response.data;
      
      if (data.articles && data.articles.length > 0) {
        const formattedNews = data.articles.map((article, index) => {
          const title = article.title?.toLowerCase() || "";
          const description = article.description?.toLowerCase() || "";
          
          let category = "General";
          let lifestyleType = "Other";
          let readTime = Math.floor(3 + Math.random() * 8); // 3-10 minutes read time
          
          // Detect lifestyle category
          if (title.includes("fitness") || description.includes("fitness") || 
              title.includes("workout") || description.includes("exercise") ||
              title.includes("gym")) {
            lifestyleType = "Fitness";
            category = "Fitness";
          } else if (title.includes("health") || description.includes("health") || 
                     title.includes("healthy")) {
            lifestyleType = "Health";
            category = "Health";
          } else if (title.includes("beauty") || description.includes("beauty") || 
                     title.includes("skincare") || description.includes("makeup")) {
            lifestyleType = "Beauty";
            category = "Beauty";
          } else if (title.includes("mental") || description.includes("mental") || 
                     title.includes("wellness") || description.includes("mindfulness")) {
            lifestyleType = "Wellness";
            category = "Wellness";
          } else if (title.includes("productivity") || description.includes("productivity") || 
                     title.includes("routine") || description.includes("habit")) {
            lifestyleType = "Productivity";
            category = "Productivity";
          } else if (title.includes("minimalist") || description.includes("minimalist") || 
                     title.includes("declutter") || description.includes("organizing")) {
            lifestyleType = "Minimalism";
            category = "Minimalism";
          } else if (title.includes("relationship") || description.includes("relationship") || 
                     title.includes("marriage") || description.includes("parenting")) {
            lifestyleType = "Relationships";
            category = "Relationships";
          } else if (title.includes("digital detox") || description.includes("digital detox") || 
                     title.includes("social media")) {
            lifestyleType = "Digital Detox";
            category = "Digital Detox";
          }
          
          // Detect Bangladesh related news
          const isBangladesh = title.includes("bangladesh") || description.includes("bangladesh") ||
                               title.includes("dhaka");
          
          const getRandomLifestyleImage = () => {
            const images = [
              "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2067&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop"
            ];
            return images[index % images.length];
          };
          
          return {
            id: index + 1,
            title: article.title || "Title not available",
            image: article.image || getRandomLifestyleImage(),
            date: new Date(article.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }),
            time: new Date(article.publishedAt).toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit'
            }),
            author: article.source?.name || "Lifestyle Desk",
            category: category,
            lifestyleType: lifestyleType,
            excerpt: article.description?.substring(0, 150) + "..." || "Read full article...",
            url: article.url,
            isBangladesh: isBangladesh,
            readTime: readTime,
            likes: Math.floor(50 + Math.random() * 500),
            comments: Math.floor(10 + Math.random() * 100)
          };
        });
        
        setNews(formattedNews);
      } else {
        setNews(getDemoLifestyleNews());
      }
    } catch (error) {
      console.error("Error fetching lifestyle news:", error);
      setNews(getDemoLifestyleNews());
    } finally {
      setLoading(false);
      setLastUpdated(new Date());
    }
  };

  // ---------- Demo Lifestyle News (shown if API fails) ----------
  const getDemoLifestyleNews = () => {
    return [
      {
        id: 1,
        title: "How to Get the Most Out of Your Dry Shampoo",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2070&auto=format&fit=crop",
        date: "February 19, 2026",
        time: "10:30 AM",
        author: "Sarah Johnson",
        category: "Beauty",
        lifestyleType: "Beauty",
        excerpt: "If you're using a loose dry shampoo powder, apply to your roots with a fluffy makeup brush to avoid white splotches of powder.",
        readTime: 4,
        likes: 234,
        comments: 45
      },
      {
        id: 2,
        title: "Why It's Normal for Your Weight to Fluctuate",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
        date: "February 18, 2026",
        time: "11:45 AM",
        author: "Dr. Michael Chen",
        category: "Health",
        lifestyleType: "Health",
        excerpt: "Understanding the natural daily and weekly fluctuations in body weight can help you maintain a healthy relationship with fitness.",
        readTime: 6,
        likes: 567,
        comments: 89
      },
      {
        id: 3,
        title: "10 Morning Routines of Successful People",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop",
        date: "February 17, 2026",
        time: "09:15 AM",
        author: "David Kim",
        category: "Productivity",
        lifestyleType: "Productivity",
        excerpt: "Start your day right with these proven morning routines from industry leaders and productivity experts.",
        readTime: 7,
        likes: 890,
        comments: 123
      },
      {
        id: 4,
        title: "Minimalist Living: A Beginner's Guide",
        image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2067&auto=format&fit=crop",
        date: "February 16, 2026",
        time: "02:20 PM",
        author: "Emma Watson",
        category: "Minimalism",
        lifestyleType: "Minimalism",
        excerpt: "Learn how to declutter your life and focus on what truly matters with these minimalist living principles.",
        readTime: 5,
        likes: 678,
        comments: 92
      },
      {
        id: 5,
        title: "Mental Health Tips for Busy Professionals",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop",
        date: "February 15, 2026",
        time: "04:50 PM",
        author: "Dr. Sarah Johnson",
        category: "Wellness",
        lifestyleType: "Wellness",
        excerpt: "Maintaining good mental health is crucial for success. Here are practical tips for busy professionals.",
        readTime: 8,
        likes: 945,
        comments: 156
      },
      {
        id: 6,
        title: "The Art of Digital Detox",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
        date: "February 14, 2026",
        time: "12:30 PM",
        author: "Michael Chen",
        category: "Digital Detox",
        lifestyleType: "Digital Detox",
        excerpt: "Disconnect to reconnect. Learn how a digital detox can improve your relationships and overall well-being.",
        readTime: 6,
        likes: 756,
        comments: 134
      },
      {
        id: 7,
        title: "Yoga & Meditation Workshop in Dhaka",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2022&auto=format&fit=crop",
        date: "February 13, 2026",
        time: "10:00 AM",
        author: "Lifestyle Team",
        category: "Wellness",
        lifestyleType: "Wellness",
        excerpt: "A yoga and meditation workshop is going to be held in Dhaka next week. Participate and stay healthy.",
        isBangladesh: true,
        readTime: 3,
        likes: 234,
        comments: 45
      },
      {
        id: 8,
        title: "Fitness Tips for Bangladeshis",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
        date: "February 12, 2026",
        time: "03:45 PM",
        author: "Fitness Expert",
        category: "Fitness",
        lifestyleType: "Fitness",
        excerpt: "Fitness tips according to Bangladesh's weather and food habits. Stay healthy the easy way.",
        isBangladesh: true,
        readTime: 5,
        likes: 567,
        comments: 89
      }
    ];
  };

  // ---------- Auto Update ----------
  useEffect(() => {
    fetchLifestyleNews();
    
    const interval = setInterval(() => {
      console.log("Auto-updating lifestyle news...");
      fetchLifestyleNews();
    }, 600000);
    
    return () => clearInterval(interval);
  }, []);

  // ---------- Category Filter ----------
  const categories = [
    { id: "all", name: "All News", count: news.length },
    { id: "fitness", name: "Fitness", count: news.filter(n => n.category === "Fitness").length },
    { id: "health", name: "Health", count: news.filter(n => n.category === "Health").length },
    { id: "beauty", name: "Beauty", count: news.filter(n => n.category === "Beauty").length },
    { id: "wellness", name: "Wellness", count: news.filter(n => n.category === "Wellness").length },
    { id: "productivity", name: "Productivity", count: news.filter(n => n.category === "Productivity").length },
    { id: "bangladesh", name: "Bangladesh", count: news.filter(n => n.isBangladesh).length }
  ];

  const filteredPosts = activeCategory === "all" 
    ? news 
    : activeCategory === "bangladesh"
      ? news.filter(n => n.isBangladesh)
      : activeCategory === "fitness"
        ? news.filter(n => n.category === "Fitness")
        : activeCategory === "health"
          ? news.filter(n => n.category === "Health")
          : activeCategory === "beauty"
            ? news.filter(n => n.category === "Beauty")
            : activeCategory === "wellness"
              ? news.filter(n => n.category === "Wellness")
              : activeCategory === "productivity"
                ? news.filter(n => n.category === "Productivity")
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

  const featuredCategories = [
    { name: "Healthy Eating", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop", count: news.filter(n => n.category === "Health" || n.category === "Wellness").length },
    { name: "Fitness", image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop", count: news.filter(n => n.category === "Fitness").length },
    { name: "Wellness", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2022&auto=format&fit=crop", count: news.filter(n => n.category === "Wellness").length }
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-black">Lifestyle</h1>
              <p className="text-gray-600 mt-1">Health, fitness, beauty, and wellness tips</p>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
              <div className="text-lg font-semibold text-gray-800">{today}</div>
              <div className="text-sm text-gray-500">Last updated: {currentTime}</div>
            </div>
          </div>
          <div className="h-1 w-32 bg-green-600"></div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-10">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-green-600 border-t-transparent"></div>
            <p className="mt-2 text-gray-600">Loading lifestyle news...</p>
          </div>
        )}

        {/* Featured Categories */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {featuredCategories.map((cat, index) => (
              <div key={index} className="relative h-40 rounded-xl overflow-hidden group cursor-pointer">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-white text-xl font-bold block">{cat.name}</span>
                    <span className="text-green-300 text-sm">{cat.count} articles</span>
                  </div>
                </div>
              </div>
            ))}
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
                    ? 'bg-green-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-green-100'
                }`}
              >
                {category.name}
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeCategory === category.id 
                    ? 'bg-white text-green-600' 
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
              <div className="text-xl font-bold text-green-600">
                {Math.floor(news.reduce((acc, item) => acc + item.likes, 0) / news.length)}
              </div>
              <div className="text-xs text-gray-500">Avg. Likes</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <div className="text-xl font-bold text-green-600">
                {Math.floor(news.reduce((acc, item) => acc + item.readTime, 0) / news.length)} min
              </div>
              <div className="text-xs text-gray-500">Avg. Read Time</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <div className="text-xl font-bold text-green-600">{news.filter(n => n.isBangladesh).length}</div>
              <div className="text-xs text-gray-500">Bangladesh</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <div className="text-xl font-bold text-green-600">{news.length}</div>
              <div className="text-xs text-gray-500">Total</div>
            </div>
          </div>
        )}

        {/* News Grid */}
        {!loading && (
          <>
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl shadow">
                <p className="text-gray-500 text-lg">No lifestyle news found</p>
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
                          e.target.src = "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2070&auto=format&fit=crop";
                        }}
                      />
                      {post.isBangladesh && (
                        <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          🇧🇩 Bangladesh
                        </span>
                      )}
                      <span className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {post.lifestyleType}
                      </span>
                    </div>
                    
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.time}</span>
                        <span>•</span>
                        <span>{post.readTime} min read</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-black mb-2 hover:text-green-600 cursor-pointer leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      {/* Engagement Stats */}
                      <div className="flex items-center gap-3 mb-3 text-xs">
                        <span className="text-pink-600">❤️ {post.likes}</span>
                        <span className="text-blue-600">💬 {post.comments}</span>
                      </div>
                      
                      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                        <span className="text-xs text-gray-500">{post.author}</span>
                        <Link
                          to={`/news/lifestyle/${post.id}`}
                          className="text-green-600 hover:text-green-700 text-sm font-semibold flex items-center gap-1"
                        >
                          Read More
                          <span className="text-lg">→</span>
                        </Link>
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
                  className="bg-green-600 text-white hover:bg-green-700 px-8 py-3 rounded-full font-bold transition shadow-md"
                >
                  Load More ({filteredPosts.length - visiblePosts})
                </button>
              </div>
            )}
          </>
        )}

        {/* Wellness Tip of the Day */}
        {!loading && news.length > 0 && (
          <div className="mt-8 bg-gradient-to-r from-green-500 to-green-700 rounded-2xl p-6 text-white">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🌿</span>
              <h3 className="text-xl font-bold">Wellness Tip of the Day</h3>
            </div>
            <p className="text-sm opacity-90 mb-3">
              Meditate for 10 minutes every day. It will reduce your stress and increase focus.
              Drink plenty of water and sleep 7-8 hours daily.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lifestyle;