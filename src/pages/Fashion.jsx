import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Fashion = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [activeCategory, setActiveCategory] = useState("all");
  const [visiblePosts, setVisiblePosts] = useState(6);

  // ---------- Your GNews API Key Here ----------
  const API_KEY = "df43bba9778a35b8cc21a6106da959a9";

  // ---------- Fetch Fashion News Function ----------
  const fetchFashionNews = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://gnews.io/api/v4/search?q=fashion style clothing designer brand trend&lang=en&country=us&max=20&apikey=${API_KEY}`
      );
      
      const data = response.data;
      
      if (data.articles && data.articles.length > 0) {
        const formattedNews = data.articles.map((article, index) => {
          const title = article.title?.toLowerCase() || "";
          const description = article.description?.toLowerCase() || "";
          
          let fashionType = "Other";
          let season = "All Year";
          
          // Detect season
          if (title.includes("winter") || description.includes("winter")) {
            season = "Winter";
          } else if (title.includes("summer") || description.includes("summer")) {
            season = "Summer";
          } else if (title.includes("spring") || description.includes("spring")) {
            season = "Spring";
          } else if (title.includes("fall") || description.includes("fall") || 
                     title.includes("autumn")) {
            season = "Fall/Autumn";
          }
          
          // Detect fashion type
          if (title.includes("accessor") || description.includes("accessor") || 
              title.includes("jewelry") || title.includes("bag")) {
            fashionType = "Accessories";
          } else if (title.includes("dress") || description.includes("dress")) {
            fashionType = "Dresses";
          } else if (title.includes("shoe") || description.includes("shoe") || 
                     title.includes("footwear")) {
            fashionType = "Footwear";
          } else if (title.includes("street") || description.includes("street style")) {
            fashionType = "Street Style";
          } else if (title.includes("sustainable") || description.includes("eco")) {
            fashionType = "Sustainable";
          } else if (title.includes("week") || description.includes("fashion week")) {
            fashionType = "Fashion Week";
          }
          
          const isDesigner = title.includes("designer") || description.includes("designer") ||
                            title.includes("brand") || description.includes("brand");
          
          const isTrend = title.includes("trend") || description.includes("trend");
          
          const getRandomFashionImage = () => {
            const images = [
              "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1887&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1887&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=1965&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1887&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
            ];
            return images[index % images.length];
          };
          
          return {
            id: index + 1,
            title: article.title || "Title not available",
            image: article.image || getRandomFashionImage(),
            date: new Date(article.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }),
            time: new Date(article.publishedAt).toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit'
            }),
            author: article.source?.name || "Fashion Desk",
            fashionType: fashionType,
            season: season,
            excerpt: article.description?.substring(0, 150) + "..." || "Read full article...",
            url: article.url,
            isDesigner: isDesigner,
            isTrend: isTrend,
            rating: (3.5 + Math.random() * 1.5).toFixed(1),
            likes: Math.floor(100 + Math.random() * 900)
          };
        });
        
        setNews(formattedNews);
      } else {
        setNews(getDemoFashionNews());
      }
    } catch (error) {
      console.error("Error fetching fashion news:", error);
      setNews(getDemoFashionNews());
    } finally {
      setLoading(false);
      setLastUpdated(new Date());
    }
  };

  // ---------- Demo Fashion News (shown if API fails) ----------
  const getDemoFashionNews = () => {
    return [
      {
        id: 1,
        title: "Sheath Yourself in These Cozy-Chic Sweater Dresses",
        image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1887&auto=format&fit=crop",
        date: "February 19, 2026",
        time: "10:30 AM",
        author: "Emma Roberts",
        fashionType: "Dresses",
        season: "Winter",
        excerpt: "Solid tones are by far the most versatile for dressing up or down, while patterns like a bold stripe make a statement no matter the venue.",
        rating: "4.8",
        likes: 1250
      },
      {
        id: 2,
        title: "Winter Fashion Trends 2024: What's In and What's Out",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
        date: "February 18, 2026",
        time: "11:45 AM",
        author: "Sophie Turner",
        fashionType: "Trends",
        season: "Winter",
        excerpt: "From chunky knits to leather everything, here's your complete guide to staying stylish this winter season.",
        isTrend: true,
        rating: "4.7",
        likes: 980
      },
      {
        id: 3,
        title: "Sustainable Fashion: Brands to Watch",
        image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1887&auto=format&fit=crop",
        date: "February 17, 2026",
        time: "02:20 PM",
        author: "Victoria Anderson",
        fashionType: "Sustainable",
        season: "All Year",
        excerpt: "Eco-friendly doesn't mean compromising on style. Discover these sustainable fashion brands making a difference.",
        rating: "4.9",
        likes: 1560
      },
      {
        id: 4,
        title: "Accessorizing 101: The Complete Guide",
        image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=1965&auto=format&fit=crop",
        date: "February 16, 2026",
        time: "09:15 AM",
        author: "Michael Chen",
        fashionType: "Accessories",
        season: "All Year",
        excerpt: "Learn how to elevate any outfit with the right accessories. From statement jewelry to the perfect bag.",
        rating: "4.6",
        likes: 830
      },
      {
        id: 5,
        title: "Street Style Looks from Paris Fashion Week",
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1887&auto=format&fit=crop",
        date: "February 15, 2026",
        time: "04:50 PM",
        author: "David Kim",
        fashionType: "Street Style",
        season: "Spring",
        excerpt: "The best street style moments from Paris Fashion Week that you can recreate at home.",
        rating: "4.8",
        likes: 2100
      },
      {
        id: 6,
        title: "How to Build a Capsule Wardrobe",
        image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=2070&auto=format&fit=crop",
        date: "February 14, 2026",
        time: "12:30 PM",
        author: "Sarah Johnson",
        fashionType: "Wardrobe",
        season: "All Year",
        excerpt: "Simplify your morning routine with these essential pieces that mix and match perfectly.",
        rating: "4.9",
        likes: 3450
      }
    ];
  };

  // ---------- Auto Update ----------
  useEffect(() => {
    fetchFashionNews();
    
    const interval = setInterval(() => {
      console.log("Auto-updating fashion news...");
      fetchFashionNews();
    }, 600000);
    
    return () => clearInterval(interval);
  }, []);

  // ---------- Category Filter ----------
  const categories = [
    { id: "all", name: "All News", count: news.length },
    { id: "trends", name: "Trends", count: news.filter(n => n.isTrend).length },
    { id: "designer", name: "Designers", count: news.filter(n => n.isDesigner).length },
    { id: "dresses", name: "Dresses", count: news.filter(n => n.fashionType === "Dresses").length },
    { id: "accessories", name: "Accessories", count: news.filter(n => n.fashionType === "Accessories").length },
    { id: "street", name: "Street Style", count: news.filter(n => n.fashionType === "Street Style").length }
  ];

  const filteredPosts = activeCategory === "all" 
    ? news 
    : activeCategory === "trends"
      ? news.filter(n => n.isTrend)
      : activeCategory === "designer"
        ? news.filter(n => n.isDesigner)
        : activeCategory === "dresses"
          ? news.filter(n => n.fashionType === "Dresses")
          : activeCategory === "accessories"
            ? news.filter(n => n.fashionType === "Accessories")
            : activeCategory === "street"
              ? news.filter(n => n.fashionType === "Street Style")
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

  const editorsPick = news.length > 0 ? 
    news.sort((a, b) => b.likes - a.likes)[0] : null;

  return (
    <div className="bg-gray-100 min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-black">Fashion World</h1>
              <p className="text-gray-600 mt-1">Latest trends, designers, and fashion news</p>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
              <div className="text-lg font-semibold text-gray-800">{today}</div>
              <div className="text-sm text-gray-500">Last updated: {currentTime}</div>
            </div>
          </div>
          <div className="h-1 w-32 bg-purple-600"></div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-10">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-purple-600 border-t-transparent"></div>
            <p className="mt-2 text-gray-600">Loading fashion news...</p>
          </div>
        )}

        {/* Hero Section - Editor's Pick */}
        {!loading && editorsPick && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Left Big Post - Editor's Pick */}
            <div className="relative h-[350px] lg:h-[400px] rounded-2xl overflow-hidden group">
              <img
                src={editorsPick.image}
                alt={editorsPick.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white max-w-md">
                <div className="flex gap-2 mb-2">
                  <span className="bg-purple-600 text-white px-3 py-1 text-xs font-bold rounded-full">
                    Editor's Pick
                  </span>
                  {editorsPick.season && (
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 text-xs font-bold rounded-full">
                      {editorsPick.season}
                    </span>
                  )}
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-2">{editorsPick.title}</h2>
                <p className="text-gray-200 text-sm mb-3">{editorsPick.excerpt}</p>
                <div className="flex items-center gap-3">
                  <span className="text-sm">❤️ {editorsPick.likes} likes</span>
                  <span className="text-sm">⭐ {editorsPick.rating}</span>
                </div>
              </div>
            </div>

            {/* Right Grid - 4 Small Images */}
            <div className="grid grid-cols-2 gap-3">
              {news.slice(1, 5).map((item, idx) => (
                <div key={idx} className="relative h-[170px] lg:h-[195px] rounded-xl overflow-hidden group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-xs text-white bg-purple-600 px-2 py-0.5 rounded-full">
                      {item.fashionType}
                    </span>
                  </div>
                </div>
              ))}
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
                    ? 'bg-purple-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-purple-100'
                }`}
              >
                {category.name}
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeCategory === category.id 
                    ? 'bg-white text-purple-600' 
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
              <div className="text-xl font-bold text-purple-600">{news.filter(n => n.isTrend).length}</div>
              <div className="text-xs text-gray-500">Trending</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <div className="text-xl font-bold text-purple-600">{news.filter(n => n.isDesigner).length}</div>
              <div className="text-xs text-gray-500">Designers</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <div className="text-xl font-bold text-purple-600">
                {news.filter(n => n.season === "Winter" || n.season === "Summer").length}
              </div>
              <div className="text-xs text-gray-500">Seasonal</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <div className="text-xl font-bold text-purple-600">{news.length}</div>
              <div className="text-xs text-gray-500">Total</div>
            </div>
          </div>
        )}

        {/* News Grid */}
        {!loading && (
          <>
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl shadow">
                <p className="text-gray-500 text-lg">No fashion news found</p>
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
                          e.target.src = "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1887&auto=format&fit=crop";
                        }}
                      />
                      {post.isTrend && (
                        <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          🔥 Trending
                        </span>
                      )}
                      {post.isDesigner && (
                        <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          👨‍🎨 Designer
                        </span>
                      )}
                      <span className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {post.fashionType}
                      </span>
                    </div>
                    
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.time}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-black mb-2 hover:text-purple-600 cursor-pointer leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      {/* Fashion Details */}
                      <div className="flex flex-wrap gap-2 mb-3 text-xs">
                        {post.season && post.season !== "All Year" && (
                          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                            {post.season}
                          </span>
                        )}
                        <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full flex items-center gap-1">
                          ⭐ {post.rating}
                        </span>
                        <span className="bg-pink-100 text-pink-700 px-2 py-1 rounded-full">
                          ❤️ {post.likes}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                        <span className="text-xs text-gray-500">{post.author}</span>
                        <Link
                          to={`/news/fashion/${post.id}`}
                          className="text-purple-600 hover:text-purple-700 text-sm font-semibold flex items-center gap-1"
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
                  className="bg-purple-600 text-white hover:bg-purple-700 px-8 py-3 rounded-full font-bold transition shadow-md"
                >
                  Load More ({filteredPosts.length - visiblePosts})
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Fashion;