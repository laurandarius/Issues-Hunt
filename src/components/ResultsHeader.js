import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import DropdownLabel from './DropdownLabel';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ResultsHeader = (props) => {
  return (
    <Card className="ResultsHeader">
      <div className="open-issues">
        <i className="fas fa-exclamation-circle"></i>
        {props.totalCount} Open
      </div>
      <DropdownLabel
        onHover={props.onHover} 
        labelSearch={props.labelSearch}/>
      <DropdownButton
        id="Language"
        title="Language"
        className="DropdownButton">
        <Dropdown.Item as="button">JavaScript</Dropdown.Item>
        <Dropdown.Item as="button">Ruby</Dropdown.Item>
        <Dropdown.Item as="button">Python</Dropdown.Item>
      </DropdownButton>
    </Card>
  );
}

export default ResultsHeader;
