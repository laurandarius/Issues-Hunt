import React from 'react';
import './css/HeaderTop.css';

const Header = () => {
  return (
    <div  className="header-block">
      <h1 className="header-title">Issues Hunt</h1>
      <div className="contacts-wrapper">
        Created By <a
          rel="noopener noreferrer"
          className="website-link"
          target="_blank"
          href="https://fulin426.github.io/">
          Fu-Lin Liu
        </a>
        <div className="icons-container">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/fu-lin-liu/">
            <i className="fab fa-linkedin fa-2x header-icon"></i>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/fulin426/Issues-Hunt">
            <i className="fab fa-github-square fa-2x header-icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
