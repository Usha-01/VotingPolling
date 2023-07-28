import React, { useState, useEffect } from 'react';
import './CandidateList.css'; 
import Box from '@mui/material/Box';
import MiniDrawerr from "./VoterPage";
import axios from 'axios';




function CandidatesList() {
const accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI5LFNvbWEwMTAxQGdtYWlsLmNvbSIsImlzcyI6InNhc2kiLCJpYXQiOjE2OTAxNzA5NTYsImV4cCI6MTY5MDE4ODk1Nn0.lXXD4YpV8o5eQd5Tl6xdKwHOObDXpep6N-FKYbKuS7Qrqwm5REgjHcpfbPgjY1la6R0FxUUPlTQTRyXM1xJqSQ";
  const [candidates, setCandidates] = useState([]);
  const [newCandidate, setNewCandidate] = useState({
    firstName: '',
    lastName: '',
    partyName: '',
    position: '',
    registerNumber: ''
  });

  useEffect(() => {
    fetchCandidates();
  }, []);


  const fetchCandidates = async () => {
    try {
      const response = await axios.get('http://localhost:8080/candidate/get', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }); 
      setCandidates(response.data);
    } catch (error) {
      console.error('Error fetching candidates:', error);
    }
  };





  return (
    <>
    <Box sx={{ display: 'flex' }}>
    
    <MiniDrawerr/>

    {/* <div className="candidate"> */}

    <main>

         <div className="candidate-add-page">
       
    <h1>View Candidate</h1>
       
       {/* Table to display the candidates */}
       {candidates.length > 0 && (
         <table className="candidates-table">
           <thead>
             <tr>
               <th>First Name</th>
               <th>Last Name</th>
               <th>Party Name</th>
               <th>Position</th>
               <th>Register Number</th>
             </tr>
           </thead>
           <tbody>
             {candidates.map((candidate, index) => (
               <tr key={index}>
                 <td>{candidate.firstName}</td>
                 <td>{candidate.lastName}</td>
                 <td>{candidate.partyName}</td>
                 <td>{candidate.position}</td>
                 <td>{candidate.registerNumber}</td>
               </tr>
             ))}
           </tbody>
         </table>
       )}
     </div>
  </main>
    </Box>

     </>
  );
}
 export default CandidatesList; 
