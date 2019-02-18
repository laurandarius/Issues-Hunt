import React from 'react';
import Loader from 'react-loader-spinner'

const Spinner = () => {
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
