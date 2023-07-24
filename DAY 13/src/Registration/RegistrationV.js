import React from "react";
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Checkbox, Typography } from "@mui/material";
import { useFormik } from "formik";
import { SignUpSchema } from '../Scheme/RegisterScheme';
import UserAuthService from '../Service/UserAuthService';
import './Register.css';
import { Link } from 'react-router-dom';
import logo from "../Image/Reg.mp4";


export default function RegistrationForm() {

  const navigate = useNavigate();
  const initialState = {
    name: "",
    email: "",
    password: "",
    regno: "",
    dep: "",
    gender: "",
    mobno: "",
    // dob: "",
  };
  const { values, errors, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialState,
      validationSchema: SignUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        eventRegister();
        action.resetForm();
      }
    })
  const eventRegister = async () => {

    try {
      const response = await UserAuthService.saveUser(values);
      console.log(response);
      const target = "Error";
      const target1 = "Email Already Exists !!";
      if (response.data === target) {
        throw target;
      } else if (response.data === target1) {
        throw target1;
      }
      else {
        setTimeout(() => {
          navigate("/LoginPage");
        }, 3000);
      }
    }

    catch (error) {
      console.log(errors);
    }
  };

  return (
    <>
       
    
      <div className="reg-main">
      <div className="split-screen-container">

        <div className="registration-form-container">
          <h3>User Registration</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="regno">Register No:</label>
              <input type="text" id="regno" name="regno" value={values.regno} onChange={handleChange} placeholder='Enter a Register Number' />
              {errors.regno && <span className="error">{errors.regno}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={values.name} onChange={handleChange} placeholder='Enter a name' />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            {/* <div className="form-group">
              <label htmlFor="dob">Date of Birth:</label>
              <input type="date" id="dob" name="dob" value={values.dob} onChange={handleChange} placeholder='Enter a date of birth' />
              {errors.dob && <span className="error">{errors.dob}</span>}
            </div> */}
            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <select id="gender" name="gender" value={values.gender} onChange={handleChange}>
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <span className="error">{errors.gender}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="dep">Department:</label>
              <input type="text" id="dep" name="dep" value={values.dep} onChange={handleChange} placeholder='Enter a department' />
              {errors.dep && <span className="error">{errors.dep}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={values.email} onChange={handleChange} placeholder='Enter a email' />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" value={values.password} onChange={handleChange} placeholder='Enter a password' />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="mobno">Mobile Number:</label>
              <input
                type="text"
                id="mobno"
                name="mobno"
                value={values.mobno}
                onChange={handleChange}
                placeholder='Enter a mobile number'
              />
              {errors.mobno && <span className="error">{errors.mobno}</span>}
            </div>
            <span style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <Checkbox />
              <Typography sx={{ fontSize: "12px" }}>
                {" "}
                By agreeing to the Terms of Service and Privacy Policy
              </Typography>
            </span>

                <div className="buttonn">

            <button type="submit">Register</button>
            </div>
          </form>
          <div class="d-flex justify-content-center links" >
            <p style={{fontSize:"18px"}}>Already registered?</p>
            <Link to='/LoginPage' style={{ fontSize: "15px", paddingLeft: "7px", paddingTop: "2px" }} >User Login</Link>

   
          </div>
        </div>

        <video className='videoTag' autoPlay loop muted>
            <source src={logo} type='video/mp4' />
        </video>
      </div>
    </div>
    </>

  )
}
