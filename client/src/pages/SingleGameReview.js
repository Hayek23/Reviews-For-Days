import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import GameReviewList from '../components/BookReviewList';
import GameReviewForm from '../components/BookReviewForm';

import { QUERY_SINGLE_GAME } from '../utils/queries';

const SingleGameReview = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { gameReviewId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_GAME, {
    // pass URL parameter
    variables: { gameReviewID: gameReviewId },
  });

  const gameReview = data?.gameReview || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(gameReview)
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {gameReview.reviewAuthor} <br />
        <span style={{ fontSize: '1rem' }}>
          had this thought on {gameReview.createdAt}
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
          {gameReview.reviewText}
        </blockquote>
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <GameReviewForm gameReviewId={gameReview._id} />
      </div>
    </div>
  );
};

export default SingleGameReview;