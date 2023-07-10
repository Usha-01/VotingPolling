import React from "react";
import admin from './Image/imgvote.jpeg'
import "./Style.css"
export default function Select(){
    return(
        <div >
            <div className="left" style={{width:'50%' ,float:"left"}}>
            <h1>Happy Voting</h1>
            </div>
            
            <div className="right" style={{width:'50%',float:"right"}}>
                <div className="img"
                    style={{overflowX:'hidden',overflowY:'hidden',paddingBottom :"10px"}}>
                    <img  src={admin} alt="user1" />
                </div>
        </div>
        </div>
    )
}
