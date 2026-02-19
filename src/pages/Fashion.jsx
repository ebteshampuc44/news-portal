import React, { useState, useEffect } from "react";
import axios from "axios";

const Fashion = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [activeCategory, setActiveCategory] = useState("all");
  const [visiblePosts, setVisiblePosts] = useState(6);

  // ---------- আপনার GNews API Key এখানে বসান ----------
  const API_KEY = "df43bba9778a35b8cc21a6106da959a9"; // উদাহরণ: "8a7f6e5d4c3b2a1f9e8d7c6b5a4f3e2d1c"

  // ---------- ফ্যাশন নিউজ ফেচ করার ফাংশন ----------
  const fetchFashionNews = async () => {
    setLoading(true);
    try {
      // GNews API থেকে ফ্যাশন সংক্রান্ত নিউজ আনার সঠিক উপায়
      // ফ্যাশন সম্পর্কিত কীওয়ার্ড: fashion, style, clothing, designer, brand, trend
      const response = await axios.get(
        `https://gnews.io/api/v4/search?q=fashion style clothing designer brand trend&lang=en&country=us&max=20&apikey=${API_KEY}`
      );
      
      const data = response.data;
      
      if (data.articles && data.articles.length > 0) {
        // API ডাটাকে আমাদের ফরম্যাটে কনভার্ট করা
        const formattedNews = data.articles.map((article, index) => {
          // ক্যাটাগরি ডিটেক্ট করা
          const title = article.title?.toLowerCase() || "";
          const description = article.description?.toLowerCase() || "";
          
          let category = "আন্তর্জাতিক ফ্যাশন";
          let fashionType = "অন্যান্য";
          let season = "সারা বছর";
          
          // ফ্যাশনের ধরন ডিটেক্ট করা
          if (title.includes("winter") || description.includes("winter") || 
              title.includes("শীত") || description.includes("শীত")) {
            season = "Winter";
          } else if (title.includes("summer") || description.includes("summer") || 
                     title.includes("গ্রীষ্ম") || description.includes("গ্রীষ্ম")) {
            season = "Summer";
          } else if (title.includes("spring") || description.includes("spring") || 
                     title.includes("বসন্ত") || description.includes("বসন্ত")) {
            season = "Spring";
          } else if (title.includes("fall") || description.includes("fall") || 
                     title.includes("autumn") || description.includes("শরৎ")) {
            season = "Fall/Autumn";
          }
          
          // নির্দিষ্ট ফ্যাশন ক্যাটাগরি
          if (title.includes("accessor") || description.includes("accessor") || 
              title.includes("জুয়েলারি") || title.includes("bag")) {
            fashionType = "Accessories";
          } else if (title.includes("dress") || description.includes("dress") || 
                     title.includes("পোশাক") || title.includes("গাউন")) {
            fashionType = "Dresses";
          } else if (title.includes("shoe") || description.includes("shoe") || 
                     title.includes("footwear") || title.includes("জুতা")) {
            fashionType = "Footwear";
          } else if (title.includes("street") || description.includes("street style") || 
                     title.includes("স্ট্রিট")) {
            fashionType = "Street Style";
          } else if (title.includes("sustainable") || description.includes("eco") || 
                     title.includes("টেকসই")) {
            fashionType = "Sustainable";
          } else if (title.includes("week") || description.includes("fashion week") || 
                     title.includes("ফ্যাশন উইক")) {
            fashionType = "Fashion Week";
          }
          
          // ডিজাইনার চেক
          const isDesigner = title.includes("designer") || description.includes("designer") ||
                            title.includes("brand") || description.includes("brand");
          
          // ট্রেন্ড চেক
          const isTrend = title.includes("trend") || description.includes("trend") ||
                         title.includes("what's in") || description.includes("what's out");
          
          // র্যান্ডম ইমেজ জেনারেট করা যদি API ইমেজ না দেয়
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
            title: article.title || "শিরোনাম পাওয়া যায়নি",
            image: article.image || getRandomFashionImage(),
            date: new Date(article.publishedAt).toLocaleDateString('bn-BD', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }),
            time: new Date(article.publishedAt).toLocaleTimeString('bn-BD', {
              hour: '2-digit',
              minute: '2-digit'
            }),
            author: article.source?.name || "ফ্যাশন ডেস্ক",
            category: category,
            fashionType: fashionType,
            season: season,
            excerpt: article.description?.substring(0, 150) + "..." || "বিস্তারিত খবর পড়ুন...",
            url: article.url,
            isDesigner: isDesigner,
            isTrend: isTrend,
            // রেটিং জেনারেট করা (র্যান্ডম)
            rating: (3.5 + Math.random() * 1.5).toFixed(1),
            likes: Math.floor(100 + Math.random() * 900)
          };
        });
        
        setNews(formattedNews);
      } else {
        // API থেকে ডাটা না এলে ডেমো ফ্যাশন নিউজ দেখাও
        setNews(getDemoFashionNews());
      }
    } catch (error) {
      console.error("ফ্যাশন নিউজ ফেচ করতে সমস্যা:", error);
      setNews(getDemoFashionNews());
    } finally {
      setLoading(false);
      setLastUpdated(new Date());
    }
  };

  // ---------- ডেমো ফ্যাশন নিউজ (API কাজ না করলে দেখাবে) ----------
  const getDemoFashionNews = () => {
    return [
      {
        id: 1,
        title: "Sheath Yourself in These Cozy-Chic Sweater Dresses",
        image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1887&auto=format&fit=crop",
        date: "১৯ ফেব্রুয়ারি ২০২৬",
        time: "১০:৩০",
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
        date: "১৮ ফেব্রুয়ারি ২০২৬",
        time: "১১:৪৫",
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
        date: "১৭ ফেব্রুয়ারি ২০২৬",
        time: "১৪:২০",
        author: "Victoria Anderson",
        fashionType: "Sustainable",
        season: "সারা বছর",
        excerpt: "Eco-friendly doesn't mean compromising on style. Discover these sustainable fashion brands making a difference.",
        rating: "4.9",
        likes: 1560
      },
      {
        id: 4,
        title: "Accessorizing 101: The Complete Guide",
        image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=1965&auto=format&fit=crop",
        date: "১৬ ফেব্রুয়ারি ২০২৬",
        time: "০৯:১৫",
        author: "Michael Chen",
        fashionType: "Accessories",
        season: "সারা বছর",
        excerpt: "Learn how to elevate any outfit with the right accessories. From statement jewelry to the perfect bag.",
        rating: "4.6",
        likes: 830
      },
      {
        id: 5,
        title: "Street Style Looks from Paris Fashion Week",
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1887&auto=format&fit=crop",
        date: "১৫ ফেব্রুয়ারি ২০২৬",
        time: "১৬:৫০",
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
        date: "১৪ ফেব্রুয়ারি ২০২৬",
        time: "১২:৩০",
        author: "Sarah Johnson",
        fashionType: "Wardrobe",
        season: "সারা বছর",
        excerpt: "Simplify your morning routine with these essential pieces that mix and match perfectly.",
        rating: "4.9",
        likes: 3450
      },
      {
        id: 7,
        title: "ঢাকায় ফ্যাশন শো: দেশি ডিজাইনারদের জমকালো আয়োজন",
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1888&auto=format&fit=crop",
        date: "১৩ ফেব্রুয়ারি ২০২৬",
        time: "১০:০০",
        author: "বাংলা ফ্যাশন ডেস্ক",
        fashionType: "Fashion Week",
        season: "Spring",
        excerpt: "ঢাকায় অনুষ্ঠিত হলো বাংলা ফ্যাশন উইক ২০২৬। দেশি ডিজাইনারদের নতুন কালেকশন প্রদর্শিত হয়।",
        isDesigner: true,
        rating: "4.7",
        likes: 890
      },
      {
        id: 8,
        title: "ঈদ কালেকশন ২০২৬: ডিজাইনারদের নতুন আয়োজন",
        image: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop",
        date: "১২ ফেব্রুয়ারি ২০২৬",
        time: "১৫:৪৫",
        author: "ফ্যাশন রিপোর্টার",
        fashionType: "Designer",
        season: "Summer",
        excerpt: "ঈদুল ফিতর উপলক্ষে দেশের শীর্ষ ফ্যাশন ডিজাইনারদের নতুন কালেকশন বাজারে আসছে।",
        isDesigner: true,
        rating: "4.8",
        likes: 1200
      }
    ];
  };

  // ---------- অটোমেটিক আপডেট ----------
  useEffect(() => {
    fetchFashionNews(); // প্রথমবার লোড
    
    // প্রতি ১০ মিনিট পর পর অটো আপডেট (600000 ms)
    const interval = setInterval(() => {
      console.log("ফ্যাশন নিউজ অটোমেটিক আপডেট হচ্ছে...");
      fetchFashionNews();
    }, 600000);
    
    return () => clearInterval(interval);
  }, []);

  // ---------- ক্যাটাগরি ফিল্টার ----------
  const categories = [
    { id: "all", name: "সব খবর", count: news.length },
    { id: "trends", name: "ট্রেন্ডস", count: news.filter(n => n.isTrend).length },
    { id: "designer", name: "ডিজাইনার", count: news.filter(n => n.isDesigner).length },
    { id: "dresses", name: "পোশাক", count: news.filter(n => n.fashionType === "Dresses").length },
    { id: "accessories", name: "এক্সেসরিজ", count: news.filter(n => n.fashionType === "Accessories").length },
    { id: "street", name: "স্ট্রিট স্টাইল", count: news.filter(n => n.fashionType === "Street Style").length },
    { id: "sustainable", name: "সাসটেইনেবল", count: news.filter(n => n.fashionType === "Sustainable").length }
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
              : activeCategory === "sustainable"
                ? news.filter(n => n.fashionType === "Sustainable")
                : news;

  const handleLoadMore = () => {
    setVisiblePosts(prev => Math.min(prev + 6, filteredPosts.length));
  };

  // Current date/time for display
  const today = lastUpdated.toLocaleDateString('bn-BD', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const currentTime = lastUpdated.toLocaleTimeString('bn-BD', {
    hour: '2-digit',
    minute: '2-digit'
  });

  // Editor's Pick (সবচেয়ে বেশি লাইক পাওয়া পোস্ট)
  const editorsPick = news.length > 0 ? 
    news.sort((a, b) => b.likes - a.likes)[0] : null;

  return (
    <div className="bg-gray-100 min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-black">ফ্যাশন ওয়ার্ল্ড</h1>
              <p className="text-gray-600 mt-1">ট্রেন্ডস, ডিজাইনার ও ফ্যাশনের সর্বশেষ খবর</p>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
              <div className="text-lg font-semibold text-gray-800">{today}</div>
              <div className="text-sm text-gray-500">সর্বশেষ আপডেট: {currentTime}</div>
            </div>
          </div>
          <div className="h-1 w-32 bg-purple-600"></div>
        </div>

        {/* Auto Update Status */}
        {/* <div className="bg-green-50 border border-green-200 rounded-lg p-2 mb-4 text-center text-sm text-green-700">
          ⏰ অটো-আপডেট: প্রতি ১০ মিনিট পর নতুন ফ্যাশন খবর আসবে
        </div> */}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-10">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-purple-600 border-t-transparent"></div>
            <p className="mt-2 text-gray-600">ফ্যাশন খবর আনা হচ্ছে...</p>
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
              <div className="text-xs text-gray-500">ট্রেন্ডিং</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <div className="text-xl font-bold text-purple-600">{news.filter(n => n.isDesigner).length}</div>
              <div className="text-xs text-gray-500">ডিজাইনার</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <div className="text-xl font-bold text-purple-600">
                {news.filter(n => n.season === "Winter" || n.season === "Summer").length}
              </div>
              <div className="text-xs text-gray-500">সিজনাল</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <div className="text-xl font-bold text-purple-600">{news.length}</div>
              <div className="text-xs text-gray-500">মোট খবর</div>
            </div>
          </div>
        )}

        {/* News Grid */}
        {!loading && (
          <>
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl shadow">
                <p className="text-gray-500 text-lg">কোন ফ্যাশন খবর পাওয়া যায়নি</p>
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
                          🔥 ট্রেন্ডিং
                        </span>
                      )}
                      {post.isDesigner && (
                        <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          👨‍🎨 ডিজাইনার
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
                        {post.season && post.season !== "সারা বছর" && (
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
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-700 text-sm font-semibold flex items-center gap-1"
                        >
                          বিস্তারিত
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
                  className="bg-purple-600 text-white hover:bg-purple-700 px-8 py-3 rounded-full font-bold transition shadow-md"
                >
                  আরও খবর দেখুন ({filteredPosts.length - visiblePosts})
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