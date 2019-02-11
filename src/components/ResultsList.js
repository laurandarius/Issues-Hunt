import React from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from './Spinner';

const ResultsList = () => {
  return (
    <div>
      <Card>
        <div className="issues-container">
          <div className="exclamation">
            <i className="fas fa-exclamation-circle"></i>
          </div>
          <div className="title-description-container">
            <p className="issues-title"><span className="issues-github-link">SickChill/SickChill</span> CSS not connecting to HTML files</p>
            <p className="issues-description">#102 opened on Aug 01, 2001 by UzerNoms</p>
          </div>
          <div className="comments">
            <i className="far fa-comment-alt"></i> 12
          </div>
        </div>
      </Card>
      {/* <Spinner /> */}
    </div>
  );
}

export default ResultsList;
