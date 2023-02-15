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
  mutation addMovieReview($reviewText: String!) {
    addMovieReview(reviewText: $reviewText) {
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

export const ADD_BOOK_REVIEW = gql`
  mutation addBookReview($reviewText: String!, $title: String!, $genre: String!, $time: String!) {
    addBookReview(reviewText: $reviewText, title: $title, genre: $genre, time: $time) {
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

export const ADD_GAME_REVIEW = gql`
  mutation addGameReview($reviewText: String!) {
    addGameReview(reviewText: $reviewText) {
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
