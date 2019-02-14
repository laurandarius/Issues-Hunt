import React from 'react';

const Labels = (props) => {
  const LabelsList = props.labels.map( label =>
    <div
      key={label.id}
      style={{"backgroundColor": "#" + label.color}}
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
