import React  from "react";


import "./Admin.css";
import logo from "../Image/Candiate.mp4";

import {Link} from 'react-router-dom'
import { Button, TextField, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import { SignInSchema } from '../Scheme/LoginScheme';
import UserAuthService from '../Service/UserAuthService';
import { useDispatch } from "react-redux";
import { addEmails,addToken } from '../Store/MasterSlice';



// const LoginPage = () => {
  

  // const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');
  //   const [emailError, setEmailError] = useState('');
  //   const [passwordError, setPasswordError] = useState('');
  //   const [showAlert] = useState(false);
  
  //   const validateEmail = () => {
  //     if (!email) {
  //       setEmailError('Email is required');
  //     } else {
  //       setEmailError('');
  //     }
  //   };
  
  //   const validatePassword = () => {
  //     if (!password) {
  //       setPasswordError('Password is required');
  //     } else {
  //       setPasswordError('');
  //     }
  //   };
  
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     validateEmail();
  //     validatePassword();
  
  //     // Additional login logic can be added here, e.g., sending the form data to a server for authentication.
  
  //     // Perform the redirect to the 'ehome' page if there are no errors
  //     if (!emailError && !passwordError) {
  //       window.location.href = '/VoterPage'; // Redirect using window.location.href
  //      }
  
  //   }
  const LoginPage = () => {
    const dispatch=useDispatch();
    const initialState = {
      email: "",
      password: "",
    };
    const { values, errors,  handleBlur, handleChange,handleSubmit, touched } =
      useFormik({
        initialValues: initialState,
        validationSchema: SignInSchema,
        onSubmit: (values, action) => {
          console.log(values);
          eventLogin();
          action.resetForm();
        }
      })
  
    const eventLogin = async () => {
      try {
        const response = await UserAuthService.loginUserWithEmailAndPassword(values);
        console.log(response);
        var token = response.data.accessToken;
        var userEmail = response.data.email;
  
        if (response.message != "Request failed with status code 400") {
          setTimeout(() => {
            dispatch(addEmails(userEmail));
            dispatch(addToken(token));
            navigate("/VoterPage");
          }, 3000);
        }
        else {
          <h1>Login failed:(</h1>
        }
      }
      catch (error) {
        console.log(error);
      }
    };
    const navigate = useNavigate();

  
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
          <h2>User Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-groupu">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                variant="standard"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                size="small"
                // onChange={(e) => setEmail(e.target.value)}
              // onBlur={validateEmail}
              // error={!!emailError}
              // helperText={emailError}
              style={{ marginTop: "20px" }}
              InputLabelProps={{
                shrink: true,
              }}
                required
              />
              {errors.email && touched.email ? (
              <p style={{ color: "red" }}>{errors.email}</p>
            ) : null}

            </div>
            <div className="form-groupu">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                // onBlur={validatePassword}
                // error={!!passwordError}
                // helperText={passwordError}
                variant="standard"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                size="small"
                style={{ marginTop: "20px" }}
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />

              {errors.password && touched.password ? (
            <p style={{ color: "red" }}>{errors.password}</p>
          ) : null}
            </div>
            <Box textAlign="center">
          <Button variant="contained" color="success" type='submit' >LOGIN</Button>
        </Box>
            <br></br>
      <Link className='Vote'to='/RegistrationV'>Voter Registration</Link> <br></br>
      <h5>
          Don't have an account ?{" "}
          {/* <span>
            <a
              onClick={() => navigate("/register")}
              style={{ cursor: "pointer", color: "white" }}
            >
              Sign Up
            </a>
          </span>{" "} */}
        </h5>
          </form>
        </div>
      </div>
      {/* {showAlert && (
        <div className="alert-message">Login successful! Welcome back.</div>
      )} */}
    </div>
    </>
  );
};

export default LoginPage;
