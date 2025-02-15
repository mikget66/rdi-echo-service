import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialsBar = () => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
        background: '#333',
        color: 'white',
        textAlign: 'center',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
      }}
    >
      <a
        href="https://www.linkedin.com/in/michael-anwer-071489283/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'white', textDecoration: 'none' }}
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://github.com/mikget66"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'white', textDecoration: 'none' }}
      >
        <FaGithub size={24} />
      </a>
    </div>
  );
};

export default SocialsBar;