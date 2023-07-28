import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Ballot.css';
import logo from '../Image/icon.png';
import MiniDrawer from './VoterPage';
import Box from '@mui/material/Box';

function Ballot() {
  const navigate = useNavigate();
  const accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxLDcyNzcyMWV1aXQxNTJAc2tjZXQuYWMuaW4iLCJpc3MiOiJzYXNpIiwiaWF0IjoxNjkwMzA0NTIwLCJleHAiOjE2OTAzMjI1MjB9._eH5Veh-pQmBFkY_yXwfPJOV8efj6MB0dW2mX5pnHlzeK8PcRV5Tz9Vw1fvosm-ZQHCaN_xXoP3OiFJvRYotag";

  const [candidates, setCandidates] = useState([]);
  const [selectedCandidateId, setSelectedCandidateId] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleCandidateSelection = (candidateId) => {
    setSelectedCandidateId(candidateId);
  };

  const handleSubmitVote = async () => {
    if (selectedCandidateId === null) {
      alert("Please select a candidate before submitting your vote.");
      return;
    }

    try {
      // Submit the vote to the backend here using the selectedCandidateId
      // ...
      // After successful vote submission, set the isSubmitted flag to true
      setIsSubmitted(true);
      alert("Vote submitted successfully!");
    } catch (error) {
      console.error('Error submitting vote:', error);
    }
  };

  const handleReturnToHomePage = () => {
    navigate('/'); // Use navigate function instead of history.push
  };

  return (
    <>
    
      <Box sx={{ display: 'flex' }}>

        <MiniDrawer/>
        <div className='wait'>
      <div className="ballot-page">
        <h1>Ballot Page</h1>
        {candidates.length > 0 && (
          <table className="candidates-table">
            <thead>
              <tr>
                <th>Profile Picture</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Register Number</th>
                <th>Vote</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidate, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={logo} // Replace with the actual URL of the profile picture
                      alt="profile"
                      className="profile-pic"
                    />
                  </td>
                  <td>{candidate.firstName}</td>
                  <td>{candidate.lastName}</td>
                  <td>{candidate.position}</td>
                  <td>{candidate.registerNumber}</td>
                  <td>
                    <button
                      onClick={() => handleCandidateSelection(candidate.id)}
                      disabled={isSubmitted} // Disable the vote button if vote is already submitted
                    >
                      Vote
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {isSubmitted && (
          <div>
            <button disabled>Vote Submitted</button>
          </div>
        )}
        {!isSubmitted && selectedCandidateId && (
          <div>
            <button onClick={handleSubmitVote}>Submit Vote</button>
          </div>
        )}
        <div>
          <button onClick={handleReturnToHomePage}>Return to Home Page</button>
        </div>
      </div>
    </div>
      </Box>
    </>
  );
}

export default Ballot;