import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import CheckMarkLanguage from './CheckMarkLanguage';

const DropdownLanguage = (props) => {
  const languageNames = [
    'JavaScript',
    'Python',
    'Java',
    'Ruby',
    'C#',
    'PHP',
    'HTML',
    'C++',
  ];

  const { searchByLanguage, searchedLanguaged } = props;

//conditional rendering for checkmark in dropdown list
  const DropdownItems = languageNames.map(language =>
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
      id="LanguageDropdown"
      title="Language"
      className="DropdownButton">
      {DropdownItems}
    </DropdownButton>
  );
}

export default DropdownLanguage;
