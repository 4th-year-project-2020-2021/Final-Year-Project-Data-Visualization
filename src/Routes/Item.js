import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router';

const Item = () => {
    //return single item variables
    //const[item, setItem] = useState({});
    //const[itemId, setItemId] = useState("");
    //const[editMode, setEditMode] = useState(false);

    //const [name, setName] = useState("");
    //const [description, setDescription] = useState("");
    //const [amount, setAmount] = useState("");

    //return all smallpox data from database
    const[numbers, setNumbers] = useState([]);
    const getNumbers = () =>{
        fetch("/api/smallpox")
        .then(res => {
            return res.json();
        }).then(numbers => {
            console.log(numbers);
            setNumbers(numbers.data);
        })
    }
    useEffect(() => {
        getNumbers();
    }, [])//empty array allows only one call

    let numbersArray;
    if(numbers.length > 0)
    {
        numbersArray = <div className="numbers">
        {numbers.map(number =>{
            return(
                <div className = "number" key={number._id}>
                <Link to={"number/" + number._id}>
                </Link>
                <p className="name">{number.Entity} {number.Code} {number.Year} {number.Cases}</p>
                
                </div>
            )
        })}
        </div>
    }
    else{
        numbersArray = <div className="message">
            <p>No items in the Database</p>
        </div>
    }

   

    //return all items from database
    const[items, setItems] = useState([]);
    const getItems = () =>{
        fetch("/api/items")
        .then(res => {
            return res.json();
        }).then(items => {
            console.log(items);
            setItems(items.data);
        })
    }

    useEffect(() => {
        getItems();
    }, [])//empty array allows only one call

    let itemsArray;
    if(items.length > 0)
    {
        itemsArray = <div className="items">
        {items.map(item =>{
            return(
                <div className = "item" key={item._id}>
                <Link to={"item/" + item._id}>
                </Link>
                <p className="name">{item.name} {item.description} {item.amount}</p>
                
                </div>
            )
        })}
        </div>
    }
    else{
        itemsArray = <div className="message">
            <p>No items in the Database</p>
        </div>
    }

    //return 1 item from database
    /*const getItem = (props) => {
        let id = props.match.params.id;
        let cleanId = id.replace(/["']+/g, "");  //id comes from flask with "" need to replace them
        setItemId(cleanId);
        fetch("api/item" + cleanId)
        .then(res => {
            return res.json();
        }).then(res => {
            let parsedResponse = JSON.parse(res.data);
            setItem(parsedResponse)

            setName(res.name);
            setDescription(res.description);
            setAmount(res.amount);
        }).catch(err =>{
            console.log(err);
        })
    }

    useEffect(() => {
        getItem();
    },[]);*/


    return(
        <div 
        style={{
      textAlign: "center",
      fontSize:"30px",
      fontFamily: "Nanum Gothic",
      color: "dark"
      }}>
        <React.Fragment>
            {numbersArray}
        </React.Fragment>
        <React.Fragment>
            <p>Place Holder</p>
            {itemsArray}
            
        </React.Fragment>
        
        </div>
    )

}

export default Item