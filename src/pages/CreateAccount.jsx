import "../stylesheets/CreateAccount.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/home');
  }

  return (
    <div>
      <div className="create-account-container">
        <form onSubmit={handleSubmit}>
          <h1>Create account</h1>
          <h2>Join and become an AirDJ.</h2>
          <label>
            <br></br>
            <span>Username:</span>
            <input type="text" name="username" />
          </label>
          <label>
            <span>Email:</span>
            <input type="text" name="email" />
          </label>
          <label>
            <span>Password:</span>
            <input type="password" name="password" />
          </label>
          <label>
            <span>Confirm Password:</span>
            <input type="password" name="confirm-password" />
          </label>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
