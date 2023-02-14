import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_MOVIE_REVIEW = gql`
  mutation addMovieReview($movieReviewText: String!) {
    addMovieReview(movieReviewText: $movieReviewText) {
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

export const ADD_BOOK_REVIEW = gql`
  mutation addBookReview($bookReviewText: String!) {
    addBookReview(bookReviewText: $bookReviewText) {
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

export const ADD_GAME_REVIEW = gql`
  mutation addGameReview($gameReviewText: String!) {
    addGameReview(gameReviewText: $gameReviewText) {
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
