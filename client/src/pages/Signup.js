import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

import Button from '@mui/material/Button';
import Text from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack'

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="card45">
        <div className="whole-card2">
          <h4 className="card-header45">Sign Up</h4>
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
                  id='outlined-basic3'
                  name = "username"
                  label="Username"
                  type = "username"
                  variant='outlined'
                  value={formState.name}
                  onChange={handleChange}
                />
                <Text
                  id="oulined-basic4"
                  name = "email"
                  label="Email"
                  type= "email"
                  variant='outlined'
                  value={formState.email}
                  onChange={handleChange}
                />
                <Text
                name = "password"
                   id="outlined-basic5"
                   type = "password"
                   label="Password"
                   variant='outlined'
                  value={formState.password}
                  onChange={handleChange}
                />
                <Button
                  variant='outlined'
                  className="btn btn-md btn-info m-2"
                  style={{ cursor: 'pointer' }}
                  type="submit"
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

export default Signup;
