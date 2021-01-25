import React from 'react';
import styled from 'styled-components';
import {Link, withRouter} from 'react-router-dom';

const List = styled.ul`
    display:flex;
`;

const Header = styled.header`
    color : white;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:50px;
    display:flex;
    align-items:center;
    padding:0px 10px;
    background-color:rgba(20,20,20,0.8);
    z-index:10;
    box-shadow:0px 1px 5px 2px rgba(0,0,0,0.8);
`;

const Item = styled.li`
    width:120px;
    height:50px;
    text-align:center;
    border-bottom:5px solid ${props => props.current ? "#8B0000":"transparent"};
    transition : border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
`;

export default withRouter(({ location : {pathname} })=>(
        <Header>
            <List>
                <Item current={pathname === "/"}>
                    <SLink to="/">Home </SLink>
                </Item>
                <Item current={pathname === "/covid19"}>
                    <SLink to="/covid19">Covid-19 </SLink>
                </Item>
                <Item current={pathname === "/mersandsars"}>
                    <SLink to="/mersandsars">Mers and Sars </SLink>
                </Item>
                <Item current={pathname === "/smallpox"}>
                    <SLink to="/smallpox">Smallpox </SLink>
                </Item>
                <Item current={pathname === "/comparison"}>
                    <SLink to="/comparison">Comparison </SLink>
                </Item>
                <Item current={pathname === "/search"}>
                    <SLink to="/search">Search </SLink>
                </Item>
                <Item current={pathname === "/profile"}>
                    <SLink to="/profile">Profile </SLink>
                </Item>
            </List>
        </Header>
    )

)