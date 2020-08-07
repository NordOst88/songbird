import React, { Component } from 'react';
import AudioPlayer from '../AudioPlayer';
import './style.scss';

class BirdInfo extends Component {
  render() {
    const { selectedBirdData } = this.props
    return (
      <div className="col-md-6">
        <div className="bird-info card">
          <p className="start-text" style={selectedBirdData ? {display: 'none'} : {display: 'block'}}>
            <span>Послушайте плеер.</span>
            <span>Выберите птицу из списка.</span>
          </p>
          <div className="card-body" style={selectedBirdData ? {display: 'flex'} : {display: 'none'}}>
            <img className="img-bird" src={selectedBirdData ? selectedBirdData.image : ''} alt="bird"/>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><h4>{selectedBirdData ? selectedBirdData.name : ''}</h4></li>
              <li className="list-group-item"><span>{selectedBirdData ? selectedBirdData.species : ''}</span></li>
              <li className="list-group-item"><AudioPlayer audioSrc={selectedBirdData ? selectedBirdData.audio : ''} /></li>
            </ul>
          </div>
          <span className="bird-description" style={selectedBirdData ? {display: 'flex'} : {display: 'none'}}></span>
        </div>
      </div>
    );
  }
}

export default BirdInfo;
