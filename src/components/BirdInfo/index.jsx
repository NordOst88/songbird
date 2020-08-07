import React, { Component } from 'react';
import AudioPlayer from '../AudioPlayer';
import './style.scss';

class BirdInfo extends Component {
  render() {
    const { selectedBirdData } = this.props
    return selectedBirdData ? (
        <div className="col-md-6">
          <div className="bird-info card">
            <div className="card-body">
              <img className="img-bird" src={selectedBirdData.image} alt="bird"/>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><h5>{selectedBirdData.name}</h5></li>
                <li className="list-group-item"><span>{selectedBirdData.species}</span></li>
                <li className="list-group-item"><AudioPlayer audioSrc={selectedBirdData.audio} /></li>
              </ul>
            </div>
            <span className="bird-description">{selectedBirdData.description}</span>
          </div>
        </div>
      ) : (
        <div className="col-md-6">
          <div className="bird-info card">
            <p className="start-text">
              <span>Послушайте плеер.</span>
              <span>Выберите птицу из списка.</span>
            </p>
          </div>
        </div>
    )
  }
}

export default BirdInfo;
