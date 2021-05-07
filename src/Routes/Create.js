import { axisLeft } from 'd3-axis';
<<<<<<< HEAD
import React, { useState,useEffect} from 'react';
=======
import React, {useEffect, useState} from 'react';
>>>>>>> 419ecf21705494e940c4464e0abc7c6eb734ccbd
import { Redirect } from 'react-router';
import "../css/styling.css";
import {Line} from 'react-chartjs-2';
import { Link } from 'react-router-dom';


function Symptom (){

  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setTemp] = useState("");
  const [routeRedirect, setRedirect] = useState(""); 
  const [loading, setLoading] = useState(false);

  const createItem = (e) =>{//e is the event
    e.preventDefault();
    console.log("symptoms page");//comment out when app is working, but keep for error checking 

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
//return all symptoms from database
const [items, setItems] = useState([]);

const getItems = () => {
    setLoading(true);
    fetch("/api/items")
        .then(res => res.json()
        ).then(items => {
            console.log(items);
            setItems(items.data);
            setLoading(false);
        })
}
const [chartData, setChartData] = useState({});
const chart = () => {
    let temp = [];
    let tempDate = [];

    fetch("/api/items")
    .then(res => res.json()
    ).then(items => {
        console.log(items);
        for (const dataObj of items.data) {
            temp.push(dataObj.amount);
            tempDate.push(dataObj.date);
          }
          setChartData({
            labels: tempDate,
            datasets:[
                {
                    label: 'Temperature',
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: temp
                  }

            ]
        })   
    })
    .catch(err => {
        console.log(err);
    });
    //console.log(temp, tempDate);        
};

useEffect(() =>{
    chart();
},[]);


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
                <input className="button" type="submit"  value="Save Symptoms" />
            </div>
        </form>  
        <React.Fragment>
            <div>
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "Temperature per Day", display: true, fontSize:20},
            legend:{
              display:true,
              position:'right'
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                  },
                  gridLines: {
                    display: true
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: true
                  }
                }
              ]
            }
          }}
        />
      </div>
            </React.Fragment>
            <React.Fragment>
                <br />
                {/*{itemsArray}*/}
                <button
                    className="button"
                    onClick={getItems}
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Get Symptoms'}
                </button>
                <div key={items._id}>
                    <table>
                        <thead>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Temperature</th>
                            
                        </thead>


                        <tbody>
                            {items.map(x => <tr>
                                <Link to={"items/" + items._id}>
                                </Link>
                                <td>{x.date}</td>
                                <td>{x.name}</td>
                                <td>{x.description}</td>
                                <td>{x.amount}</td>
                                
                            </tr>)}
                            {items.length == 0 && <tr>

                                <b>No data found to display.</b>

                            </tr>}
                        </tbody>
                    </table>
                </div>

                
            </React.Fragment>
            
        </div>
    )
}
export default Symptom;