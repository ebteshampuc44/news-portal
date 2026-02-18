import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT BIG POST */}
        <div className="lg:col-span-2 relative h-[500px]">
          <img
            src="https://i.ibb.co.com/Y4hshkcg/neon-scenery-wallpaper-2560x1080-14.jpg"
            alt="Sport"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute bottom-10 left-10 text-white max-w-xl">
            <h1 className="text-4xl font-bold mb-4">
              An Olympic Impact on Sports Tourism
            </h1>
            <p className="text-sm mb-2">23 October 2021 • Sport</p>
            <p className="text-sm leading-relaxed">
              The U.S. Olympic Trials for ski jumping and Nordic combined will
              be heading to the Olympic Jumping Complex and Mount Van Hoevenberg
              in Lake Placid, New York, on December 24-25...
            </p>
          </div>
        </div>

        {/* RIGHT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="relative h-60">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="font-semibold text-lg">
                We are a Full-Time Travel Family. How?
              </h2>
              <p className="text-xs mt-1">22 October 2021 • Travel</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative h-60">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="font-semibold text-lg">
                How To Work From-Home While Also Traveling
              </h2>
              <p className="text-xs mt-1">22 October 2021 • Travel</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative h-60">
            <img
              src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="font-semibold text-lg">
                How to Get the Most Out of Your Dry Shampoo
              </h2>
              <p className="text-xs mt-1">22 October 2021 • Life Style</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative h-60">
            <img
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="font-semibold text-lg">
                Why It's Normal for Your Weight to Fluctuate
              </h2>
              <p className="text-xs mt-1">22 October 2021 • Life Style</p>
            </div>
          </div>
        </div>
      </div>

      {/* CATEGORY POSTS SECTION */}
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Travel */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl text-black font-semibold">Travel</h2>
              <div className="flex-1 h-[2px] bg-gray-400"></div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
              alt=""
              className="w-full h-60 object-cover mb-4"
            />

            <h3 className="text-xl text-black font-bold mb-2">
              5 Things We Know About Flying This Summer
            </h3>

            <p className="text-sm text-gray-500 mb-3">
              22 October 2021 • Travel • by Victoria Anderson
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              Products allow you to create something once and earn revenue while
              sleeping, sightseeing, or getting a suntan on a beach! They give
              you ownership of your income and a chance for your readers to buy
              so...
            </p>
          </div>

          {/* Life Style */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl text-black font-semibold">Life Style</h2>
              <div className="flex-1 h-[2px] bg-gray-400"></div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
              alt=""
              className="w-full h-60 object-cover mb-4"
            />

            <h3 className="text-xl text-black font-bold mb-2">
              How to Get the Most Out of Your Dry Shampoo
            </h3>

            <p className="text-sm text-gray-500 mb-3">
              22 October 2021 • Life Style • by Victoria Anderson
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              If you're using a loose dry shampoo powder, apply to your roots
              with a fluffy makeup brush to avoid white splotches of powder...
            </p>
          </div>

          {/* Fashion */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl text-black font-semibold">Fashion</h2>
              <div className="flex-1 h-[2px] bg-gray-400"></div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f"
              alt=""
              className="w-full h-60 object-cover mb-4"
            />

            <h3 className="text-xl text-black font-bold mb-2">
              Sheath Yourself in These Cozy-Chic Sweater Dresses
            </h3>

            <p className="text-sm text-gray-500 mb-3">
              22 October 2021 • Fashion • by Victoria Anderson
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              Solid tones are by far the most versatile for dressing up or down,
              while patterns like a bold stripe make a statement no matter the
              venue...
            </p>
          </div>
        </div>
      </div>

      {/* HOT TOPICS - HORIZONTAL SCROLL */}
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-black">🔥 Hot Topics</h2>
          <button className="text-red-600 font-semibold hover:text-red-700">View All →</button>
        </div>
        <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="min-w-[280px] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <img
                src={`https://images.unsplash.com/photo-${
                  item === 1 ? "1507525428034-b723cf961d3e" :
                  item === 2 ? "1501785888041-af3ef285b470" :
                  item === 3 ? "1492724441997-5dc865305da7" :
                  item === 4 ? "1487412720507-e7ab37603c6f" :
                  item === 5 ? "1469474968028-56623f02e42e" :
                  "1506905925345-21b42b0b2b5b"
                }?q=80&w=2070`}
                alt=""
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded-full">Trending #{item}</span>
                  <span className="text-gray-400 text-xs">• 2 hours ago</span>
                </div>
                <h3 className="font-bold text-black text-lg leading-tight">
                  {item === 1 ? "Major Changes in Visa Policy" :
                   item === 2 ? "iPhone 16 Price Revealed" :
                   item === 3 ? "Champions League Final Preview" :
                   item === 4 ? "Winter Fashion Trends 2024" :
                   item === 5 ? "World's Top 10 Restaurants" :
                   "New AI Tool Launches"}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EXCLUSIVE INTERVIEW SECTION */}
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="relative h-[400px] rounded-3xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069"
            alt="Interview"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
          <div className="absolute top-1/2 -translate-y-1/2 left-10 max-w-xl">
            <span className="bg-yellow-400 text-black px-4 py-1 text-sm font-bold rounded-full">Exclusive</span>
            <h2 className="text-4xl font-bold text-white mt-6 mb-4">"Technology for the Next Generation"</h2>
            <p className="text-white/80 text-lg mb-4">Special interview with Tech Giant CEO</p>
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887"
                alt="CEO"
                className="w-12 h-12 rounded-full border-2 border-white"
              />
              <div>
                <p className="text-white font-semibold">Elon Musk</p>
                <p className="text-white/60 text-sm">Tesla & SpaceX</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VIDEO OF THE WEEK */}
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold text-black">🎥 Video of the Week</h2>
          <div className="flex-1 h-[2px] bg-gray-300"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="group cursor-pointer">
              <div className="relative h-48 rounded-xl overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-${
                    item === 1 ? "1485846234645-a62644f84728" :
                    item === 2 ? "1492616941141-9b0c9b9b9b9b" :
                    item === 3 ? "1516035069131-9b0c9b9b9b9b" :
                    "1536240471395-35b0b0b0b0b0"
                  }?q=80&w=2070`}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                    <span className="text-white text-xl">▶</span>
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {item}:{item} min
                </span>
              </div>
              <h3 className="font-bold text-black mt-3">
                {item === 1 ? "World's Fastest Supercar" :
                 item === 2 ? "Top 5 Resorts in Maldives" :
                 item === 3 ? "How AI Will Change the World" :
                 "Cricket World Cup Highlights"}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{item * 50}K views • {item} days ago</p>
            </div>
          ))}
        </div>
      </div>

      {/* POPULAR AUTHORS */}
      <div className="max-w-7xl mx-auto px-4 mt-20 mb-20">
        <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
          <h2 className="text-3xl font-bold text-black text-center mb-10">Our Writers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Victoria Anderson", role: "Senior Reporter", articles: 234, image: "https://images.unsplash.com/photo-1494790108777-466d853b23d5" },
              { name: "Michael Chen", role: "Feature Editor", articles: 189, image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" },
              { name: "Sarah Johnson", role: "Sports Journalist", articles: 156, image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80" },
              { name: "David Kim", role: "Lifestyle Expert", articles: 145, image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e" },
            ].map((author, idx) => (
              <div key={idx} className="text-center group">
                <div className="relative mb-4">
                  <img
                    src={author.image}
                    alt={author.name}
                    className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-gray-200 group-hover:border-red-600 transition"
                  />
                </div>
                <h3 className="font-bold text-black text-lg">{author.name}</h3>
                <p className="text-red-600 text-sm mb-2">{author.role}</p>
                <p className="text-gray-400 text-xs">{author.articles} articles</p>
                <button className="mt-3 text-xs bg-gray-100 hover:bg-red-600 hover:text-white px-4 py-2 rounded-full transition font-semibold">
                  Follow
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;