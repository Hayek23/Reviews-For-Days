import React from 'react';
import { Link } from 'react-router-dom';

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
    <div>
      {showTitle && <h3>{title}</h3>}
      {movieReviews &&
        movieReviews.map((movieReview) => (
          <div key={movieReview._id} className="card mb-3">
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
            <div className="card-body bg-light p-2">
              <p><strong>{movieReview.title}</strong></p>
            </div>
            <div className="card-body bg-light p-2">
              <p>{movieReview.reviewText}</p>
            </div>
            <div className="card-body bg-light p-2">
              <p><strong>Genre:</strong> {movieReview.genre}</p>
            </div>
            <div className="card-body bg-light p-2">
              <p><strong>Movie Length:</strong> {movieReview.time}</p>
            </div>
          </div>
        ))}
    </div>
  );
};


export default MovieReviewList;
