import React, { useState } from "react";
import "./Admin.css";
import {Link} from 'react-router-dom'
import logo from "../Image/Admin.mp4";



const LoginAdmin = () => {
  

  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showAlert] = useState(false);
  
    const validateEmail = () => {
      if (!email) {
        setEmailError('Email is required');
      } else {
        setEmailError('');
      }
    };
  
    const validatePassword = () => {
      if (!password) {
        setPasswordError('Password is required');
      } else {
        setPasswordError('');
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      validateEmail();
      validatePassword();
  
      // Additional login logic can be added here, e.g., sending the form data to a server for authentication.
  
      // Perform the redirect to the 'ehome' page if there are no errors
      if (!emailError && !passwordError) {
        window.location.href = '/AdminPage'; // Redirect using window.location.href
       }
  
    }
  return (
<>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    <div className="container">
      <Link className="navbar-brand" to={'/'}>
        Home 
      </Link>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to={'/LoginPage'}>
              User Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/LoginAdmin'}>
              Admin Login
            </Link>
          </li>
        
         
        </ul>
      </div>
    </div>
  </nav>
    <div className="split-screen-container">
    <div className="left-side">
      <video className='videoTag' autoPlay loop muted>
    <source src={logo} type='video/mp4' />
</video>
      </div>
      <div className="right-side">
        <div className="login-form-container">
          <h2>Admin Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-1">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
               
                onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
              error={!!emailError}
              helperText={emailError}
                required
              />
            </div>
            <div className="form-1">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={validatePassword}
                error={!!passwordError}
                helperText={passwordError}
                required
              />
            </div>
            <button type="submit">Login</button>

              <br></br>
              <br></br>
            <h6>Whether you are a admin???</h6>
          </form>
        </div>
      </div>
      {showAlert && (
        <div className="alert-message">Login successful! Welcome back.</div>
      )}
    </div>
    </>
  );
};

export default LoginAdmin;
