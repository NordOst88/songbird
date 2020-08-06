import React, { Component } from 'react';
import './style.scss';

class BirdsList extends Component {
  //birdslist -> add li component
  //onclick => onbirdselect
  render() {
    const list = this.props.data[0];
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
