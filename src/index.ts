import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Image Processing API');
});

app.get('/api/image', (req, res) => {
  const imageName = req.query.filename;
  const imagePath = path.resolve(`./images/${imageName}.jpg`);
  res.sendFile(imagePath);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
