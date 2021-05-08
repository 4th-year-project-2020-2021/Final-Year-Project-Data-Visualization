/**
 * @author Shirin Nagle
 *
 * Displays all data for smallpox cases from MongoDB Atlas
 * 
 */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


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

    return (
        <div>

            <React.Fragment>
                <button
                    className="button"
                    onClick={getNumbers}
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Smallpox data for worldwide cases'}
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