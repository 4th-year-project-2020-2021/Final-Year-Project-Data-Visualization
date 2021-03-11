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
    z-index:10;
    background-color: #ddd;
    color: black;
`;

const Item = styled.li`
    width:120px;
    height:50px;
    text-align:center;
    border-bottom:5px solid ${props => props.current ? "black":"transparent"};
    transition : border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-family: 'Nanum Gothic', sans-serif;
`;

const StyledLink = styled(Link)`
  color: blue;
  display: block;
  height:50px;
  display:block;
  align-items:center;
  margin: 0.5em 0;
  padding: 1rem 1.5rem;
  font-size: 20px;
  border: 2px solid black;
  text-align: center;
  font-family: Helvetica, Arial, sans-serif;

  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: red;
  }
`;

const H1 = styled.h1`
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    color:white;
    text-align:right;
    font-family: 'Myriad Pro Regular';
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
                <Item current={pathname === "/stats"}>
                    <SLink to="/stats">Stats </SLink>
                </Item>
                <Item current={pathname === "/mersandsars"}>
                    <SLink to="/mersandsars">Mers and Sars </SLink>
                </Item>
                <Item current={pathname === "/comparison"}>
                    <SLink to="/comparison">Comparison </SLink>
                </Item>
                <Item current={pathname === "/smallpox"}>
                    <SLink to="/smallpox">Smallpox </SLink>
                </Item>
                <Item current={pathname === "/upload"}>
                    <SLink to="/upload">Upload </SLink>
                </Item>
                <Item current={pathname === "/create"}>
                    <SLink to="/create">Create </SLink>
                </Item>
                <Item current={pathname === "/item"}>
                    <SLink to="/item">Items</SLink>
                </Item>
                <Item>
                </Item>
                {/*<Item current={pathname === "/login"}>
                    <StyledLink to="/login">Login </StyledLink>
                </Item>*/}
            </List>
        </Header>
    )

)