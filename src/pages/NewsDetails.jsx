import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const NewsDetails = () => {
  const { category, id } = useParams();
  const navigate = useNavigate();
  
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // লোকাল স্টোরেজ বা স্টেট থেকে নিউজ ডাটা লোড করার চেষ্টা
    const loadNewsDetails = () => {
      setLoading(true);
      
      try {
        // প্রথমে লোকাল স্টোরেজ চেক করুন (যদি আগে থেকে সংরক্ষিত থাকে)
        const savedNews = localStorage.getItem(`news_${category}_${id}`);
        
        if (savedNews) {
          setNewsItem(JSON.parse(savedNews));
          setLoading(false);
          return;
        }
        
        // লোকাল স্টোরেজে না থাকলে, আমরা ডেমো ডাটা দেখাব
        // বাস্তব প্রকল্পে, এখানে এপিআই কল হবে
        const demoNews = getDemoNews(category, id);
        
        if (demoNews) {
          setNewsItem(demoNews);
          // ভবিষ্যতের জন্য সংরক্ষণ করুন
          localStorage.setItem(`news_${category}_${id}`, JSON.stringify(demoNews));
        } else {
          setError("News item not found");
        }
      } catch (err) {
        setError("Failed to load news");
      } finally {
        setLoading(false);
      }
    };
    
    loadNewsDetails();
  }, [category, id]);

  // ডেমো নিউজ ডাটা জেনারেট করার ফাংশন
  const getDemoNews = (cat, itemId) => {
    // ক্যাটাগরি অনুযায়ী ডেমো ডাটা
    const demoData = {
      fashion: [
        {
          id: 1,
          title: "Sheath Yourself in These Cozy-Chic Sweater Dresses",
          image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1887&auto=format&fit=crop",
          date: "February 19, 2026",
          time: "10:30 AM",
          author: "Emma Roberts",
          category: "Fashion",
          excerpt: "Solid tones are by far the most versatile for dressing up or down, while patterns like a bold stripe make a statement no matter the venue.",
          content: "Winter is the perfect time to experiment with sweater dresses. From chunky knits to fine gauge styles, there's a sweater dress for every occasion. Solid tones are by far the most versatile for dressing up or down, while patterns like a bold stripe make a statement no matter the venue. Pair with knee-high boots for a casual look, or dress it up with heels and statement jewelry for evening events. The key to mastering the sweater dress trend is finding the right fit and fabric that flatters your body type.",
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
          category: "Fashion",
          excerpt: "From chunky knits to leather everything, here's your complete guide to staying stylish this winter season.",
          content: "As the temperature drops, fashion heats up with these winter trends. In: Chunky knits, leather everything, statement coats, and knee-high boots. Out: Sheer fabrics, sandals, and minimalist accessories. This winter is all about making a statement with your outerwear and accessories. Don't be afraid to mix textures and patterns for a truly unique look.",
          rating: "4.7",
          likes: 980
        }
      ],
      food: [
        {
          id: 1,
          title: "World's Top 10 Restaurants 2024",
          image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
          date: "February 19, 2026",
          time: "10:30 AM",
          author: "Gordon Ramsay",
          category: "Food",
          excerpt: "From molecular gastronomy to traditional cuisine, discover the world's best dining destinations for 2024.",
          content: "The culinary world has never been more exciting. From Copenhagen's Noma to New York's Eleven Madison Park, these restaurants are pushing the boundaries of what's possible with food. This year's list includes three newcomers who are revolutionizing their local food scenes with innovative techniques and sustainable practices. Whether you're a fan of molecular gastronomy or prefer traditional cuisine, these restaurants offer unforgettable dining experiences.",
          rating: "4.9",
          likes: 1250
        }
      ],
      travel: [
        {
          id: 1,
          title: "We are a Full-Time Travel Family. How?",
          image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop",
          date: "February 19, 2026",
          time: "10:30 AM",
          author: "Victoria Anderson",
          category: "Travel",
          excerpt: "Products allow you to create something once and earn revenue while sleeping, sightseeing, or getting a suntan on a beach!",
          content: "Many people dream of traveling the world full-time, but few know how to make it happen. We've been traveling as a family for three years now, and the secret is creating passive income streams. Whether it's digital products, affiliate marketing, or remote work, having income that doesn't require your constant presence is key. We've visited 23 countries and counting, all while our kids continue their education online.",
          rating: "4.5",
          likes: 345
        }
      ],
      sport: [
        {
          id: 1,
          title: "Bangladesh-India Cricket Series: BCB in talks with BCCI",
          image: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?q=80&w=2070&auto=format&fit=crop",
          date: "February 19, 2026",
          time: "10:30 AM",
          author: "Sports Desk",
          category: "Sport",
          excerpt: "BCB and BCCI are in talks for a bilateral series. The Indian team may tour Bangladesh next month.",
          content: "Cricket fans in Bangladesh have reason to celebrate as the Bangladesh Cricket Board (BCB) is in advanced talks with the Board of Control for Cricket in India (BCCI) for a bilateral series. Sources indicate that the Indian team may tour Bangladesh as early as next month for a series comprising two Test matches and three One Day Internationals. This would be the first full-fledged series between the two nations in three years.",
          rating: "4.6",
          likes: 890
        }
      ],
      lifestyle: [
        {
          id: 1,
          title: "How to Get the Most Out of Your Dry Shampoo",
          image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2070&auto=format&fit=crop",
          date: "February 19, 2026",
          time: "10:30 AM",
          author: "Sarah Johnson",
          category: "Lifestyle",
          excerpt: "If you're using a loose dry shampoo powder, apply to your roots with a fluffy makeup brush to avoid white splotches of powder.",
          content: "Dry shampoo is a lifesaver for busy mornings, but are you using it correctly? The key to avoiding that dreaded white residue is application technique. For powder formulas, use a fluffy makeup brush to apply directly to your roots. This gives you more control and distributes the product evenly. For spray formulas, hold the can at least 6 inches away from your scalp and spray in short bursts. Let it sit for 2-3 minutes before massaging it in and brushing through.",
          rating: "4.4",
          likes: 234
        }
      ]
    };
    
    // ক্যাটাগরি অনুযায়ী ডাটা খুঁজে বের করা
    const categoryData = demoData[cat];
    if (categoryData) {
      return categoryData.find(item => item.id === parseInt(itemId)) || null;
    }
    
    return null;
  };

  const goBack = () => {
    navigate(-1);
  };

  // ক্যাটাগরি অনুযায়ী ব্যাকগ্রাউন্ড রঙ নির্ধারণ
  const getCategoryColor = (cat) => {
    switch (cat) {
      case 'travel': return 'bg-red-600';
      case 'lifestyle': return 'bg-green-600';
      case 'fashion': return 'bg-purple-600';
      case 'sport': return 'bg-blue-600';
      case 'food': return 'bg-orange-600';
      default: return 'bg-red-600';
    }
  };

  if (loading) {
    return (
      <div className="bg-gray-100 min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-red-600 border-t-transparent"></div>
          <p className="mt-4 text-gray-600">Loading news...</p>
        </div>
      </div>
    );
  }

  if (error || !newsItem) {
    return (
      <div className="bg-gray-100 min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Oops!</h2>
          <p className="text-gray-600 mb-6">{error || "News item not found."}</p>
          <button
            onClick={goBack}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition"
          >
            ← Go Back
          </button>
        </div>
      </div>
    );
  }

  const categoryColor = getCategoryColor(newsItem.category?.toLowerCase() || category);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={goBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition group"
        >
          <span className="text-2xl group-hover:-translate-x-1 transition">←</span>
          <span>Back</span>
        </button>

        {/* Main News Card */}
        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-80 md:h-96">
            <img
              src={newsItem.image}
              alt={newsItem.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop";
              }}
            />
            {/* Category Badge */}
            <div className={`absolute top-6 left-6 ${categoryColor} text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide`}>
              {newsItem.category || category}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
              {newsItem.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-6 pb-4 border-b border-gray-200">
              <span className="font-medium text-gray-800">{newsItem.author}</span>
              <span>•</span>
              <span>{newsItem.date}</span>
              <span>•</span>
              <span>{newsItem.time}</span>
            </div>

            {/* Description/Content */}
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg font-medium text-gray-900 mb-4">
                {newsItem.excerpt}
              </p>
              <p className="whitespace-pre-line">
                {newsItem.content || "Full content is not available for this article. Please visit the source website for more information."}
              </p>
            </div>

            {/* Engagement Stats */}
            <div className="flex flex-wrap items-center gap-4 mt-8 pt-4 border-t border-gray-200">
              {newsItem.rating && (
                <span className="flex items-center gap-1 text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                  ⭐ {newsItem.rating} Rating
                </span>
              )}
              {newsItem.likes && (
                <span className="flex items-center gap-1 text-sm bg-pink-100 text-pink-700 px-3 py-1 rounded-full">
                  ❤️ {newsItem.likes} Likes
                </span>
              )}
            </div>

            {/* Read Full Article Button */}
            <div className="mt-8 text-center md:text-left">
              <Link
                to={`/${category}`}
                className={`inline-block ${categoryColor} hover:opacity-90 text-white font-bold py-3 px-8 rounded-full transition shadow-lg`}
              >
                ← Back to {category.charAt(0).toUpperCase() + category.slice(1)}
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default NewsDetails;