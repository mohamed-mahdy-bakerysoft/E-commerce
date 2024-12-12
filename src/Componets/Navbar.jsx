import React from 'react';
import { LogIn, UserRoundPlus, ShoppingCart } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-4 fs-4">
      <div className="container">
        <a className="navbar-brand fw-bold fs-2" href="#">
          E-commerce
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <NavLink className="nav-link active" to="/" aria-current="page">
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link" to="/product">
                Products
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <form className="d-flex">
            <Link className="btn btn-outline-dark fs-5 mx-2" to="/login">
              <i className="fas fa-sign-in-alt"></i> Login
            </Link>
            <Link className="btn btn-outline-dark fs-5 mx-2" to="/register">
              <i className="fas fa-user-plus"></i> Register
            </Link>
            <Link className="btn btn-outline-dark fs-5 mx-2" to="/cart">
              <i className="fa-solid fa-cart-shopping"></i> Cart
            </Link>
          </form>
        </div>
      </div>
    </nav>

  );
}

export default Navigation;
