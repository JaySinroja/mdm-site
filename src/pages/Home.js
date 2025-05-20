import React from 'react';
import banner from '../assets/images/banner.png';  // adjust path based on Home.js location
import './Home.css';

const Home = () => {
  return (
    <div 
      className="home" 
      style={{ backgroundImage: `url(${banner})` }}  // inline background image style
    >
      <div className="overlay">
        <h1>Welcome to 1MDM</h1>
        <p>Your one-stop solution for all your needs.</p>
      </div>
    </div>
  );
};

export default Home;
