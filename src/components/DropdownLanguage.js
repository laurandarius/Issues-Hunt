import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import CheckMark from './CheckMark';

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

//conditional rendering for checkmark in dropdown list
  const DropdownItems = languageNames.map(language =>
    <Dropdown.Item
      key={language}
      as="button"
      data-id={language}
      onMouseEnter={props.onHoverlanguage}
      onClick={props.languageSearch}>
      <div className="checkmark-list-wrapper">
        <div className="checkmark-wrapper">
          <CheckMark
            searchedLanguaged={props.searchedLanguaged}
            current={language}/>
        </div>
        <div className="language-wrapper">
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
