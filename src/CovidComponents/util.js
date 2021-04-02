import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

const casesTypeColors = {
  cases: {
    hex: "#0080FF",
    mulitiplier: 800,
  },

  recovered: {
    hex: "#00FF08",
    mulitiplier: 1200,
  },

  deaths: {
    hex: "#FF0000",
    mulitiplier: 2000,
  },
};


// Class to sort listed data from highest to lowest cases
export const sortData = (data) => {
    const sortedData = [...data];
    
    sortedData.sort((a, b) => {
      if (a.cases > b.cases) {
        return -1; // False
      } else {
        return 1; // True
      }
    });
    return sortedData;
};

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";

// Draw circles on interactive map
export const showDataOnMap = (data, casesType) =>
data.map((country) => (
  <Circle
    center={[country.countryInfo.lat, country.countryInfo.long]}
    fillOpacity={0.1}
    pathOptions={{
      color: casesTypeColors[casesType].hex,
      fillColor: casesTypeColors[casesType].hex,
    }}
    radius={
      Math.sqrt(country[casesType] / 10) *
      casesTypeColors[casesType].mulitiplier
    }
  >
    <Popup>
        <div className="info__container">
          <div
            // Getting the country details and adding them to a pop up
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          />
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            Cases: {numeral(country.cases).format("0,0")}
          </div>
          <div className="info-recovered">
            Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="info-deaths">
            Deaths: {numeral(country.deaths).format("0,0")}
          </div>
        </div>

    </Popup>
  </Circle>
  
));