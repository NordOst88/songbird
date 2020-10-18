import React from 'react';

import Score from '../Score';

import './style.scss';

const TopPanel = () => (
  <div className="top-panel d-flex">
    <div className="logo" />
    <Score />
  </div>
);

export default TopPanel;
