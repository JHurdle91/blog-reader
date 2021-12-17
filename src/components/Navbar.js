import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import AuthService from "../services/auth.service";

const Navbar = () => {
  const history = useHistory();

  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      const roles = [];
      user.roles.map((role) => roles.push(role.name));
      setCurrentUser(user);
    }
  }, []);

  const logOut = (e) => {
    e.preventDefault();
    AuthService.logout();
    setCurrentUser(undefined);
    history.push("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          My Blog
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>
        </div>
        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link" onClick={logOut}>
                Log Out
              </Link>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Log In
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <a
              href="https://github.com/JHurdle91/blog-reader"
              className="nav-link"
            >
              Frontend Source
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://github.com/JHurdle91/blog-api"
              className="nav-link"
            >
              Backend Source
            </a>
          </li>
        </div>
      </nav>

      <div className="container mt-3"></div>
    </div>
  );
};

export default Navbar;
