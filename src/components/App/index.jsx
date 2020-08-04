import React, { Component } from 'react';
import Header from '../Header';
import RandomBird from '../RandomBird';
import './style.scss';

class App extends Component {
  state = {
    score: 0,
    round: 0
  }

  render() {
    return (
      <div className="container">
        <Header score={this.state.score} round={this.state.round} />
        <RandomBird />
      </div>
    );
  }
}

export default App;
