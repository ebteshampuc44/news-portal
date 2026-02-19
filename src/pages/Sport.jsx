import React from "react";

const Sport = () => {
  const sportPosts = [
    {
      id: 1,
      title: "An Olympic Impact on Sports Tourism",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop",
      date: "23 October 2021",
      author: "John Smith",
      excerpt: "The U.S. Olympic Trials for ski jumping and Nordic combined will be heading to the Olympic Jumping Complex..."
    },
    {
      id: 2,
      title: "Champions League Final: Complete Preview",
      image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=2023&auto=format&fit=crop",
      date: "22 October 2021",
      author: "Michael Johnson",
      excerpt: "Everything you need to know about the biggest match in European football, including team news and predictions..."
    },
    {
      id: 3,
      title: "NBA Season Preview: Title Contenders",
      image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop",
      date: "21 October 2021",
      author: "David Williams",
      excerpt: "As the new NBA season tips off, we analyze the top teams and players to watch this year..."
    },
    {
      id: 4,
      title: "Grand Slam Records That May Never Be Broken",
      image: "https://images.unsplash.com/photo-1542144582-1ba00456b5e3?q=80&w=2070&auto=format&fit=crop",
      date: "20 October 2021",
      author: "Sarah Connor",
      excerpt: "From Federer to Nadal, these tennis records have stood the test of time and may never be broken..."
    },
    {
      id: 5,
      title: "Olympic Preparation: Inside the Athletes' Training",
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop",
      date: "19 October 2021",
      author: "Emma Thompson",
      excerpt: "Go behind the scenes with Olympic athletes as they prepare for the biggest competition of their lives..."
    },
    {
      id: 6,
      title: "The Rise of Women's Sports",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop",
      date: "18 October 2021",
      author: "Victoria Anderson",
      excerpt: "Women's sports are experiencing unprecedented growth. Here's why and what it means for the future..."
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Sport</h1>
          <div className="h-1 w-24 bg-blue-600"></div>
        </div>

        {/* Featured Match */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-center mb-6">Today's Featured Match</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=1926&auto=format&fit=crop"
                alt="Team A"
                className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
              />
              <h3 className="font-bold text-xl">Manchester United</h3>
            </div>
            <div className="text-4xl font-bold text-blue-600">VS</div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=1926&auto=format&fit=crop"
                alt="Team B"
                className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
              />
              <h3 className="font-bold text-xl">Liverpool</h3>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-600">Today at 8:00 PM • Old Trafford</p>
            <button className="mt-4 bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full font-semibold transition">
              Get Tickets
            </button>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sportPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover hover:scale-105 transition duration-500"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full">Sport</span>
                  <span className="text-gray-400 text-xs">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3 hover:text-blue-600 cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">by {post.author}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 text-sm">
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

export default Sport;