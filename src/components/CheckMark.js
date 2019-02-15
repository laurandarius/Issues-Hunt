import React from 'react';

const CheckMark = (props) => {
  //return check mark only if state matches chosen language
  if(props.current === props.searchedLanguaged) {
    return (<div><i className="fas fa-check"></i></div>);
  }
  //set as white as default, still use icon for even spacing
  return (<div style={{color: "white"}}><i className="fas fa-check"></i></div>);
}

export default CheckMark;
