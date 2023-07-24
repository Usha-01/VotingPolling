import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './home.css';
import MiniDrawerr from './AdminPage';
import Box from '@mui/material/Box';

function CandidateAdd() {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCandidate((prevCandidate) => ({
      ...prevCandidate,
      [name]: value
    }));
  };

  const handleAddCandidate = async () => {
    try {
      const response = await axios.post('http://localhost:8080/candidate/save', newCandidate, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }); 
      setCandidates((prevCandidates) => [...prevCandidates, response.data]);
      setNewCandidate({
        firstName: '',
        lastName: '',
        partyName: '',
        position: '',
        registerNumber: ''
      });
    } catch (error) {
      console.error('Error adding candidate:', error);
    }
  };

  const handleUpdateCandidate = async (index) => {
    try {
      const response = await axios.put(`/api/candidates/${candidates[index].id}`, newCandidate); // Replace '/api/candidates' with your backend API endpoint URL
      const updatedCandidates = [...candidates];
      updatedCandidates[index] = response.data;
      setCandidates(updatedCandidates);
      setNewCandidate({
        firstName: '',
        lastName: '',
        partyName: '',
        position: '',
        registerNumber: ''
      });
    } catch (error) {
      console.error('Error updating candidate:', error);
    }
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <MiniDrawerr />
        <div className="candidate-add-page">
    <h1>Candidate Add Page</h1>
       <div className="form-container">
         <input
           type="text"
           name="firstName"
           placeholder="First Name"
           value={newCandidate.firstName}
           onChange={handleInputChange}
         />
         <input
           type="text"
           name="lastName"
           placeholder="Last Name"
           value={newCandidate.lastName}
           onChange={handleInputChange}
         />
         <input
           type="text"
           name="partyName"
           placeholder="Party Name"
           value={newCandidate.partyName}
           onChange={handleInputChange}
         />
         <input
           type="text"
           name="position"
           placeholder="Position"
           value={newCandidate.position}
           onChange={handleInputChange}
         />
         <input
           type="text"
           name="registerNumber"
           placeholder="Register Number"
           value={newCandidate.registerNumber}
           onChange={handleInputChange}
         />
         <div className="buttons-container">
           <button className="btn-add" onClick={handleAddCandidate}>
             Add
           </button>
           <button className="btn-update" onClick={() => handleUpdateCandidate(candidates.length - 1)}>
             Update
           </button>
         </div>
       </div>
          {/* View Button */}
       <div className="view-container">
         <button className="btn-view" onClick={() => setCandidates([...candidates])}>
          View Candidates
         </button>
       </div>

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
      </Box>
    </>
  );
}

export default CandidateAdd;
