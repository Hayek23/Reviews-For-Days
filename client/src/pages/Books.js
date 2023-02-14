import { useState } from "react";
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_BOOK_REVIEW } from '../../utils/mutations';
import { QUERY_THOUGHTS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';


function Books() {
    const [errorMessage, setErrorMessage] = useState('');
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');

    const handleInputChange = (event) => {
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;
    
        if (event.target.value === '') {
          setErrorMessage("You need to fill out all fields")
        } 
    
        if (inputType === 'email') {
          setAuthor(inputValue);
        } else if (inputType === 'name') {
          setTitle(inputValue);
        }
      }


      
      return (
        <div id="contact">
          <form>
            <input defaultValue={title} name = "Tile" placeholder="Title" onBlur={handleInputChange} type="email"/>
            <input defaultValue={author} name = "Author" placeholder="Author" onBlur={handleInputChange} type="text"/>
            <textarea placeholder="Your Review"></textarea>
            <button onClick={handleFormSubmit}>Submit</button>
          </form>
        
          {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
        </div>
      );
    }
    
    
    
    
    export default Books;




