
import React from "react";
import "./home.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Select() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  fixed-top ig">
           <div className="container">
            <Link className="navbar-brand" to={'/'}>
               Home 
              </Link>
             <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
               <ul className="navbar-nav ml-auto">
                 <li className="nav-item">
                   <Link className="nav-link" to={'/LoginPage'}>
                     User Login
                 </Link>
                 </li>
                 <li className="nav-item">
                   <Link className="nav-link" to={'/LoginAdmin'}>
                     Admin Login
                   </Link>
                 </li>
                 <li className="nav-item">
                   <Link className="nav-link" to={'/feedback'}>
                     FeedBack
                   </Link>
                 </li>
            
              </ul>
            </div>
          </div>
         </nav>

      <div id="home1">
        <div className="so">
          <h3>
            "Empower Your Vote, Embrace eVoting!"<br />
            "eVoting: A Modern Voice for Every Citizen."<br />
            "Cast Your Ballot, eVoting Simplified."<br />
            "eVoting: Making Democracy Accessible to All."<br />
            "Secure, Efficient, and Transparent: Choose eVoting!"<br />
            "Vote Smart, Vote Digital: eVoting at Your Fingertips."
          </h3>
        </div>
      </div>
      <Footer />
    </>
  );
}

