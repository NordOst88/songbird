import React from 'react';
import { useSelector } from 'react-redux';

import { selectRoundNumber } from '../../reducers/roundNumber';

import birdsFamilies from '../../data/birdsFamilies';

import './style.scss';

const Pagination = () => {
  const roundNumber = useSelector(selectRoundNumber);
  const rounds = birdsFamilies.map((round, index) => (
    <li
      key={birdsFamilies[index].id}
      className={index === roundNumber ? 'page-item active' : 'page-item'}
    >
      <span className="page-link">{round.text}</span>
    </li>
  ));
  return <ul className="pagination">{rounds}</ul>;
};

export default Pagination;
