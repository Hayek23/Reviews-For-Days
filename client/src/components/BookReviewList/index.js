import React from 'react';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

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
    <Card className='card1'>
      {showTitle && <h3 className='title'>{title}</h3>}
      {bookReviews &&
        bookReviews.map((bookReview) => (
          <div  className='content' key={bookReview._id}>
            <h4>
              {showUsername ? (
                <Link
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
            <CardContent>
            <div>
              <p><strong>{bookReview.title}</strong></p>
            </div>
            <div>
              <p><strong>Review:</strong>{bookReview.reviewText}</p>
            </div>
            <div>
              <p><strong>Genre:</strong> {bookReview.genre}</p>
            </div>
            <div>
              <p><strong>Read Time:</strong> {bookReview.time}</p>
            </div>
            </CardContent>
          </div>
        ))}
    </Card>
  );
};

export default BookReviewList;
