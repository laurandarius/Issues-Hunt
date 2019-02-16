import React from 'react';

const ClearyQuery = (props) => {
  const { clearSearchbar, input } = props;

  return(
    <div className="clear-query-container">
      <div
        className="query-item"
        onClick={clearSearchbar}>
        Clear search query and filters <i className="far fa-times-circle"></i>
      </div>
    </div>
  );
}

export default ClearyQuery;
