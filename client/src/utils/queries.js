import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      movieReviews {
        _id
        title
        reviewText
        reviewAuthor
        createdAt
        genre
        time
      }
      gameReviews {
        _id
        title
        reviewText
        reviewAuthor
        createdAt
        genre
        time
      }
      bookReviews {
        _id
        title
        reviewText
        reviewAuthor
        createdAt
        genre
        time
      }
    }
  }
`;

export const QUERY_MOVIES = gql`
  query getMovieReviews {
    movieReviews {
      _id
      title
      reviewText
      reviewAuthor
      createdAt
      genre
      time
    }
  }
`;
export const QUERY_BOOKS = gql`
  query getBookReviews {
    bookReviews {
      _id
      title
      reviewText
      reviewAuthor
      createdAt
      genre
      time
    }
  }
`;
export const QUERY_GAMES = gql`
  query getGameReviews {
    gameReviews {
      _id
      title
      reviewText
      reviewAuthor
      createdAt
      genre
      time
    }
  }
`;

export const QUERY_SINGLE_MOVIE = gql`
  query getSingleMovieReview($movieReviewID: ID!) {
    movieReview(movieReviewID: $movieReviewID) {
      _id
      reviewText
      reviewAuthor
      createdAt
      genre
      time
    }
  }
`;

export const QUERY_SINGLE_BOOK = gql`
  query getSingleBookReview($bookReviewID: ID!) {
    bookReview(bookReviewID: $bookReviewID) {
      _id
      reviewText
      reviewAuthor
      createdAt
      genre
      time
    }
  }
`;

export const QUERY_SINGLE_GAME = gql`
  query getSingleGameReview($gameReviewID: ID!) {
    gameReview(gameReviewID: $gameReviewID) {
      _id
      reviewText
      reviewAuthor
      createdAt
      genre
      time
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
