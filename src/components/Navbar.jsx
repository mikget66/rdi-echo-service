import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" end style={({ isActive }) => ({ color: isActive ? 'yellow' : 'white' })}>
        Home
      </NavLink>{' '}
      |{' '}
      <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? 'yellow' : 'white' })}>
        About
      </NavLink>{' '}
      |{' '}
      <NavLink to="/echo" style={({ isActive }) => ({ color: isActive ? 'yellow' : 'white' })}>
        Echo
      </NavLink>
    </nav>
  );
};

export default Navbar;