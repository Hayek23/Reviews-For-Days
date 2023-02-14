import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

export const NAV_ITEMS = [
  {
    itemName: "Home",
    path: "/",
  },
  {
    itemName: "Books",
    path: '/Books',
  },
  {
    itemName: "Movies",
    path: '/Movies',
  },
  {
    itemName: "Video Games",
    path: '/Games',
  },
];

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <h1>CHOOSE A CATEGORY!</h1>

        <div>
          {Auth.loggedIn() ? (
            <>
              {NAV_ITEMS.map((item) => {
                return (
                  <Link
                    key={item.itemName}
                    className="btn btn-lg btn-info m-2"
                    to={item.path}
                  >
                    {item.itemName}
                  </Link>
                );
              })}
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
