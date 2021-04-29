import React, { useEffect, useState } from 'react'
import "../css/styling.css";
import ProgressGraph from "../CovidComponents/ProgressGraph";

function Stats() {
    return (
        <div>
            <div>
                <div className="Heading">
                    <h1>COVID-19 Progress Report</h1>
                </div>
            </div>
            <ProgressGraph />
        </div>
    );
}
export default Stats;