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
            <p className="text-sm mb-2">
              23 October 2021 • Sport
            </p>
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
              <h2 className="font-semibold   text-lg">
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
                Why It's Normal for Your Weight to Fluctuate from Day to Day
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

            <p className="text-sm text-black text-gray-500 mb-3">
              22 October 2021 • Travel • by Victoria Anderson
            </p>

            <p className="text-gray-600 text-black text-sm leading-relaxed">
              Products allow you to create something once and earn revenue while
              sleeping, sightseeing, or getting a suntan on a beach! They give you
              ownership of your income and a chance for your readers to buy so...
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
              while patterns like a bold stripe make a statement no matter the venue...
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Home;
