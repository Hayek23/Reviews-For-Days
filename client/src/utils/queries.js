import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      movieReviews {
        _id
        movieTitle
        movieReviewText
        reviewAuthor
        createdAt
        genre
        watchTime
      }
      gameReviews {
        _id
        gameTitle
        gameReviewText
        reviewAuthor
        createdAt
        genre
        timePlayed
      }
      bookReviews {
        _id
        bookTitle
        bookReviewText
        reviewAuthor
        createdAt
        genre
        readTime
      }
    }
  }
`;

export const QUERY_MOVIES = gql`
  query getMovieReviews {
    movieReviews {
      _id
      movieTitle
      movieReviewText
      reviewAuthor
      createdAt
      genre
      watchTime
    }
  }
`;
export const QUERY_BOOKS = gql`
  query getBookReviews {
    bookReviews {
      _id
      bookTitle
      bookReviewText
      reviewAuthor
      createdAt
      genre
      readTime
    }
  }
`;
export const QUERY_GAMES = gql`
  query getGameReviews {
    gameReviews {
      _id
      gameTitle
      gameReviewText
      reviewAuthor
      createdAt
      genre
      timePlayed
    }
  }
`;

export const QUERY_SINGLE_MOVIE = gql`
  query getSingleMovieReview($movieReviewId: ID!) {
    movieReview(movieReviewId: $movieReviewId) {
      _id
      movieReviewText
      reviewAuthor
      createdAt
      genre
      watchTime
    }
  }
`;

export const QUERY_SINGLE_BOOK = gql`
  query getSingleBookReview($bookReviewId: ID!) {
    bookReview(bookReviewId: $bookReviewId) {
      _id
      bookReviewText
      reviewAuthor
      createdAt
      genre
      readTime
    }
  }
`;

export const QUERY_SINGLE_GAME = gql`
  query getSingleGameReview($gameReviewId: ID!) {
    gameReview(gameReviewId: $gameReviewId) {
      _id
      gameReviewText
      reviewAuthor
      createdAt
      genre
      timePlayed
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;
