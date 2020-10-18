import React from 'react';

import SpinningWheel from '../../assets/img/spinner.svg';
import './style.scss';

const Spinner = () => (
  <div className="loading-container">
    <img className="loading-container__spinner" src={SpinningWheel} alt="spinner" />
  </div>
);

export default Spinner;
