import React from 'react';
import PaginationWidgetNumber from './PaginationWidgetNumber';

const PaginationWidget = (props) => {
  const {
    firstPage,
    lastPage,
    selectedPage,
    nextButton,
    previousButton
  } = props

  //conditional rendering for pages widget
  let pages;
  if (1 <= selectedPage <= 5) {
    pages = [
      firstPage,
      firstPage +1,
      firstPage +2,
      firstPage +3,
      firstPage +4,
      '...',
      lastPage
    ];
  }

  if (selectedPage > 5 && selectedPage <= lastPage - 5) {
    pages = [
      firstPage,
      '...',
      selectedPage-1,
      selectedPage,
      selectedPage +1,
      '...',
      lastPage
    ];
  }

  if (selectedPage >= lastPage - 4 && selectedPage <= lastPage) {
    pages = [
      firstPage,
      '...',
      lastPage -4,
      lastPage -3,
      lastPage -2,
      lastPage -1,
      lastPage
    ];
  }

  const widget = pages.map(page =>
    <PaginationWidgetNumber
      key={page}
      currentPage={page}
      selectedPage={selectedPage}/>
  );

  return (
    <div className="widget-container">
      <a
        className="previous-button"
        onClick={previousButton}>
        Previous
      </a>
      {widget}
      <a
        className="next-button"
        onClick={nextButton}>
        Next
      </a>
    </div>
  );
}

export default PaginationWidget;
