 import React from 'react';
 import logo from "../Image/Img.mp4";


import UserService from '../Service/UserService';
import { addUserDetails } from '../Store/MasterSlice';
import { useEffect } from "react";
import Box from '@mui/material/Box';
 import MiniDrawerr from "./VoterPage";
 import "./vote.css"

import { useDispatch, useSelector } from "react-redux";

function VoterHome() {
    const dispatch = useDispatch();
    const { Emails } = useSelector((state) => state.master);
    const { Token } = useSelector((state) => state.master);
    useEffect(() => {
      getData();
    }, []);
  
    const getData = async () => {
      try {
        const response = await UserService.getUserByEmail(Emails, Token);
        console.log("response", " ", response.data);
        dispatch(addUserDetails(response.data));
      }
      catch (error) {
        console.log(error);
      }
    }
    const {user} = useSelector(state => state.master)
    return ( 
        <>
            <Box sx={{ display: 'flex' }}>

                <MiniDrawerr/>

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

export default VoterHome;


