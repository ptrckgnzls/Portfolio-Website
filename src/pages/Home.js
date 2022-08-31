import React from 'react';
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about"> 
        <h2> Hi, My names is Patrick</h2>
        <div className="prompt"> 
          <p> A 4th Year Computer Engineering Student in Lyceum of the Philippines University-Cavite</p>
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, NPM, Yarn, Styled Components, Arduino IDE
            </span>
          </li>
          <li className="item">
            <h2> Back-End</h2>
            <span>
              Node JS, .NET, MySQL
            </span>
          </li>
          <li className="item">
            <h2> Languages</h2>
            <span>
              JavaScript, Java, Python, C#, C, C++
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home