import React, { useState, useEffect } from "react";
import axios from "axios";

const Lifestyle = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [activeCategory, setActiveCategory] = useState("all");
  const [visiblePosts, setVisiblePosts] = useState(6);

  // ---------- আপনার GNews API Key এখানে বসান ----------
  const API_KEY = "df43bba9778a35b8cc21a6106da959a9"; // উদাহরণ: "8a7f6e5d4c3b2a1f9e8d7c6b5a4f3e2d1c"

  // ---------- লাইফস্টাইল নিউজ ফেচ করার ফাংশন ----------
  const fetchLifestyleNews = async () => {
    setLoading(true);
    try {
      // GNews API থেকে লাইফস্টাইল সংক্রান্ত নিউজ আনার সঠিক উপায়
      // লাইফস্টাইল সম্পর্কিত কীওয়ার্ড: lifestyle, wellness, fitness, health, beauty, productivity
      const response = await axios.get(
        `https://gnews.io/api/v4/search?q=lifestyle wellness fitness health beauty productivity&lang=en&country=us&max=20&apikey=${API_KEY}`
      );
      
      const data = response.data;
      
      if (data.articles && data.articles.length > 0) {
        // API ডাটাকে আমাদের ফরম্যাটে কনভার্ট করা
        const formattedNews = data.articles.map((article, index) => {
          // ক্যাটাগরি ডিটেক্ট করা
          const title = article.title?.toLowerCase() || "";
          const description = article.description?.toLowerCase() || "";
          
          let category = "জেনারেল";
          let lifestyleType = "অন্যান্য";
          let readTime = Math.floor(3 + Math.random() * 8); // ৩-১০ মিনিট রিড টাইম
          
          // নির্দিষ্ট লাইফস্টাইল ক্যাটাগরি ডিটেক্ট করা
          if (title.includes("fitness") || description.includes("fitness") || 
              title.includes("workout") || description.includes("exercise") ||
              title.includes("gym") || title.includes("ফিটনেস")) {
            lifestyleType = "Fitness";
            category = "ফিটনেস";
          } else if (title.includes("health") || description.includes("health") || 
                     title.includes("healthy") || description.includes("স্বাস্থ্য")) {
            lifestyleType = "Health";
            category = "স্বাস্থ্য";
          } else if (title.includes("beauty") || description.includes("beauty") || 
                     title.includes("skincare") || description.includes("makeup") ||
                     title.includes("সৌন্দর্য") || title.includes("ত্বক")) {
            lifestyleType = "Beauty";
            category = "বিউটি";
          } else if (title.includes("mental") || description.includes("mental") || 
                     title.includes("wellness") || description.includes("mindfulness") ||
                     title.includes("মেন্টাল") || title.includes("ধ্যান")) {
            lifestyleType = "Wellness";
            category = "ওয়েলনেস";
          } else if (title.includes("productivity") || description.includes("productivity") || 
                     title.includes("routine") || description.includes("habit") ||
                     title.includes("উৎপাদনশীলতা") || title.includes("রুটিন")) {
            lifestyleType = "Productivity";
            category = "প্রোডাক্টিভিটি";
          } else if (title.includes("minimalist") || description.includes("minimalist") || 
                     title.includes("declutter") || description.includes("organizing") ||
                     title.includes("মিনিমালিস্ট") || title.includes("গোছানো")) {
            lifestyleType = "Minimalism";
            category = "মিনিমালিজম";
          } else if (title.includes("relationship") || description.includes("relationship") || 
                     title.includes("marriage") || description.includes("parenting") ||
                     title.includes("সম্পর্ক") || title.includes("বিয়ে")) {
            lifestyleType = "Relationships";
            category = "সম্পর্ক";
          } else if (title.includes("digital detox") || description.includes("digital detox") || 
                     title.includes("social media") || description.includes("ডিজিটাল")) {
            lifestyleType = "Digital Detox";
            category = "ডিজিটাল ডিটক্স";
          }
          
          // বাংলাদেশ সম্পর্কিত নিউজ চিহ্নিত করা
          const isBangladesh = title.includes("bangladesh") || description.includes("bangladesh") || 
                               title.includes("বাংলাদেশ") || description.includes("বাংলাদেশ") ||
                               title.includes("dhaka") || title.includes("ঢাকা");
          
          // র্যান্ডম ইমেজ জেনারেট করা যদি API ইমেজ না দেয়
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
            title: article.title || "শিরোনাম পাওয়া যায়নি",
            image: article.image || getRandomLifestyleImage(),
            date: new Date(article.publishedAt).toLocaleDateString('bn-BD', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }),
            time: new Date(article.publishedAt).toLocaleTimeString('bn-BD', {
              hour: '2-digit',
              minute: '2-digit'
            }),
            author: article.source?.name || "লাইফস্টাইল ডেস্ক",
            category: category,
            lifestyleType: lifestyleType,
            excerpt: article.description?.substring(0, 150) + "..." || "বিস্তারিত পড়ুন...",
            url: article.url,
            isBangladesh: isBangladesh,
            readTime: readTime,
            // র্যান্ডম লাইক ও কমেন্ট
            likes: Math.floor(50 + Math.random() * 500),
            comments: Math.floor(10 + Math.random() * 100)
          };
        });
        
        setNews(formattedNews);
      } else {
        // API থেকে ডাটা না এলে ডেমো লাইফস্টাইল নিউজ দেখাও
        setNews(getDemoLifestyleNews());
      }
    } catch (error) {
      console.error("লাইফস্টাইল নিউজ ফেচ করতে সমস্যা:", error);
      setNews(getDemoLifestyleNews());
    } finally {
      setLoading(false);
      setLastUpdated(new Date());
    }
  };

  // ---------- ডেমো লাইফস্টাইল নিউজ (API কাজ না করলে দেখাবে) ----------
  const getDemoLifestyleNews = () => {
    return [
      {
        id: 1,
        title: "How to Get the Most Out of Your Dry Shampoo",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2070&auto=format&fit=crop",
        date: "১৯ ফেব্রুয়ারি ২০২৬",
        time: "১০:৩০",
        author: "Sarah Johnson",
        category: "বিউটি",
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
        date: "১৮ ফেব্রুয়ারি ২০২৬",
        time: "১১:৪৫",
        author: "Dr. Michael Chen",
        category: "স্বাস্থ্য",
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
        date: "১৭ ফেব্রুয়ারি ২০২৬",
        time: "০৯:১৫",
        author: "David Kim",
        category: "প্রোডাক্টিভিটি",
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
        date: "১৬ ফেব্রুয়ারি ২০২৬",
        time: "১৪:২০",
        author: "Emma Watson",
        category: "মিনিমালিজম",
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
        date: "১৫ ফেব্রুয়ারি ২০২৬",
        time: "১৬:৫০",
        author: "Dr. Sarah Johnson",
        category: "ওয়েলনেস",
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
        date: "১৪ ফেব্রুয়ারি ২০২৬",
        time: "১২:৩০",
        author: "Michael Chen",
        category: "ডিজিটাল ডিটক্স",
        lifestyleType: "Digital Detox",
        excerpt: "Disconnect to reconnect. Learn how a digital detox can improve your relationships and overall well-being.",
        readTime: 6,
        likes: 756,
        comments: 134
      },
      {
        id: 7,
        title: "ঢাকায় যোগা ও মেডিটেশন ওয়ার্কশপ",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2022&auto=format&fit=crop",
        date: "১৩ ফেব্রুয়ারি ২০২৬",
        time: "১০:০০",
        author: "লাইফস্টাইল টিম",
        category: "ওয়েলনেস",
        lifestyleType: "Wellness",
        excerpt: "ঢাকায় আগামী সপ্তাহে অনুষ্ঠিত হতে যাচ্ছে যোগা ও মেডিটেশন ওয়ার্কশপ। অংশগ্রহণ করুন এবং সুস্থ থাকুন।",
        isBangladesh: true,
        readTime: 3,
        likes: 234,
        comments: 45
      },
      {
        id: 8,
        title: "বাংলাদেশিদের জন্য ফিটনেস টিপস",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
        date: "১২ ফেব্রুয়ারি ২০২৬",
        time: "১৫:৪৫",
        author: "ফিটনেস এক্সপার্ট",
        category: "ফিটনেস",
        lifestyleType: "Fitness",
        excerpt: "বাংলাদেশের আবহাওয়া ও খাদ্যাভ্যাস অনুযায়ী ফিটনেস টিপস। সহজ উপায়ে সুস্থ থাকুন।",
        isBangladesh: true,
        readTime: 5,
        likes: 567,
        comments: 89
      }
    ];
  };

  // ---------- অটোমেটিক আপডেট ----------
  useEffect(() => {
    fetchLifestyleNews(); // প্রথমবার লোড
    
    // প্রতি ১০ মিনিট পর পর অটো আপডেট (600000 ms)
    const interval = setInterval(() => {
      console.log("লাইফস্টাইল নিউজ অটোমেটিক আপডেট হচ্ছে...");
      fetchLifestyleNews();
    }, 600000);
    
    return () => clearInterval(interval);
  }, []);

  // ---------- ক্যাটাগরি ফিল্টার ----------
  const categories = [
    { id: "all", name: "সব খবর", count: news.length },
    { id: "fitness", name: "ফিটনেস", count: news.filter(n => n.category === "ফিটনেস").length },
    { id: "health", name: "স্বাস্থ্য", count: news.filter(n => n.category === "স্বাস্থ্য").length },
    { id: "beauty", name: "বিউটি", count: news.filter(n => n.category === "বিউটি").length },
    { id: "wellness", name: "ওয়েলনেস", count: news.filter(n => n.category === "ওয়েলনেস").length },
    { id: "productivity", name: "প্রোডাক্টিভিটি", count: news.filter(n => n.category === "প্রোডাক্টিভিটি").length },
    { id: "bangladesh", name: "বাংলাদেশ", count: news.filter(n => n.isBangladesh).length }
  ];

  const filteredPosts = activeCategory === "all" 
    ? news 
    : activeCategory === "bangladesh"
      ? news.filter(n => n.isBangladesh)
      : activeCategory === "fitness"
        ? news.filter(n => n.category === "ফিটনেস")
        : activeCategory === "health"
          ? news.filter(n => n.category === "স্বাস্থ্য")
          : activeCategory === "beauty"
            ? news.filter(n => n.category === "বিউটি")
            : activeCategory === "wellness"
              ? news.filter(n => n.category === "ওয়েলনেস")
              : activeCategory === "productivity"
                ? news.filter(n => n.category === "প্রোডাক্টিভিটি")
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

  // Featured Categories Stats
  const featuredCategories = [
    { name: "Healthy Eating", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop", count: news.filter(n => n.category === "স্বাস্থ্য" || n.category === "ওয়েলনেস").length },
    { name: "Fitness", image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop", count: news.filter(n => n.category === "ফিটনেস").length },
    { name: "Wellness", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2022&auto=format&fit=crop", count: news.filter(n => n.category === "ওয়েলনেস").length }
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-black">লাইফস্টাইল</h1>
              <p className="text-gray-600 mt-1">স্বাস্থ্য, ফিটনেস, বিউটি ও সুস্থ জীবনযাপনের টিপস</p>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
              <div className="text-lg font-semibold text-gray-800">{today}</div>
              <div className="text-sm text-gray-500">সর্বশেষ আপডেট: {currentTime}</div>
            </div>
          </div>
          <div className="h-1 w-32 bg-green-600"></div>
        </div>

        {/* Auto Update Status */}
        {/* <div className="bg-green-50 border border-green-200 rounded-lg p-2 mb-4 text-center text-sm text-green-700">
          ⏰ অটো-আপডেট: প্রতি ১০ মিনিট পর নতুন লাইফস্টাইল খবর আসবে
        </div> */}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-10">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-green-600 border-t-transparent"></div>
            <p className="mt-2 text-gray-600">লাইফস্টাইল খবর আনা হচ্ছে...</p>
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
                    <span className="text-green-300 text-sm">{cat.count} টি আর্টিকেল</span>
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
              <div className="text-xs text-gray-500">গড় লাইক</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <div className="text-xl font-bold text-green-600">
                {Math.floor(news.reduce((acc, item) => acc + item.readTime, 0) / news.length)} min
              </div>
              <div className="text-xs text-gray-500">গড় পড়ার সময়</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <div className="text-xl font-bold text-green-600">{news.filter(n => n.isBangladesh).length}</div>
              <div className="text-xs text-gray-500">বাংলাদেশ</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <div className="text-xl font-bold text-green-600">{news.length}</div>
              <div className="text-xs text-gray-500">মোট খবর</div>
            </div>
          </div>
        )}

        {/* News Grid */}
        {!loading && (
          <>
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl shadow">
                <p className="text-gray-500 text-lg">কোন লাইফস্টাইল খবর পাওয়া যায়নি</p>
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
                          🇧🇩 বাংলাদেশ
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
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 hover:text-green-700 text-sm font-semibold flex items-center gap-1"
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
                  className="bg-green-600 text-white hover:bg-green-700 px-8 py-3 rounded-full font-bold transition shadow-md"
                >
                  আরও খবর দেখুন ({filteredPosts.length - visiblePosts})
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
              <h3 className="text-xl font-bold">আজকের ওয়েলনেস টিপস</h3>
            </div>
            <p className="text-sm opacity-90 mb-3">
              প্রতিদিন ১০ মিনিট মেডিটেশন করুন। এটি আপনার মানসিক চাপ কমাবে এবং ফোকাস বাড়াবে।
              পর্যাপ্ত পানি পান করুন এবং ৭-৮ ঘন্টা ঘুমান।
            </p>
            <div className="flex justify-end">
              <span className="text-xs opacity-75">- লাইফস্টাইল এক্সপার্ট টিম</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lifestyle;