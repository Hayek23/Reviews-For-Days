const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    movieReviews: [MovieReview]!
    bookReviews: [BookReview]!
    gameReviews: [GameReview]!
  }

  type MovieReview {
    _id: ID
    title: String
    reviewText: String
    reviewAuthor: String
    createdAt: String
    genre: String
    time: String
  }

  type BookReview {
    _id: ID
    title: String
    reviewText: String
    reviewAuthor: String
    createdAt: String
    genre: String
    time: String
  }

  type GameReview {
    _id: ID
    title: String
    reviewText: String
    reviewAuthor: String
    createdAt: String
    genre: String
    time: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    movieReviews(username: String): [MovieReview]
    movieReview(movieReviewID: ID!): MovieReview
    bookReviews(username: String): [BookReview]
    bookReview(bookReviewID: ID!): BookReview
    gameReviews(username: String): [GameReview]
    gameReview(gameReviewID: ID!): GameReview
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addMovieReview(reviewText: String!, genre: String!, time: String!): MovieReview
    addBookReview(title: String!, reviewText: String!, genre: String!, time: String!): BookReview
    addGameReview(reviewText: String!, genre: String!, time: String!): GameReview
    removeMovieReview(movieReviewId: ID!): MovieReview
    removeBookReview(bookReviewId: ID!): BookReview
    removeGameReview(gameReviewId: ID!): GameReview
  }
`;

module.exports = typeDefs;
