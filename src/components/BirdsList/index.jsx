import React, { Component } from 'react';
import './style.scss';

class BirdsList extends Component {
  render() {
    const list = this.props.data[this.props.round];
    const birdsList = list.map((bird) => 
    <li key={bird.id} className="list-group-item" onClick={(event) => {this.props.onBirdSelect(event, bird.id)}}>
      <span className="answer-indicator"></span>
      {bird.name}
    </li>
    )
    return (
      <div className="col-md-6">
        <ul className="list list-group">
          {birdsList}
        </ul>
      </div>
    );
  }
}

export default BirdsList;
