import React, { useState } from 'react';
import "./Add.css"

import MiniDrawerr from './VotingPage';
import Box from '@mui/material/Box';


function CandidateAdd()
{
    const[inputList,setinputList]=useState([{firstName:'',lastName:'',department:'',position:''}]);
    
    const handleinputchange=(e,index)=>
    {
        const {name,value}=e.target;
        const list=[...inputList];
        list[index][name]=value;
        setinputList(list);

    }

    const handleremove= index=>
    {
        const list=[...inputList];
        list.splice(index,1);
        setinputList(list);
    }
    const handleaddclick=()=>
    {
        setinputList([...inputList,{firstName:'',lastName:''}]);
    }
    return (
        <>
       
        <div className="ma">
        <Box sx={{ display: 'flex' }}>
            <MiniDrawerr/>
        <div className='container'>
                <div className='row'>
                    <div className='col-sm-12'>
                        
                        <h5 className='mt-3 mb-4 fw-bold'>
                            Add Candidate and Remove Candidate 
                        </h5>
                        <br></br>
                {
                inputList.map((x,i)=>{
                    return (
                        <div className='row mb-3'>
                            <div class="form-group col-md-4">
                                <label>First Name</label>
                                <input type="text" name="firstName" class="form-control" placeholder='Enter First Name' onChange={e=>handleinputchange(e,i)}>

                                </input>
                            </div>
                            <div class="form-group col-md-4">
                                <label>Last Name</label>
                                <input type="text" name="lastName" class="form-control" placeholder='Enter Last Name' onChange={e=>handleinputchange(e,i)}>

                                </input>
                             </div>
                            <div class="form-group col-md-4">
                                <label>Department</label>
                                <input type="text" name="department" class="form-control" placeholder='Enter the department' onChange={e=>handleinputchange(e,i)}>

                                </input>
                             </div>

                             <div class="form-group col-md-4">
                                <label>Position</label>
                                <input type="text" name="position" class="form-control" placeholder='Enter the position' onChange={e=>handleinputchange(e,i)}>

                                </input>
                             </div>
                            
                        <br></br>
                        <div class="form-group col-md-2 mt-4">
                            {
                            inputList.length!==1 &&
                            <button className='btn btn-danger mx-1' onClick={()=>handleremove(i)} style={{marginBootom: 10}} >Remove</button>
                            }
                            <br></br>
                            <br></br>
                            {
                            inputList.length-1===i &&
                            <button className='btn btn-success' onClick={handleaddclick}>Add more</button>
                            }
                        </div>
                    </div>
                );
                    
           } ) }
             </div>
            </div>
      </div>
      </Box>
     </div>
     </>
    );
}
export default CandidateAdd;