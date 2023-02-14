import { useState } from "react";
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_BOOK_REVIEW } from '../../utils/mutations';
import { QUERY_BOOKS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

    
    const BookReviewForm = () => {
      const [bookTitle, setBookTitle] = useState('');
      const [readTime, setReadTime] = useState('');
      const [genre, setGenre] = useState('');
      const [bookReviewText, setBookReviewText] = useState('');
    
      const [characterCount, setCharacterCount] = useState(0);
    
      const [addBookReview, { error }] = useMutation(ADD_BOOK_REVIEW, {
        update(cache, { data: { addBookReview } }) {
          try {
            const { bookReview } = cache.readQuery({ query: QUERY_BOOKS });
    
            cache.writeQuery({
              query: QUERY_BOOKS,
              data: { bookReviews: [addBookReview, ...bookReview] },
            });
          } catch (e) {
            console.error(e);
          }
    
          // update me object's cache
          const { me } = cache.readQuery({ query: QUERY_ME });
          cache.writeQuery({
            query: QUERY_ME,
            data: { me: { ...me, bookReviews: [...me.bookReview, addBookReview] } },
          });
        },
      });
    
      const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const { data } = await addBookReview({
            variables: {
              bookTitle,
              genre,
              readTime,
              bookReviewText,
              reviewAuthor: Auth.getProfile().data.username,
            },
          });
          setBookTitle('');
          setBookReviewText('');
        } catch (err) {
          console.error(err);
        }
      };
    
      const handleChange = (event) => {
        const { name, value } = event.target;
    
        if (name === 'bookReviewText' && value.length <= 500) {
          setBookReviewText(value);
          setCharacterCount(value.length);
        }
        if (name === 'bookTitle') {
          setBookTitle(value);
        }
        if (name === 'genre') {
          setGenre(value);
        }
        if (name === 'readTime') {
          setReadTime(value)
        }
      };
    
      return (
        <div>
          <h3>What are your thoughts on this book?</h3>
    
          {Auth.loggedIn() ? (
            <>
              <p
                className={`m-0 ${
                  characterCount === 500 || error ? 'text-danger' : ''
                }`}
              >
                Character Count: {characterCount}/500
              </p>
              <form
                className="flex-row justify-center justify-space-between-md align-center"
                onSubmit={handleFormSubmit}
              >
                <div className="col-12 col-lg-9">
                <textarea
                    name="bookTitle"
                    placeholder="Book Title"
                    value={readTime}
                    style={{ lineHeight: '1.5', resize: 'vertical' }}
                    onChange={handleChange}
                  ></textarea>
                  <textarea
                    name="bookReviewText"
                    placeholder="Here's a new review..."
                    value={bookReviewText}
                    className="form-input w-100"
                    style={{ lineHeight: '1.5', resize: 'vertical' }}
                    onChange={handleChange}
                  ></textarea>
                  <textarea
                    name="genre"
                    placeholder="Genre"
                    value={genre}
                    style={{ lineHeight: '1.5', resize: 'vertical' }}
                    onChange={handleChange}
                  ></textarea>
                  <textarea
                    name="readTime"
                    placeholder="Time spent"
                    value={readTime}
                    style={{ lineHeight: '1.5', resize: 'vertical' }}
                    onChange={handleChange}
                  ></textarea>
                </div>
    
                <div className="col-12 col-lg-3">
                  <button className="btn btn-primary btn-block py-3" type="submit">
                    Add review
                  </button>
                </div>
                {error && (
                  <div className="col-12 my-3 bg-danger text-white p-3">
                    {error.message}
                  </div>
                )}
              </form>
            </>
          ) : (
            <p>
              Please login to share your review.{' '}
              <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
            </p>
          )}
        </div>
      );
    };
    
    
    export default BookReviewForm;




