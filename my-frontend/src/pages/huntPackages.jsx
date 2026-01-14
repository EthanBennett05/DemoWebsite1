import { Link } from "react-router-dom";

export default function huntPackages() {
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
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#2d3e2a] to-[#1a1612] py-20 border-b-4 border-[#7a5c3d]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1
            className="text-6xl font-bold text-[#d4b896] mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Hunt Packages
          </h1>
          <p className="text-2xl text-[#e8dcc4] mb-8">
            Premium guided hunts in the heart of wild country
          </p>
          <div className="h-1 w-32 bg-[#7a5c3d] mx-auto"></div>
        </div>
      </div>

      {/* Featured Image Banner */}
      <div className="max-w-6xl mx-auto px-4 -mt-12">
        <div className="bg-[#2d3e2a] border-4 border-[#7a5c3d] rounded-lg overflow-hidden shadow-2xl">
          <div className="h-64 bg-gradient-to-r from-[#3d4f3a] to-[#2d3e2a] flex items-center justify-center text-8xl">
            🏔️
          </div>
          <div className="p-4 text-center bg-[#252e23]">
            <p className="text-[#e8dcc4] italic">"Where tradition meets the wild"</p>
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`bg-[#2d3e2a] rounded-lg border-4 ${pkg.popular ? 'border-[#d4b896]' : 'border-[#7a5c3d]'} shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 relative`}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 bg-[#7a5c3d] text-[#faf8f3] text-xs font-bold px-3 py-1 rounded-full z-10">
                  {pkg.highlight}
                </div>
              )}
              
              {/* Package Image */}
              <div className="h-48 bg-gradient-to-br from-[#4a5b47] to-[#2d3e2a] flex items-center justify-center text-7xl border-b-4 border-[#7a5c3d]">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Package Content */}
              <div className="p-6">
                <h2 
                  className="text-3xl font-bold text-[#d4b896] mb-2"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {pkg.title}
                </h2>
                <p className="text-[#b8a888] italic mb-4">{pkg.tagline}</p>
                
                <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-[#7a5c3d]">
                  <div>
                    <p className="text-4xl font-bold text-[#d4b896]">{pkg.price}</p>
                    <p className="text-sm text-[#b8a888]">{pkg.duration}</p>
                  </div>
                  {!pkg.popular && (
                    <div className="text-right">
                      <p className="text-xs text-[#b8a888] uppercase tracking-wide">{pkg.highlight}</p>
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-bold text-[#e8dcc4] mb-3">Package Includes:</h3>
                <ul className="space-y-2 text-[#e8dcc4] mb-6">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#d4b896] mr-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-[#7a5c3d] text-[#faf8f3] py-3 rounded hover:bg-[#8d6d4a] transition-colors font-bold">
                  BOOK NOW
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Image Gallery Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#2d3e2a] border-4 border-[#7a5c3d] rounded-lg overflow-hidden shadow-lg">
            <div className="h-64 bg-gradient-to-br from-[#5a6b57] to-[#3d4f3a] flex items-center justify-center text-6xl">
              🎯
            </div>
            <div className="p-4 bg-[#252e23]">
              <h3 className="text-xl font-bold text-[#d4b896] mb-2">Expert Guides</h3>
              <p className="text-[#e8dcc4]">Experienced locals who know the land and the game</p>
            </div>
          </div>

          <div className="bg-[#2d3e2a] border-4 border-[#7a5c3d] rounded-lg overflow-hidden shadow-lg">
            <div className="h-64 bg-gradient-to-br from-[#5a6b57] to-[#3d4f3a] flex items-center justify-center text-6xl">
              🏕️
            </div>
            <div className="p-4 bg-[#252e23]">
              <h3 className="text-xl font-bold text-[#d4b896] mb-2">Comfort in the Wild</h3>
              <p className="text-[#e8dcc4]">Modern amenities meet backcountry adventure</p>
            </div>
          </div>
        </div>

        {/* Testimonial Banner */}
        <div className="bg-[#2d3e2a] border-4 border-[#7a5c3d] rounded-lg p-8 shadow-lg text-center">
          <div className="text-5xl mb-4">⭐⭐⭐⭐⭐</div>
          <p className="text-2xl text-[#e8dcc4] italic mb-4" style={{ fontFamily: "Georgia, serif" }}>
            "Best hunting experience of my life. The guides were professional, the land was pristine, and the memories are priceless."
          </p>
          <p className="text-[#b8a888]">— Mike T., Colorado</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-t from-[#2d3e2a] to-[#1a1612] text-[#e8dcc4] py-16 border-t-4 border-[#7a5c3d]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2
            className="text-4xl font-bold mb-4 text-[#d4b896]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl mb-8 text-[#e8dcc4]">
            Book your hunt today and experience the wild like never before
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-[#7a5c3d] text-[#faf8f3] px-10 py-4 hover:bg-[#8d6d4a] transition-colors text-xl font-bold border-2 border-[#5d4428]">
              CALL (620) 423-5781
            </button>
            <Link to={"/gallery"}>
            <button className="bg-transparent text-[#d4b896] px-10 py-4 border-2 border-[#7a5c3d] hover:bg-[#7a5c3d] hover:text-[#faf8f3] transition-colors text-xl font-bold">
              VIEW GALLERY
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}