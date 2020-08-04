import React, { Component } from 'react';
import AudioPlayer from '../AudioPlayer';
import unknownBirdImage from '../../assets/img/unknown-bird.jpg';
import './style.scss';

class RandomBird extends Component {
  render() {
    return (
      <div className="bird jumbotron rounded">
        <img className="img-bird" src={unknownBirdImage} alt="bird"/>
        <div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><h3>******</h3></li>
            <li className="list-group-item"><AudioPlayer /></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default RandomBird;
