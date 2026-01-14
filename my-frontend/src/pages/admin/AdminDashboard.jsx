import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [images, setImages] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");

  // Dynamic API URL for Render vs Local
  const API_BASE_URL = import.meta.env.PROD 
    ? "https://demowebsite1-backend.onrender.com" // Replace with your Render URL
    : "http://localhost:5001";

  useEffect(() => {
    if (!token) {
      navigate("/admin");
      return;
    }
    fetchImages();
  }, [token, navigate]);

  const fetchImages = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/images`);
      const data = await res.json();
      setImages(data.images);
    } catch (err) {
      console.error("Error fetching images:", err);
    }
  };

  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0]);
    setMessage("");
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setMessage("Please select a file");
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const res = await fetch(`${API_BASE_URL}/api/upload`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const data = await res.json();

      if (res.ok) {
        setMessage("Image uploaded successfully!");
        setSelectedFile(null);
        fetchImages();
        e.target.reset();
      } else {
        setMessage(data.error || "Upload failed");
      }
    } catch (err) {
      setMessage("Error uploading image");
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (fullUrl) => {
    // Cloudinary logic: Extract public_id from the URL
    // URL looks like: .../11rock_uploads/v123456/filename.jpg
    const parts = fullUrl.split('/');
    const filenameWithExtension = parts[parts.length - 1];
    const publicId = filenameWithExtension.split('.')[0]; 

    if (!window.confirm("Are you sure you want to delete this photo?")) return;

    try {
      const res = await fetch(`${API_BASE_URL}/api/images/${publicId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      
      if (res.ok) {
        setMessage("Image deleted successfully");
        fetchImages();
      } else {
        setMessage("Failed to delete image");
      }
    } catch (err) {
      setMessage("Error deleting image");
      console.error(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-[#1f1f1f] text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-2xl md:text-4xl font-bold text-[#d4a574] uppercase tracking-wide">
            Admin Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="w-full sm:w-auto bg-red-600 text-white px-6 py-2.5 rounded hover:bg-red-700 font-bold shadow-lg transition-transform active:scale-95"
          >
            Logout
          </button>
        </div>

        {/* Upload Form */}
        <div className="bg-[#2a2a2a] p-5 md:p-6 rounded-lg mb-8 border-4 border-[#8b6f47] shadow-xl">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#d4a574]">Upload New Photo</h2>
          <form onSubmit={handleUpload} className="space-y-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="block w-full text-sm text-[#c9b896]
                file:mr-4 file:py-3 file:px-4
                file:rounded file:border-0
                file:text-sm file:font-bold
                file:bg-[#8b6f47] file:text-[#1a1a1a]
                hover:file:bg-[#a67c52] file:cursor-pointer"
            />
            <button
              type="submit"
              disabled={uploading}
              className="w-full md:w-auto bg-[#8b6f47] text-[#1a1a1a] px-8 py-3 rounded hover:bg-[#a67c52] disabled:bg-gray-600 font-black uppercase tracking-widest transition-all"
            >
              {uploading ? "Uploading..." : "Upload Image"}
            </button>
          </form>
          {message && (
            <p className="mt-4 text-[#d4a574] font-semibold bg-[#1a1a1a] p-3 rounded border border-[#8b6f47]/30">
              {message}
            </p>
          )}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {images.length === 0 ? (
            <div className="bg-[#2a2a2a] border-2 border-dashed border-[#8b6f47] p-12 rounded-lg col-span-full text-center">
              <p className="text-[#c9b896] italic text-lg">No images in the gallery yet</p>
            </div>
          ) : (
            images.map((imgUrl, index) => (
              <div key={index} className="bg-[#2a2a2a] p-2 md:p-3 rounded-lg border-2 md:border-4 border-[#8b6f47] flex flex-col shadow-lg">
                <div className="relative h-32 md:h-48 w-full mb-2 overflow-hidden rounded bg-[#1a1a1a]">
                   <img
                    src={imgUrl} // Using the full Cloudinary URL directly
                    alt={`Upload ${index}`}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <button
                  onClick={() => handleDelete(imgUrl)}
                  className="bg-red-600 text-white py-2 rounded hover:bg-red-700 w-full font-bold uppercase text-[10px] md:text-xs tracking-tighter shadow-md active:scale-95 transition-transform"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}