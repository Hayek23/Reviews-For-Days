  import React from 'react';
  import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

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
    <Card className='card1'>
      {showTitle && <h3 className='title'>{title}</h3>}
      {gameReviews &&
        gameReviews.map((gameReview) => (
          <div className='content' key={gameReview._id}>
            <h4>
              {showUsername ? (
                <Link
                 
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
            <CardContent>
            <div>
              <p><strong>{gameReview.title}</strong></p>
            </div>
            <div >
              <p><strong>Review:</strong> {gameReview.reviewText}</p>
            </div>
            <div >
              <p><strong>Genre:</strong> {gameReview.genre}</p>
            </div>
            <div >
              <p><strong>Time Played:</strong> {gameReview.time}</p>
            </div>
            </CardContent>
          </div>
        ))}
    </Card>
  );
};


  export default GameReviewList;