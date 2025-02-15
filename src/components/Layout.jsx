import React from 'react';
import Navbar from './Navbar';
import SocialsBar from './SocialsBar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <SocialsBar />
    </div>
  );
};

export default Layout;