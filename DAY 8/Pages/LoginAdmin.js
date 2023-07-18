import React, { useState } from 'react';
import user1 from "../Image/login.jpg";
import logo from "../Image/video1.mp4";



import "./Admin.css";
import {Link} from 'react-router-dom'

const LoginAdmin = () => {
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
    <>
       <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/'}>
              Home page
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
                <li className="nav-item">
                  <Link className="nav-link" to={'/Candidate'}>
                   Candidate Login
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to={'/Profile'}>
                  Profile
                  </Link>
                </li>
                */}
              </ul>
            </div>
          </div>
        </nav>
    <div className='min'>
    <video className='videoTag' width={"70%"} height={"60%"}autoPlay loop muted>
    <source src={logo} type='video/mp4' />
</video>
    <div className="login-container">
      <img  src={user1} alt="user1" className="user1" />

       
      <h3>Admin Login</h3>
      <form onSubmit={handleLogin}>
        <div className="form-group1">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group1">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <br></br>
        <div className='button-login'>

        <Link className='Vote'to='/VotingPage'><button type="submit" >Login</button></Link>  

        {/* <button type="submit" >Login</button> */}
      
        </div>
       
               

      </form>


    </div>
  </div>
      
  </>
  );
};

export default LoginAdmin;