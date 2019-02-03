import express from 'express';
import cors from 'cors';
import posts from './db/db';

const app = express();

app.use(cors());

app.get('/posts', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'posts retrieved successfully',
    posts: posts
  })
})

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
})