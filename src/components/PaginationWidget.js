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

  const pages = [
    firstPage,
    firstPage +1,
    firstPage +2,
    firstPage +3,
    firstPage +4, '...', lastPage];

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
