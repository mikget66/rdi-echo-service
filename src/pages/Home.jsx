import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='page home'>
      <h1>Welcome to RDI Echo Service</h1>
      <p>This service allows you to upload or record Arabic audio and hear it echoed with an electronic voice.</p>
      <Link to="/echo">
        <button>Go to Echo Page</button>
      </Link>
    </div>
  );
};

export default Home;