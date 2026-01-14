import { useEffect, useRef, useState } from "react";

const slides = [
  "/images/download.jpg",
  "/images/download-1.jpg",
  "/images/download-2.jpg",
];

export default function Slideshow() {
  const [index, setIndex] = useState(0);
  const startX = useRef(null);
  const intervalRef = useRef(null);

  const next = () =>
    setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

  const prev = () =>
    setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));

  // Auto-advance every 5 seconds
  useEffect(() => {
    startAuto();
    return stopAuto;
  }, );

  const startAuto = () => {
    stopAuto();
    intervalRef.current = setInterval(next, 5000);
  };

  const stopAuto = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  // Touch handlers
  const onTouchStart = (e) => {
    stopAuto();
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (!startX.current) return;

    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (diff > 50) next();
    if (diff < -50) prev();

    startX.current = null;
    startAuto();
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      {slides.map((src, i) => (
        <img
          key={src}
          src={src}
          alt="Slideshow"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Controls */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 text-2xl"
      >
        ‹
      </button>

      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 text-2xl"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 w-full flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
