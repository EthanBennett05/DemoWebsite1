import { useEffect, useState } from "react";

export default function Gallery() {
  const [images, setImages] = useState([]);
  
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const res = await fetch("http://localhost:5001/api/images");
      const data = await res.json();
      setImages(data.images);
    } catch (err) {
      console.error("Error fetching images:", err);
    }
  };

  return (
    <div className="bg-[#1a1612] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1
          className="text-5xl font-bold text-[#d4b896] mb-12 text-center"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Demo Sites Gallery
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-6">
          {images.length === 0 ? (
            <p className="text-[#e8dcc4] col-span-3 text-center text-lg">
              No photos yet added
            </p>
          ) : (
            images.map((img, index) => (
              <div key={index} className="bg-[#2d3e2a] p-2 border-2 border-[#7a5c3d] shadow-lg">
                <img
                  src={`http://localhost:5001${img}`}
                  alt={`Demo ${index}`}
                  className="md:w-full md:h-32 object-cover rounded"
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}