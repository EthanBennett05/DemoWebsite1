const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const app = express();

// Configuration - Use Environment Variables for Security
const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-for-dev';
const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME;
const CLOUDINARY_KEY = process.env.CLOUDINARY_KEY;
const CLOUDINARY_SECRET = process.env.CLOUDINARY_SECRET;

// Configure Cloudinary
cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_KEY,
  api_secret: CLOUDINARY_SECRET
});

// Configure Cloudinary Storage for Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: '11rock_uploads',
    allowed_formats: ['jpg', 'png', 'jpeg', 'gif'],
  },
});

const upload = multer({ storage: storage });

// Admin Config
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD_HASH = bcrypt.hashSync(process.env.ADMIN_PASSWORD || 'password123', 10);
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Auth Middleware
const verifyAdmin = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ error: 'No token provided' });
  
  try {
    const decoded = jwt.verify(token.replace('Bearer ', ''), JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

// ============ UPDATED ROUTES ============

// Get all images (Public)
app.get('/api/images', async (req, res) => {
  try {
    // We fetch the list of images directly from Cloudinary
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: '11rock_uploads' 
    });
    const images = result.resources.map(file => file.secure_url);
    res.json({ images });
  } catch (err) {
    res.status(500).json({ error: 'Unable to fetch images from cloud' });
  }
});

// Upload image (Admin)
app.post('/api/upload', verifyAdmin, upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  
  // Cloudinary returns the full URL in req.file.path
  res.json({ 
    message: 'Uploaded to Cloud!',
    path: req.file.path 
  });
});

// Delete image (Admin)
app.delete('/api/images/:public_id', verifyAdmin, async (req, res) => {
  try {
    // For Cloudinary, we delete using the "public_id"
    const publicId = `11rock_uploads/${req.params.public_id}`;
    await cloudinary.uploader.destroy(publicId);
    res.json({ message: 'Deleted from Cloud' });
  } catch (err) {
    res.status(500).json({ error: 'Delete failed' });
  }
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username !== ADMIN_USERNAME || !bcrypt.compareSync(password, ADMIN_PASSWORD_HASH)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '24h' });
  res.json({ token, message: 'Login successful' });
});

app.listen(PORT, () => console.log(`Server live on port ${PORT}`));