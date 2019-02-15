import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import DropdownLabel from './DropdownLabel';
import DropdownLanguage from './DropdownLanguage';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ResultsHeader = (props) => {
  return (
    <Card className="ResultsHeader">
      <div className="open-issues">
        <i className="fas fa-exclamation-circle"></i>
        {props.totalCount} Open
      </div>
      <DropdownLabel
        onHoverLabel={props.onHoverLabel}
        labelSearch={props.labelSearch}/>
      <DropdownLanguage
        onHoverlanguage={props.onHoverlanguage}
        languageSearch={props.languageSearch}/>
    </Card>
  );
}

export default ResultsHeader;
