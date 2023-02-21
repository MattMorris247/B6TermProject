import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="NavBar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/adminpanel">Admin Panel</Link></li>
        <li><Link to="/editprofile">Edit Profile</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;