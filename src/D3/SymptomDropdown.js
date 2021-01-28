import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default function SymptomDropdown({virusSelected}){
    return (
        <Dropdown>
            <Dropdown.Toggle variant="info" id="dropdown-basic">
                Please select virus for symptoms
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onSelect={ ()=> virusSelected("covid19")}>Covid-19</Dropdown.Item>
                <Dropdown.Item onSelect={ ()=> virusSelected("mers")}>Mers</Dropdown.Item>
                <Dropdown.Item onSelect={ ()=> virusSelected("sars")}>Sars</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}