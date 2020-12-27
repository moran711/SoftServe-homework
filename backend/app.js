const express = require('express');
require('dotenv').config();
const { connectDB } = require('./db');
const commentModel = require('./models/comment.model');
const newsModel = require('./models/news.model');
const cors = require('cors');
const bodyParser = require('body-parser')
connectDB();

const app = express();
const PORT = process.env.PORT | 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/news', async (req, res) => {
    const news = await newsModel.find();
    res.status(200).json(news);
});

app.get('/', async (req, res) => {
  res.send('hello world')
});

app.post('/news', async (req, res) => {
    const news = req.body;
    await new newsModel(news).save();
    res.status(200).json({message: 'Created!'})
});

app.get('/comment', async (req, res) => {
  try {
    const comment = await commentModel.find();
    res.status(200).json(comment);
  } catch(e) {
    console.error(e.message)
  }
});

app.post('/comment', async (req, res) => {
    const comment = req.body;
    await new commentModel(comment).save();
    res.status(200).json({message: 'Created!'});
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
