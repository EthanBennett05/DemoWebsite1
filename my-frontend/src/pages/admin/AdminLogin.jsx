import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Dynamic API URL logic to switch between Render and Localhost automatically
  const API_BASE_URL = import.meta.env.PROD 
    ? "https://demowebsite1-backend.onrender.com/" // Replace with your Render URL
    : "http://localhost:5001";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${API_BASE_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("adminToken", data.token);
        navigate("/admin/dashboard");
      } else {
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("Error connecting to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1f1f1f] text-white flex items-center justify-center px-4">
      <div className="bg-[#2a2a2a] p-6 md:p-8 rounded-lg w-full max-w-md border-4 border-[#8b6f47] shadow-2xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-[#d4a574] uppercase tracking-wider">
          Admin Login
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-[#c9b896] font-semibold text-sm uppercase tracking-wide">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              /* text-base prevents iOS auto-zoom; p-3 makes a better touch target */
              className="w-full p-3 rounded bg-[#1a1a1a] text-white border-2 border-[#8b6f47] focus:border-[#d4a574] outline-none transition-colors text-base"
              required
              autoCapitalize="none"
              autoCorrect="off" // Added to prevent mobile autocorrect on usernames
            />
          </div>
          
          <div>
            <label className="block mb-2 text-[#c9b896] font-semibold text-sm uppercase tracking-wide">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded bg-[#1a1a1a] text-white border-2 border-[#8b6f47] focus:border-[#d4a574] outline-none transition-colors text-base"
              required
            />
          </div>

          {error && (
            <div className="bg-red-900/30 border border-red-500 p-3 rounded text-red-200 text-sm animate-pulse">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            /* Increased vertical padding for mobile thumbs */
            className="w-full bg-[#8b6f47] text-[#1a1a1a] py-3.5 rounded hover:bg-[#a67c52] active:scale-[0.98] disabled:bg-gray-600 font-bold uppercase tracking-widest transition-all mt-2"
          >
            {loading ? "Verifying..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}