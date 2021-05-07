import React, { useEffect, useState } from 'react';
import Chart from "react-google-charts";

const paragraphStyle = {
  marginTop: '10px',
  marginBottom: '10px'
};

//function Smallpox()
const SmallpoxMap = () =>
 {

  const chart = () => {
    let country = [];
    let numberOfCases = [];
    let year = [];

    fetch("/api/smallpox")
    .then(res => res.json()
    ).then(years => {
        console.log(years);
        for (const dataObj of years.data) {
            country.push(dataObj.Entity);
            numberOfCases.push(dataObj.Cases);
            year.push(dataObj.Year);
          }
    })
    .catch(err => {
        console.log(err);
    });
    console.log(country, numberOfCases, year);

    
};

useEffect(() =>{
    chart();
},[]);






    return(
      <div className="Formcontainer">
      
        <div>Smallpox</div>
        <p style={paragraphStyle}><h3>Smallpox cases - hover over country to see case numbers</h3></p>
        <div><select>
  <option selected value="year">Year</option>
  <option value="country">Country</option>
  
</select>
</div>
        <Chart
  width={'100%'}
  height={'100%'}
  chartType="GeoChart"
  data={[
    ['Country','No of Cases'],
    ['Algeria',755],
    ['Austria',18],
    ['Belgium', 21],
    ['Bulgaria', 22],
    ['Burma', 987],
    ['Chile',1171],
    ['Egypt',93],
    ['Finland',27],
    ['Germany',680],
    ['Greece',250],
    ['Hungary',131],
    ['Indonesia',1445],
    ['Iraq',475],
    ['Italy',4644],
    ['Japan',889],
    ['Kenya',200],
    ['Malaysia',232],
    ['Morocco',203],
    ['Netherlands',1],
    ['Nigeria',1031],
    ['Panama',215],
    ['Romania',2744],
    ['South Africa',1108],
    ['Sri Lanka',18],
    ['Tanzania', 1427],
    ['Thailand', 404],
    ['Russia', 100004],
    ['Uganda', 506],
    ['United Kingdom', 442],
    ['United States', 108487],
    ['Uruguay', 31],
    ['Zimbabwe', 515],
    
    
  ]}

  options={{
    region: 'world',
    colorAxis: { colors: ['orange','yellow', 'green','blue', 'darkblue', 'red'] },
  }}
  // need to get a mapsApiKey for project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  mapsApiKey="YOUR_KEY_HERE"
 // rootProps={{ 'data-testid': '1' }}
/>
</div>

    )
}
export default SmallpoxMap;
//adapted from https://www.youtube.com/watch?v=oX7Wqavzoc0