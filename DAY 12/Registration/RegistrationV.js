// import React, { useState } from "react";
// import "./Register.css";
// import logo from "../Image/Admin.mp4";
// import {Link} from 'react-router-dom'


// const RegistrationForm= () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     gender: "",
//     email: "",
//     password: "",
//     department: "",
//     registerNo: "",
//     dob: "",
//   });

//   const [showAlert, setShowAlert] = useState(false);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Perform validation here before submission
//     if (
//       formData.name &&
//       formData.gender &&
//       formData.email &&
//       formData.password &&
//       formData.department &&
//       formData.registerNo &&
//       formData.dob
//     ) {
//       setShowAlert(true);
//       // Perform form submission or API call here
//     } else {
//       alert("Please fill in all the required fields.");
//     }
//   };


import React, { useState } from 'react';
 import "./Register.css";
import logo from "../Image/Admin.mp4";
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';





const RegistrationForm = () => {
  
  const [regno, setRegisterNo] = useState('');
  const [name, setName] = useState('');
  const [dob, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [dep, setDept] = useState('');
  const [mobno, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const[loading,setLoading]=useState(false);
  const[open,setOpen]=useState();

  async function handleSubmit (event) {
    event.preventDefault();
    setLoading(true);
    try{
      const data={
        regno:regno,
        name:name,
        dob:dob,
        gender:gender,
        dep:dep,
        mobno:mobno,
        email:email,
        password:password,
      };
      const res= await axios.post("http://localhost:8080/auth/register",data);
      await console.log(res);
    }
    catch(e){
      console.log(e.message);
    }

    alert("Registration Successfull");
   
    const validationErrors = {};
        if (!name.trim()) {
          validationErrors.name = 'Name is required';
              }
      
          // Gender validation
          if (!gender) {
            validationErrors.gender = 'Gender is required';
          }
      
          // Email validation
          if (!email) {
            validationErrors.email = 'Email is required';
          } else if (!/\S+@\S+\.\S+/.test(email)) {
            validationErrors.email = 'Invalid email format';
          }
      
          // Password validation
          if (!password) {
            validationErrors.password = 'Password is required';
          } else if (password.length < 6) {
            validationErrors.password = 'Password should be at least 6 characters long';
          }
      
          // Department validation
          if (!dep) {
            validationErrors.dep = 'Department is required';
          }
      
          // Register number validation
          if (!regno) {
            validationErrors.regno = 'Register number is required';
          }
      
          // Date of birth validation
          if (!dob) {
            validationErrors.dob = 'Date of birth is required';
          }
          if (!mobno) {
            validationErrors.mobno = 'Mobile number is required';
          } else if (!/^[0-9]{10}$/.test(mobno)) {
            validationErrors.mobno = 'Invalid mobile number format';
          }

    if (Object.keys(validationErrors).length === 0) {
      console.log('Registration data:', { regno,name,dob,gender,dep,mobno,email,password});
      setRegisterNo('');
      setName('');
      setDateOfBirth('');
      setGender('');
      setDept('');
      setMobile('');
      setEmail('');
    
      setPassword('');
    
      setErrors({});
    } else {
      setErrors(validationErrors);
    }

  };

  return (
    <div className="split-screen-container1">
      <div className="left-side2">
        <h2>Register Now</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group1">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) =>  setName(e.target.value)}
              required
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group1">
            <label>Gender:</label>
            <select
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
                {errors.gender && <span className="error">{errors.gender}</span>}
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group1">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
              {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group1">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
              {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <div className="form-group1">
            <label>Department:</label>
            <input
              type="text"
              name="department"
              value={dep}
              onChange={(e) =>  setDept(e.target.value)}
              required
            />
              {errors.dep && <span className="error">{errors.dep}</span>}
          </div>
          <div className="form-group1">
            <label>Register Number:</label>
            <input
              type="text"
              name="registerNo"
              value={regno}
              onChange={(e) => setRegisterNo(e.target.value)}
              required
            />
              {errors.regno && <span className="error">{errors.regno}</span>}
          </div>
          <div className="form-group1">
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={dob}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
            />
              {errors.dob && <span className="error">{errors.dob}</span>}
          </div>
          <div className="form-group1">
            <label>Mobile No:</label>
            <input
              type="long"
              name="mobno"
              value={mobno}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
              {errors.mobno && <span className="error">{errors.mobno}</span>}
          </div>
          <button type="submit">Register</button>
          <br>
          </br>
          <Link className='Votee'to='/LoginPage'>Already Registered</Link>
        </form>
      </div>
      <div className="right-side1">
      <video className='videoTag' autoPlay loop muted>
    <source src={logo} type='video/mp4' />
</video>
      </div>
      {/* {showAlert && (
        <div className="alert-message1">Registration successful! You can now log in.</div>
      )} */}
    </div>
  );
};

export default RegistrationForm;
