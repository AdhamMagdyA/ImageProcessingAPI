import express, { Request, Response, Router } from 'express';
import image_router from './api/image';

const router: Router = express.Router();

router.get('/', (_req: Request, res: Response) => {
  res.send('Welcome to the Image Processing API');
});

router.use('/image', image_router);
export default router;
