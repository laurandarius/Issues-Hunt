import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import CheckMarkLanguage from './CheckMarkLanguage';
//create sort checkmark

const DropdownSort = (props) => {
  const sortOptions = [
    'Best Match (default)',
    'Newest',
    'Oldest'
  ];

  const {
    searchByLanguage,
    searchedLanguaged,
  } = props;

//conditional rendering for checkmark in dropdown list
  const DropdownItems = sortOptions.map(language =>
    <Dropdown.Item
      key={language}
      data-id={language}
      onClick={searchByLanguage}>
      <div className="checkmark-list-wrapper">
        <div className="checkmark-wrapper">
          <CheckMarkLanguage
            passID={language}
            searchedLanguaged={searchedLanguaged}
            currentLanguage={language}/>
        </div>
        <div
          data-id={language}
          className="dropdown-text-wrapper">
          {language}
        </div>
      </div>
    </Dropdown.Item>
  );

  return(
    <DropdownButton
      id="Dropdownsort"
      title="Sort"
      className="DropdownButton">
      {DropdownItems}
    </DropdownButton>
  );
}

export default DropdownSort;
