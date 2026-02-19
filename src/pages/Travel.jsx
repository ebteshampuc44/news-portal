import React, { useState, useEffect } from "react";
import axios from "axios";

const Travel = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [activeCategory, setActiveCategory] = useState("all");
  const [visiblePosts, setVisiblePosts] = useState(6);

  // ---------- আপনার GNews API Key এখানে বসান ----------
  const API_KEY = "df43bba9778a35b8cc21a6106da959a9"; // উদাহরণ: "8a7f6e5d4c3b2a1f9e8d7c6b5a4f3e2d1c"

  // ---------- ট্রাভেল নিউজ ফেচ করার ফাংশন ----------
  const fetchTravelNews = async () => {
    setLoading(true);
    try {
      // GNews API থেকে ট্রাভেল সংক্রান্ত নিউজ আনার সঠিক উপায়
      // ট্রাভেল সম্পর্কিত কীওয়ার্ড: travel, tourism, vacation, holiday, destination, hotel
      const response = await axios.get(
        `https://gnews.io/api/v4/search?q=travel tourism vacation holiday destination hotel&lang=en&country=us&max=20&apikey=${API_KEY}`
      );
      
      const data = response.data;
      
      if (data.articles && data.articles.length > 0) {
        // API ডাটাকে আমাদের ফরম্যাটে কনভার্ট করা
        const formattedNews = data.articles.map((article, index) => {
          // ক্যাটাগরি ডিটেক্ট করা
          const title = article.title?.toLowerCase() || "";
          const description = article.description?.toLowerCase() || "";
          
          let travelType = "অন্যান্য";
          let destination = "আন্তর্জাতিক";
          let budget = "মাঝারি";
          
          // নির্দিষ্ট ট্রাভেল ক্যাটাগরি ডিটেক্ট করা
          if (title.includes("beach") || description.includes("beach") || 
              title.includes("coast") || description.includes("ocean") ||
              title.includes("সমুদ্র") || title.includes("সৈকত")) {
            travelType = "Beach";
          } else if (title.includes("mountain") || description.includes("mountain") || 
                     title.includes("hiking") || description.includes("trekking") ||
                     title.includes("পাহাড়") || title.includes("পর্বত")) {
            travelType = "Mountain";
          } else if (title.includes("city") || description.includes("city") || 
                     title.includes("urban") || description.includes("metro") ||
                     title.includes("শহর") || title.includes("মেট্রো")) {
            travelType = "City Break";
          } else if (title.includes("adventure") || description.includes("adventure") || 
                     title.includes("extreme") || description.includes("safari") ||
                     title.includes("অ্যাডভেঞ্চার") || title.includes("সাহসিক")) {
            travelType = "Adventure";
          } else if (title.includes("luxury") || description.includes("luxury") || 
                     title.includes("resort") || description.includes("5-star") ||
                     title.includes("বিলাসিতা") || title.includes("রিসোর্ট")) {
            travelType = "Luxury";
          } else if (title.includes("budget") || description.includes("budget") || 
                     title.includes("cheap") || description.includes("affordable") ||
                     title.includes("বাজেট") || title.includes("সস্তা")) {
            travelType = "Budget";
            budget = "সাশ্রয়ী";
          } else if (title.includes("solo") || description.includes("solo") || 
                     title.includes("alone") || description.includes("একা")) {
            travelType = "Solo Travel";
          } else if (title.includes("family") || description.includes("family") || 
                     title.includes("kids") || description.includes("children") ||
                     title.includes("পরিবার") || title.includes("শিশু")) {
            travelType = "Family";
          }
          
          // গন্তব্য ডিটেক্ট করা
          if (title.includes("europe") || description.includes("europe") || 
              title.includes("ইউরোপ")) {
            destination = "Europe";
          } else if (title.includes("asia") || description.includes("asia") || 
                     title.includes("এশিয়া")) {
            destination = "Asia";
          } else if (title.includes("africa") || description.includes("africa") || 
                     title.includes("আফ্রিকা")) {
            destination = "Africa";
          } else if (title.includes("america") || description.includes("america") || 
                     title.includes("আমেরিকা") || title.includes("usa")) {
            destination = "America";
          } else if (title.includes("australia") || description.includes("australia") || 
                     title.includes("অস্ট্রেলিয়া")) {
            destination = "Australia";
          } else if (title.includes("bangladesh") || description.includes("bangladesh") || 
                     title.includes("বাংলাদেশ") || title.includes("dhaka") || 
                     title.includes("কক্সবাজার") || title.includes("সেন্ট মার্টিন")) {
            destination = "বাংলাদেশ";
          } else if (title.includes("india") || description.includes("india") || 
                     title.includes("ভারত") || title.includes("দিল্লি") || 
                     title.includes("গোয়া")) {
            destination = "India";
          } else if (title.includes("thailand") || description.includes("thailand") || 
                     title.includes("থাইল্যান্ড") || title.includes("ব্যাংকক")) {
            destination = "Thailand";
          } else if (title.includes("japan") || description.includes("japan") || 
                     title.includes("জাপান") || title.includes("টোকিও")) {
            destination = "Japan";
          }
          
          // র্যান্ডম ইমেজ জেনারেট করা যদি API ইমেজ না দেয়
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
            title: article.title || "শিরোনাম পাওয়া যায়নি",
            image: article.image || getRandomTravelImage(),
            date: new Date(article.publishedAt).toLocaleDateString('bn-BD', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }),
            time: new Date(article.publishedAt).toLocaleTimeString('bn-BD', {
              hour: '2-digit',
              minute: '2-digit'
            }),
            author: article.source?.name || "ট্রাভেল ডেস্ক",
            travelType: travelType,
            destination: destination,
            budget: budget,
            excerpt: article.description?.substring(0, 150) + "..." || "বিস্তারিত পড়ুন...",
            url: article.url,
            readTime: Math.floor(3 + Math.random() * 8), // ৩-১০ মিনিট
            likes: Math.floor(50 + Math.random() * 500),
            saves: Math.floor(20 + Math.random() * 200)
          };
        });
        
        setNews(formattedNews);
      } else {
        // API থেকে ডাটা না এলে ডেমো ট্রাভেল নিউজ দেখাও
        setNews(getDemoTravelNews());
      }
    } catch (error) {
      console.error("ট্রাভেল নিউজ ফেচ করতে সমস্যা:", error);
      setNews(getDemoTravelNews());
    } finally {
      setLoading(false);
      setLastUpdated(new Date());
    }
  };

  // ---------- ডেমো ট্রাভেল নিউজ (API কাজ না করলে দেখাবে) ----------
  const getDemoTravelNews = () => {
    return [
      {
        id: 1,
        title: "We are a Full-Time Travel Family. How?",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop",
        date: "১৯ ফেব্রুয়ারি ২০২৬",
        time: "১০:৩০",
        author: "Victoria Anderson",
        travelType: "Family",
        destination: "International",
        budget: "মাঝারি",
        excerpt: "Products allow you to create something once and earn revenue while sleeping, sightseeing, or getting a suntan on a beach!",
        readTime: 6,
        likes: 345,
        saves: 89
      },
      {
        id: 2,
        title: "How To Work From-Home While Also Traveling",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop",
        date: "১৮ ফেব্রুয়ারি ২০২৬",
        time: "১১:৪৫",
        author: "Michael Chen",
        travelType: "Digital Nomad",
        destination: "International",
        budget: "মাঝারি",
        excerpt: "Discover the best practices for maintaining productivity while exploring the world. Learn how to balance work and travel effectively.",
        readTime: 8,
        likes: 567,
        saves: 123
      },
      {
        id: 3,
        title: "5 Things We Know About Flying This Summer",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2070&auto=format&fit=crop",
        date: "১৭ ফেব্রুয়ারি ২০২৬",
        time: "০৯:১৫",
        author: "Sarah Johnson",
        travelType: "Travel Tips",
        destination: "International",
        budget: "সাশ্রয়ী",
        excerpt: "Summer travel is back! Here's everything you need to know about flight regulations, baggage policies, and safety measures.",
        readTime: 5,
        likes: 890,
        saves: 234
      },
      {
        id: 4,
        title: "Top 10 Hidden Gems in Europe",
        image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop",
        date: "১৬ ফেব্রুয়ারি ২০২৬",
        time: "১৪:২০",
        author: "David Kim",
        travelType: "Hidden Gems",
        destination: "Europe",
        budget: "সাশ্রয়ী",
        excerpt: "Skip the crowded tourist spots and discover these amazing hidden locations across Europe that offer authentic experiences.",
        readTime: 7,
        likes: 678,
        saves: 156
      },
      {
        id: 5,
        title: "Budget Travel: How to See the World on $50/Day",
        image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2070&auto=format&fit=crop",
        date: "১৫ ফেব্রুয়ারি ২০২৬",
        time: "১৬:৫০",
        author: "Victoria Anderson",
        travelType: "Budget",
        destination: "International",
        budget: "সাশ্রয়ী",
        excerpt: "Traveling doesn't have to break the bank. Learn proven strategies to stretch your travel budget while maximizing experiences.",
        readTime: 6,
        likes: 945,
        saves: 267
      },
      {
        id: 6,
        title: "Solo Travel Guide for Beginners",
        image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?q=80&w=2070&auto=format&fit=crop",
        date: "১৪ ফেব্রুয়ারি ২০২৬",
        time: "১২:৩০",
        author: "Emily Roberts",
        travelType: "Solo Travel",
        destination: "International",
        budget: "মাঝারি",
        excerpt: "Embarking on your first solo journey? Here's everything you need to know about safety, planning, and making the most of it.",
        readTime: 9,
        likes: 756,
        saves: 189
      },
      {
        id: 7,
        title: "কক্সবাজার: বিশ্বের দীর্ঘতম সমুদ্র সৈকত",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop",
        date: "১৩ ফেব্রুয়ারি ২০২৬",
        time: "১০:০০",
        author: "বাংলা ট্রাভেল টিম",
        travelType: "Beach",
        destination: "বাংলাদেশ",
        budget: "সাশ্রয়ী",
        excerpt: "কক্সবাজারের অপরূপ সৌন্দর্য, সমুদ্র সৈকত, পর্যটন স্পট ও থাকার ব্যবস্থা নিয়ে বিস্তারিত গাইড।",
        readTime: 5,
        likes: 234,
        saves: 67
      },
      {
        id: 8,
        title: "সেন্ট মার্টিন দ্বীপ: প্রবাল দ্বীপের অপরূপ সৌন্দর্য",
        image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2031&auto=format&fit=crop",
        date: "১২ ফেব্রুয়ারি ২০২৬",
        time: "১৫:৪৫",
        author: "ট্রাভেল এক্সপার্ট",
        travelType: "Island",
        destination: "বাংলাদেশ",
        budget: "মাঝারি",
        excerpt: "বাংলাদেশের একমাত্র প্রবাল দ্বীপ সেন্ট মার্টিন। কীভাবে যাবেন, কোথায় থাকবেন, কী দেখবেন - সম্পূর্ণ গাইড।",
        readTime: 6,
        likes: 567,
        saves: 145
      },
      {
        id: 9,
        title: "বান্দরবান: পাহাড়ি জনপদে কয়েকদিন",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
        date: "১১ ফেব্রুয়ারি ২০২৬",
        time: "১১:২০",
        author: "অ্যাডভেঞ্চার টিম",
        travelType: "Mountain",
        destination: "বাংলাদেশ",
        budget: "সাশ্রয়ী",
        excerpt: "বান্দরবানের নীলগিরি, চিম্বুক, বগালেক সহ বিভিন্ন পর্যটন স্পট ও ট্রেকিং রুট নিয়ে বিস্তারিত তথ্য।",
        readTime: 7,
        likes: 432,
        saves: 98
      }
    ];
  };

  // ---------- অটোমেটিক আপডেট ----------
  useEffect(() => {
    fetchTravelNews(); // প্রথমবার লোড
    
    // প্রতি ১০ মিনিট পর পর অটো আপডেট (600000 ms)
    const interval = setInterval(() => {
      console.log("ট্রাভেল নিউজ অটোমেটিক আপডেট হচ্ছে...");
      fetchTravelNews();
    }, 600000);
    
    return () => clearInterval(interval);
  }, []);

  // ---------- ক্যাটাগরি ফিল্টার ----------
  const categories = [
    { id: "all", name: "সব খবর", count: news.length },
    { id: "beach", name: "বিচ", count: news.filter(n => n.travelType === "Beach").length },
    { id: "mountain", name: "পাহাড়", count: news.filter(n => n.travelType === "Mountain").length },
    { id: "budget", name: "বাজেট", count: news.filter(n => n.budget === "সাশ্রয়ী").length },
    { id: "solo", name: "একা ভ্রমণ", count: news.filter(n => n.travelType === "Solo Travel").length },
    { id: "family", name: "পরিবার", count: news.filter(n => n.travelType === "Family").length },
    { id: "bangladesh", name: "বাংলাদেশ", count: news.filter(n => n.destination === "বাংলাদেশ").length }
  ];

  const filteredPosts = activeCategory === "all" 
    ? news 
    : activeCategory === "bangladesh"
      ? news.filter(n => n.destination === "বাংলাদেশ")
      : activeCategory === "beach"
        ? news.filter(n => n.travelType === "Beach")
        : activeCategory === "mountain"
          ? news.filter(n => n.travelType === "Mountain")
          : activeCategory === "budget"
            ? news.filter(n => n.budget === "সাশ্রয়ী")
            : activeCategory === "solo"
              ? news.filter(n => n.travelType === "Solo Travel")
              : activeCategory === "family"
                ? news.filter(n => n.travelType === "Family")
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

  // Featured Post (সবচেয়ে জনপ্রিয় পোস্ট)
  const featuredPost = news.length > 0 ? 
    news.sort((a, b) => b.likes - a.likes)[0] : null;

  return (
    <div className="bg-gray-100 min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-black">ট্রাভেল ওয়ার্ল্ড</h1>
              <p className="text-gray-600 mt-1">দেশ-বিদেশের ভ্রমণ গাইড, টিপস ও অভিজ্ঞতা</p>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
              <div className="text-lg font-semibold text-gray-800">{today}</div>
              <div className="text-sm text-gray-500">সর্বশেষ আপডেট: {currentTime}</div>
            </div>
          </div>
          <div className="h-1 w-32 bg-red-600"></div>
        </div>

        {/* Auto Update Status */}
        {/* <div className="bg-green-50 border border-green-200 rounded-lg p-2 mb-4 text-center text-sm text-green-700">
          ⏰ অটো-আপডেট: প্রতি ১০ মিনিট পর নতুন ভ্রমণ খবর আসবে
        </div> */}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-10">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-red-600 border-t-transparent"></div>
            <p className="mt-2 text-gray-600">ভ্রমণের খবর আনা হচ্ছে...</p>
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
                  ফিচার্ড
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
                {news.filter(n => n.budget === "সাশ্রয়ী").length}
              </div>
              <div className="text-xs text-gray-500">বাজেট ট্রিপ</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <div className="text-xl font-bold text-red-600">
                {news.filter(n => n.destination === "বাংলাদেশ").length}
              </div>
              <div className="text-xs text-gray-500">বাংলাদেশ</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <div className="text-xl font-bold text-red-600">
                {news.filter(n => n.travelType === "Beach" || n.travelType === "Mountain").length}
              </div>
              <div className="text-xs text-gray-500">প্রকৃতি</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <div className="text-xl font-bold text-red-600">
                {Math.floor(news.reduce((acc, item) => acc + item.saves, 0) / news.length)}
              </div>
              <div className="text-xs text-gray-500">গড় সেভ</div>
            </div>
          </div>
        )}

        {/* News Grid */}
        {!loading && (
          <>
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl shadow">
                <p className="text-gray-500 text-lg">কোন ভ্রমণ খবর পাওয়া যায়নি</p>
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
                      {post.destination === "বাংলাদেশ" && (
                        <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          🇧🇩 বাংলাদেশ
                        </span>
                      )}
                      {post.budget === "সাশ্রয়ী" && (
                        <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          💰 বাজেট
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
                  className="bg-red-600 text-white hover:bg-red-700 px-8 py-3 rounded-full font-bold transition shadow-md"
                >
                  আরও দেখুন ({filteredPosts.length - visiblePosts})
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
              <h3 className="text-xl font-bold">ভ্রমণ টিপস</h3>
            </div>
            <p className="text-sm opacity-90 mb-3">
              ভ্রমণের আগে সবসময় হোটেল ও ফ্লাইট বুকিংয়ের রিভিউ দেখে নিন। 
              স্থানীয় মুদ্রা সাথে রাখুন এবং ইমার্জেন্সি কন্টাক্ট নম্বর সংরক্ষণ করুন।
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Travel;