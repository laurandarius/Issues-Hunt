import React from 'react';
import Card from 'react-bootstrap/Card';
import DropdownLabel from './DropdownLabel';
import DropdownLanguage from './DropdownLanguage';
import DropdownSort from './DropdownSort';

const ResultsHeader = (props) => {
  const {
    totalCount,
    searchedLabel,
    searchByLabel,
    searchedLanguaged,
    searchByLanguage,
  } = props;

  return (
    <Card className="ResultsHeader">
      <div className="open-issues">
        <i className="fas fa-exclamation-circle"></i> {totalCount} Open
      </div>
      <DropdownSort />
      <DropdownLabel
        searchedLabel={searchedLabel}
        searchByLabel={searchByLabel}/>
      <DropdownLanguage
        searchedLanguaged={searchedLanguaged}
        searchByLanguage={searchByLanguage} />
    </Card>
  );
}

export default ResultsHeader;
