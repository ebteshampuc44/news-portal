import React from "react";

const Fashion = () => {
  const fashionPosts = [
    {
      id: 1,
      title: "Sheath Yourself in These Cozy-Chic Sweater Dresses",
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1887&auto=format&fit=crop",
      date: "22 October 2021",
      author: "Emma Roberts",
      excerpt: "Solid tones are by far the most versatile for dressing up or down, while patterns like a bold stripe make a statement no matter the venue..."
    },
    {
      id: 2,
      title: "Winter Fashion Trends 2024: What's In and What's Out",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
      date: "21 October 2021",
      author: "Sophie Turner",
      excerpt: "From chunky knits to leather everything, here's your complete guide to staying stylish this winter season..."
    },
    {
      id: 3,
      title: "Sustainable Fashion: Brands to Watch",
      image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1887&auto=format&fit=crop",
      date: "20 October 2021",
      author: "Victoria Anderson",
      excerpt: "Eco-friendly doesn't mean compromising on style. Discover these sustainable fashion brands making a difference..."
    },
    {
      id: 4,
      title: "Accessorizing 101: The Complete Guide",
      image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=1965&auto=format&fit=crop",
      date: "19 October 2021",
      author: "Michael Chen",
      excerpt: "Learn how to elevate any outfit with the right accessories. From statement jewelry to the perfect bag..."
    },
    {
      id: 5,
      title: "Street Style Looks from Paris Fashion Week",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1887&auto=format&fit=crop",
      date: "18 October 2021",
      author: "David Kim",
      excerpt: "The best street style moments from Paris Fashion Week that you can recreate at home..."
    },
    {
      id: 6,
      title: "How to Build a Capsule Wardrobe",
      image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=2070&auto=format&fit=crop",
      date: "17 October 2021",
      author: "Sarah Johnson",
      excerpt: "Simplify your morning routine with these essential pieces that mix and match perfectly..."
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Fashion</h1>
          <div className="h-1 w-24 bg-purple-600"></div>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="relative h-[400px] rounded-2xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop"
              alt="Fashion Hero"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <span className="bg-purple-600 text-white px-3 py-1 text-sm font-bold rounded-full mb-3 inline-block">Editor's Pick</span>
              <h2 className="text-3xl font-bold mb-2">Fall/Winter Collection 2024</h2>
              <p className="text-gray-200">The hottest trends of the season revealed</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-[190px] rounded-xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
                alt="Fashion 1"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            <div className="relative h-[190px] rounded-xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1888&auto=format&fit=crop"
                alt="Fashion 2"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            <div className="relative h-[190px] rounded-xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop"
                alt="Fashion 3"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            <div className="relative h-[190px] rounded-xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2070&auto=format&fit=crop"
                alt="Fashion 4"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fashionPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover hover:scale-105 transition duration-500"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-purple-100 text-purple-600 text-xs font-semibold px-2 py-1 rounded-full">Fashion</span>
                  <span className="text-gray-400 text-xs">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3 hover:text-purple-600 cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">by {post.author}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <button className="text-purple-600 font-semibold hover:text-purple-700 text-sm">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fashion;