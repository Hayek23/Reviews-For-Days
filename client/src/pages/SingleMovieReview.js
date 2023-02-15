import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import MovieReviewList from '../components/BookReviewList';
import MovieReviewForm from '../components/BookReviewForm';

import { QUERY_SINGLE_MOVIE } from '../utils/queries';

const SingleMovieReview = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { movieReviewId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_MOVIE, {
    // pass URL parameter
    variables: { movieReviewID: movieReviewId },
  });

  const movieReview = data?.movieReview || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(movieReview)
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {movieReview.reviewAuthor} <br />
        <span style={{ fontSize: '1rem' }}>
          had this thought on {movieReview.createdAt}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {movieReview.reviewText}
        </blockquote>
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <MovieReviewForm movieReviewId={movieReview._id} />
      </div>
    </div>
  );
};

export default SingleMovieReview;