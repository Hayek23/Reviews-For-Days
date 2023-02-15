import React from 'react';
import { useQuery } from '@apollo/client';

import GameReviewList from '../components/GameReviewList';
import GameReviewForm from '../components/GameReviewForm';

import { QUERY_GAMES } from '../utils/queries';

const Games = () => {
  const { loading, data } = useQuery(QUERY_GAMES);
  const gameReview = data?.gameReview || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <GameReviewForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <GameReviewList
              gameReview={gameReview}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Games;