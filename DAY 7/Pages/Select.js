import React from "react";
// import admin from './Image/imgvote.jpeg
import "./home.css"
import Footer from "../Footer";
// import logo from "../Image/homeback.mp4";


export default function Select(){
    return(
      <>
        <div id="home1">
           <div className="so">
             <h3>"Empower Your Vote, Embrace eVoting!"<br></br>
                "eVoting: A Modern Voice for Every Citizen."<br></br>
                "Cast Your Ballot, eVoting Simplified."<br></br>
                "eVoting: Making Democracy Accessible to All."<br></br>
                "Secure, Efficient, and Transparent: Choose eVoting!"<br></br>
                "Vote Smart, Vote Digital: eVoting at Your Fingertips."</h3>
          </div>
         {/* <div className="logo">
            <video className='videoTag' autoPlay loop muted>
                 <source src={logo} width={15}  type='video/mp4' />
            </video>
         </div> */}

     </div>  
          <Footer/>
     
     </>
    )
}

