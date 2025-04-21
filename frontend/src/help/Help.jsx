import React from 'react';
import './Help.css'; 

const Help = () => {
  return (
    <div className="help-page-container">
      <h1 className='text1'>Help Center</h1>
      <p>Welcome to Medizon Pharmacy Help Center. Here you can find answers to common questions and get assistance with our services.</p>
      <div className="faq-section">
        <h3 className='text1'>Frequently Asked Questions</h3>
        <div className="faq-item">
          <h3 className='text1'>How do I place an order?</h3>
          <p>To place an order, simply log in to your account, browse our products, and add items to your cart. Then proceed to checkout and follow the instructions to complete your order.</p>
        </div>
        <div className="faq-item">
          <h3 className='text1'>How can I track my order?</h3>
          <p>Once your order is dispatched, you will receive a tracking number via email or SMS. You can use this tracking number to track the status of your delivery on our website.</p>
        </div>
      </div>
    </div>
  );
}

export default Help;
