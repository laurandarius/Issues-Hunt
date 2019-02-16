import React from 'react';
import Card from 'react-bootstrap/Card';
import DropdownLabel from './DropdownLabel';
import DropdownLanguage from './DropdownLanguage';

const ResultsHeader = (props) => {
  const {
    totalCount,
    searchedLabel,
    onHoverLabel,
    labelSearch,
    searchedLanguaged,
    onHoverlanguage,
    languageSearch
  } = props;

  return (
    <Card className="ResultsHeader">
      <div className="open-issues">
        <i className="fas fa-exclamation-circle"></i> {totalCount} Open
      </div>
      <DropdownLabel
        searchedLabel={searchedLabel}
        onHoverLabel={onHoverLabel}
        labelSearch={labelSearch}/>
      <DropdownLanguage
        searchedLanguaged={searchedLanguaged}
        onHoverlanguage={onHoverlanguage}
        languageSearch={languageSearch}/>
    </Card>
  );
}

export default ResultsHeader;
