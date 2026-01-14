import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5001/api/login", {
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
    /* Added px-4 to the container so the box doesn't touch the screen edges on mobile */
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
              /* Increased padding to p-3 for better thumb accuracy on mobile */
              className="w-full p-3 rounded bg-[#1a1a1a] text-white border-2 border-[#8b6f47] focus:border-[#d4a574] outline-none transition-colors text-base"
              required
              autoCapitalize="none" // Important for mobile usernames
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
              /* Increased padding and set text-base to prevent iOS "Auto-Zoom" */
              className="w-full p-3 rounded bg-[#1a1a1a] text-white border-2 border-[#8b6f47] focus:border-[#d4a574] outline-none transition-colors text-base"
              required
            />
          </div>

          {error && (
            <div className="bg-red-900/30 border border-red-500 p-3 rounded text-red-200 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            /* Taller button (py-3.5) creates a much better "Touch Target" for thumbs */
            className="w-full bg-[#8b6f47] text-[#1a1a1a] py-3.5 rounded hover:bg-[#a67c52] active:bg-[#70583a] disabled:bg-gray-600 font-bold uppercase tracking-widest transition-all mt-2"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}