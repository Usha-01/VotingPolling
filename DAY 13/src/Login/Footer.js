import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom";





const Footer = () => {
  return (
    <>
   
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p>Evoting is a mobile based voting platform that allows you to create and manage your own election.Evoting is much more than a platform - it's a revolution. Evoting is used for college level elections.

            Today voting means - travelling to a booth, standing there in queue for hours, getting hand inked to vote.Evoting lets voter vote directly from their mobile, from the comforts of their homes and that also within few seconds.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>WEBSITE</h6>
            <ul class="footer-links">
              {/* <li><a href="About Evoting">Brief</a></li> */}
              {/* <li><a href="Security">Press</a></li> */}
              <Link className="nav-link" to={'/Contact'}>
              Conatct Us
            </Link>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>COLLEGE LEVEL ELECTION</h6>
            <ul class="footer-links">
             
              <h7>Student elections are very important part of a student's life. It is an introduction and demonstration of power of democracy to students, early in their life. Many politicians consider student elections to be the training ground for future politicians, leaders, and statesmen.

There are more than 15 lakh schools and more than 50,000 colleges in India. All schools and colleges encourage students to learn leadership and promotes internal democracy among students. Therefore, all schools and colleges have some kind of elections or representative selection mechanism. </h7>
            </ul>
          </div>
        
          </div>
        </div>
        <hr/>
     
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2023 Evoting
         
            </p>
          </div>
        </div>
      </div>
</footer>
    </>
  );
}
export default Footer;