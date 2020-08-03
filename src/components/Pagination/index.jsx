/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './style.scss';

class Pagination extends Component {
  render() {
    const birdsFamily = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы']
    const rounds = birdsFamily.map((round, index) => 
      <li key={birdsFamily[index]} className={(index === this.props.round) ? "page-item active" : "page-item"}>
        <a href="#" className="page-link">{round}</a>
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