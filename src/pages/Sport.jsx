import React, { useState, useEffect } from "react";
import axios from "axios";

const Sport = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [activeCategory, setActiveCategory] = useState("all");
  const [visiblePosts, setVisiblePosts] = useState(9);

  // ---------- আপনার GNews API Key এখানে বসান ----------
  const API_KEY = "df43bba9778a35b8cc21a6106da959a9"; // উদাহরণ: "8a7f6e5d4c3b2a1f9e8d7c6b5a4f3e2d1c"

  // ---------- নিউজ ফেচ করার ফাংশন ----------
  const fetchNews = async () => {
    setLoading(true);
    try {
      // GNews API থেকে স্পোর্টস নিউজ আনা
      const response = await axios.get(
        `https://gnews.io/api/v4/top-headlines?category=sports&lang=en&country=us&max=20&apikey=${API_KEY}`
      );
      
      const data = response.data;
      
      if (data.articles && data.articles.length > 0) {
        // API ডাটাকে আমাদের ফরম্যাটে কনভার্ট করা
        const formattedNews = data.articles.map((article, index) => {
          // ক্যাটাগরি ডিটেক্ট করা
          const title = article.title?.toLowerCase() || "";
          const description = article.description?.toLowerCase() || "";
          
          let category = "অন্যান্য";
          let country = "international";
          
          if (title.includes("cricket") || description.includes("cricket") || 
              title.includes("বিশ্বকাপ") || title.includes("টেস্ট")) {
            category = "ক্রিকেট";
          } else if (title.includes("football") || description.includes("football") || 
                     title.includes("soccer") || title.includes("চ্যাম্পিয়ন্স")) {
            category = "ফুটবল";
          } else if (title.includes("olympic") || description.includes("olympic") || 
                     title.includes("অলিম্পিক")) {
            category = "অলিম্পিক";
          } else if (title.includes("tennis") || description.includes("tennis") || 
                     title.includes("grand slam")) {
            category = "টেনিস";
          } else if (title.includes("basketball") || description.includes("basketball") || 
                     title.includes("nba")) {
            category = "বাস্কেটবল";
          } else if (title.includes("hockey") || description.includes("hockey")) {
            category = "হকি";
          }
          
          // বাংলাদেশ সম্পর্কিত নিউজ চিহ্নিত করা
          if (title.includes("bangladesh") || description.includes("bangladesh") || 
              title.includes("বাংলাদেশ") || description.includes("বাংলাদেশ")) {
            country = "bangladesh";
          }
          
          // র্যান্ডম ইমেজ জেনারেট করা যদি API ইমেজ না দেয়
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
            title: article.title || "শিরোনাম পাওয়া যায়নি",
            image: article.image || getRandomImage(),
            date: new Date(article.publishedAt).toLocaleDateString('bn-BD', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }),
            time: new Date(article.publishedAt).toLocaleTimeString('bn-BD', {
              hour: '2-digit',
              minute: '2-digit'
            }),
            author: article.source?.name || "স্পোর্টস ডেস্ক",
            category: category,
            country: country,
            excerpt: article.description?.substring(0, 150) + "..." || "বিস্তারিত খবর পড়ুন...",
            url: article.url,
            isLive: index < 2 ? true : false, // প্রথম দুইটা নিউজ লাইভ দেখানো
            isBreaking: index === 0 ? true : false // প্রথম নিউজ ব্রেকিং দেখানো
          };
        });
        
        setNews(formattedNews);
      } else {
        // API থেকে ডাটা না এলে ডেমো নিউজ দেখাও
        setNews(getDemoNews());
      }
    } catch (error) {
      console.error("নিউজ ফেচ করতে সমস্যা:", error);
      setNews(getDemoNews());
    } finally {
      setLoading(false);
      setLastUpdated(new Date());
    }
  };

  // ---------- ডেমো নিউজ (API কাজ না করলে দেখাবে) ----------
  const getDemoNews = () => {
    return [
      {
        id: 1,
        title: "বাংলাদেশ-ভারত ক্রিকেট সিরিজ নিয়ে বৈঠক, আইসিসির সঙ্গে আলোচনা চলছে",
        image: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?q=80&w=2070&auto=format&fit=crop",
        date: "১৯ ফেব্রুয়ারি ২০২৬",
        time: "১০:৩০",
        author: "স্পোর্টস ডেস্ক",
        category: "ক্রিকেট",
        country: "bangladesh",
        excerpt: "বিসিবি ও ভারতীয় ক্রিকেট বোর্ডের মধ্যে দ্বিপাক্ষীয় সিরিজ নিয়ে বৈঠক হয়েছে। আগামী মাসে বাংলাদেশ সফরে আসতে পারে ভারতীয় দল।",
        isLive: true,
        isBreaking: true
      },
      {
        id: 2,
        title: "চ্যাম্পিয়ন্স লিগ ফাইনাল: রিয়াল মাদ্রিদ বনাম বায়ার্ন মিউনিখ",
        image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=2023&auto=format&fit=crop",
        date: "১৮ ফেব্রুয়ারি ২০২৬",
        time: "২৩:১৫",
        author: "ফুটবল ডেস্ক",
        category: "ফুটবল",
        country: "international",
        excerpt: "উয়েফা চ্যাম্পিয়ন্স লিগের ফাইনালে মুখোমুখি হবে রিয়াল মাদ্রিদ ও বায়ার্ন মিউনিখ। ওয়েম্বলিতে আগামী ১ জুন ফাইনাল।",
        isLive: true,
        isBreaking: false
      },
      {
        id: 3,
        title: "প্যারিস অলিম্পিক ২০২৬: পদকের আশা বাংলাদেশের",
        image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=2070&auto=format&fit=crop",
        date: "১৮ ফেব্রুয়ারি ২০২৬",
        time: "১৬:৪০",
        author: "অলিম্পিক ডেস্ক",
        category: "অলিম্পিক",
        country: "bangladesh",
        excerpt: "প্যারিস অলিম্পিকে বাংলাদেশ ৫টি ইভেন্টে অংশ নিচ্ছে। সাঁতার ও অ্যাথলেটিক্সে পদকের সম্ভাবনা রয়েছে।"
      },
      {
        id: 4,
        title: "এনবিএ ফাইনাল: লেকার্স বনাম সেলটিক্স",
        image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop",
        date: "১৭ ফেব্রুয়ারি ২০২৬",
        time: "১১:২০",
        author: "বাস্কেটবল ডেস্ক",
        category: "বাস্কেটবল",
        country: "international",
        excerpt: "এনবিএ ফাইনালের তৃতীয় ম্যাচে লেব্রন জেমস ৪০ পয়েন্ট করেছেন। সিরিজে ২-১ এ এগিয়ে সেলটিক্স।"
      }
    ];
  };

  // ---------- অটোমেটিক আপডেট ----------
  useEffect(() => {
    fetchNews(); // প্রথমবার লোড
    
    // প্রতি ১০ মিনিট পর পর অটো আপডেট (600000 ms)
    const interval = setInterval(() => {
      console.log("অটোমেটিক আপডেট হচ্ছে...");
      fetchNews();
    }, 600000);
    
    return () => clearInterval(interval);
  }, []);

  // ---------- ক্যাটাগরি ফিল্টার ----------
  const categories = [
    { id: "all", name: "সব খবর", count: news.length },
    { id: "bangladesh", name: "বাংলাদেশ", count: news.filter(n => n.country === "bangladesh").length },
    { id: "cricket", name: "ক্রিকেট", count: news.filter(n => n.category === "ক্রিকেট").length },
    { id: "football", name: "ফুটবল", count: news.filter(n => n.category === "ফুটবল").length },
    { id: "olympic", name: "অলিম্পিক", count: news.filter(n => n.category === "অলিম্পিক").length },
    { id: "others", name: "অন্যান্য", count: news.filter(n => !["ক্রিকেট", "ফুটবল", "অলিম্পিক"].includes(n.category)).length }
  ];

  const filteredPosts = activeCategory === "all" 
    ? news 
    : activeCategory === "bangladesh"
      ? news.filter(n => n.country === "bangladesh")
      : activeCategory === "cricket"
        ? news.filter(n => n.category === "ক্রিকেট")
        : activeCategory === "football"
          ? news.filter(n => n.category === "ফুটবল")
          : activeCategory === "olympic"
            ? news.filter(n => n.category === "অলিম্পিক")
            : news.filter(n => !["ক্রিকেট", "ফুটবল", "অলিম্পিক"].includes(n.category));

  const liveMatches = news.filter(post => post.isLive);

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

  return (
    <div className="bg-gray-100 min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-black">স্পোর্টস ওয়ার্ল্ড</h1>
              <p className="text-gray-600 mt-1">বাংলাদেশ ও আন্তর্জাতিক খেলাধুলার সর্বশেষ</p>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
              <div className="text-lg font-semibold text-gray-800">{today}</div>
              <div className="text-sm text-gray-500">সর্বশেষ আপডেট: {currentTime}</div>
            </div>
          </div>
          <div className="h-1 w-32 bg-blue-600"></div>
        </div>

        {/* Auto Update Status */}
        {/* <div className="bg-green-50 border border-green-200 rounded-lg p-2 mb-4 text-center text-sm text-green-700">
          ⏰ অটো-আপডেট: প্রতি ১০ মিনিট পর নতুন খবর আসবে
        </div> */}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-10">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-600 border-t-transparent"></div>
            <p className="mt-2 text-gray-600">খবর আনা হচ্ছে...</p>
          </div>
        )}

        {/* Breaking News Ticker */}
        {!loading && news.filter(n => n.isBreaking).length > 0 && (
          <div className="bg-red-600 text-white p-3 rounded-lg mb-6 flex items-center shadow-md">
            <span className="bg-white text-red-600 px-3 py-1 rounded-full text-sm font-bold mr-3 whitespace-nowrap">
              ব্রেকিং নিউজ
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
              <h2 className="text-xl font-bold">লাইভ আপডেট চলছে</h2>
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

        {/* News Grid */}
        {!loading && (
          <>
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl shadow">
                <p className="text-gray-500 text-lg">কোন খবর পাওয়া যায়নি</p>
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
                            ব্রেকিং
                          </span>
                        )}
                        {post.isLive && (
                          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                            লাইভ
                          </span>
                        )}
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                          post.country === "bangladesh" 
                            ? "bg-green-600 text-white" 
                            : "bg-blue-600 text-white"
                        }`}>
                          {post.country === "bangladesh" ? "বাংলাদেশ" : "আন্তর্জাতিক"}
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
                  className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-full font-bold transition shadow-md"
                >
                  আরও খবর দেখুন ({filteredPosts.length - visiblePosts})
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