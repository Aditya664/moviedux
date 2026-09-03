import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src="logo.png" alt="moviedux-log" />
      <h2 className="app-subtitle">
        It's time for popcorn! Find your next movie here.
      </h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/watchlist">Watchlist</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
