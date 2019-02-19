import React from 'react';

const PaginationWidgetNumber = (props) => {
  const {
    currentPage,
    selectedPage,
    selectPageNumber
  } = props;

  if (currentPage === selectedPage) {
    return(
      <a
        data-id={currentPage}
        className="selected-page individual-number"
        onClick={selectPageNumber}
        href="#">
        {currentPage}
      </a>
    );
  } else {
    return(
      <a
        data-id={currentPage}
        className="individual-number"
        onClick={selectPageNumber}
        href="#">
        {currentPage}
      </a>
    );
  }
}

export default PaginationWidgetNumber;
