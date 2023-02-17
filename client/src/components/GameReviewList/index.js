  import React from 'react';
  import { Link } from 'react-router-dom';

const GameReviewList = ({
  gameReviews,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!gameReviews.length) {
    return <h3>There are no video game reviews yet! Be the first</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {gameReviews &&
        gameReviews.map((gameReview) => (
          <div key={gameReview._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${gameReview.reviewAuthor}`}
                >
                  {gameReview.reviewAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    made this review on {gameReview.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You made this review on {gameReview.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{gameReview.title}</p>
            </div>
            <div className="card-body bg-light p-2">
              <p>{gameReview.reviewText}</p>
            </div>
            <div className="card-body bg-light p-2">
              <p>Genre: {gameReview.genre}</p>
            </div>
            <div className="card-body bg-light p-2">
              <p>Time Played: {gameReview.time}</p>
            </div>
          </div>
        ))}
    </div>
  );
};


  export default GameReviewList;