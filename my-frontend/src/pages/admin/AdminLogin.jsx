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
    <div className="min-h-screen bg-[#1f1f1f] text-white flex items-center justify-center">
      <div className="bg-[#2a2a2a] p-8 rounded-lg w-full max-w-md border-4 border-[#8b6f47]">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#d4a574]">Admin Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 text-[#c9b896]">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 rounded bg-[#1a1a1a] text-white border-2 border-[#8b6f47]"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-[#c9b896]">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded bg-[#1a1a1a] text-white border-2 border-[#8b6f47]"
              required
            />
          </div>
          {error && <p className="text-red-400">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#8b6f47] text-[#1a1a1a] py-2 rounded hover:bg-[#a67c52] disabled:bg-gray-600 font-bold"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}