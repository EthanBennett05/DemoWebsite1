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
      {/* Hero Section - Scaled text for mobile */}
      <div className="bg-gradient-to-b from-[#2d3e2a] to-[#1a1612] py-12 md:py-20 border-b-4 border-[#7a5c3d]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1
            className="text-4xl md:text-6xl font-bold text-[#d4b896] mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Our Lodge
          </h1>
          <p className="text-lg md:text-2xl text-[#e8dcc4] mb-8">
            Comfortable accommodations in the heart of the wilderness
          </p>
          <div className="h-1 w-24 md:w-32 bg-[#7a5c3d] mx-auto"></div>
        </div>
      </div>

      {/* Featured Property Image - Adjusted height for mobile */}
      <div className="max-w-6xl mx-auto px-4 -mt-8 md:-mt-12 mb-12 md:mb-16">
        <div className="bg-[#2d3e2a] border-4 border-[#7a5c3d] rounded-lg overflow-hidden shadow-2xl">
          <div className="h-64 md:h-96 bg-gradient-to-r from-[#3d4f3a] via-[#4a5b47] to-[#3d4f3a] flex items-center justify-center text-7xl md:text-9xl relative">
            🏡
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#252e23] to-transparent p-4 md:p-6 text-center md:text-left">
              <p className="text-xl md:text-3xl text-[#d4b896] font-bold" style={{ fontFamily: "Georgia, serif" }}>
                Your home away from home
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Lodge Info - Grid layout adjustment */}
      <div className="max-w-6xl mx-auto px-4 py-4 md:py-8">
        <div className="bg-[#2d3e2a] border-4 border-[#7a5c3d] rounded-lg p-6 md:p-10 mb-12 md:mb-16 shadow-lg">
          <h2 
            className="text-2xl md:text-4xl font-bold text-[#d4b896] mb-6"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Welcome to Our Main Lodge
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#e8dcc4]">
            <div className="space-y-4">
              <p className="text-lg md:text-xl leading-relaxed">
                Our spacious lodge comfortably sleeps up to 12 guests, making it perfect for groups, families, or multiple hunting parties.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                The lodge features a large common area with a stone fireplace, perfect for sharing stories and planning the next day's hunt.
              </p>
            </div>
            <div className="bg-[#252e23] p-5 md:p-6 rounded-lg border-2 border-[#7a5c3d]">
              <h3 className="text-xl md:text-2xl font-bold text-[#d4b896] mb-4">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-[#d4b896] mr-3 text-lg">👥</span>
                  <span className="text-sm md:text-base"><strong>Capacity:</strong> 12 guests</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#d4b896] mr-3 text-lg">🛏️</span>
                  <span className="text-sm md:text-base"><strong>Bedrooms:</strong> 4 private rooms</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#d4b896] mr-3 text-lg">🚿</span>
                  <span className="text-sm md:text-base"><strong>Bathrooms:</strong> 3 full</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#d4b896] mr-3 text-lg">💰</span>
                  <span className="text-sm md:text-base"><strong>Rate:</strong> $500/night</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Room Breakdown - Stacks on mobile */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#d4b896] mb-8 text-center" style={{ fontFamily: "Georgia, serif" }}>
            Sleeping Arrangements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {rooms.map((room, index) => (
              <div key={index} className="bg-[#2d3e2a] border-4 border-[#7a5c3d] rounded-lg p-5 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-[#d4b896]">{room.name}</h3>
                  <span className="text-2xl">🛏️</span>
                </div>
                <p className="text-[#e8dcc4]">{room.beds}</p>
                <p className="text-[#b8a888] text-sm">{room.occupancy}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Common Areas - Grid behavior for mobile */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#d4b896] mb-8 text-center" style={{ fontFamily: "Georgia, serif" }}>
            Common Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🍽️", title: "Kitchen & Dining", desc: "Full kitchen with stove, dual fridges, and seating for 14." },
              { icon: "🛋️", title: "Great Room", desc: "Living area with stone fireplace, TV, and plush seating." },
              { icon: "🪵", title: "Covered Deck", desc: "Wrap-around views, outdoor seating, and propane grill." }
            ].map((area, i) => (
              <div key={i} className="bg-[#2d3e2a] border-4 border-[#7a5c3d] rounded-lg overflow-hidden shadow-lg">
                <div className="h-32 md:h-48 bg-[#3d4f3a] flex items-center justify-center text-5xl">{area.icon}</div>
                <div className="p-5 bg-[#252e23]">
                  <h3 className="text-lg font-bold text-[#d4b896] mb-2">{area.title}</h3>
                  <p className="text-[#e8dcc4] text-sm">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Amenities Section - 2 columns on mobile instead of 4 */}
        <div className="bg-[#2d3e2a] border-4 border-[#7a5c3d] rounded-lg p-6 md:p-8 mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-[#d4b896] mb-8 text-center" style={{ fontFamily: "Georgia, serif" }}>
            All Lodging Includes
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center px-1">
                <div className="text-4xl md:text-5xl mb-2">{amenity.icon}</div>
                <h4 className="text-sm md:text-lg font-bold text-[#d4b896] mb-1 leading-tight">{amenity.title}</h4>
                <p className="text-[10px] md:text-sm text-[#e8dcc4] leading-tight">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Policies & Info - Stacks vertically on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="bg-[#2d3e2a] border-4 border-[#7a5c3d] rounded-lg p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-[#d4b896] mb-4" style={{ fontFamily: "Georgia, serif" }}>
              Booking Information
            </h3>
            <ul className="space-y-3 text-[#e8dcc4] text-sm md:text-base">
              <li>📅 <strong>Check-in:</strong> 3 PM | <strong>Out:</strong> 11 AM</li>
              <li>💳 50% deposit required to book</li>
              <li>🐕 Pets welcome with advance notice</li>
              <li>🏠 Entire lodge rental - exclusive use</li>
            </ul>
          </div>

          <div className="bg-[#2d3e2a] border-4 border-[#7a5c3d] rounded-lg p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-[#d4b896] mb-4" style={{ fontFamily: "Georgia, serif" }}>
              What to Bring
            </h3>
            <ul className="space-y-3 text-[#e8dcc4] text-sm md:text-base">
              <li>✓ Bedding & towels are provided</li>
              <li>✓ Bring food or arrange catering</li>
              <li>✓ Personal toiletries & medications</li>
              <li>✓ Weather-appropriate clothing</li>
            </ul>
          </div>
        </div>

        {/* Testimonial - Adjusted font size for mobile */}
        <div className="bg-[#2d3e2a] border-4 border-[#7a5c3d] rounded-lg p-6 md:p-8 shadow-lg text-center mb-12 md:mb-16">
          <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
          <p className="text-lg md:text-2xl text-[#e8dcc4] italic mb-4 leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>
            "The lodge was perfect for our group. Plenty of space, comfortable beds, and the views from the deck were incredible."
          </p>
          <p className="text-[#b8a888] text-sm uppercase tracking-widest">— Sarah M., Texas</p>
        </div>
      </div>

      {/* CTA Section - Buttons stack on mobile */}
      <div className="bg-gradient-to-t from-[#2d3e2a] to-[#1a1612] text-[#e8dcc4] py-12 md:py-16 border-t-4 border-[#7a5c3d]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#d4b896]" style={{ fontFamily: "Georgia, serif" }}>
            Book the Lodge Today
          </h2>
          <p className="text-lg md:text-xl mb-8 text-[#e8dcc4] opacity-80">
            Limited availability during peak hunting season
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:6204235781" className="bg-[#7a5c3d] text-[#faf8f3] px-10 py-4 hover:bg-[#8d6d4a] transition-colors text-xl font-bold border-2 border-[#5d4428] text-center">
              CALL NOW
            </a>
            <a href="mailto:info@11rockranch.com" className="bg-transparent text-[#d4b896] px-10 py-4 border-2 border-[#7a5c3d] hover:bg-[#7a5c3d] hover:text-[#faf8f3] transition-colors text-xl font-bold text-center">
              EMAIL US
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}