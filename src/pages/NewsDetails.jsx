import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const NewsDetails = () => {
  const { category, id } = useParams();
  const navigate = useNavigate();
  
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // পৃষ্ঠা লোড হওয়ার সাথে সাথে ডাটা লোড করা শুরু হবে
    console.log("Loading news details for:", category, id);
    loadNewsDetails();
    
    // স্ক্রোল উপরে নিয়ে যাওয়া
    window.scrollTo(0, 0);
  }, [category, id]); // category বা id পরিবর্তন হলে আবার লোড হবে

  const loadNewsDetails = () => {
    setLoading(true);
    
    // সিমুলেট করার জন্য একটু দেরি (রিয়েল এপিআই কলের মতো)
    setTimeout(() => {
      try {
        // ক্যাটাগরি অনুযায়ী ডাটা খুঁজে বের করা
        const newsData = getNewsData(category, parseInt(id));
        
        if (newsData) {
          setNewsItem(newsData);
          setError(null);
        } else {
          setError("News item not found");
        }
      } catch (err) {
        setError("Failed to load news");
      } finally {
        setLoading(false);
      }
    }, 500); // ৫০০ মিলিসেকেন্ড delay (লোডিং দেখানোর জন্য)
  };

  // ক্যাটাগরি অনুযায়ী নিউজ ডাটা রিটার্ন করে
  const getNewsData = (cat, itemId) => {
    // কমপ্লিট ডাটাবেস - সব ক্যাটাগরির সব নিউজ এখানে
    const database = {
      fashion: [
        {
          id: 1,
          title: "Sheath Yourself in These Cozy-Chic Sweater Dresses",
          image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1887&auto=format&fit=crop",
          date: "February 19, 2026",
          time: "10:30 AM",
          author: "Emma Roberts",
          category: "Fashion",
          fashionType: "Dresses",
          season: "Winter",
          excerpt: "Solid tones are by far the most versatile for dressing up or down, while patterns like a bold stripe make a statement no matter the venue.",
          content: "Winter is the perfect time to experiment with sweater dresses. From chunky knits to fine gauge styles, there's a sweater dress for every occasion. Solid tones are by far the most versatile for dressing up or down, while patterns like a bold stripe make a statement no matter the venue.\n\nPair with knee-high boots for a casual weekend look, or dress it up with heels and statement jewelry for evening events. The key to mastering the sweater dress trend is finding the right fit and fabric that flatters your body type.\n\nThis season, designers are embracing longer lengths and higher necklines for added warmth and sophistication. Look for dresses with interesting textures like cable knit, ribbed, or brushed finishes that add visual interest to your outfit.",
          rating: "4.8",
          likes: 1250,
          isTrend: false,
          isDesigner: false
        },
        {
          id: 2,
          title: "Winter Fashion Trends 2024: What's In and What's Out",
          image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
          date: "February 18, 2026",
          time: "11:45 AM",
          author: "Sophie Turner",
          category: "Fashion",
          fashionType: "Trends",
          season: "Winter",
          excerpt: "From chunky knits to leather everything, here's your complete guide to staying stylish this winter season.",
          content: "As the temperature drops, fashion heats up with these winter trends.\n\n✅ IN: Chunky knits, leather everything, statement coats, knee-high boots, bold colors, and mixed textures.\n❌ OUT: Sheer fabrics, sandals, minimalist accessories, and neon brights.\n\nThis winter is all about making a statement with your outerwear and accessories. Don't be afraid to mix textures and patterns for a truly unique look.\n\nLayering is key this season. Try combining different weights and textures to create depth and interest in your outfits. A chunky knit over a silk slip dress, or a leather jacket over a floral midi dress are perfect examples of this trend.",
          rating: "4.7",
          likes: 980,
          isTrend: true,
          isDesigner: false
        },
        {
          id: 3,
          title: "Sustainable Fashion: Brands to Watch",
          image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1887&auto=format&fit=crop",
          date: "February 17, 2026",
          time: "02:20 PM",
          author: "Victoria Anderson",
          category: "Fashion",
          fashionType: "Sustainable",
          season: "All Year",
          excerpt: "Eco-friendly doesn't mean compromising on style. Discover these sustainable fashion brands making a difference.",
          content: "The fashion industry is finally waking up to its environmental impact, and sustainable brands are leading the charge. Here are our top picks:\n\n1. **Stella McCartney** - The pioneer of luxury sustainable fashion, using vegetarian leather and recycled materials.\n2. **Patagonia** - Not just for outdoors, their commitment to the environment is unmatched.\n3. **Reformation** - Making sustainable fashion accessible and stylish for everyone.\n4. **Eileen Fisher** - Timeless designs with a focus on circular fashion.\n5. **Veja** - Ethical sneakers made from organic cotton and wild rubber.\n\nThese brands prove that you can look good while doing good for the planet. From recycled fabrics to ethical labor practices, they're setting new standards for the industry.",
          rating: "4.9",
          likes: 1560,
          isTrend: false,
          isDesigner: true
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
          mealType: "Dinner",
          excerpt: "From molecular gastronomy to traditional cuisine, discover the world's best dining destinations for 2024.",
          content: "The culinary world has never been more exciting. Here are the top 10 restaurants you must visit in 2024:\n\n1. **Disfrutar** - Barcelona, Spain\n2. **Atomix** - New York, USA\n3. **Quintonil** - Mexico City, Mexico\n4. **Le Bernardin** - New York, USA\n5. **Trèsind Studio** - Dubai, UAE\n6. **Schloss Schauenstein** - Fürstenau, Switzerland\n7. **Maido** - Lima, Peru\n8. **Tim Raue** - Berlin, Germany\n9. **The Clove Club** - London, UK\n10. **Odette** - Singapore\n\nFrom Copenhagen's Noma to New York's Eleven Madison Park, these restaurants are pushing the boundaries of what's possible with food. This year's list includes three newcomers who are revolutionizing their local food scenes with innovative techniques and sustainable practices.",
          rating: "4.9",
          likes: 1250,
          isRestaurant: true,
          isRecipe: false
        },
        {
          id: 2,
          title: "Easy Pasta Recipes for Beginners",
          image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2132&auto=format&fit=crop",
          date: "February 18, 2026",
          time: "11:45 AM",
          author: "Jamie Oliver",
          category: "Food",
          mealType: "Lunch",
          excerpt: "Master the art of Italian cooking with these simple yet delicious pasta recipes that anyone can make.",
          content: "Pasta is the ultimate comfort food and surprisingly easy to make from scratch. Here are three beginner-friendly recipes:\n\n**1. Classic Spaghetti Aglio e Olio**\nIngredients: Spaghetti, garlic, olive oil, red pepper flakes, parsley\n\n**2. Creamy Mushroom Fettuccine**\nIngredients: Fettuccine, mushrooms, cream, parmesan, garlic\n\n**3. Simple Tomato Basil Penne**\nIngredients: Penne, canned tomatoes, fresh basil, garlic, olive oil\n\n**Tips for perfect pasta:**\n- Always salt your water generously\n- Cook pasta 1 minute less than package directions\n- Reserve some pasta water before draining\n- Finish cooking the pasta in the sauce",
          rating: "4.7",
          likes: 890,
          cookingTime: "25 mins",
          difficulty: "Easy",
          isRecipe: true,
          isRestaurant: false
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
          travelType: "Family",
          destination: "International",
          budget: "Medium",
          excerpt: "Products allow you to create something once and earn revenue while sleeping, sightseeing, or getting a suntan on a beach!",
          content: "Many people dream of traveling the world full-time, but few know how to make it happen. We've been traveling as a family for three years now, and the secret is creating passive income streams.\n\n**How we make money on the road:**\n1. **Digital Products** - E-books, courses, printables\n2. **Affiliate Marketing** - Recommending products we love\n3. **Remote Work** - Freelance writing and consulting\n4. **YouTube** - Documenting our travels\n\nWe've visited 23 countries and counting, all while our kids continue their education online. The key is finding a rhythm that works for your family and being flexible with your expectations.",
          readTime: 6,
          likes: 345,
          saves: 89
        },
        {
          id: 2,
          title: "How To Work From-Home While Also Traveling",
          image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop",
          date: "February 18, 2026",
          time: "11:45 AM",
          author: "Michael Chen",
          category: "Travel",
          travelType: "Digital Nomad",
          destination: "International",
          budget: "Medium",
          excerpt: "Discover the best practices for maintaining productivity while exploring the world.",
          content: "The digital nomad lifestyle is more accessible than ever. Here's how to make it work:\n\n**Essential Tools:**\n- Reliable laptop and noise-canceling headphones\n- Portable Wi-Fi hotspot\n- Cloud storage for files\n- Time tracking apps\n\n**Best Practices:**\n1. Establish a routine, even when changing time zones\n2. Research Wi-Fi quality before booking accommodations\n3. Use co-working spaces for focus and networking\n4. Set boundaries between work and exploration time\n\n**Best Cities for Digital Nomads:**\n- Chiang Mai, Thailand\n- Lisbon, Portugal\n- Medellín, Colombia\n- Bali, Indonesia\n- Budapest, Hungary",
          readTime: 8,
          likes: 567,
          saves: 123
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
          category: "Cricket",
          country: "bangladesh",
          excerpt: "BCB and BCCI are in talks for a bilateral series. The Indian team may tour Bangladesh next month.",
          content: "Cricket fans in Bangladesh have reason to celebrate as the Bangladesh Cricket Board (BCB) is in advanced talks with the Board of Control for Cricket in India (BCCI) for a bilateral series.\n\nSources indicate that the Indian team may tour Bangladesh as early as next month for a series comprising:\n- 2 Test matches\n- 3 One Day Internationals\n- 2 T20 Internationals\n\nThis would be the first full-fledged series between the two nations in three years. The last time India toured Bangladesh was in 2022 for a two-match Test series.\n\nBoth boards are reportedly working on finalizing the itinerary and venues, with Dhaka's Sher-e-Bangla Stadium and Chattogram's Zahur Ahmed Chowdhury Stadium being the likely hosts.",
          rating: "4.6",
          likes: 890,
          isLive: true,
          isBreaking: true
        },
        {
          id: 2,
          title: "Champions League Final: Real Madrid vs Bayern Munich",
          image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=2023&auto=format&fit=crop",
          date: "February 18, 2026",
          time: "11:15 PM",
          author: "Football Desk",
          category: "Sport",
          category: "Football",
          country: "international",
          excerpt: "Real Madrid and Bayern Munich will face each other in the UEFA Champions League final at Wembley on June 1.",
          content: "The stage is set for one of the most anticipated Champions League finals in recent memory as Real Madrid prepares to take on Bayern Munich at Wembley Stadium.\n\n**Match Details:**\n- Date: June 1, 2026\n- Venue: Wembley Stadium, London\n- Kick-off: 8:00 PM BST\n\n**Road to the Final:**\nReal Madrid defeated Manchester City in the semifinals, while Bayern Munich overcame Paris Saint-Germain in a thrilling two-legged tie.\n\n**Key Players to Watch:**\n- Jude Bellingham (Real Madrid)\n- Harry Kane (Bayern Munich)\n- Vinícius Jr. (Real Madrid)\n- Jamal Musiala (Bayern Munich)",
          rating: "4.8",
          likes: 1200,
          isLive: true,
          isBreaking: false
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
          lifestyleType: "Beauty",
          excerpt: "If you're using a loose dry shampoo powder, apply to your roots with a fluffy makeup brush to avoid white splotches of powder.",
          content: "Dry shampoo is a lifesaver for busy mornings, but are you using it correctly?\n\n**Common Mistakes:**\n- Applying too close to the scalp\n- Not letting it sit long enough\n- Using the wrong formula for your hair color\n\n**Pro Tips:**\n1. For powder formulas, use a fluffy makeup brush to apply directly to your roots. This gives you more control and distributes the product evenly.\n2. For spray formulas, hold the can at least 6 inches away from your scalp and spray in short bursts.\n3. Let it sit for 2-3 minutes before massaging it in and brushing through.\n4. For dark hair, look for tinted formulas or apply at night before bed to avoid white residue.",
          readTime: 4,
          likes: 234,
          comments: 45
        }
      ]
    };

    // ক্যাটাগরি চেক করা
    if (!database[cat]) {
      return null;
    }

    // আইডি অনুযায়ী আইটেম খুঁজে বের করা
    return database[cat].find(item => item.id === itemId) || null;
  };

  const goBack = () => {
    navigate(-1);
  };

  // ক্যাটাগরি অনুযায়ী ব্যাকগ্রাউন্ড রঙ নির্ধারণ
  const getCategoryColor = (cat) => {
    switch (cat?.toLowerCase()) {
      case 'travel': return 'bg-red-600';
      case 'lifestyle': return 'bg-green-600';
      case 'fashion': return 'bg-purple-600';
      case 'sport': return 'bg-blue-600';
      case 'food': return 'bg-orange-600';
      default: return 'bg-red-600';
    }
  };

  // ক্যাটাগরি নাম ফরম্যাট করা
  const formatCategoryName = (cat) => {
    if (!cat) return '';
    return cat.charAt(0).toUpperCase() + cat.slice(1);
  };

  if (loading) {
    return (
      <div className="bg-gray-100 min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-red-600 border-t-transparent"></div>
          <p className="mt-6 text-xl text-gray-600">Loading news...</p>
          <p className="text-sm text-gray-400 mt-2">Please wait while we fetch the content</p>
        </div>
      </div>
    );
  }

  if (error || !newsItem) {
    return (
      <div className="bg-gray-100 min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-black mb-4">Oops!</h2>
          <p className="text-gray-600 text-lg mb-8">{error || "News item not found."}</p>
          <button
            onClick={goBack}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full transition text-lg shadow-lg"
          >
            ← Go Back
          </button>
        </div>
      </div>
    );
  }

  const categoryColor = getCategoryColor(newsItem.category || category);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={goBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition group"
        >
          <span className="text-2xl group-hover:-translate-x-1 transition">←</span>
          <span className="text-lg">Back to {formatCategoryName(newsItem.category || category)}</span>
        </button>

        {/* Main News Card */}
        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-[400px] md:h-[500px]">
            <img
              src={newsItem.image}
              alt={newsItem.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop";
              }}
            />
            {/* Category Badge */}
            <div className={`absolute top-6 left-6 ${categoryColor} text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg`}>
              {newsItem.category || formatCategoryName(category)}
            </div>
            
            {/* Optional: Season/Badge for specific categories */}
            {newsItem.season && newsItem.season !== "All Year" && (
              <div className="absolute top-6 right-6 bg-white/90 text-gray-800 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                {newsItem.season}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              {newsItem.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-200">
              <span className="font-medium text-gray-800 text-base">{newsItem.author}</span>
              <span>•</span>
              <span>{newsItem.date}</span>
              <span>•</span>
              <span>{newsItem.time}</span>
              {newsItem.readTime && (
                <>
                  <span>•</span>
                  <span>{newsItem.readTime} min read</span>
                </>
              )}
            </div>

            {/* Excerpt/Description */}
            <div className="mb-8">
              <p className="text-xl text-gray-800 font-medium italic border-l-4 border-red-600 pl-6">
                {newsItem.excerpt}
              </p>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none text-gray-700">
              {newsItem.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Additional Details based on category */}
            <div className="mt-10 p-6 bg-gray-50 rounded-xl">
              <h3 className="text-lg font-bold text-black mb-4">Details</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {newsItem.fashionType && (
                  <div>
                    <span className="text-xs text-gray-500">Style</span>
                    <p className="font-semibold">{newsItem.fashionType}</p>
                  </div>
                )}
                {newsItem.mealType && (
                  <div>
                    <span className="text-xs text-gray-500">Meal Type</span>
                    <p className="font-semibold">{newsItem.mealType}</p>
                  </div>
                )}
                {newsItem.destination && (
                  <div>
                    <span className="text-xs text-gray-500">Destination</span>
                    <p className="font-semibold">{newsItem.destination}</p>
                  </div>
                )}
                {newsItem.budget && (
                  <div>
                    <span className="text-xs text-gray-500">Budget</span>
                    <p className="font-semibold">{newsItem.budget}</p>
                  </div>
                )}
                {newsItem.cookingTime && (
                  <div>
                    <span className="text-xs text-gray-500">Cooking Time</span>
                    <p className="font-semibold">{newsItem.cookingTime}</p>
                  </div>
                )}
                {newsItem.difficulty && (
                  <div>
                    <span className="text-xs text-gray-500">Difficulty</span>
                    <p className="font-semibold">{newsItem.difficulty}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Engagement Stats */}
            <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-gray-200">
              {newsItem.rating && (
                <span className="flex items-center gap-2 text-base bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full">
                  ⭐ {newsItem.rating} Rating
                </span>
              )}
              {newsItem.likes && (
                <span className="flex items-center gap-2 text-base bg-pink-100 text-pink-700 px-4 py-2 rounded-full">
                  ❤️ {newsItem.likes.toLocaleString()} Likes
                </span>
              )}
              {newsItem.saves && (
                <span className="flex items-center gap-2 text-base bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                  🔖 {newsItem.saves.toLocaleString()} Saves
                </span>
              )}
            </div>

            {/* Back Button */}
            <div className="mt-10 text-center">
              <button
                onClick={goBack}
                className={`inline-block ${categoryColor} hover:opacity-90 text-white font-bold py-4 px-10 rounded-full transition shadow-lg text-lg`}
              >
                ← Back to {formatCategoryName(newsItem.category || category)}
              </button>
            </div>
          </div>
        </article>

        {/* Related News Section (Optional) */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-black mb-6">More from {formatCategoryName(newsItem.category || category)}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* You can add related news here */}
            <Link 
              to={`/news/${category}/1`}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition p-4 text-center text-gray-600 hover:text-gray-900"
            >
              Browse more articles →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;