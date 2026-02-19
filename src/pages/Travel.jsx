import React from "react";

const Travel = () => {
  // Travel related posts data
  const travelPosts = [
    {
      id: 1,
      title: "We are a Full-Time Travel Family. How?",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop",
      date: "22 October 2021",
      author: "Victoria Anderson",
      excerpt: "Products allow you to create something once and earn revenue while sleeping, sightseeing, or getting a suntan on a beach! They give you ownership of your income and a chance for your readers to buy so..."
    },
    {
      id: 2,
      title: "How To Work From-Home While Also Traveling",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop",
      date: "21 October 2021",
      author: "Michael Chen",
      excerpt: "Discover the best practices for maintaining productivity while exploring the world. Learn how to balance work and travel effectively..."
    },
    {
      id: 3,
      title: "5 Things We Know About Flying This Summer",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2070&auto=format&fit=crop",
      date: "20 October 2021",
      author: "Sarah Johnson",
      excerpt: "Summer travel is back! Here's everything you need to know about flight regulations, baggage policies, and safety measures for 2024..."
    },
    {
      id: 4,
      title: "Top 10 Hidden Gems in Europe",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop",
      date: "19 October 2021",
      author: "David Kim",
      excerpt: "Skip the crowded tourist spots and discover these amazing hidden locations across Europe that offer authentic experiences..."
    },
    {
      id: 5,
      title: "Budget Travel: How to See the World on $50/Day",
      image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2070&auto=format&fit=crop",
      date: "18 October 2021",
      author: "Victoria Anderson",
      excerpt: "Traveling doesn't have to break the bank. Learn proven strategies to stretch your travel budget while maximizing experiences..."
    },
    {
      id: 6,
      title: "Solo Travel Guide for Beginners",
      image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?q=80&w=2070&auto=format&fit=crop",
      date: "17 October 2021",
      author: "Emily Roberts",
      excerpt: "Embarking on your first solo journey? Here's everything you need to know about safety, planning, and making the most of it..."
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Travel</h1>
          <div className="h-1 w-24 bg-red-600"></div>
        </div>

        {/* Featured Post */}
        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12">
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop"
            alt="Featured Travel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute bottom-10 left-10 text-white max-w-2xl">
            <span className="bg-red-600 text-white px-3 py-1 text-sm font-bold rounded-full mb-4 inline-block">Featured</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Ultimate Guide to Sustainable Travel in 2024</h2>
            <p className="text-gray-200 mb-4">Discover how to explore the world while minimizing your environmental impact and supporting local communities.</p>
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1494790108777-466d853b23d5?q=80&w=1887&auto=format&fit=crop"
                alt="Author"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <div>
                <p className="font-semibold">Victoria Anderson</p>
                <p className="text-sm text-gray-300">15 min read • 2 days ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {travelPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover hover:scale-105 transition duration-500"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded-full">Travel</span>
                  <span className="text-gray-400 text-xs">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3 hover:text-red-600 cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">by {post.author}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <button className="text-red-600 font-semibold hover:text-red-700 text-sm">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-red-600 text-white hover:bg-red-700 px-8 py-3 rounded-full font-semibold transition">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Travel;