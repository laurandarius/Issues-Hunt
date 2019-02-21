import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import CheckMarkSort from './CheckMarkSort';
//create sort checkmark

const DropdownSort = (props) => {
  const sortOptions = [
  ['', 'Best Match (default)'],
  ['&sort=created&order=desc','Newest'],
  ['&sort=created&order=asc', 'Oldest'],
  ['&sort=comments&order=desc', 'Most Comments'],
  ['&sort=comments&order=asc', 'Least Comments'],
  ['&sort=Updated&order=desc', 'Recently Updated'],
  ];

  const {
    searchBySort,
    currentSortOption,
  } = props;

//conditional rendering for checkmark in dropdown list
  const DropdownItems = sortOptions.map(option =>
    <Dropdown.Item
      key={option}
      data-id={option[0]}
      onClick={searchBySort}>
      <div className="checkmark-list-wrapper">
        <div className="checkmark-wrapper">
          <CheckMarkSort
            passID={option[0]}
            searchedSort={option[0]}
            currentSortOption={currentSortOption} />
        </div>
        <div
          data-id={option[0]}
          className="dropdown-text-wrapper">
          {option[1]}
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
