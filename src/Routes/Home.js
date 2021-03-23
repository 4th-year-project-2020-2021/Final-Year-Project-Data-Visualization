import Doc from "../Img/Doc.svg";
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import "../css/styling.css";

function Rating(){

const [rating, setRating] = useState("");

const ratingItem = (e) =>{
  e.preventDefault();
  console.log("data");

  const item = {
   rating : rating
  }

  const options = { 
   method: 'post',
   headers: {
     'Content-Type': 'application/json'
   },
      body: JSON.stringify(item)
  } 

  if(rating){
    fetch("/api/create", options)
    .then(res => {
        //response must be parsed to JSON format
        return res.json();
    }).then(res => {
        console.log(res)
        
    })
}else {
    console.log("The form is empty")
  }
}  

return (
    <div
      style={{
      textAlign: "center",
      fontSize:"30px",
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

        <br/>

        <form className="rating" onSubmit={ratingItem}>
          <div className="control">
            
          <textarea name="rating" className="text-box" onChange={e => setRating(e.target.value)} ></textarea>
          </div>

          <input className="button" type="submit" value="Submit" />

        </form>
        </div>
        );
    }

export default Rating;