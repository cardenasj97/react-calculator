import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Calculator from './components/Calculator';
import LinkedInLogo from './assets/img/linkedin.svg';
import GitHubLogo from './assets/img/github.svg';

function App() {
  return (
    <div className="main-wrapper">
      <div className="title">Calculator App v1</div>
      <div className="calculator-wrapper">
        <Calculator />
      </div>
      <div className="contact">
        <span>Made by Juan Cardenas. Follow me on</span>
        <div className="img-container">
          <a 
            href="https://www.linkedin.com/in/cardenasj97/" 
            title="Go to LinkedIn" 
            rel="noopener noreferrer" 
            target="_blank"
          >
            <img className="icons" src={LinkedInLogo} alt="LinkedIn Logo" />
          </a>
        </div>
        <div className="img-container">
          <a 
            href="https://github.com/cardenasj97" 
            title="Go to Github" 
            rel="noopener noreferrer" 
            target="_blank"
          >
            <img className="icons" src={GitHubLogo} alt="Github Logo" />
          </a>
        </div>       
      </div>
    </div>

  );
}

export default App;
