import React from 'react'
import Doc from "../Img/Doc.svg";

    function Home() {
        return (
          <div
            style={{
            textAlign: "center",
            fontSize:"50px",
            fontFamily: "Nanum Gothic",
            color: "dark"
         }}
        >
          
          <h2>Data Visualization & Analysis</h2>
          <br/>
          <img src={Doc} style={{ height: 350}}/>

          <br></br>
          <br></br>
          <h3>Leave a rating when you're done?</h3>

          
          </div>
        );
    }

export default Home;