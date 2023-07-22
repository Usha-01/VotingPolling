import React, { useState } from "react";
import "./Register.css";
import logo from "../Image/Admin.mp4";
import {Link} from 'react-router-dom'



const CandidateRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    email: "",
    password: "",
    department: "",
    registerNo: "",
    dob: "",
    mobNo: "",
    partyName: "",
    partySymbol: null,
    positionForPost: "",
    year: "",
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform validation here before submission
    if (
      formData.name &&
      formData.gender &&
      formData.email &&
      formData.password &&
      formData.department &&
      formData.registerNo &&
      formData.dob &&
      formData.mobNo &&
      formData.partyName &&
      formData.partySymbol &&
      formData.positionForPost &&
      formData.year
    ) {
      setShowAlert(true);
      // Perform form submission or API call here
    } else {
      alert("Please fill in all the required fields.");
    }
  };

  return (
    <div className="split-screen-container1">
      <div className="left-side1">
        <h2>Register Now</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group1">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group1">
            <label>Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
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
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group1">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group1">
            <label>Department:</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group1">
            <label>Register Number:</label>
            <input
              type="text"
              name="registerNo"
              value={formData.registerNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group1">
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group1">
            <label>Mobile Number:</label>
            <input
              type="tel"
              name="mobNo"
              value={formData.mobNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group1">
            <label>Party Name:</label>
            <input
              type="text"
              name="partyName"
              value={formData.partyName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group1">
            <label>Party Symbol:</label>
            <input
              type="file"
              name="partySymbol"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group1">
            <label>Position for Post:</label>
            <select
              name="positionForPost"
              value={formData.positionForPost}
              onChange={handleChange}
              required
            >
              <option value="">Select Position</option>
              <option value="president">President</option>
              <option value="vice president">Vice President</option>
            </select>
          </div>
          <div className="form-group1">
            <label>Year:</label>
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Register</button>

          <br></br>
        <Link className='Votee'to='/LoginPage'>Already Registered</Link>
        </form>
      </div>
      <div className="right-side1">
      <video className='videoTag' autoPlay loop muted>
    <source src={logo} type='video/mp4' />
</video>
      </div>
      {showAlert && (
        <div className="alert-message1">Registration successful! You can now log in.</div>
      )}
    </div>
  );
};

export default CandidateRegistrationForm;
