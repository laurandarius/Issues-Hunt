import React from 'react';
import './css/NoResultsWelcome.css';
const Welcome = () => {
  return(
    <div className="blank-container">
      <div className="error-handle-wrapper">
        <i className="fas fa-search fa-2x" />
        <div className="no-results-found">
          <h5>Welcome to Issues Hunt 🔍</h5>
          <p>
            Issues Hunt helps you discover GitHub issues perfect for your next contribution! 
            Find open source projects that need your skills and start making an impact.
          </p>
          <div style={{marginTop: '15px'}}>
            <p><strong>Try searching for:</strong></p>
            <ul style={{textAlign: 'left', display: 'inline-block'}}>
              <li><span className="issue-label good-first-issue">good first issue</span> - Perfect for beginners</li>
              <li><span className="issue-label help-wanted">help wanted</span> - Projects seeking contributors</li>
              <li>Specific programming languages (JavaScript, Python, Java, etc.)</li>
              <li>Project names or keywords</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
