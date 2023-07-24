// import React, { useState } from 'react';
// import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField, Checkbox, Button } from '@mui/material';
// import './ContactForm.css'; 
// import im from "../Image/Backgr.jpg";
// const [submitted, setSubmitted] = useState(false); 


                
// const ContactForm = () => {
//     const [selectedOption, setSelectedOption] = useState('');
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');
//     const [subscribe, setSubscribe] = useState(false);
//     const [errors, setErrors] = useState({});
  
//     const handleOptionChange = (event) => {
//       setSelectedOption(event.target.value);
//     };
  
//     const handleNameChange = (event) => {
//       setName(event.target.value);
//     };
  
//     const handleEmailChange = (event) => {
//       setEmail(event.target.value);
//     };
  
//     const handleMessageChange = (event) => {
//       setMessage(event.target.value);
//     };
  
//     const handleSubscribeChange = (event) => {
//       setSubscribe(event.target.checked);
//     };
  
//     const validateForm = () => {
//       const errors = {};
  
//       if (!selectedOption) {
//         errors.selectedOption = 'Please select a candidate';
//       }
  
//       if (!name) {
//         errors.name = 'Name is required';
//       }
  
//       if (!email) {
//         errors.email = 'Email is required';
//       } else if (!/\S+@\S+\.\S+/.test(email)) {
//         errors.email = 'Invalid email address';
//       }
  
//       setErrors(errors);
//       return Object.keys(errors).length === 0;
//     };
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
  
//       if (validateForm()) {
//         // Do something with the form data (e.g., send it to the server)
//         console.log('Selected Option:', selectedOption);
//         console.log('Name:', name);
//         console.log('Email:', email);
//         console.log('Message:', message);
//         console.log('Subscribe:', subscribe);
        
//         setSubmitted(true);
//       }
//     };

//   return (
//     <div className="split-screen">
//       <div className="left-side">
//         {/* Add your image here */}
//         <img src={im} alt="Left side" />
//       </div>
//       <div className="right-side">
//       {submitted ? ( // If form is submitted, show the success message
//           <div className="success-message">
//             <h2>Thank You!</h2>
//             <p>Your form has been submitted successfully.</p>
//           </div>
//         ) : (

//         <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
        
//       <FormControl component="fieldset" style={{ marginBottom: '20px' }}>
//         <FormLabel component="legend">Which candidate would you vote for?</FormLabel>
//         <RadioGroup value={selectedOption} onChange={handleOptionChange}>
//           <FormControlLabel value="candidate1" control={<Radio />} label="Candidate 1" />
//           <FormControlLabel value="candidate2" control={<Radio />} label="Candidate 2" />
//           <FormControlLabel value="candidate3" control={<Radio />} label="Candidate 3" />
//           <FormControlLabel value="candidate4" control={<Radio />} label="Candidate 4" />
//         </RadioGroup>
//         {errors.selectedOption && <p style={{ color: 'red' }}>{errors.selectedOption}</p>}
//       </FormControl>
//       <TextField
//         label="Name"
//         variant="outlined"
//         fullWidth
//         value={name}
//         onChange={handleNameChange}
//         style={{ marginBottom: '20px' }}
//       />
//       {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
//       <TextField
//         label="Email"
//         variant="outlined"
//         fullWidth
//         value={email}
//         onChange={handleEmailChange}
//         style={{ marginBottom: '20px' }}
//       />
//       {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
//       <TextField
//         label="Message"
//         multiline
//         rows={4}
//         variant="outlined"
//         fullWidth
//         value={message}
//         onChange={handleMessageChange}
//         style={{ marginBottom: '20px' }}
//       />
//       <FormControlLabel
//         control={<Checkbox checked={subscribe} onChange={handleSubscribeChange} />}
//         label="Subscribe to our newsletter"
//         style={{ marginBottom: '20px' }}
//       />
//       <Button type="submit" variant="contained" color="primary">
//         Submit
//       </Button>
//     </form>
    
//       </div>
  
//     </div>
//   );
// };

// export default ContactForm;




import React, { useState } from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField, Checkbox, Button } from '@mui/material';
import './ContactForm.css';
import im from "../Image/Backgr.jpg";

const ContactForm = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subscribe, setSubscribe] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false); // State to track form submission

  const handleOptionChange = (event) => {
           setSelectedOption(event.target.value);
         };
      
         const handleNameChange = (event) => {
           setName(event.target.value);
         };
     
         const handleEmailChange = (event) => {
           setEmail(event.target.value);
         };
     
         const handleMessageChange = (event) => {
           setMessage(event.target.value);
         };
     
         const handleSubscribeChange = (event) => {
           setSubscribe(event.target.checked);
         };
     
         const validateForm = () => {
           const errors = {};
     
           if (!selectedOption) {
             errors.selectedOption = 'Please select a candidate';
           }
     
           if (!name) {
             errors.name = 'Name is required';
           }
     
           if (!email) {
             errors.email = 'Email is required';
           } else if (!/\S+@\S+\.\S+/.test(email)) {
             errors.email = 'Invalid email address';
           }
    
           setErrors(errors);
           return Object.keys(errors).length === 0;
      };
      
    

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Do something with the form data (e.g., send it to the server)
      console.log('Selected Option:', selectedOption);
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      console.log('Subscribe:', subscribe);

      // Set submitted to true after successful form submission
      setSubmitted(true);
    }
  };

  return (
    <div className="split-screen">
      <div className="left-side">
        {/* Add your image here */}
        <img src={im} alt="Left side" />
      </div>
      <div className="right-side">
        {submitted ? ( // If form is submitted, show the success message
          <div className="success-message">
            <h2>Thank You!</h2>
            <p>Your form has been submitted successfully.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
            <center><h2 style={{fontFamily:'cursive'}}>Contact Form</h2></center>

            <br></br>
            <div className='field'>

            <FormControl component="fieldset" style={{ marginBottom: '20px' }}>

                <FormLabel component="legend">Which candidate would you vote for?</FormLabel>
         <RadioGroup value={selectedOption} onChange={handleOptionChange}>
           <FormControlLabel value="candidate1" control={<Radio />} label="Candidate 1" />
           <FormControlLabel value="candidate2" control={<Radio />} label="Candidate 2" />
           <FormControlLabel value="candidate3" control={<Radio />} label="Candidate 3" />
           <FormControlLabel value="candidate4" control={<Radio />} label="Candidate 4" />
         </RadioGroup>
         {errors.selectedOption && <p style={{ color: 'red' }}>{errors.selectedOption}</p>}
       </FormControl>
      <TextField
        label="Name"
         variant="outlined"
         fullWidth
         value={name}
         onChange={handleNameChange}
         style={{ marginBottom: '20px' }}
       />
       {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
       <TextField
         label="Email"
         variant="outlined"
         fullWidth
         value={email}
         onChange={handleEmailChange}
         style={{ marginBottom: '20px' }}
       />
       {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
       <TextField
         label="Message"
         multiline
         rows={4}
         variant="outlined"
         fullWidth
         value={message}
         onChange={handleMessageChange}
         style={{ marginBottom: '20px' }}
       />
       <FormControlLabel
         control={<Checkbox checked={subscribe} onChange={handleSubscribeChange} />}
         label="Subscribe to our newsletter"
         style={{ marginBottom: '20px' }}
       />
       <Button type="submit" variant="contained" color="primary">
         Submit
       </Button>
       </div>
 </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;



