const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const movieReviewSchema = new Schema({
  movieReviewText: {
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
  watchTime: {
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

const MovieReview = model('MovieReview', movieReviewSchema);

module.exports = MovieReview;
