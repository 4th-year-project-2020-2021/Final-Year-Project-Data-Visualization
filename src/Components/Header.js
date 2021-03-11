import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { Menu, Container, Button } from 'semantic-ui-react';

export default withRouter(({ location : {pathname} })=>(

        <Menu inverted fixed ='top'>
            <Container>
                <Menu.Item current={pathname === "/"}>
                <Link to="/">Home </Link>
                </Menu.Item>
                <Menu.Item current={pathname === "/covid19"}>
                    <Link to="/covid19">Covid-19 </Link>
                </Menu.Item>
                <Menu.Item current={pathname === "/stats"}>
                    <Link to="/stats">Stats </Link>
                </Menu.Item>
                <Menu.Item current={pathname === "/mersandsars"}>
                    <Link to="/mersandsars">Mers and Sars </Link>
                </Menu.Item>
                <Menu.Item current={pathname === "/comparison"}>
                    <Link to="/comparison">Comparison </Link>
                </Menu.Item>
                <Menu.Item current={pathname === "/smallpox"}>
                    <Link to="/smallpox">Smallpox </Link>
                </Menu.Item>
                <Menu.Item current={pathname === "/upload"}>
                    <Link to="/upload">Upload </Link>
                </Menu.Item>
                <Menu.Item current={pathname === "/create"}>
                    <Link to="/create">Create </Link>
                </Menu.Item>
                <Menu.Item current={pathname === "/item"}>
                    <Link to="/item">Items</Link>
                </Menu.Item>
                <Menu.Item position='right'>
                    <Button basic inverted content='Login'/>
                    <Button basic inverted content='Register' style={{ marginLeft : '0.5em'}}/>
                </Menu.Item>
            </Container>
        </Menu>
    )

)