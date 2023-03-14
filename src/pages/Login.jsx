import "../stylesheets/Login.css"
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/home');
  };

  return (
    <div>
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>
          <span>Username or email address: </span>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          <span>Password: </span>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <label className="remember-me">
          <input type="checkbox" checked={rememberMe} onChange={handleRememberMeChange} />
          <span>Remember me</span>
        </label>
        <a href="#" className="forgot-password">Forgot your password?</a>
        <button type="submit">Log In</button>
      </form>
    </div>
    </div>
  );
};


export default Login;
