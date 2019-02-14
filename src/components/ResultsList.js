import React from 'react';
import Card from 'react-bootstrap/Card';

//adjust container at different screen sizes
const ResultsList = (props) => {
  
  const results = props.issuesReturn.items.map(item =>
    <Card key={item.id}>
      <div className="issues-container">
        <div className="exclamation">
          <i className="fas fa-exclamation-circle"></i>
        </div>
        <div className="title-description-container">
          <div className="issues-label-wrapper">
            <p className="issues-title">
              <span className="issues-github-link"></span>
              <a href={item.html_url}>{item.title}</a>
            </p>
            <div className="good-first-issue issue-label">Good First Issue</div>
            <div className="help-wanted issue-label">Help Wanted</div>
          </div>
          <p className="issues-description">#{item.number} opened on Aug 01, 2001 by {item.user.login}</p>
        </div>
        <div className="comments"><i className="far fa-comment-alt"></i> {item.comments}</div>
      </div>
    </Card>
  );

  return (
    <div>
      {results}
    </div>
  );
}

export default ResultsList;
