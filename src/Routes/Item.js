import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { Link } from "react-router-dom";


function Item() {
    const [items, setItems] = useState([]);

    const [routeRedirect, setRedirect] = useState("");

    function getItems() {
        fetch("/api/items")
            .then(res => {
                return res.json();
            }).then(items => {
                console.log(items);
                setItems(items.data);

            }).catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getItems();
    }, []);

    let itemsArray;
    if (items.length > 0) {
        itemsArray = <div className="items">
            {items.map(item => {
                return (
                    <div className="item" key={item._id}>
                        <Link to={"item/" + item._id}>
                            <br></br>
                        </Link>
                        
                    </div>
                )
            })}

        </div>
    } else {
        itemsArray = <div className="message">
            <p>No  items in the database</p>
        </div>
    }

    const redirect = routeRedirect;
    if (redirect) {
        return <Redirect to="/" />
    }

    
    return(
        <>
            <header>
                <h1>React Flask <br/> Items</h1> 
            </header>
           
            <p>
            <h5>{itemsArray}</h5>
            
            </p>
            
        </>
    )

//https://www.digitalocean.com/community/conceptual_articles/understanding-how-to-render-arrays-in-react

}
export default Item