import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner';
import './css/Spinner.css';

const Spinner = () => {
  useEffect(() => {
  // scroll up each time spinner is showing before results are rendered
  window.scrollTo(0, 0)
  });

  return (
    <div className="blank-container">
      <div className="spinner-container">
        <Loader
          type="TailSpin"
          color="#00BFFF"
          height="75"
          width="75"
        />
      </div>
    </div>
  );
}

export default Spinner;
