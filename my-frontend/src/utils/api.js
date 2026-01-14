const API_URL = "http://localhost:5001/api";

export const fetchImages = async () => {
  const res = await fetch(`${API_URL}/images`);
  return res.json();
};

export const loginAdmin = async (username, password) => {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return res.json();
};

export const uploadImage = async (formData, token) => {
  const res = await fetch(`${API_URL}/upload`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });
  return res.json();
};

export const deleteImage = async (filename, token) => {
  const res = await fetch(`${API_URL}/images/${filename}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};