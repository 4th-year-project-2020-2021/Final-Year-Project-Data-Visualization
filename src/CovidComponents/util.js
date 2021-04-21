import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

const casesTypeColors = {
  cases: {
    hex: "#0098c3",
    mulitiplier: 800,
  },

  recovered: {
    hex: "#00c399",
    mulitiplier: 1200,
  },

  deaths: {
    hex: "#a12232",
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
          
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            Population: {numeral(country.population).format("0,0")}
          </div>
          <div className="info-confirmed">
            Total Covid-19 Tests: {numeral(country.tests).format("0,0")}
          </div>
          <div className="info-confirmed">
            Total Cases: {numeral(country.cases).format("0,0")}
          </div>
          <div className="info-recovered">
            Total Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="info-deaths">
            Total Deaths: {numeral(country.deaths).format("0,0")}
          </div>
          <div className="info-deaths">
            Active: {numeral(country.active).format("0,0")}
          </div>
          <div className="info-deaths">
            Critical: {numeral(country.critical).format("0,0")}
          </div>
          <div className="info-deaths">
            Cases per 1M: {numeral(country.casesPerOneMillion).format("0,0")}
          </div>
          <div className="info-deaths">
            Deaths per 1M: {numeral(country.deathsPerOneMillion).format("0,0")}
          </div>
          <div className="info-deaths">
            Recovered per 1M: {numeral(country.recoveredPerOneMillion).format("0,0")}
          </div>
          <div className="info-deaths">
            Critical per 1M: {numeral(country.criticalPerOneMillion).format("0,0")}
          </div>
          <div className="info-deaths">
            Active per 1M: {numeral(country.activePerOneMillion).format("0,0")}
          </div>
        </div>

    </Popup>
  </Circle>
  
));