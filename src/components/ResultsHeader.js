import React from 'react';
import Card from 'react-bootstrap/Card';
import DropdownLabel from './DropdownLabel';
import DropdownLanguage from './DropdownLanguage';
import DropdownSort from './DropdownSort';
import './css/ResultsHeader.css';

const ResultsHeader = (props) => {
  const {
    totalCount,
    searchedLabel,
    searchByLabel,
    searchedLanguaged,
    searchByLanguage,
    searchBySort,
    currentSortOption
  } = props;

  return (
    <Card className="ResultsHeader">
      <div className="open-issues">
        <i className="fas fa-exclamation-circle" /> {totalCount} Open
      </div>
      <div className="dropdown-btn-container">
        <DropdownSort
          searchBySort={searchBySort}
          currentSortOption={currentSortOption}
        />
        <DropdownLabel
          searchedLabel={searchedLabel}
          searchByLabel={searchByLabel}
        />
        <DropdownLanguage
          searchedLanguaged={searchedLanguaged}
          searchByLanguage={searchByLanguage}
        />
      </div>
    </Card>
  );
}

export default ResultsHeader;
