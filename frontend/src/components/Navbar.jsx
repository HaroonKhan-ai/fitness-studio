import "./Navbar.css";
import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">FATaFIT</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/cart" className="cartbtn">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
