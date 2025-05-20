import React from 'react';
import './Seller.css';

const Seller = () => {
  return (
    <div className="seller-page">
      <section className="hero-section">
        <img
          src="assets/images/banner.png"
          alt="Seller Banner"
          className="hero-image"
        />
        <div className="hero-text">
          <h1>Become a Seller on 1MDM</h1>
          <p>Connect with buyers worldwide for your medical products.</p>
        </div>
      </section>

      <section className="features-section">
        <h2>Why Sell on 1MDM?</h2>
        <div className="features">
          <div className="feature">
            <img src="/assets/images/img.png" alt="Wide Reach" />
            <h3>Wide Reach</h3>
            <p>Access a vast network of buyers across the globe.</p>
          </div>
          <div className="feature">
            <img src="/assets/images/feature2.png" alt="Easy Listing" />
            <h3>Easy Listing</h3>
            <p>List your products effortlessly with our user-friendly interface.</p>
          </div>
          <div className="feature">
            <img src="/assets/images/feature3.png" alt="Secure Transactions" />
            <h3>Secure Transactions</h3>
            <p>Ensure safe and secure transactions with our trusted platform.</p>
          </div>
        </div>
      </section>

      <section className="steps-section">
        <h2>How to Get Started</h2>
        <ol className="steps">
          <li><strong>Register:</strong> Create your seller account on 1MDM.</li>
          <li><strong>List Products:</strong> Add your medical products with detailed information.</li>
          <li><strong>Start Selling:</strong> Receive orders and grow your business.</li>
        </ol>
      </section>
    </div>
  );
};

export default Seller;
