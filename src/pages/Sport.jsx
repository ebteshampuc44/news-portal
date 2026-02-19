import React from "react";

const Sport = () => {
  const sportPosts = [
    {
      id: 1,
      title: "বাংলাদেশ-দক্ষিণ আফ্রিকা প্রথম টেস্ট: টাইগারদের লড়াইয়ের শুরু আজ",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2069&auto=format&fit=crop",
      date: "১৯ অক্টোবর ২০২৩",
      author: "স্পোর্টস ডেস্ক",
      category: "ক্রিকেট",
      excerpt: "মিরপুর শের-ই-বাংলায় আজ শুরু হচ্ছে বাংলাদেশ-দক্ষিণ আফ্রিকা প্রথম টেস্ট। টাইগাররা ইতিহাস গড়তে মরিয়া।"
    },
    {
      id: 2,
      title: "বাফুফে নির্বাচন: সভাপতি পদে কাজী সালাউদ্দিন vs তাবিথ আউয়াল",
      image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=2070&auto=format&fit=crop",
      date: "১৮ অক্টোবর ২০২৩",
      author: "ফুটবল প্রতিবেদক",
      category: "ফুটবল",
      excerpt: "বাফুফে নির্বাচনকে কেন্দ্র করে চলছে তীব্র রাজনীতি। কে হচ্ছেন পরবর্তী সভাপতি?"
    },
    {
      id: 3,
      title: "মাশরাফির পথ ধরে: নতুন প্রজন্মের নেতৃত্ব দিচ্ছেন সাকিব",
      image: "https://images.unsplash.com/photo-1641921945275-2e5f9e5e4e4d?q=80&w=2070&auto=format&fit=crop",
      date: "১৭ অক্টোবর ২০২৩",
      author: "স্পোর্টস রিপোর্টার",
      category: "ক্রিকেট",
      excerpt: "জাতীয় দলের নেতৃত্ব নিয়ে নতুন চিন্তা-ভাবনা। সাকিব আল হাসানের হাতে কি তুলে দেওয়া হচ্ছে অধিনায়কত্ব?"
    },
    {
      id: 4,
      title: "প্যারিস অলিম্পিক: বাংলাদেশের আশা স্প্রিন্টার শাহিনা",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop",
      date: "১৬ অক্টোবর ২০২৩",
      author: "অলিম্পিক ডেস্ক",
      category: "অ্যাথলেটিক্স",
      excerpt: "প্যারিস অলিম্পিকে বাংলাদেশের প্রতিনিধিত্ব করবেন স্প্রিন্টার শাহিনা খাতুন। চলছে জোর প্রস্তুতি।"
    },
    {
      id: 5,
      title: "হকি: জুনিয়র এশিয়া কাপে বাংলাদেশের ঐতিহাসিক জয়",
      image: "https://images.unsplash.com/photo-1614903662760-119ae3c5b9e9?q=80&w=2070&auto=format&fit=crop",
      date: "১৫ অক্টোবর ২০২৩",
      author: "হকি প্রতিবেদক",
      category: "হকি",
      excerpt: "ওমানকে ৪-১ গোলে হারিয়ে জুনিয়র এশিয়া কাপ হকিতে সেমিফাইনালে বাংলাদেশ।"
    },
    {
      id: 6,
      title: "ব্যাডমিন্টন: সিনিয়র জাতীয় চ্যাম্পিয়নশিপ শুরু",
      image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2070&auto=format&fit=crop",
      date: "১৪ অক্টোবর ২০২৩",
      author: "ব্যাডমিন্টন ডেস্ক",
      category: "ব্যাডমিন্টন",
      excerpt: "শহীদ তাজউদ্দিন আহমেদ ইন্ডোর স্টেডিয়ামে শুরু হয়েছে সিনিয়র জাতীয় ব্যাডমিন্টন চ্যাম্পিয়নশিপ।"
    },
    {
      id: 7,
      title: "দাবা: গ্র্যান্ডমাস্টার নিয়াজ মোরশেদের নতুন অর্জন",
      image: "https://images.unsplash.com/photo-1580541832629-2d7138b809a8?q=80&w=2070&auto=format&fit=crop",
      date: "১৩ অক্টোবর ২০২৩",
      author: "দাবা প্রতিবেদক",
      category: "দাবা",
      excerpt: "আন্তর্জাতিক দাবা টুর্নামেন্টে দুর্দান্ত পারফরম্যান্স গ্র্যান্ডমাস্টার নিয়াজ মোরশেদের।"
    },
    {
      id: 8,
      title: "কাবাডি: এশিয়ান গেমসের প্রস্তুতি শুরু",
      image: "https://images.unsplash.com/photo-1627296153565-e4e978d1f85e?q=80&w=2070&auto=format&fit=crop",
      date: "১২ অক্টোবর ২০২৩",
      author: "কাবাডি ডেস্ক",
      category: "কাবাডি",
      excerpt: "এশিয়ান গেমসকে সামনে রেখে কঠোর অনুশীলনে বাংলাদেশ কাবাডি দল। লক্ষ্য পদক জয়।"
    },
    {
      id: 9,
      title: "শুটিং: বিশ্বকাপে রূপো জিতলেন আরিফা",
      image: "https://images.unsplash.com/photo-1626298326799-6b526944c94a?q=80&w=2070&auto=format&fit=crop",
      date: "১১ অক্টোবর ২০২৩",
      author: "শুটিং ডেস্ক",
      category: "শুটিং",
      excerpt: "আইএসএসএফ জুনিয়র শুটিং বিশ্বকাপে ১০ মিটার এয়ার রাইফেলে রূপো জিতেছেন আরিফা খাতুন।"
    }
  ];

  const categories = ["সবগুলো", "ক্রিকেট", "ফুটবল", "হকি", "কাবাডি", "অন্যান্য"];

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-black">খেলাধুলা</h1>
            <span className="bg-green-600 text-white text-sm px-3 py-1 rounded-full">সর্বশেষ আপডেট</span>
          </div>
          <div className="h-1 w-32 bg-green-600 mb-6"></div>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  index === 0 
                    ? 'bg-green-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-green-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Match - Bangabandhu Derby */}
        <div className="bg-gradient-to-r from-green-700 to-green-900 rounded-2xl shadow-xl p-6 mb-10 text-white">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">আজকের বড় ম্যাচ</h2>
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">লাইভ</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center flex-1">
              <div className="w-20 h-20 bg-white rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-green-700 text-3xl font-bold">AB</span>
              </div>
              <h3 className="font-bold text-lg">আবাহনী লিমিটেড</h3>
              <p className="text-2xl font-bold mt-2">২</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold bg-white text-green-800 px-4 py-2 rounded-full">বনাম</div>
              <p className="text-sm mt-2">৮০ মিনিট চলছে</p>
            </div>
            
            <div className="text-center flex-1">
              <div className="w-20 h-20 bg-white rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-green-700 text-3xl font-bold">MB</span>
              </div>
              <h3 className="font-bold text-lg">মোহামেডান স্পোর্টিং</h3>
              <p className="text-2xl font-bold mt-2">২</p>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-green-200">বঙ্গবন্ধু জাতীয় স্টেডিয়াম • ঢাকা</p>
            <button className="mt-3 bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-2 rounded-full font-bold transition text-sm">
              লাইভ স্কোর দেখুন
            </button>
          </div>
        </div>

        {/* Breaking News Ticker */}
        <div className="bg-red-600 text-white p-3 rounded-lg mb-8 flex items-center">
          <span className="bg-white text-red-600 px-3 py-1 rounded-full text-sm font-bold mr-3">ব্রেকিং</span>
          <div className="overflow-hidden whitespace-nowrap">
            <div className="animate-marquee inline-block">
              <span className="mr-8">• সাকিব আল হাসান পেলেন নতুন চুক্তি</span>
              <span className="mr-8">• বাংলাদেশ দল আজ বিকেলে দক্ষিণ আফ্রিকা যাচ্ছে</span>
              <span className="mr-8">• বাফুফে নির্বাচনের তফসিল ঘোষণা</span>
              <span className="mr-8">• জিম্বাবুয়ে সিরিজের জন্য দল ঘোষণা</span>
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sportPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-200">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover hover:scale-110 transition duration-500"
                />
                <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                  {post.category}
                </span>
              </div>
              
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-gray-400 text-xs">{post.date}</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-green-600 text-xs font-semibold">{post.author}</span>
                </div>
                
                <h3 className="text-lg font-bold text-black mb-3 hover:text-green-600 cursor-pointer leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <button className="text-green-600 font-semibold hover:text-green-700 text-sm flex items-center gap-1">
                    বিস্তারিত
                    <span className="text-lg">→</span>
                  </button>
                  
                  <div className="flex gap-2">
                    <button className="text-gray-400 hover:text-green-600 transition">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5 5h14v14H5z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-10">
          <button className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-full font-bold transition">
            আরও খবর দেখুন
          </button>
        </div>

        {/* Footer Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600">১৫</div>
            <div className="text-sm text-gray-600">মোট খেলা</div>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600">৮</div>
            <div className="text-sm text-gray-600">লাইভ ম্যাচ</div>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600">২৪</div>
            <div className="text-sm text-gray-600">আপকামিং</div>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600">১২৩</div>
            <div className="text-sm text-gray-600">নিবন্ধ</div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Sport;