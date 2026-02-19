import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT BIG POST */}
        <div className="lg:col-span-2 relative h-[300px] sm:h-[400px] lg:h-[500px]">
          <img
            src="https://i.ibb.co.com/Y4hshkcg/neon-scenery-wallpaper-2560x1080-14.jpg"
            alt="Sport"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute bottom-4 sm:bottom-6 lg:bottom-10 left-4 sm:left-6 lg:left-10 text-white max-w-xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 lg:mb-4">
              An Olympic Impact on Sports Tourism
            </h1>
            <p className="text-xs sm:text-sm mb-1 sm:mb-2">23 October 2021 • Sport</p>
            <p className="text-xs sm:text-sm leading-relaxed hidden sm:block">
              The U.S. Olympic Trials for ski jumping and Nordic combined will
              be heading to the Olympic Jumping Complex and Mount Van Hoevenberg
              in Lake Placid, New York, on December 24-25...
            </p>
          </div>
        </div>

        {/* RIGHT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Card 1 */}
          <div className="relative h-48 sm:h-56 lg:h-60">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white">
              <h2 className="font-semibold text-sm sm:text-base lg:text-lg">
                We are a Full-Time Travel Family. How?
              </h2>
              <p className="text-xs mt-1">22 October 2021 • Travel</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative h-48 sm:h-56 lg:h-60">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white">
              <h2 className="font-semibold text-sm sm:text-base lg:text-lg">
                How To Work From-Home While Also Traveling
              </h2>
              <p className="text-xs mt-1">22 October 2021 • Travel</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative h-48 sm:h-56 lg:h-60">
            <img
              src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2070&auto=format&fit=crop"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white">
              <h2 className="font-semibold text-sm sm:text-base lg:text-lg">
                How to Get the Most Out of Your Dry Shampoo
              </h2>
              <p className="text-xs mt-1">22 October 2021 • Life Style</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative h-48 sm:h-56 lg:h-60">
            <img
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2070&auto=format&fit=crop"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white">
              <h2 className="font-semibold text-sm sm:text-base lg:text-lg">
                Why It's Normal for Your Weight to Fluctuate
              </h2>
              <p className="text-xs mt-1">22 October 2021 • Life Style</p>
            </div>
          </div>
        </div>
      </div>

      {/* CATEGORY POSTS SECTION */}
      <div className="max-w-7xl mx-auto px-4 mt-12 sm:mt-16 lg:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Travel */}
          <div>
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl text-black font-semibold">Travel</h2>
              <div className="flex-1 h-[2px] bg-gray-400"></div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop"
              alt=""
              className="w-full h-48 sm:h-56 lg:h-60 object-cover mb-3 sm:mb-4"
            />

            <h3 className="text-lg sm:text-xl text-black font-bold mb-2">
              5 Things We Know About Flying This Summer
            </h3>

            <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
              22 October 2021 • Travel • by Victoria Anderson
            </p>

            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Products allow you to create something once and earn revenue while
              sleeping, sightseeing, or getting a suntan on a beach! They give
              you ownership of your income and a chance for your readers to buy
              so...
            </p>
          </div>

          {/* Life Style */}
          <div>
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl text-black font-semibold">Life Style</h2>
              <div className="flex-1 h-[2px] bg-gray-400"></div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2070&auto=format&fit=crop"
              alt=""
              className="w-full h-48 sm:h-56 lg:h-60 object-cover mb-3 sm:mb-4"
            />

            <h3 className="text-lg sm:text-xl text-black font-bold mb-2">
              How to Get the Most Out of Your Dry Shampoo
            </h3>

            <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
              22 October 2021 • Life Style • by Victoria Anderson
            </p>

            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              If you're using a loose dry shampoo powder, apply to your roots
              with a fluffy makeup brush to avoid white splotches of powder...
            </p>
          </div>

          {/* Fashion */}
          <div>
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl text-black font-semibold">Fashion</h2>
              <div className="flex-1 h-[2px] bg-gray-400"></div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2070&auto=format&fit=crop"
              alt=""
              className="w-full h-48 sm:h-56 lg:h-60 object-cover mb-3 sm:mb-4"
            />

            <h3 className="text-lg sm:text-xl text-black font-bold mb-2">
              Sheath Yourself in These Cozy-Chic Sweater Dresses
            </h3>

            <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
              22 October 2021 • Fashion • by Victoria Anderson
            </p>

            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Solid tones are by far the most versatile for dressing up or down,
              while patterns like a bold stripe make a statement no matter the
              venue...
            </p>
          </div>
        </div>
      </div>

      {/* HOT TOPICS - HORIZONTAL SCROLL */}
      <div className="max-w-7xl mx-auto px-4 mt-12 sm:mt-16 lg:mt-20">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">🔥 Hot Topics</h2>
          <button className="text-red-600 font-semibold hover:text-red-700 text-sm sm:text-base">View All →</button>
        </div>
        <div className="flex overflow-x-auto gap-4 sm:gap-6 pb-4 scrollbar-hide">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="min-w-[240px] sm:min-w-[260px] lg:min-w-[280px] bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <img
                src={`https://images.unsplash.com/photo-${
                  item === 1 ? "1507525428034-b723cf961d3e" :
                  item === 2 ? "1501785888041-af3ef285b470" :
                  item === 3 ? "1492724441997-5dc865305da7" :
                  item === 4 ? "1487412720507-e7ab37603c6f" :
                  item === 5 ? "1469474968028-56623f02e42e" :
                  "1506905925345-21b42b0b2b5b"
                }?q=80&w=2070&auto=format&fit=crop`}
                alt=""
                className="w-full h-32 sm:h-36 lg:h-40 object-cover"
              />
              <div className="p-3 sm:p-4 lg:p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded-full">Trending #{item}</span>
                  <span className="text-gray-400 text-xs">• 2 hours ago</span>
                </div>
                <h3 className="font-bold text-black text-sm sm:text-base lg:text-lg leading-tight">
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
      <div className="max-w-7xl mx-auto px-4 mt-12 sm:mt-16 lg:mt-20">
        <div className="relative h-[300px] sm:h-[350px] lg:h-[400px] rounded-2xl lg:rounded-3xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
            alt="Interview"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
          <div className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-6 lg:left-10 max-w-xl">
            <span className="bg-yellow-400 text-black px-3 sm:px-4 py-0.5 sm:py-1 text-xs sm:text-sm font-bold rounded-full">Exclusive</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-4 sm:mt-6 mb-2 sm:mb-4">
              "Technology for the Next Generation"
            </h2>
            <p className="text-white/80 text-sm sm:text-base lg:text-lg mb-3 sm:mb-4">
              Special interview with Tech Giant CEO
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
                alt="CEO"
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white"
              />
              <div>
                <p className="text-white font-semibold text-sm sm:text-base">Elon Musk</p>
                <p className="text-white/60 text-xs sm:text-sm">Tesla & SpaceX</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VIDEO OF THE WEEK */}
      <div className="max-w-7xl mx-auto px-4 mt-12 sm:mt-16 lg:mt-20">
        <div className="flex items-center gap-4 mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">🎥 Video of the Week</h2>
          <div className="flex-1 h-[2px] bg-gray-300"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="group cursor-pointer">
              <div className="relative h-40 sm:h-44 lg:h-48 rounded-lg sm:rounded-xl overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-${
                    item === 1 ? "1485846234645-a62644f84728" :
                    item === 2 ? "1492616941141-9b0c9b9b9b9b" :
                    item === 3 ? "1516035069131-9b0c9b9b9b9b" :
                    "1536240471395-35b0b0b0b0b0"
                  }?q=80&w=2070&auto=format&fit=crop`}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                    <span className="text-white text-lg sm:text-xl">▶</span>
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {item}:{item} min
                </span>
              </div>
              <h3 className="font-bold text-black text-sm sm:text-base mt-2 sm:mt-3">
                {item === 1 ? "World's Fastest Supercar" :
                 item === 2 ? "Top 5 Resorts in Maldives" :
                 item === 3 ? "How AI Will Change the World" :
                 "Cricket World Cup Highlights"}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">{item * 50}K views • {item} days ago</p>
            </div>
          ))}
        </div>
      </div>

      {/* POPULAR AUTHORS - FULLY RESPONSIVE */}
      <div className="max-w-7xl mx-auto px-4 mt-12 sm:mt-16 lg:mt-20 mb-12 sm:mb-16 lg:mb-20">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-5 sm:p-8 lg:p-10 border border-gray-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-black text-center mb-6 sm:mb-8 lg:mb-10">
            Our Writers
          </h2>
          
          {/* Mobile: Horizontal Scroll (visible only on mobile) */}
          <div className="flex overflow-x-auto gap-6 pb-4 sm:hidden scrollbar-hide">
            {[
              { 
                name: "Victoria Anderson", 
                role: "Senior Reporter", 
                articles: 234, 
                image: "https://images.unsplash.com/photo-1494790108777-466d853b23d5?q=80&w=1887&auto=format&fit=crop" 
              },
              { 
                name: "Michael Chen", 
                role: "Feature Editor", 
                articles: 189, 
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" 
              },
              { 
                name: "Sarah Johnson", 
                role: "Sports Journalist", 
                articles: 156, 
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop" 
              },
              { 
                name: "David Kim", 
                role: "Lifestyle Expert", 
                articles: 145, 
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop" 
              },
            ].map((author, idx) => (
              <div key={idx} className="min-w-[200px] text-center group">
                <div className="relative mb-3 flex justify-center">
                  <img
                    src={author.image}
                    alt={author.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-gray-200 group-hover:border-red-600 transition"
                  />
                </div>
                
                <h3 className="font-bold text-black text-sm">
                  {author.name}
                </h3>
                
                <p className="text-red-600 text-xs mb-1">
                  {author.role}
                </p>
                
                <p className="text-gray-400 text-xs mb-3">
                  {author.articles} articles
                </p>
                
                <button className="text-xs bg-red-600 text-white hover:bg-red-700 px-4 py-1.5 rounded-full transition font-semibold shadow-md w-auto inline-block">
                  Follow
                </button>
              </div>
            ))}
          </div>

          {/* Tablet: 2 columns, Desktop: 4 columns (hidden on mobile) */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {[
              { 
                name: "Victoria Anderson", 
                role: "Senior Reporter", 
                articles: 234, 
                image: "https://images.unsplash.com/photo-1494790108777-466d853b23d5?q=80&w=1887&auto=format&fit=crop" 
              },
              { 
                name: "Michael Chen", 
                role: "Feature Editor", 
                articles: 189, 
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" 
              },
              { 
                name: "Sarah Johnson", 
                role: "Sports Journalist", 
                articles: 156, 
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop" 
              },
              { 
                name: "David Kim", 
                role: "Lifestyle Expert", 
                articles: 145, 
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop" 
              },
            ].map((author, idx) => (
              <div key={idx} className="text-center group">
                <div className="relative mb-3 sm:mb-4 flex justify-center">
                  <img
                    src={author.image}
                    alt={author.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full object-cover border-4 border-gray-200 group-hover:border-red-600 transition"
                  />
                </div>
                
                <h3 className="font-bold text-black text-sm sm:text-base lg:text-lg">
                  {author.name}
                </h3>
                
                <p className="text-red-600 text-xs sm:text-sm mb-1">
                  {author.role}
                </p>
                
                <p className="text-gray-400 text-xs mb-3">
                  {author.articles} articles
                </p>
                
                <button className="text-xs bg-red-600 text-white hover:bg-red-700 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full transition font-semibold shadow-md w-auto inline-block">
                  Follow
                </button>
              </div>
            ))}
          </div>

          {/* Scroll indicator for mobile */}
          <div className="flex justify-center gap-1 mt-4 sm:hidden">
            <span className="w-2 h-2 bg-red-600 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;