


import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Paper } from "@mui/material";
import { FaCircleUser } from "react-icons/fa6";
import AOS from "aos";
import Box from '@mui/material/Box';
import ima from "../Image/icon.png"
import MiniDrawerr from "./VoterPage";

import './UserProfile.css';

const Profile = () => {
    const [isOpen, setOpen] = useState(true);
    const { userDetails } = useSelector((state) => state.master);

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        
            <main>
            <div className="fle">
            <Box sx={{ display: 'flex' }}>
                {/* Left Side - Image */}
                {/* <div className="left-side">
                    <img src={ima}alt="User Image"  />
                </div> */}

                {/* Right Side - User Profile Details */}
                <div className="right-side">
                    <MiniDrawerr />
                    <div>
                        <h1>User Profile</h1>

                        <div className="profile-root">
                            <div>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <div
                                        layout
                                        transition={{ layout: { duration: 1 }, type: "spring" }}
                                        className="card"
                                    >
                                        <div elevation={16}>
                                            {/* <div layout="position" id="profile-head">
                                                <FaCircleUser size={100} />
                                            </div> */}
                                            <div className="profile-card-content">
                                                <div
                                                    style={{
                                                        display: "grid",
                                                        gridGap: "10px",
                                                        margin: "10px",
                                                    }}
                                                >
                                                    <table className='table table-bordered' width="250%">
                                                        <thead className='text-white' width="100%">
                                                            <tr>
                                                                <td><h2 className="profile-field">Register Number</h2></td>
                                                                <td><h2 className="profile-value">{userDetails.regno}</h2></td>
                                                            </tr>
                                                            <tr>
                                                                <td><h2 className="profile-field">Name</h2></td>
                                                                <td><h2 className="profile-value">{userDetails.name}</h2></td>
                                                            </tr>
                                                            {/* <tr>
                                                                <td><h2 className="profile-field">Date of Birth</h2></td>
                                                                <td><h2 className="profile-value">{userDetails.dob}</h2></td>
                                                            </tr> */}
                                                            <tr>
                                                                <td><h2 className="profile-field">Gender</h2></td>
                                                                <td><h2 className="profile-value">{userDetails.gender}</h2></td>
                                                            </tr>
                                                            <tr>
                                                                <td><h2 className="profile-field">Department</h2></td>
                                                                <td><h2 className="profile-value">{userDetails.dep}</h2></td>
                                                            </tr>
                                                            <tr>
                                                                <td><h2 className="profile-field">Email ID</h2></td>
                                                                <td><h2 className="profile-value">{userDetails.email}</h2></td>
                                                            </tr>
                                                            <tr>
                                                                <td><h2 className="profile-field">Phone Number</h2></td>
                                                                <td><h2 className="profile-value">{userDetails.mobno}</h2></td>
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
            </div>
    
        </main>
    );
};

export default Profile;

