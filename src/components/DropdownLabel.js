import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import CheckMarkLabel from './CheckMarkLabel';

const DropdownLabel = (props) => {
  //multiword search need a plus sign in query string
  const labelNames = [
    ['good+first+issue', 'Good First Issue'],
    ['help+wanted', 'Help Wanted'],
    ['easy', 'Easy'],
    ['bug', 'Bug'],
    ['hacktoberfest', 'Hacktoberfest']
  ];

  const { searchByLabel, searchedLabel } = props;

  const DropdownItem = labelNames.map(label =>
    <Dropdown.Item
      key={label[0]}
      as="button"
      data-id={label[0]}
      onClick={searchByLabel}>
      <div className="checkmark-list-wrapper">
        <div className="checkmark-wrapper">
          <CheckMarkLabel
            passID={label[0]}
            searchedLabel={searchedLabel}
            currentLabel={label[0]}/>
        </div>
        <div
          data-id={label[0]}
          className="dropdown-text-wrapper">
          {label[1]}
        </div>
      </div>
    </Dropdown.Item>
  );

  return(
    <DropdownButton
      id="LabelDropdown"
      title="Label"
      className="DropdownButton">
      {DropdownItem}
    </DropdownButton>
  );
}

export default DropdownLabel;
