import React, { Component } from 'react';
import './style.scss';

class BirdInfo extends Component {
  render() {
    //TODO: text to consts
    const text1 = "Послушайте плеер."
    const text2 = "Выберите птицу из списка"
    return (
      <div className="col-md-6">
        <div className="bird-info card">
          <p className="start-text">
            <span>{text1}</span>
            <span>{text2}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default BirdInfo;
