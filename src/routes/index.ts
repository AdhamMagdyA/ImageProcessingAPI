import express from 'express';
import image_router from './api/image';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Image Processing API')
})

router.use('/image', image_router);
export default router;
