// pages/MovieMedia.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MovieMedia = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [activeCategory, setActiveCategory] = useState("all");
  const [visiblePosts, setVisiblePosts] = useState(6);

  // ---------- Your GNews API Key Here ----------
  const API_KEY = "df43bba9778a35b8cc21a6106da959a9";

  // ---------- Fetch Movie & Media News Function ----------
  const fetchMovieMediaNews = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://gnews.io/api/v4/search?q=movie OR film OR cinema OR hollywood OR bollywood OR netflix OR amazon prime OR disney+&lang=en&country=us&max=20&apikey=${API_KEY}`
      );
      
      const data = response.data;
      
      if (data.articles && data.articles.length > 0) {
        const formattedNews = data.articles.map((article, index) => {
          const title = article.title?.toLowerCase() || "";
          const description = article.description?.toLowerCase() || "";
          
          let mediaType = "Other";
          let industry = "International";
          let contentType = "News";
          
          // Detect media type
          if (title.includes("movie") || description.includes("movie") || 
              title.includes("film") || description.includes("film")) {
            mediaType = "Movie";
            contentType = "Movie News";
          } else if (title.includes("series") || description.includes("series") || 
                     title.includes("show") || description.includes("tv show")) {
            mediaType = "TV Series";
            contentType = "TV News";
          } else if (title.includes("actor") || description.includes("actor") || 
                     title.includes("actress") || description.includes("actress") ||
                     title.includes("star") || description.includes("celebrity")) {
            mediaType = "Celebrity";
            contentType = "Celebrity News";
          } else if (title.includes("netflix") || description.includes("netflix")) {
            mediaType = "Netflix";
            contentType = "Streaming";
          } else if (title.includes("amazon") || description.includes("amazon prime")) {
            mediaType = "Amazon Prime";
            contentType = "Streaming";
          } else if (title.includes("disney") || description.includes("disney+")) {
            mediaType = "Disney+";
            contentType = "Streaming";
          } else if (title.includes("review") || description.includes("review")) {
            mediaType = "Review";
            contentType = "Review";
          } else if (title.includes("trailer") || description.includes("trailer")) {
            mediaType = "Trailer";
            contentType = "Trailer";
          } else if (title.includes("oscar") || description.includes("academy award") || 
                     title.includes("award") || description.includes("film festival")) {
            mediaType = "Awards";
            contentType = "Awards";
          } else if (title.includes("box office") || description.includes("box office")) {
            mediaType = "Box Office";
            contentType = "Box Office";
          } else if (title.includes("behind the scenes") || description.includes("bts")) {
            mediaType = "Behind the Scenes";
            contentType = "BTS";
          } else if (title.includes("interview") || description.includes("interview")) {
            mediaType = "Interview";
            contentType = "Interview";
          }
          
          // Detect industry
          if (title.includes("hollywood") || description.includes("hollywood")) {
            industry = "Hollywood";
          } else if (title.includes("bollywood") || description.includes("bollywood") ||
                     title.includes("indian film") || description.includes("indian cinema")) {
            industry = "Bollywood";
          } else if (title.includes("tollywood") || description.includes("tollywood") ||
                     title.includes("bengali film") || description.includes("bengali cinema") ||
                     title.includes("dhallywood") || description.includes("bangladesh film")) {
            industry = "Tollywood/Dhallywood";
          } else if (title.includes("korean") || description.includes("korean drama") ||
                     title.includes("kdrama") || description.includes("k-film")) {
            industry = "Korean";
          } else if (title.includes("japanese") || description.includes("japanese film") ||
                     title.includes("anime")) {
            industry = "Japanese";
          }
          
          // Detect release status
          let releaseStatus = "Announced";
          if (title.includes("released") || description.includes("released") ||
              title.includes("now playing") || description.includes("in theaters")) {
            releaseStatus = "Now Playing";
          } else if (title.includes("upcoming") || description.includes("upcoming") ||
                     title.includes("coming soon")) {
            releaseStatus = "Upcoming";
          } else if (title.includes("in production") || description.includes("filming")) {
            releaseStatus = "In Production";
          }
          
          const getRandomMediaImage = () => {
            const images = [
              "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1542204160-126bf84f845c?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1585951237313-1979e4df7385?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=2070&auto=format&fit=crop"
            ];
            return images[index % images.length];
          };
          
          return {
            id: index + 1,
            title: article.title || "Title not available",
            image: article.image || getRandomMediaImage(),
            date: new Date(article.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }),
            time: new Date(article.publishedAt).toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit'
            }),
            author: article.source?.name || "Media Desk",
            mediaType: mediaType,
            industry: industry,
            contentType: contentType,
            releaseStatus: releaseStatus,
            excerpt: article.description?.substring(0, 150) + "..." || "Read full article...",
            url: article.url,
            rating: (3.5 + Math.random() * 1.5).toFixed(1),
            likes: Math.floor(100 + Math.random() * 900),
            comments: Math.floor(20 + Math.random() * 200),
            isBlockbuster: Math.random() > 0.7,
            isCriticallyAcclaimed: Math.random() > 0.8,
            isBangladeshi: title.includes("bangladesh") || description.includes("bangladesh") ||
                           title.includes("dhallywood") || description.includes("dhallywood")
          };
        });
        
        setNews(formattedNews);
      } else {
        setNews(getDemoMovieMediaNews());
      }
    } catch (error) {
      console.error("Error fetching movie & media news:", error);
      setNews(getDemoMovieMediaNews());
    } finally {
      setLoading(false);
      setLastUpdated(new Date());
    }
  };

  // ---------- Demo Movie & Media News (shown if API fails) ----------
  const getDemoMovieMediaNews = () => {
    return [
      {
        id: 1,
        title: "Avengers: Secret Wars - Everything We Know So Far",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop",
        date: "February 19, 2026",
        time: "10:30 AM",
        author: "Marvel Fan",
        mediaType: "Movie",
        industry: "Hollywood",
        contentType: "Movie News",
        releaseStatus: "In Production",
        excerpt: "The next Avengers movie is shaping up to be the biggest crossover event in cinema history. Here's everything we know about the cast, plot, and release date.",
        rating: "4.9",
        likes: 3450,
        comments: 890,
        isBlockbuster: true
      },
      {
        id: 2,
        title: "Netflix's 'The Crown' Season 7: Release Date and Cast",
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop",
        date: "February 18, 2026",
        time: "11:45 AM",
        author: "Streaming Editor",
        mediaType: "TV Series",
        industry: "Hollywood",
        contentType: "TV News",
        releaseStatus: "Upcoming",
        excerpt: "The final season of the hit royal drama is coming soon. Find out when you can watch it and who's joining the cast.",
        rating: "4.8",
        likes: 2100,
        comments: 450
      },
      {
        id: 3,
        title: "Oscars 2026: Full Winners List and Highlights",
        image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop",
        date: "February 17, 2026",
        time: "02:20 PM",
        author: "Awards Desk",
        mediaType: "Awards",
        industry: "Hollywood",
        contentType: "Awards",
        releaseStatus: "Announced",
        excerpt: "The 98th Academy Awards celebrated the best in film. See the complete list of winners and the biggest moments of the night.",
        rating: "4.7",
        likes: 5600,
        comments: 1200,
        isCriticallyAcclaimed: true
      },
      {
        id: 4,
        title: "Shakib Khan's New Movie Breaks Box Office Records",
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop",
        date: "February 16, 2026",
        time: "09:15 AM",
        author: "Dhallywood Reporter",
        mediaType: "Movie",
        industry: "Tollywood/Dhallywood",
        contentType: "Box Office",
        releaseStatus: "Now Playing",
        excerpt: "The King of Dhallywood does it again! Shakib Khan's latest release has broken multiple box office records in its opening weekend.",
        rating: "4.8",
        likes: 4300,
        comments: 890,
        isBangladeshi: true,
        isBlockbuster: true
      },
      {
        id: 5,
        title: "Squid Game Season 2: First Look and Plot Details",
        image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056&auto=format&fit=crop",
        date: "February 15, 2026",
        time: "04:50 PM",
        author: "K-Drama Expert",
        mediaType: "TV Series",
        industry: "Korean",
        contentType: "TV News",
        releaseStatus: "Upcoming",
        excerpt: "Netflix has released the first images from the highly anticipated second season of the global phenomenon. Here's what to expect.",
        rating: "4.9",
        likes: 8900,
        comments: 2100
      },
      {
        id: 6,
        title: "Dune: Part Three Officially Announced",
        image: "https://images.unsplash.com/photo-1542204160-126bf84f845c?q=80&w=2070&auto=format&fit=crop",
        date: "February 14, 2026",
        time: "12:30 PM",
        author: "Film News",
        mediaType: "Movie",
        industry: "Hollywood",
        contentType: "Movie News",
        releaseStatus: "Announced",
        excerpt: "Denis Villeneuve confirms that Dune: Messiah is in development, completing his adaptation of Frank Herbert's epic saga.",
        rating: "4.8",
        likes: 6700,
        comments: 1500
      },
      {
        id: 7,
        title: "Exclusive Interview: Porimoni on Her New Film",
        image: "https://images.unsplash.com/photo-1585951237313-1979e4df7385?q=80&w=2070&auto=format&fit=crop",
        date: "February 13, 2026",
        time: "10:00 AM",
        author: "Celebrity Desk",
        mediaType: "Interview",
        industry: "Tollywood/Dhallywood",
        contentType: "Interview",
        releaseStatus: "Announced",
        excerpt: "We sat down with the popular actress to discuss her upcoming projects, her journey in the film industry, and her future plans.",
        rating: "4.6",
        likes: 2300,
        comments: 450,
        isBangladeshi: true
      },
      {
        id: 8,
        title: "Studio Ghibli's New Film Gets First Trailer",
        image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=2070&auto=format&fit=crop",
        date: "February 12, 2026",
        time: "03:45 PM",
        author: "Anime News",
        mediaType: "Trailer",
        industry: "Japanese",
        contentType: "Trailer",
        releaseStatus: "Upcoming",
        excerpt: "The legendary animation studio returns with a new original film. Watch the beautiful first trailer here.",
        rating: "4.9",
        likes: 7800,
        comments: 1800,
        isCriticallyAcclaimed: true
      },
      {
        id: 9,
        title: "Box Office Report: 'Deadpool 3' Dominates Weekend",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop",
        date: "February 11, 2026",
        time: "11:20 AM",
        author: "Box Office Analyst",
        mediaType: "Box Office",
        industry: "Hollywood",
        contentType: "Box Office",
        releaseStatus: "Now Playing",
        excerpt: "Ryan Reynolds returns as the Merc with the Mouth in the highest-grossing opening of the year so far. Full box office breakdown inside.",
        rating: "4.7",
        likes: 3400,
        comments: 780,
        isBlockbuster: true
      }
    ];
  };

  // ---------- Auto Update ----------
  useEffect(() => {
    fetchMovieMediaNews();
    
    const interval = setInterval(() => {
      console.log("Auto-updating movie & media news...");
      fetchMovieMediaNews();
    }, 600000);
    
    return () => clearInterval(interval);
  }, []);

  // ---------- Category Filter ----------
  const categories = [
    { id: "all", name: "All News", count: news.length },
    { id: "movies", name: "Movies", count: news.filter(n => n.mediaType === "Movie").length },
    { id: "tvseries", name: "TV Series", count: news.filter(n => n.mediaType === "TV Series").length },
    { id: "celebrity", name: "Celebrity", count: news.filter(n => n.mediaType === "Celebrity" || n.mediaType === "Interview").length },
    { id: "hollywood", name: "Hollywood", count: news.filter(n => n.industry === "Hollywood").length },
    { id: "bollywood", name: "Bollywood", count: news.filter(n => n.industry === "Bollywood").length },
    { id: "bangladesh", name: "Bangladesh", count: news.filter(n => n.isBangladeshi).length },
    { id: "streaming", name: "Streaming", count: news.filter(n => n.contentType === "Streaming").length },
    { id: "awards", name: "Awards", count: news.filter(n => n.mediaType === "Awards").length }
  ];

  const filteredPosts = activeCategory === "all" 
    ? news 
    : activeCategory === "movies"
      ? news.filter(n => n.mediaType === "Movie")
      : activeCategory === "tvseries"
        ? news.filter(n => n.mediaType === "TV Series")
        : activeCategory === "celebrity"
          ? news.filter(n => n.mediaType === "Celebrity" || n.mediaType === "Interview")
          : activeCategory === "hollywood"
            ? news.filter(n => n.industry === "Hollywood")
            : activeCategory === "bollywood"
              ? news.filter(n => n.industry === "Bollywood")
              : activeCategory === "bangladesh"
                ? news.filter(n => n.isBangladeshi)
                : activeCategory === "streaming"
                  ? news.filter(n => n.contentType === "Streaming")
                  : activeCategory === "awards"
                    ? news.filter(n => n.mediaType === "Awards")
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

  const trendingMovie = news.length > 0 ? 
    news.sort((a, b) => b.likes - a.likes)[0] : null;

  return (
    <div className="bg-gray-100 min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-black">Movie & Media</h1>
              <p className="text-gray-600 mt-1">Latest movies, TV series, celebrity news, and streaming updates</p>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
              <div className="text-lg font-semibold text-gray-800">{today}</div>
              <div className="text-sm text-gray-500">Last updated: {currentTime}</div>
            </div>
          </div>
          <div className="h-1 w-32 bg-yellow-600"></div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-10">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-yellow-600 border-t-transparent"></div>
            <p className="mt-2 text-gray-600">Loading movie & media news...</p>
          </div>
        )}

        {/* Hero Section - Trending Movie */}
        {!loading && trendingMovie && (
          <div className="relative h-[350px] md:h-[400px] rounded-2xl overflow-hidden mb-8 group">
            <img
              src={trendingMovie.image}
              alt={trendingMovie.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white max-w-2xl">
              <div className="flex gap-2 mb-2">
                <span className="bg-yellow-600 text-white px-3 py-1 text-xs font-bold rounded-full">
                  🔥 TRENDING
                </span>
                <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 text-xs font-bold rounded-full">
                  {trendingMovie.industry}
                </span>
                {trendingMovie.isBlockbuster && (
                  <span className="bg-purple-600 text-white px-3 py-1 text-xs font-bold rounded-full">
                    🎬 BLOCKBUSTER
                  </span>
                )}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{trendingMovie.title}</h2>
              <p className="text-gray-200 text-sm mb-3">{trendingMovie.excerpt}</p>
              <div className="flex items-center gap-4 text-sm">
                <span>{trendingMovie.mediaType}</span>
                <span>•</span>
                <span>{trendingMovie.releaseStatus}</span>
                <span>•</span>
                <span>⭐ {trendingMovie.rating} ({trendingMovie.likes} likes)</span>
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
                    ? 'bg-yellow-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-yellow-100'
                }`}
              >
                {category.name}
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeCategory === category.id 
                    ? 'bg-white text-yellow-600' 
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
              <div className="text-xl font-bold text-yellow-600">{news.filter(n => n.mediaType === "Movie").length}</div>
              <div className="text-xs text-gray-500">Movies</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <div className="text-xl font-bold text-yellow-600">{news.filter(n => n.mediaType === "TV Series").length}</div>
              <div className="text-xs text-gray-500">TV Series</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <div className="text-xl font-bold text-yellow-600">{news.filter(n => n.isBangladeshi).length}</div>
              <div className="text-xs text-gray-500">Bangladesh</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <div className="text-xl font-bold text-yellow-600">
                {(news.reduce((acc, item) => acc + (item.rating ? parseFloat(item.rating) : 0), 0) / news.length).toFixed(1)}
              </div>
              <div className="text-xs text-gray-500">Avg Rating</div>
            </div>
          </div>
        )}

        {/* News Grid */}
        {!loading && (
          <>
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl shadow">
                <p className="text-gray-500 text-lg">No movie & media news found</p>
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
                          e.target.src = "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop";
                        }}
                      />
                      <div className="absolute top-3 left-3 flex gap-1 flex-wrap">
                        {post.isBangladeshi && (
                          <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                            🇧🇩 BD
                          </span>
                        )}
                        {post.isBlockbuster && (
                          <span className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                            🎬 Blockbuster
                          </span>
                        )}
                        {post.isCriticallyAcclaimed && (
                          <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                            ⭐ Acclaimed
                          </span>
                        )}
                      </div>
                      <span className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {post.mediaType}
                      </span>
                    </div>
                    
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.time}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-black mb-2 hover:text-yellow-600 cursor-pointer leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      {/* Media Details */}
                      <div className="flex flex-wrap gap-2 mb-3 text-xs">
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                          {post.industry}
                        </span>
                        {post.rating && (
                          <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full flex items-center gap-1">
                            ⭐ {post.rating}
                          </span>
                        )}
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          {post.releaseStatus}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                        <span className="text-xs text-gray-500">{post.author}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-pink-600">❤️ {post.likes}</span>
                          <Link
                            to={`/news/movie-media/${post.id}`}
                            className="text-yellow-600 hover:text-yellow-700 text-sm font-semibold flex items-center gap-1"
                          >
                            Read More
                            <span className="text-lg">→</span>
                          </Link>
                        </div>
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
                  className="bg-yellow-600 text-white hover:bg-yellow-700 px-8 py-3 rounded-full font-bold transition shadow-md"
                >
                  Load More ({filteredPosts.length - visiblePosts})
                </button>
              </div>
            )}
          </>
        )}

        {/* Movie Trivia */}
        {!loading && (
          <div className="mt-8 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-2xl p-6 text-white">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🎬</span>
              <h3 className="text-xl font-bold">Movie Trivia of the Day</h3>
            </div>
            <p className="text-sm opacity-90 mb-3">
              "The iconic 'I'll be back' line from The Terminator was almost 'I'll come back'. 
              Arnold Schwarzenegger suggested the change because he thought it sounded more threatening."
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieMedia;