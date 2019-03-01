import React from 'react';
import './css/PaginationWidget.css';

const PaginationWidgetNumber = (props) => {
  const {
    currentPage,
    selectedPage,
    selectPageNumber
  } = props;

  if (currentPage === selectedPage) {
    return(
      <button
        data-id={currentPage}
        className="selected-page individual-number"
        onClick={selectPageNumber}
      >
        {currentPage}
      </button>
    );
  } else {
    return(
      <button
        data-id={currentPage}
        className="individual-number"
        onClick={selectPageNumber}
      >
        {currentPage}
      </button>
    );
  }
}

export default PaginationWidgetNumber;
