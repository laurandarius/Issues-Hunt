import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import './css/SearchBar.css';

const SearchBar = (props) => {
  const {
    searchIssues,
    input,
    searchInput,
    readOnly
  } = props;

  return (
    <Form
      className="SearchBar"
      onSubmit={searchIssues}
      >
      <InputGroup>
        <FormControl
          value={input}
          onChange={searchInput}
          readOnly={readOnly}
          placeholder="Search all issues.."
          aria-label="Search Input"
          aria-describedby="basic-addon2" />
        <InputGroup.Append>
          <Button
            className="search-button"
            onClick={searchIssues}>
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
}

export default SearchBar;
