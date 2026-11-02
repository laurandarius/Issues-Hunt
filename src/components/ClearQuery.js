
import React from 'react';
import './css/ClearQuery.css';

const sortLabels = {
  '&sort=created&order=desc': 'Newest',
  '&sort=created&order=asc': 'Oldest',
  '&sort=comments&order=desc': 'Most Comments',
  '&sort=comments&order=asc': 'Least Comments',
  '&sort=Updated&order=desc': 'Recently Updated',
};

const ClearQuery = (props) => {
  const {
    clearSearchbar,
    currentSortOption,
  } = props;

  return (
    <div className="clear-query-container">
      <div
        className="query-item"
        onClick={clearSearchbar}
      >
        Clear search query and filters{' '}
        <i className="far fa-times-circle" />
      </div>

      {currentSortOption && sortLabels[currentSortOption] && (
        <div className="active-sort">
          <i className="fas fa-sort" />{' '}
          Sort: {sortLabels[currentSortOption]}
        </div>
      )}
    </div>
  );
};

export default ClearQuery;
