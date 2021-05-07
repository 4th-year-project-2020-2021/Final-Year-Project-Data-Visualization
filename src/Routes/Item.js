import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Line, Pie,Bar, Doughnut, Scatter} from 'react-chartjs-2';
import "../css/styling.css";


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
                setNumbers(res.data);//res
                setLoading(false);
            })
    }

    return (
        <div style={{
            fontSize:"22px",
            fontFamily: "Nanum Gothic",
            color: "dark",
            position: 'absolute',
            width: "40%"
            }}>

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
            
           
 
          

        </div>
    )

}

export default Item