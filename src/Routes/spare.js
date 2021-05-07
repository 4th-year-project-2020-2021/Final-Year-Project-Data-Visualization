

import React, { useState, useEffect } from 'react';
import "../css/styling.css";



function Filter(){
  const [year, setYear] = useState("1900");
  const getYear = (e) =>{
    e.preventDefault();
    console.log("TestGraph page");

    const year ={
      year: year
    }
  }

  return(
    <div>
      <form className="create" onSubmit={getYear}> 
      <div className="control">
                <label htmlFor="name">Search For Year:</label> <br></br>
                <input type="year" name="year" onChange={e => setYear(e.target.value)} />
            </div>
            <br></br>
      </form>
    </div>
  )


}
export default Filter;