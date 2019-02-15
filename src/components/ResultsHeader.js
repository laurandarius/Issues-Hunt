import React from 'react';
import Card from 'react-bootstrap/Card';
import DropdownLabel from './DropdownLabel';
import DropdownLanguage from './DropdownLanguage';

const ResultsHeader = (props) => {
  return (
    <Card className="ResultsHeader">
      <div className="open-issues">
        <i className="fas fa-exclamation-circle"></i> {props.totalCount} Open
      </div>
      <DropdownLabel
        onHoverLabel={props.onHoverLabel}
        labelSearch={props.labelSearch}/>
      <DropdownLanguage
        searchedLanguaged={props.searchedLanguaged}
        onHoverlanguage={props.onHoverlanguage}
        languageSearch={props.languageSearch}/>
    </Card>
  );
}

export default ResultsHeader;
