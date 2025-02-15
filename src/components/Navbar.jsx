import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" end >
        Home
      </NavLink>{' '}
      |{' '}
      <NavLink to="/about">
        About
      </NavLink>{' '}
      |{' '}
      <NavLink to="/echo">
        Echo
      </NavLink>
    </nav>
  );
};

export default Navbar;