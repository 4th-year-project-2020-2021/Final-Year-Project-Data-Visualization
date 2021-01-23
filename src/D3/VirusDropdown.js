import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default function VirusDropdown({virusSelected}){
    return (
        <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Please select virus
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onSelect={ ()=> virusSelected("mers")}>Mers</Dropdown.Item>
                <Dropdown.Item onSelect={ ()=> virusSelected("sars")}>Sars</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}