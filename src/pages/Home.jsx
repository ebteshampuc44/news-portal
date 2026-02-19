import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [latestNews, setLatestNews] = useState([]);
  const [travelNews, setTravelNews] = useState([]);
  const [lifestyleNews, setLifestyleNews] = useState([]);
  const [fashionNews, setFashionNews] = useState([]);
  const [sportNews, setSportNews] = useState([]);
  const [foodNews, setFoodNews] = useState([]);
  const [hotTopics, setHotTopics] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  // ---------- Your GNews API Key Here ----------
  const API_KEY = "df43bba9778a35b8cc21a6106da959a9";

  // ---------- Fetch All News Function ----------
  const fetchAllNews = async () => {
    setLoading(true);
    try {
      // Fetch general news for hot topics
      const generalResponse = await axios.get(
        `https://gnews.io/api/v4/top-headlines?lang=en&country=us&max=10&apikey=${API_KEY}`
      );

      // Fetch sports news
      const sportsResponse = await axios.get(
        `https://gnews.io/api/v4/top-headlines?category=sports&lang=en&country=us&max=10&apikey=${API_KEY}`
      );

      // Fetch travel news
      const travelResponse = await axios.get(
        `https://gnews.io/api/v4/search?q=travel tourism vacation&lang=en&country=us&max=6&apikey=${API_KEY}`
      );

      // Fetch lifestyle news
      const lifestyleResponse = await axios.get(
        `https://gnews.io/api/v4/search?q=lifestyle wellness health beauty&lang=en&country=us&max=6&apikey=${API_KEY}`
      );

      // Fetch fashion news
      const fashionResponse = await axios.get(
        `https://gnews.io/api/v4/search?q=fashion style clothing&lang=en&country=us&max=6&apikey=${API_KEY}`
      );

      // Fetch food news
      const foodResponse = await axios.get(
        `https://gnews.io/api/v4/search?q=food cooking recipe restaurant&lang=en&country=us&max=6&apikey=${API_KEY}`
      );

      // Process all news
      if (generalResponse.data.articles) {
        setLatestNews(generalResponse.data.articles.slice(0, 5));
        setHotTopics(generalResponse.data.articles.slice(0, 6));
      }

      if (sportsResponse.data.articles) {
        setSportNews(sportsResponse.data.articles.slice(0, 3));
      }

      if (travelResponse.data.articles) {
        setTravelNews(travelResponse.data.articles.slice(0, 3));
      }

      if (lifestyleResponse.data.articles) {
        setLifestyleNews(lifestyleResponse.data.articles.slice(0, 3));
      }

      if (fashionResponse.data.articles) {
        setFashionNews(fashionResponse.data.articles.slice(0, 3));
      }

      if (foodResponse.data.articles) {
        setFoodNews(foodResponse.data.articles.slice(0, 3));
      }

      // Set demo videos (since GNews doesn't provide videos)
      setVideos([
        {
          id: 1,
          title: "World's Fastest Supercar",
          image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2070&auto=format&fit=crop",
          views: "50K",
          days: 1
        },
        {
          id: 2,
          title: "Top 5 Resorts in Maldives",
          image: "https://images.unsplash.com/photo-1492616941141-9b0c9b9b9b9b?q=80&w=2070&auto=format&fit=crop",
          views: "100K",
          days: 2
        },
        {
          id: 3,
          title: "How AI Will Change the World",
          image: "https://images.unsplash.com/photo-1516035069131-9b0c9b9b9b9b?q=80&w=2070&auto=format&fit=crop",
          views: "150K",
          days: 3
        },
        {
          id: 4,
          title: "Cricket World Cup Highlights",
          image: "https://images.unsplash.com/photo-1536240471395-35b0b0b0b0b0?q=80&w=2070&auto=format&fit=crop",
          views: "200K",
          days: 4
        }
      ]);

    } catch (error) {
      console.error("Error fetching news:", error);
      // Set demo data if API fails
      setDemoData();
    } finally {
      setLoading(false);
      setLastUpdated(new Date());
    }
  };

  // ---------- Demo Data (if API fails) ----------
  const setDemoData = () => {
    setLatestNews([
      {
        title: "An Olympic Impact on Sports Tourism",
        description: "The U.S. Olympic Trials for ski jumping and Nordic combined will be heading to the Olympic Jumping Complex...",
        source: { name: "Sports Desk" },
        publishedAt: new Date().toISOString(),
        urlToImage: "https://i.ibb.co.com/Y4hshkcg/neon-scenery-wallpaper-2560x1080-14.jpg"
      }
    ]);

    setTravelNews([
      {
        title: "We are a Full-Time Travel Family. How?",
        description: "Products allow you to create something once and earn revenue while sleeping, sightseeing...",
        source: { name: "Travel Desk" },
        publishedAt: new Date().toISOString(),
        urlToImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop"
      },
      {
        title: "How To Work From-Home While Also Traveling",
        description: "Discover the best practices for maintaining productivity while exploring the world...",
        source: { name: "Travel Desk" },
        publishedAt: new Date().toISOString(),
        urlToImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop"
      }
    ]);

    setLifestyleNews([
      {
        title: "How to Get the Most Out of Your Dry Shampoo",
        description: "If you're using a loose dry shampoo powder, apply to your roots with a fluffy makeup brush...",
        source: { name: "Lifestyle Desk" },
        publishedAt: new Date().toISOString(),
        urlToImage: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2070&auto=format&fit=crop"
      },
      {
        title: "Why It's Normal for Your Weight to Fluctuate",
        description: "Understanding the natural daily and weekly fluctuations in body weight...",
        source: { name: "Lifestyle Desk" },
        publishedAt: new Date().toISOString(),
        urlToImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2070&auto=format&fit=crop"
      }
    ]);

    setFashionNews([
      {
        title: "Sheath Yourself in These Cozy-Chic Sweater Dresses",
        description: "Solid tones are by far the most versatile for dressing up or down...",
        source: { name: "Fashion Desk" },
        publishedAt: new Date().toISOString(),
        urlToImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2070&auto=format&fit=crop"
      }
    ]);

    setSportNews([
      {
        title: "Champions League Final Preview",
        description: "Everything you need to know about the biggest match in European football...",
        source: { name: "Sports Desk" },
        publishedAt: new Date().toISOString(),
        urlToImage: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=2023&auto=format&fit=crop"
      }
    ]);

    setFoodNews([
      {
        title: "World's Top 10 Restaurants 2024",
        description: "From molecular gastronomy to traditional cuisine, discover the world's best dining destinations...",
        source: { name: "Food Desk" },
        publishedAt: new Date().toISOString(),
        urlToImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
      }
    ]);

    setHotTopics([
      { title: "Major Changes in Visa Policy" },
      { title: "iPhone 16 Price Revealed" },
      { title: "Champions League Final Preview" },
      { title: "Winter Fashion Trends 2024" },
      { title: "World's Top 10 Restaurants" },
      { title: "New AI Tool Launches" }
    ]);
  };

  // ---------- Auto Update ----------
  useEffect(() => {
    fetchAllNews();
    
    const interval = setInterval(() => {
      console.log("Auto-updating home page news...");
      fetchAllNews();
    }, 600000); // 10 minutes
    
    return () => clearInterval(interval);
  }, []);

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      {/* Loading State */}
      {loading && (
        <div className="text-center py-20">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-red-600 border-t-transparent"></div>
          <p className="mt-2 text-gray-600">Loading latest news...</p>
        </div>
      )}

      {!loading && (
        <>
          {/* TOP SECTION */}
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* LEFT BIG POST */}
            <div className="lg:col-span-2 relative h-[300px] sm:h-[400px] lg:h-[500px]">
              <img
                src={latestNews[0]?.urlToImage || "https://i.ibb.co.com/Y4hshkcg/neon-scenery-wallpaper-2560x1080-14.jpg"}
                alt="Featured News"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://i.ibb.co.com/Y4hshkcg/neon-scenery-wallpaper-2560x1080-14.jpg";
                }}
              />
              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute bottom-4 sm:bottom-6 lg:bottom-10 left-4 sm:left-6 lg:left-10 text-white max-w-xl">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 lg:mb-4">
                  {latestNews[0]?.title || "An Olympic Impact on Sports Tourism"}
                </h1>
                <p className="text-xs sm:text-sm mb-1 sm:mb-2">
                  {latestNews[0]?.publishedAt ? formatDate(latestNews[0].publishedAt) : "23 October 2021"} • Sport
                </p>
                <p className="text-xs sm:text-sm leading-relaxed hidden sm:block">
                  {latestNews[0]?.description || "The U.S. Olympic Trials for ski jumping and Nordic combined will be heading to the Olympic Jumping Complex..."}
                </p>
              </div>
            </div>

            {/* RIGHT GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Card 1 */}
              <div className="relative h-48 sm:h-56 lg:h-60">
                <img
                  src={travelNews[0]?.urlToImage || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop"}
                  alt=""
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white">
                  <h2 className="font-semibold text-sm sm:text-base lg:text-lg">
                    {travelNews[0]?.title || "We are a Full-Time Travel Family. How?"}
                  </h2>
                  <p className="text-xs mt-1">{travelNews[0]?.publishedAt ? formatDate(travelNews[0].publishedAt) : "22 October 2021"} • Travel</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative h-48 sm:h-56 lg:h-60">
                <img
                  src={travelNews[1]?.urlToImage || "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop"}
                  alt=""
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white">
                  <h2 className="font-semibold text-sm sm:text-base lg:text-lg">
                    {travelNews[1]?.title || "How To Work From-Home While Also Traveling"}
                  </h2>
                  <p className="text-xs mt-1">{travelNews[1]?.publishedAt ? formatDate(travelNews[1].publishedAt) : "22 October 2021"} • Travel</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative h-48 sm:h-56 lg:h-60">
                <img
                  src={lifestyleNews[0]?.urlToImage || "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2070&auto=format&fit=crop"}
                  alt=""
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2070&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white">
                  <h2 className="font-semibold text-sm sm:text-base lg:text-lg">
                    {lifestyleNews[0]?.title || "How to Get the Most Out of Your Dry Shampoo"}
                  </h2>
                  <p className="text-xs mt-1">{lifestyleNews[0]?.publishedAt ? formatDate(lifestyleNews[0].publishedAt) : "22 October 2021"} • Life Style</p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="relative h-48 sm:h-56 lg:h-60">
                <img
                  src={lifestyleNews[1]?.urlToImage || "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2070&auto=format&fit=crop"}
                  alt=""
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2070&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white">
                  <h2 className="font-semibold text-sm sm:text-base lg:text-lg">
                    {lifestyleNews[1]?.title || "Why It's Normal for Your Weight to Fluctuate"}
                  </h2>
                  <p className="text-xs mt-1">{lifestyleNews[1]?.publishedAt ? formatDate(lifestyleNews[1].publishedAt) : "22 October 2021"} • Life Style</p>
                </div>
              </div>
            </div>
          </div>

          {/* CATEGORY POSTS SECTION */}
          <div className="max-w-7xl mx-auto px-4 mt-12 sm:mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {/* Travel */}
              <div>
                <div className="flex items-center gap-4 mb-4 sm:mb-6">
                  <h2 className="text-xl sm:text-2xl text-black font-semibold">Travel</h2>
                  <div className="flex-1 h-[2px] bg-gray-400"></div>
                </div>

                <img
                  src={travelNews[0]?.urlToImage || "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop"}
                  alt=""
                  className="w-full h-48 sm:h-56 lg:h-60 object-cover mb-3 sm:mb-4"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop";
                  }}
                />

                <h3 className="text-lg sm:text-xl text-black font-bold mb-2">
                  {travelNews[0]?.title || "5 Things We Know About Flying This Summer"}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
                  {travelNews[0]?.publishedAt ? formatDate(travelNews[0].publishedAt) : "22 October 2021"} • Travel • by {travelNews[0]?.source?.name || "Victoria Anderson"}
                </p>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {travelNews[0]?.description || "Products allow you to create something once and earn revenue while sleeping, sightseeing, or getting a suntan on a beach!..."}
                </p>
              </div>

              {/* Life Style */}
              <div>
                <div className="flex items-center gap-4 mb-4 sm:mb-6">
                  <h2 className="text-xl sm:text-2xl text-black font-semibold">Life Style</h2>
                  <div className="flex-1 h-[2px] bg-gray-400"></div>
                </div>

                <img
                  src={lifestyleNews[0]?.urlToImage || "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2070&auto=format&fit=crop"}
                  alt=""
                  className="w-full h-48 sm:h-56 lg:h-60 object-cover mb-3 sm:mb-4"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2070&auto=format&fit=crop";
                  }}
                />

                <h3 className="text-lg sm:text-xl text-black font-bold mb-2">
                  {lifestyleNews[0]?.title || "How to Get the Most Out of Your Dry Shampoo"}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
                  {lifestyleNews[0]?.publishedAt ? formatDate(lifestyleNews[0].publishedAt) : "22 October 2021"} • Life Style • by {lifestyleNews[0]?.source?.name || "Victoria Anderson"}
                </p>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {lifestyleNews[0]?.description || "If you're using a loose dry shampoo powder, apply to your roots with a fluffy makeup brush to avoid white splotches of powder..."}
                </p>
              </div>

              {/* Fashion */}
              <div>
                <div className="flex items-center gap-4 mb-4 sm:mb-6">
                  <h2 className="text-xl sm:text-2xl text-black font-semibold">Fashion</h2>
                  <div className="flex-1 h-[2px] bg-gray-400"></div>
                </div>

                <img
                  src={fashionNews[0]?.urlToImage || "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2070&auto=format&fit=crop"}
                  alt=""
                  className="w-full h-48 sm:h-56 lg:h-60 object-cover mb-3 sm:mb-4"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2070&auto=format&fit=crop";
                  }}
                />

                <h3 className="text-lg sm:text-xl text-black font-bold mb-2">
                  {fashionNews[0]?.title || "Sheath Yourself in These Cozy-Chic Sweater Dresses"}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
                  {fashionNews[0]?.publishedAt ? formatDate(fashionNews[0].publishedAt) : "22 October 2021"} • Fashion • by {fashionNews[0]?.source?.name || "Victoria Anderson"}
                </p>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {fashionNews[0]?.description || "Solid tones are by far the most versatile for dressing up or down, while patterns like a bold stripe make a statement no matter the venue..."}
                </p>
              </div>
            </div>
          </div>

          {/* HOT TOPICS - HORIZONTAL SCROLL */}
          <div className="max-w-7xl mx-auto px-4 mt-12 sm:mt-16 lg:mt-20">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-black">🔥 Hot Topics</h2>
              <button className="text-red-600 font-semibold hover:text-red-700 text-sm sm:text-base">View All →</button>
            </div>
            <div className="flex overflow-x-auto gap-4 sm:gap-6 pb-4 scrollbar-hide">
              {hotTopics.map((item, index) => (
                <div key={index} className="min-w-[240px] sm:min-w-[260px] lg:min-w-[280px] bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      index === 0 ? "1507525428034-b723cf961d3e" :
                      index === 1 ? "1501785888041-af3ef285b470" :
                      index === 2 ? "1492724441997-5dc865305da7" :
                      index === 3 ? "1487412720507-e7ab37603c6f" :
                      index === 4 ? "1469474968028-56623f02e42e" :
                      "1506905925345-21b42b0b2b5b"
                    }?q=80&w=2070&auto=format&fit=crop`}
                    alt=""
                    className="w-full h-32 sm:h-36 lg:h-40 object-cover"
                  />
                  <div className="p-3 sm:p-4 lg:p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded-full">Trending #{index + 1}</span>
                      <span className="text-gray-400 text-xs">• 2 hours ago</span>
                    </div>
                    <h3 className="font-bold text-black text-sm sm:text-base lg:text-lg leading-tight">
                      {item.title || item}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* EXCLUSIVE INTERVIEW SECTION */}
          <div className="max-w-7xl mx-auto px-4 mt-12 sm:mt-16 lg:mt-20">
            <div className="relative h-[300px] sm:h-[350px] lg:h-[400px] rounded-2xl lg:rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
                alt="Interview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
              <div className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-6 lg:left-10 max-w-xl">
                <span className="bg-yellow-400 text-black px-3 sm:px-4 py-0.5 sm:py-1 text-xs sm:text-sm font-bold rounded-full">Exclusive</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-4 sm:mt-6 mb-2 sm:mb-4">
                  "Technology for the Next Generation"
                </h2>
                <p className="text-white/80 text-sm sm:text-base lg:text-lg mb-3 sm:mb-4">
                  Special interview with Tech Giant CEO
                </p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
                    alt="CEO"
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white"
                  />
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">Elon Musk</p>
                    <p className="text-white/60 text-xs sm:text-sm">Tesla & SpaceX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* VIDEO OF THE WEEK */}
          {/* <div className="max-w-7xl mx-auto px-4 mt-12 sm:mt-16 lg:mt-20">
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-black">🎥 Video of the Week</h2>
              <div className="flex-1 h-[2px] bg-gray-300"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
              {videos.map((video) => (
                <div key={video.id} className="group cursor-pointer">
                  <div className="relative h-40 sm:h-44 lg:h-48 rounded-lg sm:rounded-xl overflow-hidden">
                    <img
                      src={video.image}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                        <span className="text-white text-lg sm:text-xl">▶</span>
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.id}:{video.id} min
                    </span>
                  </div>
                  <h3 className="font-bold text-black text-sm sm:text-base mt-2 sm:mt-3">
                    {video.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">{video.views} views • {video.days} days ago</p>
                </div>
              ))}
            </div>
          </div> */}

          {/* OUR WRITERS - WITHOUT FOLLOW BUTTON */}
          <div className="max-w-7xl mx-auto px-4 mt-12 sm:mt-16 lg:mt-20 mb-12 sm:mb-16 lg:mb-20">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-5 sm:p-8 lg:p-10 border border-gray-100">
              <h2 className="text-2xl sm:text-3xl font-bold text-black text-center mb-6 sm:mb-8 lg:mb-10">
                Our Writers
              </h2>
              
              {/* Mobile: Horizontal Scroll */}
              <div className="flex overflow-x-auto gap-6 pb-4 sm:hidden scrollbar-hide">
                {[
                  { 
                    name: "Victoria Anderson", 
                    role: "Senior Reporter", 
                    articles: 234, 
                    image: "https://images.unsplash.com/photo-1494790108777-466d853b23d5?q=80&w=1887&auto=format&fit=crop" 
                  },
                  { 
                    name: "Michael Chen", 
                    role: "Feature Editor", 
                    articles: 189, 
                    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" 
                  },
                  { 
                    name: "Sarah Johnson", 
                    role: "Sports Journalist", 
                    articles: 156, 
                    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop" 
                  },
                  { 
                    name: "David Kim", 
                    role: "Lifestyle Expert", 
                    articles: 145, 
                    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop" 
                  },
                ].map((author, idx) => (
                  <div key={idx} className="min-w-[200px] text-center group">
                    <div className="relative mb-3 flex justify-center">
                      <img
                        src={author.image}
                        alt={author.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-gray-200 group-hover:border-red-600 transition"
                      />
                    </div>
                    
                    <h3 className="font-bold text-black text-sm">
                      {author.name}
                    </h3>
                    
                    <p className="text-red-600 text-xs mb-1">
                      {author.role}
                    </p>
                    
                    <p className="text-gray-400 text-xs">
                      {author.articles} articles
                    </p>
                  </div>
                ))}
              </div>

              {/* Tablet/Desktop Grid */}
              <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
                {[
                  { 
                    name: "Victoria Anderson", 
                    role: "Senior Reporter", 
                    articles: 234, 
                    image: "https://images.unsplash.com/photo-1494790108777-466d853b23d5?q=80&w=1887&auto=format&fit=crop" 
                  },
                  { 
                    name: "Michael Chen", 
                    role: "Feature Editor", 
                    articles: 189, 
                    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" 
                  },
                  { 
                    name: "Sarah Johnson", 
                    role: "Sports Journalist", 
                    articles: 156, 
                    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop" 
                  },
                  { 
                    name: "David Kim", 
                    role: "Lifestyle Expert", 
                    articles: 145, 
                    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop" 
                  },
                ].map((author, idx) => (
                  <div key={idx} className="text-center group">
                    <div className="relative mb-3 sm:mb-4 flex justify-center">
                      <img
                        src={author.image}
                        alt={author.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full object-cover border-4 border-gray-200 group-hover:border-red-600 transition"
                      />
                    </div>
                    
                    <h3 className="font-bold text-black text-sm sm:text-base lg:text-lg">
                      {author.name}
                    </h3>
                    
                    <p className="text-red-600 text-xs sm:text-sm mb-1">
                      {author.role}
                    </p>
                    
                    <p className="text-gray-400 text-xs">
                      {author.articles} articles
                    </p>
                  </div>
                ))}
              </div>

              {/* Scroll indicator for mobile */}
              <div className="flex justify-center gap-1 mt-4 sm:hidden">
                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
              </div>
            </div>
          </div>

          {/* Last Updated Info */}
          {/* <div className="text-center text-xs text-gray-400 mt-4">
            Last updated: {lastUpdated.toLocaleString('en-US')}
          </div> */}
        </>
      )}
    </div>
  );
};

export default Home;