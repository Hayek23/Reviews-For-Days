import React from 'react';
import { useQuery } from '@apollo/client';

import MovieReviewList from '../components/MovieReviewList';
import MovieReviewForm from '../components/MovieReviewForm';

import { QUERY_MOVIES } from '../utils/queries';

const Movies = () => {
  const { loading, data } = useQuery(QUERY_MOVIES);
  const movieReviews = data?.movieReviews || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
        >
          <MovieReviewForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <MovieReviewList
              movieReviews={movieReviews}
              title="Movie Reviews!"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Movies;