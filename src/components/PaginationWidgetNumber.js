import React from 'react';

const PaginationWidgetNumber = (props) => {
  const {
    currentPage,
    selectedPage
  } = props;

  if (currentPage === selectedPage) {
    return(
      <a
        className="selected-page individual-number"
        href="#">
        {currentPage}
      </a>
    );
  } else {
    return(
      <a
        className="individual-number"
        href="#">
        {currentPage}
      </a>
    );
  }
}

export default PaginationWidgetNumber;
