import React from 'react';
import { useQuery } from '@apollo/client';

import BookReviewList from '../components/BookReviewList';
import BookReviewForm from '../components/BookReviewForm';

import { QUERY_BOOKS } from '../utils/queries';

const Books = () => {
  const { loading, data } = useQuery(QUERY_BOOKS);
  const bookReviews = data?.bookReviews || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
        >
          <BookReviewForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <BookReviewList
              bookReviews={bookReviews}
              title="Book Reviews!"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Books;