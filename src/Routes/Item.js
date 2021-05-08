import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Line} from 'react-chartjs-2';

const Item = () => {
    //return all smallpox data from database
    const [numbers, setNumbers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [itemId, setItemId] = useState("");
    const [item, setItem] = useState({});
    const [year, setYear] = useState([]);
    const [testYear, setTestYear] = useState([]);

    const getTestYear = () =>{
        setLoading(true);
        fetch("/api/smallpox")
            .then(res => res.json()
            ).then(res => {
                console.log(numbers);
                setTestYear(res.data.Year);
                setLoading(false);
               
                if (setTestYear == '1950')
                {console.log(res.data.Code)}
            }) 
    }

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
 

    const getYear = () =>{
        //let y = props.match.params.year
        setLoading(true);
        fetch("api/smallpox/Year=1950")
            .then(res => res.json())
            .then(year => {
                console.log(year);
                setYear(year.data);
                setLoading(false);
            })
    }
    const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('api/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);


    //Chart for Temperature
    const [chartData, setChartData] = useState({});

    /*const chart = () => {
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
    };
    useEffect(() =>{
        chart();
    },[]);*/
    
    /*let itemsArray;
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
    }*/

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
                <button
                    className="button"
                    onClick={getYear}
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Get List of Countries by year'}
                </button>
                <div key={year._id}>
                    <table>
                        <thead>
                            <th>Country </th>
                            <th>Country Code</th>
                            <th>Year</th>
                            <th>No of Cases</th>
                        </thead>


                        <tbody>
                            {year.map(x => <tr>
                                <Link to={"year/" + year._id}>
                                </Link>
                                <td>{x.Entity}</td>
                                <td>{x.Code}</td>
                                <td>{x.Year}</td>
                                <td>{x.Cases}</td>
                            </tr>)}
                            {year.length == 0 && <tr>

                                <b>No data found to display.</b>

                            </tr>}
                        </tbody>
                    </table>
                </div>

            </React.Fragment>
            
            <React.Fragment>
                <p>{getTestYear}</p>
                <p>The current time is {currentTime}.</p>
            </React.Fragment>
            
            

        </div>
    )

}

export default Item