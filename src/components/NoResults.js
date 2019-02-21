import React from 'react';
import './css/NoResultsWelcome.css';

const NoResults = () => {
  return(
    <div className="blank-container">
      <div className="error-handle-wrapper">
        <i className="fas fa-exclamation-circle fa-2x"></i>
        <div className="no-results-found">
          <h5>No Results found</h5>
          <h5>Please try a different search parameter</h5>
        </div>
      </div>
    </div>
  );
}

export default NoResults;
