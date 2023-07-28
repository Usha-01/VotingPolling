import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'




import './App.css';
import LoginUser from './Login/LoginPage';
import LoginAdmin from './Login/LoginAdmin';

import Select from './Login/Select';
import RegistrationForm from './Registration/RegistrationV';

import CandidateAdd from './Page/CandidateAdd';

import Instruction from './Page1/Instruction';

import CandidatesList from './Page1/CandidateList';
import Dashboard from './Page/Dashboard';
import ContactForm from './Login/Contact';

import VotersDetail from './Page/Voter Details';
import Profile from './Page1/profile';
import VoterHome from './Page1/VoterHome';
import AdminHome from './Page/AdminHome';
import FeedBack from './FeedBack/feedback';
import Ballot from './Page1/BallotPosition';




function App() {
  
  return (

    <>
   
  <Router>
      <div className="App">
        
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Select />} />
              <Route path="/LoginPage" element={<LoginUser />} />
              <Route path="/LoginAdmin" element={<LoginAdmin/>}/>
              
              <Route path="/RegistrationV" element={<RegistrationForm/>}/>

                {/* Footer */}

              <Route path="/Contact" element={<ContactForm/>}/>





                {/*Admin pages router  */}
               {/* <Route path="/AdminPage" element={<MiniDrawer/>}/> */}
               <Route  path="/CandidateAdd" exact element={<CandidateAdd/>} />
               <Route  path="/Dashboard" exact element={<Dashboard/>} />
               <Route  path="/Voters Detail" exact element={<VotersDetail/>} />
               <Route  path="/AdminHome" exact element={<AdminHome/>} />
              
              
          
           
              
              {/* { Voters Page} */}
            <Route path="/VoterPage" element={<VoterHome/>}/> 

            <Route path="/Instruction" element={<Instruction/>}/>
            {/* <Route path="/Profile" element={<UserProfile/>}/> */}
            <Route path="/CandidateList" element={<CandidatesList/>}/>
            <Route path="/BallotPosition" element={<Ballot/>}/>
            <Route path="/Profile" element={<Profile/>}/>
           

              {/* Feedback */}

            <Route path="/FeedBack" element={<FeedBack/>}/>

      </Routes>
     
            
          </div>
        </div>
      </div>
    </Router>
   </>
  );
}

export default App;

