import React, { Component } from 'react';
import Header from '../Header';
import './style.scss';

class App extends Component {
  state = {
    score: 0,
    round: 2
  }

  render() {
    return (
      <div className="container">
        <Header score={this.state.score} round={this.state.round} />
      </div>
    );
  }
}

export default App;
