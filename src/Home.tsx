import React from "react";
import "./Home.css";

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
    fontSize: 50,
    
  }

  return (
    <div className="Home">
      <div className="Home-gradient"> 
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
