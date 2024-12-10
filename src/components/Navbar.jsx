import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Zomato</div>
      <input type="text" placeholder="Search for restaurants or cuisines" className="navbar-search" />
      <div className="navbar-links">
        <span>Login</span>
        <span>Sign Up</span>
      </div>
    </nav>
  );
};

export default Navbar;
