import * as React from 'react';

import "./Admin.css"

import Admin from "./Admin.jpg";
import Adminid from "./Admin id.png";
import Adminpass from "./Admin pass.jpeg";

export default function AdminVoter()
{
    return (
      <>
      <div className="min">
        <div className="sub-min">
              <div>
                <div className="img">
                  <div className="container-img">
                    <img  src={Admin} alt="user1" className="user1" />
                    
                    </div>
                  </div>
                    <div>
                      <h1>Admin Login</h1>
                     
                       <div>
                          <img src={Adminid} alt="Admin id" className="gmail" />
                          <input type="text" placeholder="Admin Id" classNAme="name"/>
                      
                      </div>
                      <div className="sec">

                      </div>
                       <div>
                          <img  src={Adminpass} alt="password" className="password" />
                          <input type="password" placeholder="Enter password" classNAme="name"/>
                      
                      </div>
                      
                    <div className='logingbutton'>
                    <button>Login</button>
                    </div>
                    </div>

                  </div>
              </div>
        </div>
      
      </>
    );
}