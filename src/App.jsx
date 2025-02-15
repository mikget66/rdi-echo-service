import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Echo from './pages/Echo';
import Layout from './components/Layout';
import './App.css';


const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/echo" element={<Echo />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;