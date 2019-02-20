import React from 'react';
import PaginationWidgetNumber from './PaginationWidgetNumber';

const PaginationWidget = (props) => {
  const {
    firstPage,
    lastPage,
    selectedPage,
    nextButton,
    previousButton,
    selectPageNumber
  } = props

  //conditional rendering for pages widget
  let pages = [];
  // if there are 4 or less pages no create array with no ...
  if (lastPage < 5) {
    let i = 1;
    while (i <= lastPage) {
      pages.push(i);
      i++;
    }
  }
  //first configeration
  if (1 <= selectedPage <= 5 && lastPage >= 5) {
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
  //middle configeration
  if (selectedPage > 5 && selectedPage <= lastPage - 5) {
    pages = [
      firstPage,
      '..',
      selectedPage-1,
      selectedPage,
      selectedPage +1,
      '...',
      lastPage
    ];
  }
  //last configeration
  if (selectedPage >= lastPage - 4 && selectedPage <= lastPage && lastPage >= 5) {
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
      selectedPage={selectedPage}
      selectPageNumber={selectPageNumber} />
  );

  return (
    <div className="widget-container">
      <button
        className="previous-button"
        onClick={previousButton}>
        Previous
      </button>
      {widget}
      <button
        className="next-button"
        onClick={nextButton}>
        Next
      </button>
    </div>
  );
}

export default PaginationWidget;
