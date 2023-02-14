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
  query getSingleMovieReview($movieReviewId: ID!) {
    movieReview(movieReviewId: $movieReviewId) {
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
  query getSingleBookReview($bookReviewId: ID!) {
    bookReview(bookReviewId: $bookReviewId) {
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
  query getSingleGameReview($gameReviewId: ID!) {
    gameReview(gameReviewId: $gameReviewId) {
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
