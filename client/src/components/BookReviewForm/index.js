import { useState } from "react";
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_BOOK_REVIEW } from '../../utils/mutations';

import Auth from '../../utils/auth';

import Button from '@mui/material/Button';
import Text from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack'

    
    const BookReviewForm = () => {
      const [title, setTitle] = useState('');
      const [time, setTime] = useState('');
      const [genre, setGenre] = useState('');
      const [reviewText, setReviewText] = useState('');
    
      const [characterCount, setCharacterCount] = useState(0);
    
      const [addBookReview, { error }] = useMutation(ADD_BOOK_REVIEW);
    
      const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        try {
          const { data } = await addBookReview({
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
        
        <div className = "box1">
          <h3>What are your thoughts on this book?</h3>
    
          {Auth.loggedIn() ? (
            <>
              <form
                onSubmit={handleFormSubmit}
              >
                <Box>
                  <Stack spacing={2}>
                <Text
                    name="title"
                    placeholder="Book Title"
                    value={title}
                    onChange={handleChange}
                  ></Text>
                  <Text
                  className="review1"
                    name="reviewText"
                    placeholder="Here's a new review..."
                    value={reviewText}
                    onChange={handleChange}
                  ></Text>
                  <Text
                    name="genre"
                    placeholder="Genre"
                    value={genre}
                    onChange={handleChange}
                  ></Text>
                  <Text
                    name="time"
                    placeholder="Time spent"
                    value={time}
                    onChange={handleChange}
                  ></Text>
                </Stack>
              </Box>
                <div>
                  <Button sx={{width: 600}} variant="outlined"  type="submit">
                    Add review
                  </Button>
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




