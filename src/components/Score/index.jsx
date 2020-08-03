import React, { Component } from 'react';
import './style.scss';

class Score extends Component {
  render() {
    return (
      <h5>
        Score: <span className="score">{this.props.score}</span>
      </h5>
    );
  }
}

export default Score;