const express = require('express');
const multer = require('multer');
const cloudinary = require('../utils/cloudinary');

const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.post('/', upload.single('image'), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    res.json({ url: result.secure_url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
