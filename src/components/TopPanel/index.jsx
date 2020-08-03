import React, { Component } from 'react';
import Score from '../Score'
import './style.scss';

class TopPanel extends Component {
  render() {
    return (
        <div className="top-panel d-flex">
          <div className="logo"></div>
          <Score score={this.props.score} />
        </div>
    );
  }
}

export default TopPanel;