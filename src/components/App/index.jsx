import React, { Component } from 'react';
import birdsData from '../../data/birdsData';
import Header from '../Header';
import RandomBird from '../RandomBird';
import BirdsList from '../BirdsList';
import BirdInfo from '../BirdInfo';
import './style.scss';

class App extends Component {
  state = {
    score: 0,
    round: 0,
    data: birdsData,
  }

  render() {
    return (
      <div className="container">
        <Header score={this.state.score} round={this.state.round} />
        <RandomBird />
        <div className="row mb-2">
          <BirdsList data={this.state.data} />
          <BirdInfo />
          <button className="btn">Next level</button>
        </div>
      </div>
    );
  }
}

export default App;
