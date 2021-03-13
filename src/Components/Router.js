
import React, { useState } from 'react';
import {Redirect, Route} from 'react-router-dom';
import Home from '../Routes/Home';
import Covid19 from '../Routes/Covid19';
import MersAndSars from '../Routes/MersAndSars';
import Smallpox from '../Routes/Smallpox';
import Comparison from '../Routes/Comparison';
import Upload from '../Routes/Upload';
import Navbar from '../Nav/Navbar';
import Create from '../Routes/Create';
import Item from '../Routes/Item'
import Stats from 'Routes/Stats';
import LoginForm from '../auth/LoginForm';
import Sandbox from 'sandbox/Sandbox';
import { Container } from 'semantic-ui-react';
import ModalManager from 'modals/ModalManager';
import RegisterForm from 'auth/RegisterForm';


export default function Router() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleSelectEvent(event){
    setSelectedEvent(event);
    setFormOpen(true);
  }

  function handleCreateFormOpen() {
    setSelectedEvent(null);
    setFormOpen(true);
  }

  return (
    <>
      <ModalManager />
            <Navbar setFormOpen={handleCreateFormOpen} />
            <Container className='main'>
                <Route exact path='/' component={Home} />
                <Route path="/covid19" component={Covid19} />
                <Route path="/stats" component={Stats} />
                <Route path="/mersandsars" component={MersAndSars} />
                <Route path="/smallpox" component={Smallpox} />
                <Route path="/comparison" component={Comparison} />
                <Route path="/upload" component={Upload} />
                <Route path="/create" component={Create}/>
                <Route path="/item" component={Item} />
                <Route path="/loginForm" component={LoginForm} />
                <Route path="/registerform" component={RegisterForm} />
                <Redirect from="*" to="/" />
            </Container>
      </>
    )
}

