import express from 'express';
import path from 'path';

const image_router = express.Router();

image_router.get('/', (req, res) => {
  const imageName = req.query.filename;
  const imagePath = path.resolve(`./assets/full/${imageName}.jpg`);
  res.sendFile(imagePath);
});

export default image_router;
