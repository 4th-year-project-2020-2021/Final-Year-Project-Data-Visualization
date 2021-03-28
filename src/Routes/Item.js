import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

const Item = () => {
    //return all smallpox data from database
    const [numbers, setNumbers] = useState([]);
    const [loading, setLoading] = useState(false);

    const getNumbers = () => {
        setLoading(true);
        fetch("/api/smallpox")
            .then(res => res.json()
            ).then(res => {
                console.log(numbers);
                setNumbers(res.data);
                setLoading(false);
            })
    }
   // useEffect(() => {
       // getNumbers();
    //}, [])//empty array allows only one call

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

    //useEffect(() => {
      //  getItems();
    //}, [])//empty array allows only one call

    let itemsArray;
    if (items.length > 0) {
        itemsArray = <div className="items">
            {items.map(item => {
                return (
                    <div className="item" key={item._id}>
                        <Link to={"item/" + item._id}>
                        </Link>
                        <p className="name">{item.name} {item.description} {item.amount}</p>

                    </div>
                )
            })}
        </div>
    }
    else {
        itemsArray = <div className="message">
            <p>No items in the Database</p>
        </div>
    }

    return (
        <div>

            <React.Fragment>
                <button
                    className="button"
                    onClick={getNumbers}
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Get List of Countries'}
                </button>
                <div key={numbers._id}>
                    <table>
                        <thead>
                            <th>Country </th>
                            <th>Country Code</th>
                            <th>Year</th>
                            <th>No of Cases</th>
                        </thead>


                        <tbody>
                            {numbers.map(x => <tr>
                                <Link to={"number/" + numbers._id}>
                                </Link>
                                <td>{x.Entity}</td>
                                <td>{x.Code}</td>
                                <td>{x.Year}</td>
                                <td>{x.Cases}</td>
                            </tr>)}
                            {numbers.length == 0 && <tr>

                                <b>No data found to display.</b>

                            </tr>}
                        </tbody>
                    </table>
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
                            <th>Name</th>
                            <th>Description</th>
                            <th>Temperature</th>
                            
                        </thead>


                        <tbody>
                            {items.map(x => <tr>
                                <Link to={"item/" + items._id}>
                                </Link>
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

export default Item