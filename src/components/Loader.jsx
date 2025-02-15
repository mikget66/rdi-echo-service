import React from 'react';
import './Loader.css';

const Loader = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="overlay">
    <div className="loader --1">
      <div className="loader-circle"></div>
      <div className="loader-circle-inner"></div>
    </div>
  </div>
  );
};

export default Loader;