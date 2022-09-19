import express from 'express';
import router from './routes/index';

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.use('/api', router);

export default app;
