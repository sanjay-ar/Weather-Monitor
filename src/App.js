import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
      Created with  by Sanjay A R
      
      {" "}
      - 
      Connect With Me: {" "}
        <a target="_blank" href="https://www.linkedin.com/in/sanjay-ar/">
          linkedin
        </a>{" "}
        |
        {" "}
        <a target="_blank" href="https://github.com/sanjay-ar">
          github
        </a>{" "}
        | 
        {" "}
        <a target="_blank" href="mailto:sanjay2003ar@gmail.com">Email</a>
      </div>
    </React.Fragment>
  );
}

export default App;
