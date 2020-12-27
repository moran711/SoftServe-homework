const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
  title: String,
  text: String,
  image: String
});

module.exports = mongoose.model( 'news', NewsSchema)