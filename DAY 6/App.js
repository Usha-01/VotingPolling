import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import LoginVoter from './Pages/LoginPage';
import Select from './Pages/Select';
import RegistrationForm from './Pages/RegistrationV';
import AdminVoter from './Pages/Admin';

import './App.css';
import CandidateRegistrationForm from './Pages/RegistrationC';
import Candidate from './Pages/Candidate';


function App() {
  
  return (
    <>
  <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/'}>
              Home page
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    User Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Admin Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/Candidate'}>
                   Candidate Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Select />} />
              <Route path="/sign-in" element={<LoginVoter />} />
              <Route path="/sign-up" element={<AdminVoter/>} />
              <Route path="/RegistrationV" element={<RegistrationForm/>}/>
              <Route path="/RegistrationC" element={<CandidateRegistrationForm/>}/>
              <Route path="/LoginPage" element={<LoginVoter/>}/>
              <Route path="/Candidate" element={<Candidate/>}/>
       
      </Routes>
     
            
          </div>
        </div>
      </div>
    </Router>
   </>
  );
}

export default App;

