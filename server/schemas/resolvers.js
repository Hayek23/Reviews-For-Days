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
        const movieReview = await MovieReview.create({
          movieReviewText,
          reviewAuthor: context.user.username,
          genre,
          watchTime
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { movieReviews: movieReview._id } }
        );

        return movieReview;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addBookReview: async (parent, { bookReviewText, genre, readTime }, context) => {
      if (context.user) {
        const bookReview = await BookReview.create({
          bookReviewText,
          reviewAuthor: context.user.username,
          genre,
          readTime
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { bookReviews: bookReview._id } }
        );

        return bookReview;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addGameReview: async (parent, { gameReviewText, genre, timePlayed }, context) => {
      if (context.user) {
        const gameReview = await GameReview.create({
          gameReviewText,
          reviewAuthor: context.user.username,
          genre,
          timePlayed
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { gameReviews: gameReview._id } }
        );

        return gameReview;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeMovieReview: async (parent, { movieReviewId }, context) => {
      if (context.user) {
        const movieReview = await movieReview.findOneAndDelete({
          _id: movieReviewId,
          reviewAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { movieReviews: movieReview._id } }
        );

        return movieReview;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeBookReview: async (parent, { bookReviewId }, context) => {
      if (context.user) {
        const bookReview = await bookReview.findOneAndDelete({
          _id: bookReviewId,
          reviewAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { bookReviews: bookReview._id } }
        );

        return bookReview;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeGameReview: async (parent, { gameReviewId }, context) => {
      if (context.user) {
        const gameReview = await gameReview.findOneAndDelete({
          _id: gameReviewId,
          reviewAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { movieReviews: movieReview._id } }
        );

        return movieReview;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
