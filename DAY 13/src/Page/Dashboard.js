
import React, { useState } from 'react';
import './home.css';
 import MiniDrawerr from './AdminPage';
 import Box from '@mui/material/Box';


function Dashboard() {

  return (
    <>
     <Box sx={{ display: 'flex' }}>
        <MiniDrawerr />
    
            <center>
              <h1>Dashboard
                </h1>
              </center>
    </Box>

  </>
  );
}

export default Dashboard;
