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
    MovieReviewText: String
    reviewAuthor: String
    createdAt: String
    genre: String!
    watchTime: String
    comments: [Comment]!
  }

  type BookReview {
    _id: ID
    bookReviewText: String
    reviewAuthor: String
    createdAt: String
    genre: String!
    readTime: String
    comments: [Comment]!
  }

  type GameReview {
    _id: ID
    gameReviewText: String
    reviewAuthor: String
    createdAt: String
    genre: String!
    timePlayed: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
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
    addMovieReview(movieReviewText: String!, genre: String!, watchTime: String!): MovieReview
    addBookReview(bookReviewText: String!, genre: String!, readTime: String!): BookReview
    addGameReview(gameReviewText: String!, genre: String!, timePlayed: String!): GameReview
    removeMovieReview(movieReviewId: ID!): MovieReview
    removeBookReview(bookReviewId: ID!): BookReview
    removeGameReview(gameReviewId: ID!): GameReview
  }
`;

module.exports = typeDefs;
