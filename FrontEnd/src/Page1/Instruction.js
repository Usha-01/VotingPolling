import React from "react";
import "./Instruction.css";

import Box from '@mui/material/Box';
import MiniDrawerr from "./VoterPage";
export default function Instruction(){
    return(
      <>
      <Box sx={{ display: 'flex' }}>
      
      <MiniDrawerr/>
      <div className="ma">
        <div className="in">
        
        
            <center>
        <h1><i>Instructions for Voters</i></h1>
        </center>
        <br></br>
       
        
            <div className="inn">
         <li>Eligibility Verification:</li>
          *Ensure that you are eligible to vote in the college-level election. <br>
         </br> *This typically involves being a registered student at the college or
         <br></br> university and meeting any additional criteria set by the election organizers.
         
         

         <li> Know the Candidates:</li>
         *Familiarize yourself with the candidates running for various positions in the election.
        <br></br> *Read their profiles, statements, and campaign materials. 
        <br></br>*Attend candidate debates, forums, or speeches to understand their positions and
        <br></br> plans for the college.

         <li>Understand the Issues:</li>
         *Educate yourself about the key issues that affect the college community. 
         <br></br>*Research the challenges, concerns, and priorities that candidates should address.
         <br></br> *Consider how their proposed solutions align with your own views and aspirations for the college.

            
         <li>Voting Procedures: </li>
         *Find out the specific details about the voting process.
         <br></br> *Determine the voting dates, times, and locations if the election is held in person. 
         <br></br>*Alternatively, if the election is conducted online, identify the designated platform 
         <br></br>or website for casting your vote.


       
         <li>Get Registered:</li> 
         *If required, ensure that you are properly registered to vote.
         <br></br>*Follow any registration procedures or deadlines provided by the election organizers. 
         <br></br>*Registering may involve submitting personal information or completing a registration form.


         <li>Prepare for Voting: </li>
         *Before casting your vote, make sure you have any necessary identification or
         <br></br> documentation, such as a student ID card or voter registration details. 
         <br></br>*If voting online, ensure you have a stable internet connection and any 
         <br></br>login credentials required for the voting platform.

        
         <li>Cast Your Vote:</li>
         *Follow the provided instructions to cast your vote.
         <br></br> *If voting in person, go to the designated voting location during the specified hours.
         <br></br> *If voting online, access the designated platform, and follow the prompts to cast your vote securely.
         <br></br> *Ensure that you follow any guidelines or rules provided by the election organizers.

        
         <li> Verify Your Vote:</li>
         *If possible, confirm that your vote has been successfully recorded or submitted. 
         <br></br>*Some online voting platforms may provide a confirmation message or receipt.
         <br></br> *If voting in person, ensure that your ballot is properly deposited or submitted.

    
         <li> Stay Informed: </li>
         *After the election, stay updated on the results and outcomes.
         <br></br> *Follow any announcements or communications from the election organizers or college 
         <br></br>administration regarding the winners and the impact on the college community.

        </div>
    
      </div>
     </div>
      </Box>
     </>
    )
}