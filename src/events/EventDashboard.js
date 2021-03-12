import React from 'react';
import { Grid } from 'semantic-ui-react';
import Eventform from './Eventform';

export default function EventDashboard() {
    return (
        <Grid>
            <Grid.Column width={10}>
                <Eventform />
            </Grid.Column>
        </Grid>
    )
}