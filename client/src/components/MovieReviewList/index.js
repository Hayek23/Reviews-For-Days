import React from 'react';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const MovieReviewList = ({
  movieReviews,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!movieReviews.length) {
    return <h3>There are no movie reviews yet! Be the first!</h3>;
  }

  return (
    <Card className='card1'>
      {showTitle && <h3 className='title'>{title}</h3>}
      {movieReviews &&
        movieReviews.map((movieReview) => (
          <div className='content' key={movieReview._id}>
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${movieReview.reviewAuthor}`}
                >
                  {movieReview.reviewAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    made this review on {movieReview.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You made this review on {movieReview.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div>
              <p><strong>{movieReview.title}</strong></p>
            </div>
            <div>
              <p><strong>Review:</strong>{movieReview.reviewText}</p>
            </div>
            <div>
              <p><strong>Genre:</strong> {movieReview.genre}</p>
            </div>
            <div>
              <p><strong>Movie Length:</strong> {movieReview.time}</p>
            </div>
          </div>
        ))}
    </Card>
  );
};


export default MovieReviewList;
