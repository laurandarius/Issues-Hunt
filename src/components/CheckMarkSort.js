import React from 'react';

const CheckMarkSort = (props) => {
  const {
    searchedSort,
    currentSortOption,
    passID,
  } = props;

  //return check mark only if state matches current chosen language
  if(searchedSort === currentSortOption) {
    return (
      <div
        data-id={passID}>
        <i className="fas fa-check"></i>
      </div>
    );
  }
  //return empty div as default
  return (
    <div
      data-id={passID}
      className="icon-box">
    </div>
  );
}

export default CheckMarkSort;
