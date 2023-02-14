import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import BookReviewList from '../components/BookReviewList';
import BookReviewForm from '../components/BookReviewForm';

import { QUERY_SINGLE_BOOK } from '../utils/queries';

const SingleReview = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { bookReviewId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_BOOK, {
    // pass URL parameter
    variables: { bookReviewId: bookReviewId },
  });

  const bookReview = data?.bookReview || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {bookReview.reviewAuthor} <br />
        <span style={{ fontSize: '1rem' }}>
          had this thought on {bookReview.createdAt}
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
          {bookReview.reviewText}
        </blockquote>
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <BookReviewForm bookReviewId={bookReview._id} />
      </div>
    </div>
  );
};

export default SingleReview;
