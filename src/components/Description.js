import React from 'react';

const Description = () => {
  return (
    <div className="description">
      <div className="description-wrapper">
        <p>
          Issues Hunt can help potential first-time GitHub contributors discover issues.
          Try searching for issues labeled with <span className="issue-label help-wanted">help wanted</span> or <span className="issue-label good-first-issue">good first issue</span>
        </p>
      </div>
    </div>
  );
}

export default Description;
