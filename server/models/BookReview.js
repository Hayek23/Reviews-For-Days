const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const bookReviewSchema = new Schema({
  bookTitle: {
    type: String,
    required: 'please enter a title',
    minlength: 1,
    maxlength: 100,
    trim: true,
  },
  bookReviewText: {
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
  readTime: {
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

const BookReview = model('BookReview', bookReviewSchema);

module.exports = BookReview;
