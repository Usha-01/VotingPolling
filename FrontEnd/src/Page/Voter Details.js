
// import React, { useState, useEffect } from 'react';
// import './Details.css'; 
// import Box from '@mui/material/Box';
// import MiniDrawerr from "./AdminPage";
// import axios from 'axios';
// // import { Link, useNavigate } from 'react-router-dom';





// function VotersDetail() {

//   const [voterdata, voterchange] = useState([]);

//   useEffect(() => {
//     const accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxLFJhc2lrYTA3QGdtYWlsLmNvbSIsImlzcyI6InNhc2kiLCJpYXQiOjE2OTAzNDM2MzksImV4cCI6MTY5MDM2MTYzOX0.5khi-0HqoaOcgCdBqBaueDwVNS1uo-Ga_20dxMR4D3inWTOaJ8pB0jWKJkscafH2tu6mx11V0EfsmTPzPHqe9Q";
//     axios
//       .get('http://localhost:8080/api/v4/user/get', {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       })
//       .then((res) => {
//         voterchange(res.data);
//         console.log(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);


//   return (
//     <>
//     <Box sx={{ display: 'flex' }}>
    
//     <MiniDrawerr/>

   

    
// {/* 
//     <div className='card-title'>
//                 <h1 style={{ fontSize: '40px', fontFamily: 'VT323' }}>Voter List</h1>
//               </div> */}

//               <div className='card-body'>
              
//                 <table >
//                   <thead>
//                     <tr>
//                       <td>Id</td>
//                       <td >Name</td>
                     
//                       <td>Register No</td>
                     
                     

//                       <td >Gender</td>
//                       <td>Department</td>
//                       <td >Contact</td>
                   
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {voterdata &&
//                       voterdata.map((item) => (
//                         <tr key={item.id}>
//                           <td>{item.id}</td>
//                           <td>{item.name}</td>
//                           <td>{item.regno}</td>
                        
//                           <td>{item.gender}</td>
//                           <td>{item.dep}</td>
//                           <td>{item.mobno}</td>
//                           <td>
                        
                          
                          
                            
//                           </td>
//                         </tr>
//                       ))}
//                   </tbody>
//                 </table>
//               </div>  
  
//     </Box>

//      </>
//   );
// }
//  export default VotersDetail; 


import React, { useState, useEffect } from 'react';
import './Details.css';
import Box from '@mui/material/Box';
import MiniDrawerr from './AdminPage';
import axios from 'axios';

function VotersDetail() {
  const [voterdata, voterchange] = useState([]);

  useEffect(() => {
    const accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxLFJhc2lrYTA3QGdtYWlsLmNvbSIsImlzcyI6InNhc2kiLCJpYXQiOjE2OTAzNDM2MzksImV4cCI6MTY5MDM2MTYzOX0.5khi-0HqoaOcgCdBqBaueDwVNS1uo-Ga_20dxMR4D3inWTOaJ8pB0jWKJkscafH2tu6mx11V0EfsmTPzPHqe9Q";
    axios
      .get('http://localhost:8080/api/v4/user/get', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        voterchange(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <MiniDrawerr />

        {/* <div className='card-title'>
               </div>  */}
      

        <div className='table-container'>
               <h1 style={{ fontSize: '40px', fontFamily: 'VT323' }}>Voter List</h1>

          <table className='voters-table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Register No</th>
                <th>Gender</th>
                <th>Department</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {voterdata &&
                voterdata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.regno}</td>
                    <td>{item.gender}</td>
                    <td>{item.dep}</td>
                    <td>{item.mobno}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Box>
    </>
  );
}

export default VotersDetail;
