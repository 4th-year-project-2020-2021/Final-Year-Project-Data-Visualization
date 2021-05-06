import { axisLeft } from 'd3-axis';
import React, { useState} from 'react';
import { Redirect } from 'react-router';
import "../css/styling.css";

function Create(){

  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setTemp] = useState("");
  const [routeRedirect, setRedirect] = useState(""); 

  const createItem = (e) =>{//e is the event
    e.preventDefault();
    console.log("data");//comment out when app is working, but keep for error checking 

    const item = {
     date : date,
     name : name,//value is const name
     description : description,//value is const description
     amount: amount//value is const amount
    }

    //send item to API
    const options = { 
     method: 'post',
     headers: {
       'Content-Type':'application/json'//API is expecting JSON
     },
        body: JSON.stringify(item)//mongo expecting json
    } 

    if(description  && name && amount && date ){
        fetch("/api/create", options)
        .then(res => {
            //response must be parsed to JSON format
            return res.json();
        }).then(res => {
            console.log(res)
            setRedirect(true);
        })
    }else {
        console.log("The symptoms form is empty")//lets user know if form isn't filled in
    }
}  

const redirect = routeRedirect;
    if(redirect){
        return <Redirect to="/Item" />  
    }
    return(  
        <div 
            style={{
            fontSize:"22px",
            fontFamily: "Nanum Gothic",
            color: "dark",
            position: 'absolute',
            }}
        >

        <h2>How're you feeling today?</h2>
        <br></br>
        
        <form className="create" onSubmit={createItem}>        
            <div className="control">
                <label htmlFor="name">Date:</label> <br></br>
                <input type="date" name="date" onChange={e => setDate(e.target.value)} />
            </div>
            <br></br>
            <div className="control">
                <label htmlFor="name">Name: </label> <br></br>
                <input type="text" name = "name" onChange={e => setName(e.target.value)} ></input>
            </div>
            <br></br>
            <div className="control">
                <label htmlFor="description">Description: </label> <br></br>
                <textarea name="description" onChange={e => setDescription(e.target.value)} ></textarea>
            </div>
            <br></br>
            <div className="control"> 
                <label htmlFor="amount">Temperature: </label> 
                <input type="number"
                    min="30.00"
                    step="0.01"
                    max="42.00"
                    presicion={2} 
                    name="amount" onChange={e => setTemp(e.target.value)} />
            </div>
            <div>
            <br></br>
                <input className="button" type="submit" value="Save Symptoms" />
            </div>
        </form>  
        </div>
    )
}
export default Create;