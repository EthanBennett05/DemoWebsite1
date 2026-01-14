export default function Booking() {
  return (
    <div className="bg-[#1a1612] min-h-screen">
      {/* Hero Section - Adjusted padding and text size for mobile */}
      <div className="bg-gradient-to-b from-[#2d3e2a] to-[#1a1612] py-12 md:py-20 border-b-4 border-[#7a5c3d]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1
            className="text-4xl md:text-6xl font-bold text-[#d4b896] mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Ready to Book?
          </h1>
          <p className="text-xl md:text-3xl text-[#e8dcc4] mb-8">
            Call us today and let's get you out here
          </p>
          <div className="h-1 w-24 md:w-32 bg-[#7a5c3d] mx-auto"></div>
        </div>
      </div>

      {/* Main Contact Section - Reduced padding on mobile */}
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
        <div className="bg-[#2d3e2a] border-4 border-[#7a5c3d] rounded-lg shadow-2xl overflow-hidden">
          <div className="p-6 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#d4b896] mb-6" style={{ fontFamily: "Georgia, serif" }}>
              Contact us
            </h2>
            
            <div className="space-y-4 md:space-y-8 mb-8 md:mb-12">
              {/* Phone - Adjusted text size to prevent overflow */}
              <div className="bg-[#252e23] p-6 md:p-8 rounded-lg border-2 border-[#7a5c3d]">
                <div className="text-3xl md:text-5xl mb-3">📱</div>
                <p className="text-md md:text-lg text-[#b8a888] mb-1">Call or Text</p>
                <a 
                  href="tel:6204235781"
                  className="text-2xl md:text-5xl font-bold text-[#d4b896] hover:text-[#e8dcc4] transition-colors block"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  (000) 000-0000
                </a>
              </div>

              {/* Email - Added break-all for long emails on small screens */}
              <div className="bg-[#252e23] p-6 md:p-8 rounded-lg border-2 border-[#7a5c3d]">
                <div className="text-4xl md:text-5xl mb-3">📧</div>
                <p className="text-md md:text-lg text-[#b8a888] mb-1">Email Us Us</p>
                <a 
                  href="mailto:info@11rockranch.com" 
                  className="text-xl md:text-3xl font-bold text-[#d4b896] hover:text-[#e8dcc4] transition-colors break-all"
                >
                  info@11rockranch.com
                </a>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="space-y-4">
              <a 
                href="tel:6204235781"
                className="block w-full bg-[#7a5c3d] text-[#faf8f3] py-4 md:py-5 rounded-lg hover:bg-[#8d6d4a] transition-colors text-xl md:text-2xl font-bold border-2 border-[#5d4428] shadow-lg"
              >
                📞 CALL NOW
              </a>
              <a 
                href="mailto:info@11rockranch.com"
                className="block w-full bg-transparent text-[#d4b896] py-4 md:py-5 rounded-lg border-2 border-[#7a5c3d] hover:bg-[#7a5c3d] hover:text-[#faf8f3] transition-colors text-xl md:text-2xl font-bold"
              >
                📧 SEND EMAIL
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Why Call Section - Cards stack automatically on mobile */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-[#d4b896] mb-8 text-center" style={{ fontFamily: "Georgia, serif" }}>
          Why Book By Phone?
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#2d3e2a] p-6 md:p-8 border-4 border-[#7a5c3d] rounded-lg text-center">
            <div className="text-5xl md:text-6xl mb-4">💬</div>
            <h4 className="text-xl font-bold text-[#d4b896] mb-3">Personal Service</h4>
            <p className="text-[#e8dcc4] text-sm md:text-base">
              Talk directly with Ethan about your specific needs, dates, and any questions you have
            </p>
          </div>

          <div className="bg-[#2d3e2a] p-6 md:p-8 border-4 border-[#7a5c3d] rounded-lg text-center">
            <div className="text-5xl md:text-6xl mb-4">⚡</div>
            <h4 className="text-xl font-bold text-[#d4b896] mb-3">Immediate Answers</h4>
            <p className="text-[#e8dcc4] text-sm md:text-base">
              Get real-time availability, pricing, and confirmation - no waiting around
            </p>
          </div>

          <div className="bg-[#2d3e2a] p-6 md:p-8 border-4 border-[#7a5c3d] rounded-lg text-center">
            <div className="text-5xl md:text-6xl mb-4">🤝</div>
            <h4 className="text-xl font-bold text-[#d4b896] mb-3">Custom Packages</h4>
            <p className="text-[#e8dcc4] text-sm md:text-base">
              We can tailor your hunt and lodging to exactly what you're looking for
            </p>
          </div>
        </div>
      </div>

      {/* Quick Info Section - Better spacing for touch lists */}
      <div className="bg-[#2d3e2a] border-t-4 border-b-4 border-[#7a5c3d] py-10 md:py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-xl md:text-2xl font-bold text-[#d4b896] mb-6 text-center" style={{ fontFamily: "Georgia, serif" }}>
            What to Have Ready
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#e8dcc4]">
            <div className="bg-[#252e23] p-5 md:p-6 rounded-lg border-2 border-[#7a5c3d]">
              <h4 className="font-bold text-[#d4b896] mb-3 uppercase tracking-wider text-sm">Basic Information</h4>
              <ul className="space-y-3 text-sm md:text-base">
                <li>✓ Preferred dates</li>
                <li>✓ Number of hunters</li>
                <li>✓ Type of hunt</li>
                <li>✓ Lodging preference</li>
              </ul>
            </div>
            <div className="bg-[#252e23] p-5 md:p-6 rounded-lg border-2 border-[#7a5c3d]">
              <h4 className="font-bold text-[#d4b896] mb-3 uppercase tracking-wider text-sm">Questions to Ask</h4>
              <ul className="space-y-3 text-sm md:text-base">
                <li>✓ Current availability</li>
                <li>✓ Package details</li>
                <li>✓ What's included</li>
                <li>✓ Deposit information</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA - Large touch target for phone number */}
      <div id="CallToday" className="bg-gradient-to-t from-[#2d3e2a] to-[#1a1612] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2
            className="text-3xl md:text-5xl font-bold mb-6 text-[#d4b896]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Don't Wait - Call Today
          </h2>
          <p className="text-lg md:text-2xl text-[#e8dcc4] mb-8">
            Premium dates fill up fast
          </p>
          {/* tel:6204235781 */}
          <a 
            href="#" 
            className="inline-block w-full md:w-auto bg-[#7a5c3d] text-[#faf8f3] px-8 md:px-12 py-5 md:py-6 rounded-lg hover:bg-[#8d6d4a] transition-colors text-2xl md:text-3xl font-bold border-4 border-[#5d4428] shadow-2xl"
          >
            📞 (000) 000-0000
          </a>
        </div>
      </div>
    </div>
  );
}