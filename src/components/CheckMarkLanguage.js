import React from 'react';

const CheckMarkLanguage = (props) => {
  //return check mark only if state matches current chosen language
  if(props.currentLanguage === props.searchedLanguaged) {
    return (<div><i className="fas fa-check"></i></div>);
  }
  //set as white as default, still use icon for even spacing
  return (<div style={{color: "white"}}><i className="fas fa-check"></i></div>);
}

export default CheckMarkLanguage;
