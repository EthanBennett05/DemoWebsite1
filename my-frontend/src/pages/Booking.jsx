export default function Booking() {
  return (
    <div className="bg-[#1a1612] min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#2d3e2a] to-[#1a1612] py-20 border-b-4 border-[#7a5c3d]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1
            className="text-6xl font-bold text-[#d4b896] mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Ready to Book?
          </h1>
          <p className="text-3xl text-[#e8dcc4] mb-8">
            Call us today and let's get you out here
          </p>
          <div className="h-1 w-32 bg-[#7a5c3d] mx-auto"></div>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-[#2d3e2a] border-4 border-[#7a5c3d] rounded-lg shadow-2xl overflow-hidden">
          {/* Image/Icon Section */}

          {/* Contact Info */}
          <div className="p-12 text-center">
            <h2 className="text-4xl font-bold text-[#d4b896] mb-6" style={{ fontFamily: "Georgia, serif" }}>
              Contact Ethan Bennett
            </h2>
            
            <div className="space-y-8 mb-12">
              {/* Phone */}
              <div className="bg-[#252e23] p-8 rounded-lg border-2 border-[#7a5c3d]">
                <div className="text-5xl mb-4">📱</div>
                <p className="text-lg text-[#b8a888] mb-2">Call or Text</p>
                <a 
                  href="tel:6204235781" 
                  className="text-5xl font-bold text-[#d4b896] hover:text-[#e8dcc4] transition-colors block"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  (620) 423-5781
                </a>
              </div>

              {/* Email */}
              <div className="bg-[#252e23] p-8 rounded-lg border-2 border-[#7a5c3d]">
                <div className="text-5xl mb-4">📧</div>
                <p className="text-lg text-[#b8a888] mb-2">Email Us</p>
                <a 
                  href="mailto:info@11rockranch.com" 
                  className="text-3xl font-bold text-[#d4b896] hover:text-[#e8dcc4] transition-colors break-all"
                >
                  bennett2005ethan@gmail.com
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <a 
                href="tel:6204235781"
                className="block w-full bg-[#7a5c3d] text-[#faf8f3] py-5 rounded-lg hover:bg-[#8d6d4a] transition-colors text-2xl font-bold border-2 border-[#5d4428] shadow-lg"
              >
                📞 CALL NOW
              </a>
              <a 
                href="mailto:info@11rockranch.com"
                className="block w-full bg-transparent text-[#d4b896] py-5 rounded-lg border-2 border-[#7a5c3d] hover:bg-[#7a5c3d] hover:text-[#faf8f3] transition-colors text-2xl font-bold"
              >
                📧 SEND EMAIL
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Why Call Section */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <h3 className="text-3xl font-bold text-[#d4b896] mb-8 text-center" style={{ fontFamily: "Georgia, serif" }}>
          Why Book By Phone?
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#2d3e2a] p-8 border-4 border-[#7a5c3d] rounded-lg text-center">
            <div className="text-6xl mb-4">💬</div>
            <h4 className="text-xl font-bold text-[#d4b896] mb-3">Personal Service</h4>
            <p className="text-[#e8dcc4]">
              Talk directly with Ethan about your specific needs, dates, and any questions you have
            </p>
          </div>

          <div className="bg-[#2d3e2a] p-8 border-4 border-[#7a5c3d] rounded-lg text-center">
            <div className="text-6xl mb-4">⚡</div>
            <h4 className="text-xl font-bold text-[#d4b896] mb-3">Immediate Answers</h4>
            <p className="text-[#e8dcc4]">
              Get real-time availability, pricing, and confirmation - no waiting around
            </p>
          </div>

          <div className="bg-[#2d3e2a] p-8 border-4 border-[#7a5c3d] rounded-lg text-center">
            <div className="text-6xl mb-4">🤝</div>
            <h4 className="text-xl font-bold text-[#d4b896] mb-3">Custom Packages</h4>
            <p className="text-[#e8dcc4]">
              We can tailor your hunt and lodging to exactly what you're looking for
            </p>
          </div>
        </div>
      </div>

      {/* Quick Info Section */}
      <div className="bg-[#2d3e2a] border-t-4 border-b-4 border-[#7a5c3d] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-[#d4b896] mb-6 text-center" style={{ fontFamily: "Georgia, serif" }}>
            What to Have Ready When You Call
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-[#e8dcc4]">
            <div className="bg-[#252e23] p-6 rounded-lg border-2 border-[#7a5c3d]">
              <h4 className="font-bold text-[#d4b896] mb-3">Basic Information</h4>
              <ul className="space-y-2">
                <li>✓ Preferred dates (or date range)</li>
                <li>✓ Number of hunters in your group</li>
                <li>✓ Type of hunt you're interested in</li>
                <li>✓ Lodging preference</li>
              </ul>
            </div>
            <div className="bg-[#252e23] p-6 rounded-lg border-2 border-[#7a5c3d]">
              <h4 className="font-bold text-[#d4b896] mb-3">Questions to Ask</h4>
              <ul className="space-y-2">
                <li>✓ Current availability</li>
                <li>✓ Package details and pricing</li>
                <li>✓ What's included in your stay</li>
                <li>✓ Deposit and payment information</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-t from-[#2d3e2a] to-[#1a1612] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2
            className="text-5xl font-bold mb-6 text-[#d4b896]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Don't Wait - Call Today
          </h2>
          <p className="text-2xl text-[#e8dcc4] mb-8">
            Premium dates fill up fast, especially during peak season
          </p>
          <a 
            href="tel:6204235781"
            className="inline-block bg-[#7a5c3d] text-[#faf8f3] px-12 py-6 rounded-lg hover:bg-[#8d6d4a] transition-colors text-3xl font-bold border-4 border-[#5d4428] shadow-2xl"
          >
            📞 (620) 423-5781
          </a>
        </div>
      </div>
    </div>
  );
}