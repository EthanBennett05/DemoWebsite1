export default function Lodging() {
  const amenities = [
    { icon: "🍳", title: "Full Kitchen", desc: "Cook your own meals or we'll provide" },
    { icon: "🔥", title: "Fireplaces", desc: "Cozy up after a long day" },
    { icon: "🚿", title: "Hot Showers", desc: "Modern bathrooms with hot water" },
    { icon: "📶", title: "Wi-Fi", desc: "Stay connected (if you want)" },
    { icon: "🧺", title: "Laundry", desc: "Washer & dryer available" },
    { icon: "🅿️", title: "Parking", desc: "Plenty of space for trucks & trailers" },
    { icon: "❄️", title: "Climate Control", desc: "Heat in winter, fans in summer" },
    { icon: "🎣", title: "Gear Storage", desc: "Secure space for equipment" }
  ];

  const rooms = [
    { name: "Master Suite", beds: "King bed", occupancy: "Sleeps 2" },
    { name: "Queen Room", beds: "Queen bed", occupancy: "Sleeps 2" },
    { name: "Bunk Room 1", beds: "2 bunk beds", occupancy: "Sleeps 4" },
    { name: "Bunk Room 2", beds: "2 bunk beds", occupancy: "Sleeps 4" }
  ];

  return (
    <div className="bg-[#1a1612] min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#2d3e2a] to-[#1a1612] py-20 border-b-4 border-[#7a5c3d]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1
            className="text-6xl font-bold text-[#d4b896] mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Our Lodge
          </h1>
          <p className="text-2xl text-[#e8dcc4] mb-8">
            Comfortable accommodations in the heart of the wilderness
          </p>
          <div className="h-1 w-32 bg-[#7a5c3d] mx-auto"></div>
        </div>
      </div>

      {/* Featured Property Image */}
      <div className="max-w-6xl mx-auto px-4 -mt-12 mb-16">
        <div className="bg-[#2d3e2a] border-4 border-[#7a5c3d] rounded-lg overflow-hidden shadow-2xl">
          <div className="h-96 bg-gradient-to-r from-[#3d4f3a] via-[#4a5b47] to-[#3d4f3a] flex items-center justify-center text-9xl relative">
            🏡
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#252e23] to-transparent p-6">
              <p className="text-3xl text-[#d4b896] font-bold" style={{ fontFamily: "Georgia, serif" }}>
                Your home away from home
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Lodge Info */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Overview */}
        <div className="bg-[#2d3e2a] border-4 border-[#7a5c3d] rounded-lg p-10 mb-16 shadow-lg">
          <h2 
            className="text-4xl font-bold text-[#d4b896] mb-6"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Welcome to Our Main Lodge
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-[#e8dcc4]">
            <div>
              <p className="text-xl mb-4 leading-relaxed">
                Our spacious lodge comfortably sleeps up to 12 guests, making it perfect for groups, families, or multiple hunting parties. With modern amenities and rustic charm, you'll feel right at home after a long day in the field.
              </p>
              <p className="text-xl leading-relaxed">
                The lodge features a large common area with a stone fireplace, perfect for sharing stories and planning the next day's hunt. The fully-equipped kitchen and dining area can accommodate your entire group.
              </p>
            </div>
            <div className="bg-[#252e23] p-6 rounded-lg border-2 border-[#7a5c3d]">
              <h3 className="text-2xl font-bold text-[#d4b896] mb-4">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#d4b896] mr-3 text-xl">👥</span>
                  <span><strong className="text-[#d4b896]">Capacity:</strong> Sleeps 12 guests</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d4b896] mr-3 text-xl">🛏️</span>
                  <span><strong className="text-[#d4b896]">Bedrooms:</strong> 4 private rooms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d4b896] mr-3 text-xl">🚿</span>
                  <span><strong className="text-[#d4b896]">Bathrooms:</strong> 3 full bathrooms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d4b896] mr-3 text-xl">📏</span>
                  <span><strong className="text-[#d4b896]">Size:</strong> 3,200 sq ft</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d4b896] mr-3 text-xl">💰</span>
                  <span><strong className="text-[#d4b896]">Rate:</strong> $500/night (entire lodge)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Room Breakdown */}
        <div className="mb-16">
          <h2 
            className="text-4xl font-bold text-[#d4b896] mb-8 text-center"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Sleeping Arrangements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {rooms.map((room, index) => (
              <div key={index} className="bg-[#2d3e2a] border-4 border-[#7a5c3d] rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-[#d4b896]">{room.name}</h3>
                  <span className="text-4xl">🛏️</span>
                </div>
                <p className="text-[#e8dcc4] text-lg">{room.beds}</p>
                <p className="text-[#b8a888]">{room.occupancy}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Common Areas */}
        <div className="mb-16">
          <h2 
            className="text-4xl font-bold text-[#d4b896] mb-8 text-center"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Common Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#2d3e2a] border-4 border-[#7a5c3d] rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 bg-gradient-to-br from-[#5a6b57] to-[#3d4f3a] flex items-center justify-center text-6xl">
                🍽️
              </div>
              <div className="p-6 bg-[#252e23]">
                <h3 className="text-xl font-bold text-[#d4b896] mb-2">Kitchen & Dining</h3>
                <p className="text-[#e8dcc4]">Full kitchen with commercial stove, two refrigerators, and seating for 14</p>
              </div>
            </div>

            <div className="bg-[#2d3e2a] border-4 border-[#7a5c3d] rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 bg-gradient-to-br from-[#5a6b57] to-[#3d4f3a] flex items-center justify-center text-6xl">
                🛋️
              </div>
              <div className="p-6 bg-[#252e23]">
                <h3 className="text-xl font-bold text-[#d4b896] mb-2">Great Room</h3>
                <p className="text-[#e8dcc4]">Spacious living area with stone fireplace, comfortable seating, and flat-screen TV</p>
              </div>
            </div>

            <div className="bg-[#2d3e2a] border-4 border-[#7a5c3d] rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 bg-gradient-to-br from-[#5a6b57] to-[#3d4f3a] flex items-center justify-center text-6xl">
                🪵
              </div>
              <div className="p-6 bg-[#252e23]">
                <h3 className="text-xl font-bold text-[#d4b896] mb-2">Covered Deck</h3>
                <p className="text-[#e8dcc4]">Wrap-around deck with scenic views, outdoor seating, and propane grill</p>
              </div>
            </div>
          </div>
        </div>

        {/* Amenities Section */}
        <div className="bg-[#2d3e2a] border-4 border-[#7a5c3d] rounded-lg p-8 mb-16">
          <h2 
            className="text-4xl font-bold text-[#d4b896] mb-8 text-center"
            style={{ fontFamily: "Georgia, serif" }}
          >
            All Lodging Includes
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-3">{amenity.icon}</div>
                <h4 className="text-lg font-bold text-[#d4b896] mb-1">{amenity.title}</h4>
                <p className="text-sm text-[#e8dcc4]">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Gallery Grid */}
        <div className="mb-16">
          <h2 
            className="text-4xl font-bold text-[#d4b896] mb-8 text-center"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Photo Gallery
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🛏️", title: "Bedrooms" },
              { icon: "🍽️", title: "Kitchen & Dining" },
              { icon: "🛋️", title: "Living Area" },
              { icon: "🌅", title: "Deck Views" },
              { icon: "☕", title: "Morning Coffee Spot" },
              { icon: "🌌", title: "Night Sky Views" }
            ].map((item, index) => (
              <div key={index} className="bg-[#2d3e2a] border-4 border-[#7a5c3d] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-[#5a6b57] to-[#3d4f3a] flex items-center justify-center text-6xl">
                  {item.icon}
                </div>
                <div className="p-4 bg-[#252e23] text-center">
                  <p className="text-[#e8dcc4] font-semibold">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Policies & Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#2d3e2a] border-4 border-[#7a5c3d] rounded-lg p-8">
            <h3 
              className="text-2xl font-bold text-[#d4b896] mb-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Booking Information
            </h3>
            <ul className="space-y-3 text-[#e8dcc4]">
              <li className="flex items-start">
                <span className="text-[#d4b896] mr-2">📅</span>
                <span><strong>Check-in:</strong> 3:00 PM | <strong>Check-out:</strong> 11:00 AM</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#d4b896] mr-2">💳</span>
                <span>50% deposit required to book</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#d4b896] mr-2">❌</span>
                <span>Free cancellation up to 14 days before</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#d4b896] mr-2">🐕</span>
                <span>Pets welcome with advance notice</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#d4b896] mr-2">🏠</span>
                <span>Entire lodge rental - exclusive use for your group</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#2d3e2a] border-4 border-[#7a5c3d] rounded-lg p-8">
            <h3 
              className="text-2xl font-bold text-[#d4b896] mb-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              What to Bring
            </h3>
            <ul className="space-y-3 text-[#e8dcc4]">
              <li className="flex items-start">
                <span className="text-[#d4b896] mr-2">✓</span>
                <span>Bedding & towels are provided</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#d4b896] mr-2">✓</span>
                <span>Bring your own food or arrange catering</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#d4b896] mr-2">✓</span>
                <span>Personal toiletries & medications</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#d4b896] mr-2">✓</span>
                <span>Weather-appropriate clothing</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-[#2d3e2a] border-4 border-[#7a5c3d] rounded-lg p-8 shadow-lg text-center mb-16">
          <div className="text-5xl mb-4">⭐⭐⭐⭐⭐</div>
          <p className="text-2xl text-[#e8dcc4] italic mb-4" style={{ fontFamily: "Georgia, serif" }}>
            "The lodge was perfect for our group. Plenty of space, comfortable beds, and the views from the deck each morning were incredible. We'll definitely be back!"
          </p>
          <p className="text-[#b8a888]">— Sarah M., Texas</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-t from-[#2d3e2a] to-[#1a1612] text-[#e8dcc4] py-16 border-t-4 border-[#7a5c3d]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2
            className="text-4xl font-bold mb-4 text-[#d4b896]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Book the Lodge Today
          </h2>
          <p className="text-xl mb-8 text-[#e8dcc4]">
            Limited availability during peak hunting season
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-[#7a5c3d] text-[#faf8f3] px-10 py-4 hover:bg-[#8d6d4a] transition-colors text-xl font-bold border-2 border-[#5d4428]">
              CALL (620) 423-5781
            </button>
            <button className="bg-transparent text-[#d4b896] px-10 py-4 border-2 border-[#7a5c3d] hover:bg-[#7a5c3d] hover:text-[#faf8f3] transition-colors text-xl font-bold">
              EMAIL US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}