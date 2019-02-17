import React from 'react';

const CheckMarkLanguage = (props) => {
  const {
    currentLanguage,
    searchedLanguaged,
    passID,
  } = props;

  //return check mark only if state matches current chosen language
  if(currentLanguage === searchedLanguaged) {
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

export default CheckMarkLanguage;
