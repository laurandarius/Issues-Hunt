import React from 'react';
import './css/NoResultsWelcome.css';

const NoResults = () => {
  return(
    <div className="blank-container">
      <div className="error-handle-wrapper">
        <i className="fas fa-search-minus fa-2x" />
        <div className="no-results-found">
          <h5>No Results Found 😕</h5>
          <p>We couldn't find any issues matching your search criteria.</p>
          <div style={{marginTop: '15px'}}>
            <p><strong>Try these suggestions:</strong></p>
            <ul style={{textAlign: 'left', display: 'inline-block'}}>
              <li>Use broader search terms</li>
              <li>Check your spelling</li>
              <li>Try different programming languages</li>
              <li>Remove some filters to expand results</li>
              <li>Search for popular labels like "bug", "enhancement", or "documentation"</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoResults;
