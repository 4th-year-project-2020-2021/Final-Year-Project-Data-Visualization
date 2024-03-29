/**
 * @author Grace Keane
 * 
 * Covid-19 component for generating the interactive cards and assigns on click functionality
 * and styling.
 */
import React from 'react'
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, active, isBlack, total, ...props }) {
    return (
        <Card onClick={props.onClick}
            className={`infoBox ${active && "infoBox--selected"} ${isBlack && "infoBox--black"
                } `}
        >
            <CardContent>
                <Typography className="infoBox__title" color="textSecondary">{title}</Typography>
                <h2 className="infoBox__cases">{cases}</h2>
                <Typography className="infoBox__total" color="textSecondary">{total}</Typography>
            </CardContent>
        </Card>
    );
}

export default InfoBox
