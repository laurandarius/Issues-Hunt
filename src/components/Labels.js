import React from 'react';

const hexToRgb = hex => {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : null;
}

const decideFontColor = (num) => {
  if (num > 140) {
    return '#000000';
  } else {
    return '#ffffff';
  }
}


const Labels = (props) => {
  const LabelsList = props.labels.map( label =>
    <div
      key={label.id}
      style={{ "backgroundColor": "#" + label.color }}
      className="issue-label"
    >
      <div style={{"color": decideFontColor(hexToRgb(`#${label.color}`).g)}}>
        {label.name}
      </div>
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
