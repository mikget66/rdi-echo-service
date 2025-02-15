import React from 'react';
import Navbar from './Navbar';
import SocialsBar from './SocialsBar';
import './Layout.css'

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Navbar />
      <main>{children}</main>
      <SocialsBar />
    </div>
  );
};

export default Layout;