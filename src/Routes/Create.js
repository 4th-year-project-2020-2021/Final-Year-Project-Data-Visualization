import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';

function Create(){

    const [currentTime, setCurrentTime] = useState(0);
  useEffect(() =>{
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  },[]);
  // fetch tasks
  const [getHello, setGetHello] = useState(0);
  useEffect(() =>{
    fetch('/hello').then(res =>res.json()).then(data =>{
      setGetHello(data.hello);
    });
  },[]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
   

  const createItem = (e) =>{//e is the event
    e.preventDefault();
    console.log("data");//comment out when app is working, but keep for error checking 

    const item = {
     name : name,//value is const name
     description : description,//value is const description
     amount: amount//value is const amount
    }

    //send items to API
    const options = { 
     method: 'post',
     headers: {
       'Content-Type': 'application/json'//API is expecting JSON
     },
        body: JSON.stringify(item)
    } 

    if(description  && name && amount ){
         fetch("/api/create", options)
         .then(res => {
             //response must be parsed to JSON format
             return res.json();
         }).then(res => {
             console.log(res)
             
         })
     }else {
         console.log("The form is empty")//lets user know if form isn't filled in
     }
}  

    return(
        <div>
        {/*<p>The current time is {currentTime}</p>
        <p>This is from the flask api {getHello}</p>*/}
        <br></br>
        <form className="create" onSubmit={createItem}>
            <h1>How're you feeling today?</h1>
            <br></br>
            <h2>Enter your vitals in the form below</h2>
            <br></br>
            <div className="control">
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" onChange={e => setName(e.target.value)} />
                </div>
                <br></br>
                <div className="control">
                <label htmlFor="description">Description: </label>
                <textarea name="description" onChange={e => setDescription(e.target.value)} ></textarea>
                </div>
                <br></br>
                <div className="control">
                <label htmlFor="amount">Temperature: </label>
                <input type="number" name="amount" onChange={e => setAmount(e.target.value)} />
                </div>
                <div>
                <br></br>
                <input type="submit" value="Save Symptoms" />
                </div>
            </form>
            
        </div>
    )

}
export default Create;