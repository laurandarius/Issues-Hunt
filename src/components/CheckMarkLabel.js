import React from 'react';

const CheckMarkLabel = (props) => {
  const {
    passID,
    currentLabel,
    searchedLabel
  } = props;
  
  //add quotes to match props incoming from search query
  //return check mark only if state matches current chosen label
  if(`"${currentLabel}"` === searchedLabel) {
    return (
      <div data-id={passID}>
        <i className="fas fa-check"></i>
      </div>
    );
  }
  //return empty div as default
  return (
    <div
      data-id={passID}
      className="icon-box"
      >
    </div>
  );
}

export default CheckMarkLabel;
