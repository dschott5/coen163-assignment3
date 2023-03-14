import "../../stylesheets/About.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/home');
  }

  return (
    <div>
      <div className="create-account-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h1>Questions?</h1>
          <h2>Send us a message!</h2>
          <label>
            <br></br>
            <span>Email:</span>
            <input type="text" name="email" />
          </label>
          <label>
            <span>Subject:</span>
            <input type="text" name="subject" />
          </label>
          <label>
            <span>Message:</span>
            <input type="text" name="message" />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
