import React from 'react';
import Card from 'react-bootstrap/Card';
import Labels from './Labels.js';

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
            <Labels labels={item.labels}/>
          </div>
          <div className="issues-body">
            <p className="issues-body-text">{item.body}...</p>
          </div>
          <p className="issues-description">
            #{item.number} opened on {item.created_at} by <a href={item.user.html_url}>{item.user.login}</a>
          </p>
        </div>
        <div className="comments">
          <a
            className="comments-link"
            href={item.html_url}>
            <i className="far fa-comment-alt"></i> {item.comments}
          </a>
        </div>
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
