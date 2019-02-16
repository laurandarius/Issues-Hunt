import React from 'react';

const CheckMarkLabel = (props) => {
  //add quotes to match props incoming from search query
  //return check mark only if state matches current chosen label
  if(`"${props.currentLabel}"` == props.searchedLabel) {
    return (<div><i className="fas fa-check"></i></div>);
  }
  //set as white as default, still use icon for even spacing
  return (<div style={{color: "white"}}><i className="fas fa-check"></i></div>);
}

export default CheckMarkLabel;
