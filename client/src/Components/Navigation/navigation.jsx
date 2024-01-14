import React from 'react';
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      {/* Logo/Brand Name */}
      <div className="logo">
        <Link to="/">Your App Name</Link>
      </div>

      {/* Navigation Bar */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* User Authentication - Add your authentication logic here */}
      <div className="user-auth">
        {/* Display username or login/logout buttons based on authentication state */}
        {/* Example: <span>Welcome, User123!</span> or <button>Login</button> */}
      </div>
    </header>
  );
};

export default Header;
