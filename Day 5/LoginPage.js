import * as React from 'react';

import "./Admin.css";
import user1 from "./Image/img Ad (1).jpg";
import gmail from "./Image/gmail.jpg";
import password from "./Image/password.jpg";
import {Link} from 'react-router-dom'



export default function LoginVoter()
{
    return (
      <>
      <div className="min">
        <div className="sub-min">
              <div>
                <div className="img">
                  <div className="container-img">
                    <img  src={user1} alt="user1" className="user1" />
                    
                    </div>
                  </div>
                    <div>
                      <h1>Login Page</h1>
                     
                       <div >
                          <img src={gmail} alt="gmail" className="gmail" />
                          <input type="text" placeholder="Enter email" classNAme="name"/>
                      
                      </div>
                      <div className="sec">

                      </div>
                       <div >
                          <img  src={password} alt="password" className="password" />
                          <input type="password" placeholder="Enter password" classNAme="name"/>
                      
                      </div>
                      
                    <div className='logbutton'>
                    <button>Login</button>
                    <br></br>
                    <div className='str'>
                    <Link to='/RegistrationV'>Voter Registration</Link> <br></br>
                    <Link to='/RegistrationC'>Candidate Registration</Link>

                    </div>
                    </div>
                    </div>

                  </div>
              </div>
        </div>
      
      </>
    );
}