import React from 'react';
import './css/NoResultsWelcome.css';
const Welcome = () => {
  return(
    <div className="blank-container">
      <div className="error-handle-wrapper">
        <i className="fas fa-exclamation-circle fa-2x" />
        <div className="no-results-found">
          <h5>Welcome to Issues Hunt</h5>
          <p>
            Issues Hunt can help potential first-time GitHub contributors discover issues.
            To get started, try searching for issues labeled with <span className="issue-label help-wanted">help wanted</span> or <span className="issue-label good-first-issue">good first issue</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
