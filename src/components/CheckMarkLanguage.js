import React from 'react';

const CheckMarkLanguage = (props) => {
  const { currentLanguage, searchedLanguaged, passID } = props;

  //return check mark only if state matches current chosen language
  if(currentLanguage === searchedLanguaged) {
    return (<div
              data-id={passID}>
              <i className="fas fa-check"></i>
            </div>);
  }
  //set as white as default, still use icon for even spacing
  return (<div
            data-id={passID}
            style={{color: "white"}}><i className="fas fa-check"></i>
          </div>);
}

export default CheckMarkLanguage;
