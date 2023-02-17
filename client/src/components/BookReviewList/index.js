import React from 'react';
import { Link } from 'react-router-dom';

const BookReviewList = ({
  bookReviews,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!bookReviews?.length) {
    return <h3>There are no book reviews! Be the first!</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {bookReviews &&
        bookReviews.map((bookReview) => (
          <div key={bookReview._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${bookReview.reviewAuthor}`}
                >
                  {bookReview.reviewAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    made this review on {bookReview.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You made this review on {bookReview.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{bookReview.title}</p>
            </div>
            <div className="card-body bg-light p-2">
              <p>{bookReview.reviewText}</p>
            </div>
            <div className="card-body bg-light p-2">
              <p>Genre: {bookReview.genre}</p>
            </div>
            <div className="card-body bg-light p-2">
              <p>Read Time: {bookReview.time}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BookReviewList;
