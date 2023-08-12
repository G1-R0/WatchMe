import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

function SearchBar() { // Updated function name to 'SearchBar'
    return (
        <InputGroup className="ml-auto">
            <FormControl placeholder="Search..." />
            <InputGroup.Append>
                <button className="btn btn-outline-secondary" type="button">
                    Search
                </button>
            </InputGroup.Append>
        </InputGroup>
    );
}

export default SearchBar; // Updated export name to 'SearchBar'
