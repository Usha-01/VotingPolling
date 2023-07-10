import * as React from 'react';

import "./Style.css";
import user1 from "./Image/user 1.jpg";
import gmail from "./Image/gmail.jpg";
import password from "./Image/password.jpg";




export default function LoginVoter()
{





    return (
      <>
      <div className="main">
        <div className="sub-main">
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
                    </div>
                    </div>

                    <p className='link'>
                      <a href="#">Voter Register</a> Or <a href="#">Candidate Register</a>
                    </p>
  
                  </div>
              </div>
        </div>
      
      </>
    );
}