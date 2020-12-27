const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  text: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model( 'comment', CommentSchema);