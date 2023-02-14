const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const gameReviewSchema = new Schema({
  gameReviewText: {
    type: String,
    required: 'Review is required!',
    minlength: 1,
    maxlength: 500,
    trim: true,
  },
  reviewAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  timePlayed: {
    type: String,
    required: 'time spent on this item is required',
    trim: true
  }
  ,
  genre: {
    type: String,
    required: 'a genre is required'
  }
});

const GameReview = model('GameReview', gameReviewSchema);

module.exports = GameReview;
