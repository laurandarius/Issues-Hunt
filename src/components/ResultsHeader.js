import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Card from 'react-bootstrap/Card';

const ResultsHeader = () => {
  return (
    <Card className="ResultsHeader">
      <Card.Body className="open-issues">
        <i className="fas fa-exclamation-circle"></i> 350 Open
      </Card.Body>
      <DropdownButton
        id="Language"
        title="Language"
        className="DropdownButton"
        >
        <Dropdown.Item as="button">JavaScript</Dropdown.Item>
        <Dropdown.Item as="button">Ruby</Dropdown.Item>
        <Dropdown.Item as="button">Python</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        id="Language"
        title="Label"
        className="DropdownButton"
        >
        <Dropdown.Item as="button">Good First Issue</Dropdown.Item>
        <Dropdown.Item as="button">Help Wanted</Dropdown.Item>
        <Dropdown.Item as="button">Bug</Dropdown.Item>
      </DropdownButton>
    </Card>
  );
}

export default ResultsHeader;
