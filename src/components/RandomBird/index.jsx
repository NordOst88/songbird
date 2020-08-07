import React, { Component } from 'react';
import AudioPlayer from '../AudioPlayer';
import unknownBirdImage from '../../assets/img/unknown-bird.jpg';
import './style.scss';

class RandomBird extends Component {
  render() {
    const { currentBird, roundEnded, gameEnded } = this.props
    return !gameEnded ? (
      <div className="bird jumbotron rounded">
        <img className="img-bird" src={roundEnded ? currentBird.image : unknownBirdImage} alt="bird"/>
        <div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><h3>{roundEnded ? currentBird.name : '******'}</h3></li>
            <li className="list-group-item"><AudioPlayer audioSrc={currentBird.audio} /></li>
          </ul>
        </div>
      </div>
    ) : false ;
  }
}

export default RandomBird;
