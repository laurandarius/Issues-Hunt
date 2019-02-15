import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

const SearchBar = (props) => {
  return (
    <Form
      className="SearchBar"
      onSubmit={props.searchIssues}
      >
      <InputGroup>
        <FormControl
          value={props.input}
          onChange={props.searchInput}
          placeholder="Search all issues.."
          aria-label="Search Input"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button
            className="search-button"
            onClick={props.searchIssues}
            >
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
}

export default SearchBar;
