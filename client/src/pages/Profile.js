import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import BookReviewList from '../components/BookReviewList';
import MovieReviewList from '../components/MovieReviewList';
import GameReviewList from '../components/GameReviewList';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    console.log(user)
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h2>

        <div className="col-12 col-md-10 mb-5">
          <BookReviewList
            bookReviews={user.bookReviews}
            title={`${user.username}'s review...`}
            showTitle={false}
            showUsername={false}
          />
        </div>

        <div className="col-12 col-md-10 mb-5">
          <MovieReviewList
            movieReviews={user.movieReviews}
            title={`${user.username}'s review...`}
            showTitle={false}
            showUsername={false}
          />
        </div>

        <div className="col-12 col-md-10 mb-5">
          <GameReviewList
            gameReviews={user.gameReviews}
            title={`${user.username}'s review...`}
            showTitle={false}
            showUsername={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
