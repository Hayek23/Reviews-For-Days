import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

import Button from '@mui/material/Button';
import Text from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack'

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      console.log(formState.email, formState.password)
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="card45">
        <div className="whole-card">
          <h4 className="card-header45">Login</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
              <Box>
                <Stack spacing={1}>
                <Text

                name = "email"


                  id="outlined-basic" 
                  label="Your Email" 
                  type = "email"
                  variant="outlined"
                  autoComplete="off"
                  value={formState.email}
                  onChange={handleChange}
                />
                <Text
                  name = "password"
                  id="outlined-basic2" 
                  label="Password" 
                  type = "password"
                  variant="outlined"
                  autoComplete="off"
                  value={formState.password}
                  onChange={handleChange}
                />
                <Button 
                variant="outlined" 
                className='btn btn-md btn-info m-2'

                type="submit"

                onSubmit={handleFormSubmit}

                >
                  Submit
                </Button>
                </Stack>
              </Box>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
