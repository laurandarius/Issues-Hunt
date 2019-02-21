import React from 'react';
import Card from 'react-bootstrap/Card';
import Labels from './Labels.js';
import './css/ResultsList.css';

//convert utc to readable date
const displayDate = (text) => {
  let date = new Date(text).toString();
  let monthDateSlice = date.slice(4,10);
  let yearSlice = date.slice(11,15);
  return `${monthDateSlice}, ${yearSlice}`;
}
//adjust container at different screen sizes
const ResultsList = (props) => {
  const results = props.issuesReturn.items.map(item =>
    <Card key={item.id}>
      <div className="issues-container">
        <div className="exclamation">
          <i className="fas fa-exclamation-circle fa-lg"></i>
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
          <div className="description-avatar-wrapper">
            <p className="issues-description">
              #{item.number} opened on {displayDate(item.created_at)} by <a href={item.user.html_url} alt={item.user.login}>{item.user.login}</a>
            </p>
            <a href={item.user.html_url} alt={item.user.login}>
              <img
                className="user-avatar"
                src={item.user.avatar_url}
                alt={item.user.login} />
            </a>
          </div>
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
    <div className="results-list">
      {results}
    </div>
  );
}

export default ResultsList;
