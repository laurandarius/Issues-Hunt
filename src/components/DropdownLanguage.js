import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

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

  const DropdownItem = languageNames.map(language =>
    <Dropdown.Item
      key={language}
      as="button"
      data-id={language}
      onMouseEnter={props.onHoverlanguage}
      onClick={props.languageSearch}>
      {language}
    </Dropdown.Item>
  );

  return(
    <DropdownButton
      id="LanguageDropdown"
      title="Language"
      className="DropdownButton">
      {DropdownItem}
    </DropdownButton>
  );
}

export default DropdownLanguage;
