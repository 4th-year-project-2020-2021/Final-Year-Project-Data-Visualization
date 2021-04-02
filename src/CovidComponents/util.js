import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

const casesTypeColors = {
  cases: {
    hex: "#00F7FF",
    mulitiplier: 800,
  },

  recovered: {
    hex: "#7DD71D",
    mulitiplier: 1200,
  },

  deaths: {
    hex: "#C0C0C0",
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

// Draw circles on interactive map
export const showDataOnMap = (data, casesType) =>
data.map((country) => (
  <Circle
    center={[country.countryInfo.lat, country.countryInfo.long]}
    fillOpacity={0.4}
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
          <h1>Simple pop up</h1>
        </div>
    </Popup>
  </Circle>
  
));