const db = require('../config/connection');
const { User, GameReview, MovieReview, BookReview } = require('../models');
const userSeeds = require('./userSeeds.json');
const movieReviewSeeds = require('./movieReviewSeeds.json');
const gameReviewSeeds = require('./gameReviewSeeds.json');
const bookReviewSeeds = require('./bookReviewSeeds.json')

db.once('open', async () => {
  try {
    await MovieReview.deleteMany({});
    await BookReview.deleteMany({});
    await GameReview.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < movieReviewSeeds.length; i++) {
      const { _id, reviewAuthor } = await MovieReview.create(movieReviewSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: reviewAuthor },
        {
          $addToSet: {
            movieReviews: _id,
          },
        }
      );
    }
    for (let i = 0; i < bookReviewSeeds.length; i++) {
      const { _id, reviewAuthor } = await BookReview.create(bookReviewSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: reviewAuthor },
        {
          $addToSet: {
            bookReviews: _id,
          },
        }
      );
    }
    for (let i = 0; i < gameReviewSeeds.length; i++) {
      const { _id, reviewAuthor } = await GameReview.create(gameReviewSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: reviewAuthor },
        {
          $addToSet: {
            gameReviews: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
