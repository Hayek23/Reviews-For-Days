const { AuthenticationError } = require('apollo-server-express');
const { User, MovieReview, GameReview, BookReview } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('reviews');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('reviews');
    },
    movieReviews: async (parent, { username }) => {
      const params = username ? { username } : {};
      return MovieReview.find(params).sort({ createdAt: -1 });
    },
    movieReview: async (parent, { movieReviewId }) => {
      return MovieReview.findOne({ _id: movieReviewId });
    },
    gameReviews: async (parent, { username }) => {
      const params = username ? { username } : {};
      return GameReview.find(params).sort({ createdAt: -1 });
    },
    gameReview: async (parent, { gameReviewId }) => {
      return GameReview.findOne({ _id: gameReviewId })
    },
    bookReviews: async (parent, { username }) => {
      const params = username ? { username } : {};
      return BookReview.find(params).sort({ createdAt: -1 });
    },
    bookReview: async (parent, { bookReviewId }) => {
      return BookReview.findOne({ _id: bookReviewId })
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('reviews');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addMovieReview: async (parent, { movieReviewText, genre, watchTime }, context) => {
      if (context.user) {
        const review = await Review.create({
          movieReviewText,
          reviewAuthor: context.user.username,
          genre,
          watchTime
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { reviews: review._id } }
        );

        return review;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeMovieReview: async (parent, { reviewId }, context) => {
      if (context.user) {
        const review = await review.findOneAndDelete({
          _id: reviewId,
          reviewAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { reviews: review._id } }
        );

        return review;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
