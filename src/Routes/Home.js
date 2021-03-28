import Doc from "../Img/Doc.svg";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import "../css/styling.css";

function Rating(){

const [rating, setRating] = useState("");
const [loading, setLoading] = useState(false);
const [ratings, setRatings] = useState([]);

const getRatings = () => {
    setLoading(true);
    fetch("/api/rating")
        .then(res => res.json()
        ).then(res => {
            console.log(ratings);
            setRatings(res.data);
            setLoading(false);
        })
}


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
    fetch("/api/rating", options)
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
      fontSize:"20px",
      fontFamily: "Nanum Gothic",
      color: "dark"
      }}
    >    
    <h4>Data Visualization & Analysis</h4>
    <br/>
        <img src={Doc} style={{ height: 300}}/>

        <br></br>
        <br></br>
        <h3>Leave a rating when you're done?</h3>

        <br/>

        <form className="rating" onSubmit={ratingItem}>
          <div className="control"> 
          <textarea name="rating" className="text-box" onChange={e => setRating(e.target.value)} ></textarea>
          </div>
          <input className="button" type="submit" value="Submit" />
          <br></br>
          {/*<input className="button" type="submit" value="See all Reviews" />*/}
        </form>
        <React.Fragment>
                <br />
        
                <button
                    className="button"
                    onClick={getRatings}
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Ratings'}
                </button>
                <div key={ratings._id}>
                    <table>
                        <thead>
                            <th>What the reviews say</th>
                            
                            
                        </thead>


                        <tbody>
                            {ratings.map(x => <tr>
                                <Link to={"rating/" + ratings._id}>
                                </Link>
                                <td>{x.rating}</td>
                                
                                
                            </tr>)}
                            {ratings.length == 0 && <tr>

                                <b>No data found to display.</b>

                            </tr>}
                        </tbody>
                    </table>
                </div>

                
            </React.Fragment>

      </div>
    );
  }

export default Rating;