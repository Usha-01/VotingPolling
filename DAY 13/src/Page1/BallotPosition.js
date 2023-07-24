
import React from "react";


import Box from '@mui/material/Box';
import MiniDrawerr from "./VoterPage";
import "./Ballot.css";

export default function BallotPosition(){
    return(
      <>
      <Box sx={{ display: 'flex' }}>

      <MiniDrawerr/>
        <div className="ballot">
          
        </div>
      
    
      </Box>
     </>
    )
}


