import React from "react";
import "./App.css";

function Home() {
  const titleContainer = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    justifySelf: 'center',
    alignSelf: 'center',
    margin: 'auto',
    height: '100vh',
  }

  const title = {
    color: 'white', 
    fontFamily: 'Bigshot',
    fontSize: 70,
  }

  return (
    <div className="Home">
      <div className="gradientContainer"> 
        <div style={titleContainer}>
        <div style={title}>
            girl math
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
