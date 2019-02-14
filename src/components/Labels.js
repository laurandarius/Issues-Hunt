import React from 'react';

const Labels = (props) => {
  let labelColor = 'background-color:#';
  const LabelsList = props.labels.map( label =>
    <div
      key={label.id}
      background-color={label.color}
      style={{labelColor}}
      className="issue-label">
      {label.name}
    </div>
  );

  return (
    <div className="issues-label-container">
      {LabelsList}
    </div>
  );
}

export default Labels;

// item.
