import React from "react";

import { Link } from "react-router-dom";

import "./Nav.styles.css";

const Nav = () => {
  return (
    <nav>
      <Link to="/" className="link">
        <h3>Logo</h3>
      </Link>
      <ul className="nav-links">
        <Link to="/about" className="link">
          <li>About</li>
        </Link>
        <Link to="/shop" className="link">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
