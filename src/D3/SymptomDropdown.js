import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default function SymptomDropdown({virusSelected}){
    return (
        <Dropdown>
            <Dropdown.Toggle variant="info" id="dropdown-basic" size="sm">
                Please select virus
            </Dropdown.Toggle>

            <Dropdown.Menu style={{backgroundColor:'lightblue'}}>
                <Dropdown.Item disabled>Coronavirus</Dropdown.Item>
                <Dropdown.Item divider />
                <Dropdown.Item onSelect={ ()=> virusSelected("covid19")}>Covid-19</Dropdown.Item>
                <Dropdown.Item onSelect={ ()=> virusSelected("mers")}>Mers</Dropdown.Item>
                <Dropdown.Item onSelect={ ()=> virusSelected("sars")}>Sars</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}