import { Link } from "react-router-dom";
import Slideshow from "../components/Slideshow";

export default function Home() {
  return (
    <div className="bg-[#1a1612] min-h-screen">
      <div>
        {/* Hero Section - Deep Forest Green with Tan accents */}
        <div className="bg-[#2d3e2a] text-[#e8dcc4] py-16 border-b-4 border-[#7a5c3d]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="relative h-[30vh] md:h-[60vh] overflow-hidden rounded-md border-4 border-[#7a5c3d] shadow-2xl">
              <Slideshow />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent z-10" />
              <div className="absolute inset-2 border border-[#7a5c3d]/50 pointer-events-none z-20" />
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          {/* Standard */}

          {/* Maintenance Info */}
          <div className="bg-[#252e23] p-8 border-4 border-[#7a5c3d] shadow-lg">
            <h3
              className="text-3xl font-bold mb-6 text-[#d4b896]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              What’s Included With Our Hunts
            </h3>
            <p className="text-xl mb-6 text-[#e8dcc4]">
              Honest, hard-working hunts for folks who want the real experience.
              We focus on well-managed ground, quality birds, and a no-nonsense
              approach that puts hunters in the field where they belong.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#252e23] p-8 shadow-lg border-t-4 border-[#7a5c3d]">
          {" "}
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2
              className="text-4xl font-bold mb-4 text-[#d4b896]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-[#e8dcc4]"></p>
            <Link to={"/booking"}>
              <button className="bg-[#7a5c3d] text-[#faf8f3] px-10 py-4 hover:bg-[#8d6d4a] transition-colors text-xl font-bold border-2 border-[#5d4428]">
                CONTACT US
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
