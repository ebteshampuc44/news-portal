import React from "react";

const Food = () => {
  const foodPosts = [
    {
      id: 1,
      title: "World's Top 10 Restaurants 2024",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
      date: "22 October 2021",
      author: "Gordon Ramsay",
      excerpt: "From molecular gastronomy to traditional cuisine, discover the world's best dining destinations..."
    },
    {
      id: 2,
      title: "Easy Pasta Recipes for Beginners",
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2132&auto=format&fit=crop",
      date: "21 October 2021",
      author: "Jamie Oliver",
      excerpt: "Master the art of Italian cooking with these simple yet delicious pasta recipes..."
    },
    {
      id: 3,
      title: "The Art of Sushi Making",
      image: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=2025&auto=format&fit=crop",
      date: "20 October 2021",
      author: "Masaharu Morimoto",
      excerpt: "Learn the techniques and traditions behind perfect sushi from a master chef..."
    },
    {
      id: 4,
      title: "Healthy Breakfast Ideas Under 10 Minutes",
      image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=2070&auto=format&fit=crop",
      date: "19 October 2021",
      author: "Victoria Anderson",
      excerpt: "Start your day right with these quick, nutritious breakfast options for busy mornings..."
    },
    {
      id: 5,
      title: "Wine Pairing Guide for Beginners",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop",
      date: "18 October 2021",
      author: "Robert Parker",
      excerpt: "Confused about which wine goes with what? This beginner's guide has you covered..."
    },
    {
      id: 6,
      title: "Street Food Tour: Bangkok's Best",
      image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=2070&auto=format&fit=crop",
      date: "17 October 2021",
      author: "Anthony Bourdain",
      excerpt: "Explore the vibrant street food scene of Bangkok through our comprehensive guide..."
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Food</h1>
          <div className="h-1 w-24 bg-orange-600"></div>
        </div>

        {/* Recipe of the Day */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 mb-12 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <span className="bg-white text-orange-600 px-3 py-1 text-sm font-bold rounded-full mb-4 inline-block">Recipe of the Day</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Homemade Margherita Pizza</h2>
              <p className="mb-4 max-w-xl">Learn how to make authentic Italian pizza at home with this easy recipe</p>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">⏱️ 30 mins</span>
                <span className="flex items-center gap-1">👨‍🍳 Easy</span>
                <span className="flex items-center gap-1">⭐ 4.8 (120 reviews)</span>
              </div>
            </div>
            <button className="mt-4 md:mt-0 bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition">
              Get Recipe
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {['Breakfast', 'Lunch', 'Dinner', 'Dessert'].map((category) => (
            <div key={category} className="bg-white rounded-xl p-4 text-center shadow hover:shadow-lg transition cursor-pointer">
              <h3 className="font-bold text-gray-800">{category}</h3>
              <p className="text-sm text-gray-500">15+ recipes</p>
            </div>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foodPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover hover:scale-105 transition duration-500"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded-full">Food</span>
                  <span className="text-gray-400 text-xs">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3 hover:text-orange-600 cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">by {post.author}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <button className="text-orange-600 font-semibold hover:text-orange-700 text-sm">
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

export default Food;