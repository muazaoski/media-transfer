const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const os = require('os');

const app = express();
const PORT = 3000;

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const originalName = Buffer.from(file.originalname, 'latin1').toString('utf8');
    cb(null, `${timestamp}-${originalName}`);
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: Infinity, // NO FILE SIZE LIMIT
    files: Infinity, // NO FILE COUNT LIMIT
    fieldSize: Infinity, // NO FIELD SIZE LIMIT
    parts: Infinity // NO PARTS LIMIT
  }
});

app.use(cors());
app.use(express.json({ limit: '50gb' }));
app.use(express.urlencoded({ limit: '50gb', extended: true }));
app.use(express.static('public'));

// Get local IP address
function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

// Upload endpoint with error handling - UNLIMITED FILES!
app.post('/upload', (req, res) => {
  const uploadHandler = upload.array('media'); // NO LIMIT!

  uploadHandler(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      console.error('Multer error:', err.message);
      return res.status(400).json({ error: `Upload error: ${err.message}` });
    } else if (err) {
      console.error('Unknown error:', err);
      return res.status(500).json({ error: 'Server error during upload.' });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No files uploaded' });
    }

    const uploadedFiles = req.files.map(file => ({
      name: file.filename,
      size: file.size,
      path: file.path
    }));

    console.log(`✅ Successfully received ${uploadedFiles.length} file(s)`);
    res.json({
      success: true,
      count: uploadedFiles.length,
      files: uploadedFiles
    });
  });
});

// Get upload statistics
app.get('/stats', (req, res) => {
  const files = fs.readdirSync(uploadsDir);
  const stats = {
    totalFiles: files.length,
    files: files.map(file => ({
      name: file,
      size: fs.statSync(path.join(uploadsDir, file)).size
    }))
  };
  res.json(stats);
});

app.listen(PORT, '0.0.0.0', () => {
  const localIP = getLocalIP();
  console.log('\n===========================================');
  console.log('📱 iPhone Media Transfer Server Running');
  console.log('🚀 UNLIMITED MODE - NO RESTRICTIONS!');
  console.log('===========================================');
  console.log(`\n🌐 Access from your iPhone:`);
  console.log(`   http://${localIP}:${PORT}`);
  console.log(`\n💾 Files will be saved to:`);
  console.log(`   ${uploadsDir}`);
  console.log(`\n⚡ Upload as many files as you want!`);
  console.log(`⚡ Any file size accepted!`);
  console.log('\n===========================================\n');
});
