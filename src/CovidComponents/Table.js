/**
 * @author Grace Keane
 * 
 * Covid-19 component for generating the high to low country
 * table. Also initializes data to be printed using 
 * thousand commas.
 */
import React from "react";
import numeral from "numeral";
import "../css/styling.css";

function Table({ countries }) {
  return (
    <div className="table">
      {countries.map(({ country, cases }) => (
        <tr>
          <td>{country}</td>
          <td>
            <strong>{numeral(cases).format("000,000")}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;

