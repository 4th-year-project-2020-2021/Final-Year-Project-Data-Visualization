import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../css/styling.css";
import Home from "../Img/Home.svg";
import Rating from "react-rating";

function Ratings(){
	const [rating, setRating] = useState("");
	const [loading, setLoading] = useState(false);
	const [ratings, setRatings] = useState([]);
	const [rating1, setRating1] = useState(0);
	const [rating2, setRating2] = useState(0);
	const [rating3, setRating3] = useState(0);

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
} else {
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

    <div className="app">
    <div className="app__left">
    	<h4>Data Visualization & Analysis</h4>
    	<br/>
        	<img src={Home} style={{ height: 300}}/>
        	<h3>Leave a rating when you're done?</h3>
        <br/>
        
        <div className="App">
        
		<Rating
			fractions={2}
			stop={5}
			initialRating={rating2}
			onClick={rate => setRating2(rate)}
		/>
		<p>Rating: {rating2}</p>
      
      
    	</div>
        <br></br>
        
        <form className="rating" onSubmit={ratingItem}>
          	<div className="control"> 
          		<textarea name="rating" className="text-box" onChange={e => setRating(e.target.value)} ></textarea>
            		<br></br>
            		<input className="button" type="submit" value="Submit" />
            		<br></br>
          			<button className="button" onClick={getRatings} disabled={loading} >Review Ratings</button>
          	</div>
          	<br></br>
          
          	{/*<input className="button" type="submit" value="See all Reviews" />*/}
        </form>
    </div>
        
    <React.Fragment>
    <div className="app__information">
    <br />
    	{loading ? 'Loading...' : 'Ratings'}
        <div key={ratings._id}>
        
		<table>             
        	<tbody className="reviewTable">
                {ratings.map(x => <tr>
					<Link to={"rating/" + ratings._id}>
					</Link>
					<div>
						<td>{x.rating}</td>
					</div>
                	</tr>
				)}
                {ratings.length == 0 && <tr>    
                </tr>}
                </tbody>
            </table>
        </div>
    </div>
</React.Fragment>
</div>
</div>
);
}

export default Ratings;