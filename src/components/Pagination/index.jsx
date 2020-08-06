/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import birdsFamilies from '../../data/birdsFamilies';
import './style.scss';

class Pagination extends Component {
  render() {
    const rounds = birdsFamilies.map((round, index) => 
      <li key={birdsFamilies[index].id} className={(index === this.props.round) ? "page-item active" : "page-item"}>
        <a href="#" className="page-link">{round.text}</a>
      </li>
    )
    return (
      <ul className="pagination">
        {rounds}
      </ul>
    );
  }
}

export default Pagination;