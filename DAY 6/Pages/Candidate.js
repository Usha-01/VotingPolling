import React, { useState } from 'react';
import user1 from "../Image/img Ad (1).jpg";

import "./Admin.css";
import {Link} from 'react-router-dom'

const Candidate = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    // Perform validation and login logic here
    if (email && password) {
      // TODO: Perform login
      console.log('Logged in!');
    }
  };

  return (
    <div className='min'>
    <div className="login-container">
      <img  src={user1} alt="user1" className="user1" />
      <h2>Candidate Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>

        
        <br></br>
                
        <Link className='Vote'to='/RegistrationC'>Candidate Registration</Link>

      </form>
    </div>
  </div>
  );
};

export default Candidate;
