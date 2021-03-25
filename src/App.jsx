import React, { useState } from 'react';
import {Redirect, Route} from 'react-router-dom';
import Covid19 from '../Routes/Covid19';
import MersAndSars from './Routes/MersAndSars';
import Smallpox from './Routes/Smallpox';
import Comparison from './Routes/Comparison';
import Upload from './Routes/Upload';
import Navbar from './Nav/Navbar';
import Create from './Routes/Create';
import Item from './Routes/Item'
import Stats from 'Routes/Stats';
import { Container } from 'semantic-ui-react';
import Auth from 'FirebaseAuth/Auth';
import Rating from 'Routes/Home';


function App() {

  return (
    <>
        <>
          <Navbar />
            <Container className='main'>
                <Route exact path='/' component={Rating} />
                <Route path="/covid19" component={Covid19} />
                <Route path="/stats" component={Stats} />
                <Route path="/mersandsars" component={MersAndSars} />
                <Route path="/smallpox" component={Smallpox} />
                <Route path="/comparison" component={Comparison} />
                <Route path="/create" component={Create}/>
                <Route path="/item" component={Item} />
                <Route path="/auth" component={Auth} />
                <Route path="/upload" component={Upload} />
                <Redirect from="*" to="/" />
            </Container>
        </>
    </>
    )
}

export default App;