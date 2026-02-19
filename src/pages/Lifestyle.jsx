import React from "react";

const Lifestyle = () => {
  const lifestylePosts = [
    {
      id: 1,
      title: "How to Get the Most Out of Your Dry Shampoo",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2070&auto=format&fit=crop",
      date: "22 October 2021",
      author: "Sarah Johnson",
      excerpt: "If you're using a loose dry shampoo powder, apply to your roots with a fluffy makeup brush to avoid white splotches of powder..."
    },
    {
      id: 2,
      title: "Why It's Normal for Your Weight to Fluctuate",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
      date: "21 October 2021",
      author: "Dr. Michael Chen",
      excerpt: "Understanding the natural daily and weekly fluctuations in body weight can help you maintain a healthy relationship with fitness..."
    },
    {
      id: 3,
      title: "10 Morning Routines of Successful People",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop",
      date: "20 October 2021",
      author: "David Kim",
      excerpt: "Start your day right with these proven morning routines from industry leaders and productivity experts..."
    },
    {
      id: 4,
      title: "Minimalist Living: A Beginner's Guide",
      image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2067&auto=format&fit=crop",
      date: "19 October 2021",
      author: "Emma Watson",
      excerpt: "Learn how to declutter your life and focus on what truly matters with these minimalist living principles..."
    },
    {
      id: 5,
      title: "Mental Health Tips for Busy Professionals",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop",
      date: "18 October 2021",
      author: "Dr. Sarah Johnson",
      excerpt: "Maintaining good mental health is crucial for success. Here are practical tips for busy professionals..."
    },
    {
      id: 6,
      title: "The Art of Digital Detox",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
      date: "17 October 2021",
      author: "Michael Chen",
      excerpt: "Disconnect to reconnect. Learn how a digital detox can improve your relationships and overall well-being..."
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Life Style</h1>
          <div className="h-1 w-24 bg-green-600"></div>
        </div>

        {/* Featured Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="relative h-48 rounded-xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop"
              alt="Healthy Eating"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">Healthy Eating</span>
            </div>
          </div>
          <div className="relative h-48 rounded-xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop"
              alt="Fitness"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">Fitness</span>
            </div>
          </div>
          <div className="relative h-48 rounded-xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2022&auto=format&fit=crop"
              alt="Wellness"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">Wellness</span>
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lifestylePosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover hover:scale-105 transition duration-500"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded-full">Life Style</span>
                  <span className="text-gray-400 text-xs">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3 hover:text-green-600 cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">by {post.author}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <button className="text-green-600 font-semibold hover:text-green-700 text-sm">
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

export default Lifestyle;