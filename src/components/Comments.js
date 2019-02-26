import React from 'react';

const Comments = (props) => {
  const {
    Html_url,
    Comments,
  } = props;

  //return only if at least one comment
  if(Comments > 0) {
    return (
      <div className="comments">
        <a
          className="comments-link"
          href={Html_url}>
          <i className="far fa-comment-alt"></i> {Comments}
        </a>
      </div>
    );
  }
  //return empty div as default
  return (
    <div></div>
  );
}

export default Comments;
