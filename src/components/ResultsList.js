import React from "react";
import Card from "react-bootstrap/Card";
import Labels from "./Labels";
import Comments from "./Comments";
import "./css/ResultsList.css";

// convert utc to readable date
const displayDate = text => {
  const date = new Date(text).toString();
  const monthDateSlice = date.slice(4, 10);
  const yearSlice = date.slice(11, 15);
  return `${monthDateSlice}, ${yearSlice}`;
};

// slice to only display repo name
const displayRepo = repository_url => {
  let slicedName = repository_url.split("/");
  console.log(slicedName);
  console.log(slicedName[4]);
  //return project name
  return slicedName[4];
};
//construct repo link
const repoLink = (repository_url, username) => {
  // github url plus user name plus repo name
  return `https://github.com/${repository_url.slice(29)}`;
};

const ResultsList = props => {
  console.log(props);
  const { issuesReturn } = props;

  // Function to copy issue URL to clipboard
  const copyToClipboard = (url, issueTitle) => {
    if (navigator.clipboard && window.isSecureContext) {
      // Use modern clipboard API
      navigator.clipboard.writeText(url).then(() => {
        alert(`✅ Issue URL copied to clipboard!\n"${issueTitle}"`);
      }).catch(() => {
        alert('❌ Failed to copy URL. Please try manually copying the link.');
      });
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        alert(`✅ Issue URL copied to clipboard!\n"${issueTitle}"`);
      } catch (err) {
        alert('❌ Failed to copy URL. Please try manually copying the link.');
      }
      document.body.removeChild(textArea);
    }
  };

  const results = issuesReturn.items.map(item => (
    <Card key={item.id}>
      <div className="issues-container">
        <div className="exclamation">
          <i className="fas fa-exclamation-circle fa-lg" />
        </div>
        <div className="title-description-container">
          <div className="issues-label-wrapper">
            <p className="issues-title">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="repo-name"
                href={repoLink(item.repository_url, item.user.login)}
              >
                {displayRepo(item.html_url)}
              </a>
              <a target="_blank" rel="noopener noreferrer" href={item.html_url}>
                {item.title}
              </a>
              <button 
                className="copy-url-btn"
                onClick={() => copyToClipboard(item.html_url, item.title)}
                title="Copy issue URL to clipboard"
                style={{
                  marginLeft: '10px',
                  padding: '2px 8px',
                  fontSize: '12px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '3px',
                  cursor: 'pointer'
                }}
              >
                <i className="fas fa-copy"></i> Copy URL
              </button>
            </p>
            <Labels labels={item.labels} />
          </div>
          <div className="issues-body">
            <p className="issues-body-text">{item.body}...</p>
          </div>
          <div className="description-avatar-wrapper">
            <p className="issues-description">
              #{item.number} opened on {displayDate(item.created_at)} by{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={item.user.html_url}
                alt={item.user.login}
              >
                {item.user.login}
              </a>
            </p>
            <a href={item.user.html_url} alt={item.user.login}>
              <img
                className="user-avatar"
                src={item.user.avatar_url}
                alt={item.user.login}
              />
            </a>
          </div>
        </div>
        <Comments Html_url={item.html_url} Comments={item.comments} />
      </div>
    </Card>
  ));

  return <div className="results-list">{results}</div>;
};

export default ResultsList;
