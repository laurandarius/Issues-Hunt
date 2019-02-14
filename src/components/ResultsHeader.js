import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Card from 'react-bootstrap/Card';

const ResultsHeader = (props) => {
  return (
    <Card className="ResultsHeader">
      <div className="open-issues"><i className="fas fa-exclamation-circle"></i> {props.totalCount} Open</div>
      <DropdownButton
        id="Language"
        title="Label"
        className="DropdownButton"
        >
        <Dropdown.Item
          as="button"
          data-id="good+first+issue"
          onClick={props.labelSearch}>
          Good First Issue
        </Dropdown.Item>
        <Dropdown.Item
          as="button"
          data-id="help+wanted"
          onClick={props.labelSearch}>
          Help Wanted
        </Dropdown.Item>
        <Dropdown.Item
          as="button"
          data-id="bug"
          onClick={props.labelSearch}>
          Bug
        </Dropdown.Item>
        <Dropdown.Item
          as="button"
          data-id="hacktoberfest"
          onClick={props.labelSearch}>
          Hacktoberfest
        </Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        id="Language"
        title="Language"
        className="DropdownButton"
        >
        <Dropdown.Item as="button">JavaScript</Dropdown.Item>
        <Dropdown.Item as="button">Ruby</Dropdown.Item>
        <Dropdown.Item as="button">Python</Dropdown.Item>
      </DropdownButton>
    </Card>
  );
}

export default ResultsHeader;
