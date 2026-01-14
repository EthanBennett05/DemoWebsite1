import { Link } from "react-router-dom";

export default function HuntPackages() {
  const packages = [
    {
      title: "Deer Package",
      tagline: "Trophy Whitetail Experience",
      image: "/images/download.jpg",
      price: "$2,500",
      duration: "3-Day Hunt",
      includes: [
        "Premium lodge accommodation",
        "Home-cooked meals daily",
        "Guided tree stand placement",
        "Field dressing & quartering",
        "Trophy photos & memories"
      ],
      highlight: "Best for first-time hunters"
    },
    {
      title: "Elk Package",
      tagline: "Backcountry Adventure",
      image: "/images/download-1.jpg",
      price: "$4,500",
      duration: "5-Day Hunt",
      includes: [
        "Wilderness camp setup",
        "All meals & provisions",
        "Expert guide service",
        "Pack out assistance",
        "Processing recommendations"
      ],
      highlight: "Most Popular",
      popular: true
    },
    {
      title: "Waterfowl Package",
      tagline: "Dawn Marsh Hunts",
      image: "/images/download-2.jpg",
      price: "$1,800",
      duration: "2-Day Hunt",
      includes: [
        "Comfortable blind setups",
        "Decoy spread included",
        "Hot breakfast provided",
        "Retriever dog service",
        "Cleaning & packaging"
      ],
      highlight: "Perfect for groups"
    }
  ];

  return (
    <div className="bg-[#1a1612] min-h-screen">
      {/* Hero Section - Reduced padding on mobile */}
      <div className="bg-gradient-to-b from-[#2d3e2a] to-[#1a1612] py-12 md:py-20 border-b-4 border-[#7a5c3d]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1
            className="text-4xl md:text-6xl font-bold text-[#d4b896] mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Hunt Packages
          </h1>
          <p className="text-lg md:text-2xl text-[#e8dcc4] mb-8 px-2">
            Premium guided hunts in the heart of wild country
          </p>
          <div className="h-1 w-24 md:w-32 bg-[#7a5c3d] mx-auto"></div>
        </div>
      </div>

      {/* Featured Banner - Simplified for mobile */}
      <div className="max-w-6xl mx-auto px-4 -mt-8 md:-mt-12">
        <div className="bg-[#2d3e2a] border-4 border-[#7a5c3d] rounded-lg overflow-hidden shadow-2xl">
          <div className="h-40 md:h-64 bg-gradient-to-r from-[#3d4f3a] to-[#2d3e2a] flex items-center justify-center text-6xl md:text-8xl">
            🏔️
          </div>
          <div className="p-4 text-center bg-[#252e23]">
            <p className="text-[#e8dcc4] italic text-sm md:text-base">"Where tradition meets the wild"</p>
          </div>
        </div>
      </div>

      {/* Packages Grid - Switches to 1 column on mobile */}
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`bg-[#2d3e2a] rounded-lg border-4 ${pkg.popular ? 'border-[#d4b896] scale-100 md:scale-105 z-10' : 'border-[#7a5c3d]'} shadow-lg overflow-hidden flex flex-col`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="bg-[#d4b896] text-[#1a1612] text-center text-xs font-black uppercase py-1 tracking-widest">
                  {pkg.highlight}
                </div>
              )}
              
              {/* Package Image - Adjusted height for mobile */}
              <div className="h-56 md:h-48 border-b-4 border-[#7a5c3d] relative">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-black/60 text-[#d4b896] px-3 py-1 text-sm font-bold border border-[#d4b896]">
                  {pkg.duration}
                </div>
              </div>

              {/* Package Content */}
              <div className="p-6 flex-grow flex flex-col">
                <h2 className="text-3xl font-bold text-[#d4b896] mb-1" style={{ fontFamily: "Georgia, serif" }}>
                  {pkg.title}
                </h2>
                <p className="text-[#b8a888] italic mb-6 text-sm">{pkg.tagline}</p>
                
                <div className="mb-6 pb-4 border-b-2 border-[#7a5c3d]">
                    <p className="text-5xl font-bold text-[#d4b896]">{pkg.price}</p>
                    <p className="text-xs text-[#b8a888] uppercase mt-1">{pkg.highlight}</p>
                </div>

                <h3 className="text-md font-bold text-[#e8dcc4] mb-4 uppercase tracking-wider">Includes:</h3>
                <ul className="space-y-3 text-[#e8dcc4] mb-8 flex-grow">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#d4b896] mr-3 font-bold">✓</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-[#7a5c3d] text-[#faf8f3] py-4 rounded-none hover:bg-[#8d6d4a] transition-all font-black uppercase tracking-widest border-2 border-[#5d4428] active:scale-95">
                  BOOK THIS HUNT
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Cards - Stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#2d3e2a] border-4 border-[#7a5c3d] rounded-lg overflow-hidden flex flex-col sm:flex-row">
            <div className="h-48 sm:h-auto sm:w-1/3 bg-[#3d4f3a] flex items-center justify-center text-5xl">🎯</div>
            <div className="p-6 bg-[#252e23] sm:w-2/3">
              <h3 className="text-xl font-bold text-[#d4b896] mb-2 uppercase">Expert Guides</h3>
              <p className="text-[#e8dcc4] text-sm">Experienced locals who know the land and the game better than anyone.</p>
            </div>
          </div>

          <div className="bg-[#2d3e2a] border-4 border-[#7a5c3d] rounded-lg overflow-hidden flex flex-col sm:flex-row">
            <div className="h-48 sm:h-auto sm:w-1/3 bg-[#3d4f3a] flex items-center justify-center text-5xl">🏕️</div>
            <div className="p-6 bg-[#252e23] sm:w-2/3">
              <h3 className="text-xl font-bold text-[#d4b896] mb-2 uppercase">Quality Lodging</h3>
              <p className="text-[#e8dcc4] text-sm">Comfortable beds and hot meals after a long day in the field.</p>
            </div>
          </div>
        </div>

        {/* Testimonial - Reduced text size for mobile */}
        <div className="bg-[#2d3e2a] border-4 border-[#7a5c3d] rounded-lg p-6 md:p-10 shadow-lg text-center">
          <div className="text-3xl mb-4">⭐⭐⭐⭐⭐</div>
          <p className="text-lg md:text-2xl text-[#e8dcc4] italic mb-6 leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>
            "Best hunting experience of my life. The guides were professional, the land was pristine, and the memories are priceless."
          </p>
          <p className="text-[#b8a888] font-bold uppercase tracking-widest text-xs">— Mike T., Colorado</p>
        </div>
      </div>

      {/* Footer CTA - Button stacking for mobile */}
      <div className="bg-gradient-to-t from-[#2d3e2a] to-[#1a1612] text-[#e8dcc4] py-16 border-t-4 border-[#7a5c3d]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#d4b896]" style={{ fontFamily: "Georgia, serif" }}>
            Ready for Adventure?
          </h2>
          <p className="text-lg mb-10 text-[#e8dcc4] opacity-80">Book your hunt today and experience the wild.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto bg-[#7a5c3d] text-[#faf8f3] px-10 py-4 hover:bg-[#8d6d4a] transition-all text-xl font-black border-2 border-[#5d4428] uppercase tracking-tighter">
              CALL (620) 000-0000
            </button>
            <Link to="/gallery" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-transparent text-[#d4b896] px-10 py-4 border-2 border-[#7a5c3d] hover:bg-[#7a5c3d] hover:text-[#faf8f3] transition-all text-xl font-black uppercase tracking-tighter">
                THE GALLERY
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}