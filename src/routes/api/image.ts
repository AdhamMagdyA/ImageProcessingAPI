import express from 'express';
import path from 'path';
import resizeImage from '../../utils/imageProcessing';
import fs from 'fs';

const image_router = express.Router();

image_router.get('/', async (req, res) => {
  const imageName = req.query.filename;
  const width = req.query.width;
  const height = req.query.height;

  const imagePath = path.resolve(`./assets/full/${imageName}.jpg`);
  const thumb = path.resolve(
    `./assets/thumb/${imageName}_${width}x${height}.jpg`
  );

  // checking if the filename is provided
  if (imageName === undefined) {
    res.status(400).send('No filename provided');
    return;
  }
  // checking if the width is provided
  if (width === undefined) {
    res.status(400).send('No width provided');
    return;
  }
  // checking if the height is provided
  if (height === undefined) {
    res.status(400).send('No height provided');
    return;
  }
  // checking if the image file exists
  if (!fs.existsSync(imagePath)) {
    res.status(404).send('Image not found');
    return;
  }
  // checking if the width is not a number
  if (isNaN(Number(width))) {
    res.status(400).send('Width is not a number');
    return;
  }
  // checking if the height is not a number
  if (isNaN(Number(height))) {
    res.status(400).send('Height is not a number');
    return;
  }
  // checking if the width is in range
  if (Number(width) < 1 || Number(width) > 1920) {
    res.status(400).send('Width is out of range [1, 1920]');
    return;
  }
  // checking if the height is in range
  if (Number(height) < 1 || Number(height) > 1080) {
    res.status(400).send('Height is out of range [1, 1080]');
    return;
  }

  // checking if the image was resized already
  if (fs.existsSync(thumb)) {
    res.status(200).sendFile(thumb);
    return;
  } else {
    // resizing the image
    await resizeImage(imageName as string, Number(width), Number(height)).then(
      (result) => {
        if (result) {
          res.status(200).sendFile(thumb);
        } else {
          res.status(500).send('Internal server error');
        }
      }
    );
  }
});

export default image_router;
