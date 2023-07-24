import React from 'react';
import './UserProfile.css'; 
import  icon from "../Image/icon.png"
import Box from '@mui/material/Box';
import MiniDrawerr from "./VoterPage";

const UserProfile = () => {
  return (
    <>
    <Box sx={{ display: 'flex' }}>
    
    <MiniDrawerr/>
<div className='pro'>
    <div className="profile-container">
      <div className="profile-header">
        <img src={icon} alt="Profile Picture" />
        <h1>Usha Kalathinathan</h1>
      </div>
      <div className="profile-details">
        <h2>User Information</h2>
       
        <p><strong>Age:</strong> 19</p>
        <p><strong>Location:</strong> Tirunelveli,TamilNadu</p>
        <p><strong>Email:</strong> Sasi2701@gmail.com</p>
      </div>
      {/* <div className="profile-voting-history">
        <h2>Voting History</h2>
        <ul>
          <li>Election 1 - Voted</li>
          <li>Election 2 - Did not vote</li>
          <li>Election 3 - Voted</li>
        </ul>
      </div> */}
    </div>
</div>
    </Box>
     </>
  );
};

export default UserProfile;
