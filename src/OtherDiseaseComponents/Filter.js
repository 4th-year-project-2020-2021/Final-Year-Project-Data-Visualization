import React, { useState, useEffect} from 'react';
import Datatable from "../DataTable";


export default function Filter(){
    const [data, setData] = useState([]);
    const [query, SetQuery] = useState("");
    const [searchColumns, setSearchColumns] = useState("Entity","Year");

    useEffect(() =>{
        fetch("/api/smallpox")
      .then((response) => response.json())
      .then((json) => setData(json));
    },[]);

    function search(rows){
        
        return (
            //rows.filter(row => row.Entity.toLowerCase().indexOf(query) > -1)
            //search(rows).filter((row) =>
            rows.filter((row) => 
            searchColumns.some(
                (column) =>
                 row[column].toString().toLowerCase().indexOf(query.toLowerCase()) > -1
            )
        )
        );
        
    }
    const columns = data[0] && Object.keys(data[0]);

    return(
        <div>
            <div>
                <input type="text" value={query} onChange={(e) => SetQuery(e.target.value)}/>
                    {columns && 
                    columns.map((column) => (
                        <label>
                        <input type="checkbox" checked={searchColumns.includes(column)}
                         onChange={(e) => {
                             const checked = searchColumns.includes(column)
                             setSearchColumns(prev => checked
                             ? prev.filter(sc => sc !== column )
                             : [...prev, column]
                             );
                         }}
                         />
                        {column}
                    </label>))}
                
            </div>
            <div><Datatable data={search(data)}/>
            </div>
        </div>
    );
}

//https://www.youtube.com/watch?v=d1r0aK5awWk