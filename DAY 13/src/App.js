import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'




import './App.css';
import LoginUser from './Login/LoginPage';
import LoginAdmin from './Login/LoginAdmin';
// import Candidate from './Login/Candidate';
// import CandidateRegistrationForm from './Registration/RegistrationC';
import Select from './Login/Select';
import RegistrationForm from './Registration/RegistrationV';
import MiniDrawer from './Page/AdminPage';
import CandidateAdd from './Page/CandidateAdd';
import MiniDrawerr from './Page1/VoterPage';
import Instruction from './Page1/Instruction';
import UserProfile from './Page1/profile';
import CandidatesList from './Page1/CandidateList';
import Dashboard from './Page/Dashboard';
import ContactForm from './Login/Contact';
import BallotPosition from './Page1/BallotPosition';




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
               <Route path="/AdminPage" element={<MiniDrawer/>}/>
               <Route  path="/CandidateAdd" exact element={<CandidateAdd/>} />
               <Route  path="/Dashboard" exact element={<Dashboard/>} />
              
              
          
           
              
              {/* { Voters Page} */}
            <Route path="/VoterPage" element={<MiniDrawerr/>}/> 
            <Route path="/Instruction" element={<Instruction/>}/>
            <Route path="/Profile" element={<UserProfile/>}/>
            <Route path="/CandidateList" element={<CandidatesList/>}/>
            <Route path="/BallotPosition" element={<BallotPosition/>}/>
           



      </Routes>
     
            
          </div>
        </div>
      </div>
    </Router>
   </>
  );
}

export default App;

