import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

// Referances
// https://getbootstrap.com/docs/4.0/components/dropdowns/

export default function SymptomsDropdown({ virusSelected }) {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="warning" id="dropdown-basic" size="lg" >
                Please select virus
            </Dropdown.Toggle>
            <strong class="text-danger font-weight-bold h3"> ⬅️ Click Here!</strong>

            <Dropdown.Menu style={{ backgroundColor: 'lightblue' }} >
                <Dropdown.Item disabled>Coronavirus</Dropdown.Item>
                <Dropdown.Item divider />
                <Dropdown.Item onSelect={() => virusSelected("covid19")}>Covid-19</Dropdown.Item>
                <Dropdown.Item onSelect={() => virusSelected("mers")}>Mers</Dropdown.Item>
                <Dropdown.Item onSelect={() => virusSelected("sars")}>Sars</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

