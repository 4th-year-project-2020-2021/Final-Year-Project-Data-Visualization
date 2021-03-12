import React from 'react'
import { Card, CardContent, Typography} from "@material-ui/core";

function InfoBox({title, total, cases}) {
    return (
        <Card className="infoBox2">
            <CardContent>
                <Typography className="infoBox2__title" color="textSecondary">{title}</Typography>
                
                <h2 className="infoBox2__cases">{cases}</h2>

                <Typography className="infoBox2__total" color="textSecondary">{total}</Typography>
            </CardContent>
        </Card>
    );
}

export default InfoBox
