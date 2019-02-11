import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

const SearchBar = () => {
  return (
    <Form className="SearchBar">
      <InputGroup>
        <FormControl
          placeholder="Search Issues.."
          aria-label="Search Input"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button className="search-button">
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
}

export default SearchBar;
