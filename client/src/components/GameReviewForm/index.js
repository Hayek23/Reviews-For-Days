import { useState } from "react";
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_GAME_REVIEW } from '../../utils/mutations';

import Auth from '../../utils/auth';

    
    const GameReviewForm = () => {
      const [title, setTitle] = useState('');
      const [time, setTime] = useState('');
      const [genre, setGenre] = useState('');
      const [reviewText, setReviewText] = useState('');
    
      const [characterCount, setCharacterCount] = useState(0);
    
      const [addGameReview, { error }] = useMutation(ADD_GAME_REVIEW);
    
      const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        try {
          const { data } = await addGameReview({
            variables: {
              title,
              genre,
              time,
              reviewText,
              reviewAuthor: Auth.getProfile().data.username,
            },
          });
          setTitle('');
          setReviewText('');
          setTime('');
          setGenre('');
        } catch (err) {
          console.error(err);
        }
        
      };
      
      const handleChange = (event) => {
        const { name, value } = event.target;
    
        if (name === 'reviewText' && value.length <= 500) {
          setReviewText(value);
          setCharacterCount(value.length);
        }
        if (name === 'title') {
          setTitle(value);
        }
        if (name === 'genre') {
          setGenre(value);
        }
        if (name === 'time') {
          setTime(value)
        }
      };
      
      return (
        
        <div>
          <h3>What are your thoughts on this game?</h3>
    
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
                    name="title"
                    placeholder="Game Title"
                    value={title}
                    style={{ lineHeight: '1.5', resize: 'vertical' }}
                    onChange={handleChange}
                  ></textarea>
                  <textarea
                    name="reviewText"
                    placeholder="Here's a new review..."
                    value={reviewText}
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
                    name="time"
                    placeholder="Time spent"
                    value={time}
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
    
    
    export default GameReviewForm;




