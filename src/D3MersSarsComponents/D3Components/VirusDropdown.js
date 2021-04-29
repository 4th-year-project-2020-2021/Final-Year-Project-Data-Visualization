import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default function VirusDropdown({ virusSelected }) {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic" size="lg" >
                Please select virus
            </Dropdown.Toggle>
            <strong class="font-weight-bold h3 bg-light"> ⬅️ Click Here!</strong>

            <Dropdown.Menu style={{ backgroundColor: 'lightblue' }} >
                <Dropdown.Item disabled>Coronavirus</Dropdown.Item>
                <Dropdown.Item divider />
                <Dropdown.Item onSelect={() => virusSelected("mers")}>Mers</Dropdown.Item>
                <Dropdown.Item onSelect={() => virusSelected("sars")}>Sars</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}