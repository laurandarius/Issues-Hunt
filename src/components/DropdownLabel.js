import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const DropdownLabel = (props) => {
  //multiword search need a plus sign in query string
  const labelNames = [
    ["good+first+issue", "good first issue"],
    ['help+wanted', 'help wanted'],
    ['easy', 'easy'],
    ['bug', 'bug'],
    ['hacktoberfest', 'hacktoberfest']
  ];

  const DropdownItem = labelNames.map(label =>
    <Dropdown.Item
      key={label[0]}
      as="button"
      data-id={label[0]}
      onMouseEnter={props.onHoverLabel}
      onClick={props.labelSearch}>
      {label[1]}
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
