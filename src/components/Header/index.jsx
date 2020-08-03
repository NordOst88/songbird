import React, { Component } from 'react';
import TopPanel from '../TopPanel';
import Pagination from '../Pagination'
import './style.scss';

class Header extends Component {
  render() {
    return (
        <div className="header d-flex">
            <TopPanel score={this.props.score} />
            <Pagination round={this.props.round}/>
        </div>
    );
  }
}

export default Header;