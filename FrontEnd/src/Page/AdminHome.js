import React from 'react';
import logo from "../Image/graph.mp4";

import Box from '@mui/material/Box';
import MiniDrawerr from './AdminPage';



function AdminHome() {
   
   return ( 
       <>
           <Box sx={{ display: 'flex' }}>

           <MiniDrawerr />


               <div className='log'>
               <video className='videoTag' autoPlay loop muted>
                  <source src={logo} type='video/mp4' />
               </video>


                 <h5></h5>

               </div>


      </Box>
      
       </>
    );
}

export default AdminHome;


