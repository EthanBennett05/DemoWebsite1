import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [images, setImages] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    if (!token) {
      navigate("/admin");
      return;
    }
    fetchImages();
  }, [token, navigate]);

  const fetchImages = async () => {
    try {
      const res = await fetch("http://localhost:5001/api/images");
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
      const res = await fetch("http://localhost:5001/api/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
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

  const handleDelete = async (filename) => {
    const name = filename.split("/").pop();

    try {
      const res = await fetch(`http://localhost:5001/api/images/${name}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
    <div className="min-h-screen bg-[#1f1f1f] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-[#d4a574]">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        {/* Upload Form */}
        <div className="bg-[#2a2a2a] p-6 rounded-lg mb-8 border-4 border-[#8b6f47]">
          <h2 className="text-2xl font-bold mb-4 text-[#d4a574]">Upload Image</h2>
          <form onSubmit={handleUpload} className="space-y-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="block w-full text-sm text-[#c9b896]
                file:mr-4 file:py-2 file:px-4
                file:rounded file:border-0
                file:text-sm file:font-semibold
                file:bg-[#8b6f47] file:text-[#1a1a1a]
                hover:file:bg-[#a67c52]"
            />
            <button
              type="submit"
              disabled={uploading}
              className="bg-[#8b6f47] text-[#1a1a1a] px-6 py-2 rounded hover:bg-[#a67c52] disabled:bg-gray-600 font-bold"
            >
              {uploading ? "Uploading..." : "Upload"}
            </button>
          </form>
          {message && <p className="mt-4 text-[#d4a574]">{message}</p>}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.length === 0 ? (
            <p className="text-[#c9b896] col-span-3 text-center">
              No images uploaded yet
            </p>
          ) : (
            images.map((img, index) => (
              <div key={index} className="bg-[#2a2a2a] p-4 rounded-lg border-4 border-[#8b6f47]">
                <img
                  src={`http://localhost:5001${img}`}
                  alt={`Upload ${index}`}
                  className="w-full h-64 object-cover rounded mb-4"
                />
                <button
                  onClick={() => handleDelete(img)}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 w-full"
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



