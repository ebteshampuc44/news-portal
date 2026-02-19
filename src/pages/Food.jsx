import React, { useState, useEffect } from "react";
import axios from "axios";

const Food = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [activeCategory, setActiveCategory] = useState("all");
  const [visiblePosts, setVisiblePosts] = useState(6);

  // ---------- আপনার GNews API Key এখানে বসান ----------
  const API_KEY = "df43bba9778a35b8cc21a6106da959a9"; // উদাহরণ: "8a7f6e5d4c3b2a1f9e8d7c6b5a4f3e2d1c"

  // ---------- ফুড নিউজ ফেচ করার ফাংশন ----------
  const fetchFoodNews = async () => {
    setLoading(true);
    try {
      // GNews API থেকে ফুড সংক্রান্ত নিউজ আনা
      // food, cooking, restaurant, recipe ইত্যাদি কীওয়ার্ড ব্যবহার করা হয়েছে
      const response = await axios.get(
        `https://gnews.io/api/v4/search?q=food OR cooking OR restaurant OR recipe OR cuisine&lang=en&country=us&max=20&apikey=${API_KEY}`
      );
      
      const data = response.data;
      
      if (data.articles && data.articles.length > 0) {
        // API ডাটাকে আমাদের ফরম্যাটে কনভার্ট করা
        const formattedNews = data.articles.map((article, index) => {
          // ক্যাটাগরি ডিটেক্ট করা
          const title = article.title?.toLowerCase() || "";
          const description = article.description?.toLowerCase() || "";
          
          let category = "আন্তর্জাতিক";
          let mealType = "অন্যান্য";
          
          // খাবারের ধরন ডিটেক্ট করা
          if (title.includes("breakfast") || description.includes("breakfast") || 
              title.includes("সকাল") || title.includes("নাস্তা")) {
            mealType = "Breakfast";
          } else if (title.includes("lunch") || description.includes("lunch") || 
                     title.includes("দুপুর") || title.includes("মধ্যাহ্ন")) {
            mealType = "Lunch";
          } else if (title.includes("dinner") || description.includes("dinner") || 
                     title.includes("রাত") || title.includes("ডিনার")) {
            mealType = "Dinner";
          } else if (title.includes("dessert") || description.includes("dessert") || 
                     title.includes("মিষ্টি") || title.includes("পিঠা")) {
            mealType = "Dessert";
          }
          
          // বাংলাদেশ বা ভারতীয় খাবার ডিটেক্ট করা
          if (title.includes("bangladesh") || description.includes("bangladesh") || 
              title.includes("বাংলাদেশ") || description.includes("বাংলাদেশ") ||
              title.includes("indian") || title.includes("ভারতীয়") ||
              title.includes("bengali") || title.includes("বাংলা")) {
            category = "বাংলাদেশ/ভারত";
          }
          
          // রেসিপি চেক করা
          const isRecipe = title.includes("recipe") || description.includes("recipe") || 
                          title.includes("রেসিপি") || description.includes("রেসিপি") ||
                          title.includes("how to make") || title.includes("বানানোর উপায়");
          
          // রেস্টুরেন্ট চেক করা
          const isRestaurant = title.includes("restaurant") || description.includes("restaurant") ||
                              title.includes("রেস্টুরেন্ট") || description.includes("রেস্টুরেন্ট") ||
                              title.includes("cafe") || title.includes("ক্যাফে");
          
          // রেটিং জেনারেট করা (র্যান্ডম)
          const rating = (3.5 + Math.random() * 1.5).toFixed(1);
          const reviewCount = Math.floor(100 + Math.random() * 900);
          
          // র্যান্ডম ইমেজ জেনারেট করা যদি API ইমেজ না দেয়
          const getRandomFoodImage = () => {
            const images = [
              "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2132&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=2025&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop"
            ];
            return images[index % images.length];
          };
          
          return {
            id: index + 1,
            title: article.title || "শিরোনাম পাওয়া যায়নি",
            image: article.image || getRandomFoodImage(),
            date: new Date(article.publishedAt).toLocaleDateString('bn-BD', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }),
            time: new Date(article.publishedAt).toLocaleTimeString('bn-BD', {
              hour: '2-digit',
              minute: '2-digit'
            }),
            author: article.source?.name || "ফুড ডেস্ক",
            category: category,
            mealType: mealType,
            excerpt: article.description?.substring(0, 150) + "..." || "বিস্তারিত খবর পড়ুন...",
            url: article.url,
            isRecipe: isRecipe,
            isRestaurant: isRestaurant,
            rating: rating,
            reviewCount: reviewCount,
            cookingTime: isRecipe ? `${15 + (index * 5)} mins` : null,
            difficulty: isRecipe ? (index % 3 === 0 ? "Easy" : index % 3 === 1 ? "Medium" : "Hard") : null
          };
        });
        
        setNews(formattedNews);
      } else {
        // API থেকে ডাটা না এলে ডেমো ফুড নিউজ দেখাও
        setNews(getDemoFoodNews());
      }
    } catch (error) {
      console.error("ফুড নিউজ ফেচ করতে সমস্যা:", error);
      setNews(getDemoFoodNews());
    } finally {
      setLoading(false);
      setLastUpdated(new Date());
    }
  };

  // ---------- ডেমো ফুড নিউজ (API কাজ না করলে দেখাবে) ----------
  const getDemoFoodNews = () => {
    return [
      {
        id: 1,
        title: "World's Top 10 Restaurants 2024",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
        date: "১৯ ফেব্রুয়ারি ২০২৬",
        time: "১০:৩০",
        author: "Gordon Ramsay",
        category: "আন্তর্জাতিক",
        mealType: "Dinner",
        excerpt: "From molecular gastronomy to traditional cuisine, discover the world's best dining destinations for 2024.",
        isRestaurant: true,
        rating: "4.9",
        reviewCount: 1250
      },
      {
        id: 2,
        title: "Easy Pasta Recipes for Beginners",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2132&auto=format&fit=crop",
        date: "১৮ ফেব্রুয়ারি ২০২৬",
        time: "১১:৪৫",
        author: "Jamie Oliver",
        category: "আন্তর্জাতিক",
        mealType: "Lunch",
        excerpt: "Master the art of Italian cooking with these simple yet delicious pasta recipes that anyone can make.",
        isRecipe: true,
        cookingTime: "25 mins",
        difficulty: "Easy",
        rating: "4.7",
        reviewCount: 890
      },
      {
        id: 3,
        title: "The Art of Sushi Making",
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=2025&auto=format&fit=crop",
        date: "১৭ ফেব্রুয়ারি ২০২৬",
        time: "১৪:২০",
        author: "Masaharu Morimoto",
        category: "আন্তর্জাতিক",
        mealType: "Dinner",
        excerpt: "Learn the techniques and traditions behind perfect sushi from a master chef. Step-by-step guide for beginners.",
        isRecipe: true,
        cookingTime: "60 mins",
        difficulty: "Hard",
        rating: "4.8",
        reviewCount: 650
      },
      {
        id: 4,
        title: "Healthy Breakfast Ideas Under 10 Minutes",
        image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=2070&auto=format&fit=crop",
        date: "১৬ ফেব্রুয়ারি ২০২৬",
        time: "০৯:১৫",
        author: "Victoria Anderson",
        category: "আন্তর্জাতিক",
        mealType: "Breakfast",
        excerpt: "Start your day right with these quick, nutritious breakfast options for busy mornings. All recipes under 10 minutes.",
        isRecipe: true,
        cookingTime: "10 mins",
        difficulty: "Easy",
        rating: "4.6",
        reviewCount: 430
      },
      {
        id: 5,
        title: "Wine Pairing Guide for Beginners",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop",
        date: "১৫ ফেব্রুয়ারি ২০২৬",
        time: "১৬:৫০",
        author: "Robert Parker",
        category: "আন্তর্জাতিক",
        mealType: "Dinner",
        excerpt: "Confused about which wine goes with what? This beginner's guide has you covered with simple rules and recommendations.",
        rating: "4.5",
        reviewCount: 320
      },
      {
        id: 6,
        title: "Street Food Tour: Bangkok's Best",
        image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=2070&auto=format&fit=crop",
        date: "১৪ ফেব্রুয়ারি ২০২৬",
        time: "১২:৩০",
        author: "Anthony Bourdain",
        category: "আন্তর্জাতিক",
        mealType: "Lunch",
        excerpt: "Explore the vibrant street food scene of Bangkok through our comprehensive guide to the best stalls and markets.",
        isRestaurant: true,
        rating: "4.9",
        reviewCount: 2100
      },
      {
        id: 7,
        title: "বাংলার ঐতিহ্যবাহী পিঠার রেসিপি",
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070&auto=format&fit=crop",
        date: "১৩ ফেব্রুয়ারি ২০২৬",
        time: "১০:০০",
        author: "বাংলা ফুড ডেস্ক",
        category: "বাংলাদেশ/ভারত",
        mealType: "Dessert",
        excerpt: "পিঠে উৎসবকে সামনে রেখে বাংলার ঐতিহ্যবাহী পিঠার রেসিপি নিয়ে বিশেষ আয়োজন। ভাপা পিঠা, পাটিসাপ্টা সহ বিভিন্ন পিঠা তৈরির সহজ পদ্ধতি।",
        isRecipe: true,
        cookingTime: "45 mins",
        difficulty: "Medium",
        rating: "4.8",
        reviewCount: 560
      },
      {
        id: 8,
        title: "ঢাকার সেরা ৫ রেস্টুরেন্ট",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop",
        date: "১২ ফেব্রুয়ারি ২০২৬",
        time: "১৫:৪৫",
        author: "ফুড রিভিউ টিম",
        category: "বাংলাদেশ/ভারত",
        mealType: "Dinner",
        excerpt: "ঢাকা শহরের সেরা ৫ রেস্টুরেন্টের তালিকা। কোথায় পাবেন সবচেয়ে সুস্বাদু খাবার, কেমন দাম এবং পরিবেশ - জানুন বিস্তারিত।",
        isRestaurant: true,
        rating: "4.7",
        reviewCount: 890
      }
    ];
  };

  // ---------- অটোমেটিক আপডেট ----------
  useEffect(() => {
    fetchFoodNews(); // প্রথমবার লোড
    
    // প্রতি ১০ মিনিট পর পর অটো আপডেট (600000 ms)
    const interval = setInterval(() => {
      console.log("ফুড নিউজ অটোমেটিক আপডেট হচ্ছে...");
      fetchFoodNews();
    }, 600000);
    
    return () => clearInterval(interval);
  }, []);

  // ---------- ক্যাটাগরি ফিল্টার ----------
  const categories = [
    { id: "all", name: "সব খাবার", count: news.length },
    { id: "breakfast", name: "Breakfast", count: news.filter(n => n.mealType === "Breakfast").length },
    { id: "lunch", name: "Lunch", count: news.filter(n => n.mealType === "Lunch").length },
    { id: "dinner", name: "Dinner", count: news.filter(n => n.mealType === "Dinner").length },
    { id: "dessert", name: "Dessert", count: news.filter(n => n.mealType === "Dessert").length },
    { id: "recipes", name: "রেসিপি", count: news.filter(n => n.isRecipe).length },
    { id: "restaurants", name: "রেস্টুরেন্ট", count: news.filter(n => n.isRestaurant).length }
  ];

  const filteredPosts = activeCategory === "all" 
    ? news 
    : activeCategory === "breakfast"
      ? news.filter(n => n.mealType === "Breakfast")
      : activeCategory === "lunch"
        ? news.filter(n => n.mealType === "Lunch")
        : activeCategory === "dinner"
          ? news.filter(n => n.mealType === "Dinner")
          : activeCategory === "dessert"
            ? news.filter(n => n.mealType === "Dessert")
            : activeCategory === "recipes"
              ? news.filter(n => n.isRecipe)
              : activeCategory === "restaurants"
                ? news.filter(n => n.isRestaurant)
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

  // Recipe of the Day (সর্বোচ্চ রেটিং পাওয়া রেসিপি)
  const recipeOfTheDay = news.filter(n => n.isRecipe).sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))[0];

  return (
    <div className="bg-gray-100 min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-black">ফুড ওয়ার্ল্ড</h1>
              <p className="text-gray-600 mt-1">বিশ্বের সেরা খাবার, রেসিপি ও রেস্টুরেন্টের খবর</p>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
              <div className="text-lg font-semibold text-gray-800">{today}</div>
              <div className="text-sm text-gray-500">সর্বশেষ আপডেট: {currentTime}</div>
            </div>
          </div>
          <div className="h-1 w-32 bg-orange-600"></div>
        </div>

        {/* Auto Update Status */}
        {/* <div className="bg-green-50 border border-green-200 rounded-lg p-2 mb-4 text-center text-sm text-green-700">
          ⏰ অটো-আপডেট: প্রতি ১০ মিনিট পর নতুন খাবার সংক্রান্ত খবর আসবে
        </div> */}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-10">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-orange-600 border-t-transparent"></div>
            <p className="mt-2 text-gray-600">খাবারের খবর আনা হচ্ছে...</p>
          </div>
        )}

        {/* Recipe of the Day */}
        {!loading && recipeOfTheDay && (
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 mb-8 text-white shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <span className="bg-white text-orange-600 px-3 py-1 text-sm font-bold rounded-full mb-3 inline-block">
                  ⭐ আজকের বিশেষ রেসিপি
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">{recipeOfTheDay.title}</h2>
                <p className="mb-3 max-w-xl text-sm opacity-90">{recipeOfTheDay.excerpt}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  {recipeOfTheDay.cookingTime && (
                    <span className="flex items-center gap-1">⏱️ {recipeOfTheDay.cookingTime}</span>
                  )}
                  {recipeOfTheDay.difficulty && (
                    <span className="flex items-center gap-1">👨‍🍳 {recipeOfTheDay.difficulty}</span>
                  )}
                  <span className="flex items-center gap-1">⭐ {recipeOfTheDay.rating} ({recipeOfTheDay.reviewCount} reviews)</span>
                </div>
              </div>
              <a
                href={recipeOfTheDay.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 md:mt-0 bg-white text-orange-600 hover:bg-gray-100 px-6 py-2 rounded-full font-semibold transition text-sm"
              >
                রেসিপি দেখুন →
              </a>
            </div>
          </div>
        )}

        {/* Categories */}
        {!loading && (
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setVisiblePosts(6);
                }}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition flex items-center gap-2 ${
                  activeCategory === category.id 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-orange-100'
                }`}
              >
                {category.name}
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeCategory === category.id 
                    ? 'bg-white text-orange-600' 
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <div className="text-xl font-bold text-orange-600">{news.filter(n => n.isRecipe).length}</div>
              <div className="text-xs text-gray-500">রেসিপি</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <div className="text-xl font-bold text-orange-600">{news.filter(n => n.isRestaurant).length}</div>
              <div className="text-xs text-gray-500">রেস্টুরেন্ট</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <div className="text-xl font-bold text-orange-600">{news.filter(n => n.category === "বাংলাদেশ/ভারত").length}</div>
              <div className="text-xs text-gray-500">বাংলাদেশি খাবার</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <div className="text-xl font-bold text-orange-600">{news.length}</div>
              <div className="text-xs text-gray-500">মোট খবর</div>
            </div>
          </div>
        )}

        {/* News Grid */}
        {!loading && (
          <>
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl shadow">
                <p className="text-gray-500 text-lg">কোন খাবারের খবর পাওয়া যায়নি</p>
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
                          e.target.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop";
                        }}
                      />
                      {post.isRecipe && (
                        <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          👨‍🍳 রেসিপি
                        </span>
                      )}
                      {post.isRestaurant && (
                        <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          🍽️ রেস্টুরেন্ট
                        </span>
                      )}
                      <span className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {post.mealType}
                      </span>
                    </div>
                    
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.time}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-black mb-2 hover:text-orange-600 cursor-pointer leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      {/* Recipe/Restaurant Details */}
                      <div className="flex flex-wrap gap-2 mb-3 text-xs">
                        {post.rating && (
                          <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full flex items-center gap-1">
                            ⭐ {post.rating}
                          </span>
                        )}
                        {post.cookingTime && (
                          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                            ⏱️ {post.cookingTime}
                          </span>
                        )}
                        {post.difficulty && (
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            {post.difficulty}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                        <span className="text-xs text-gray-500">{post.author}</span>
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-600 hover:text-orange-700 text-sm font-semibold flex items-center gap-1"
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
                  className="bg-orange-600 text-white hover:bg-orange-700 px-8 py-3 rounded-full font-bold transition shadow-md"
                >
                  আরও খাবার দেখুন ({filteredPosts.length - visiblePosts})
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Food;