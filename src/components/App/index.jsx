import React, { Component } from 'react';
import birdsData from '../../data/birdsData';
import Header from '../Header';
import RandomBird from '../RandomBird';
import BirdsList from '../BirdsList';
import BirdInfo from '../BirdInfo';
import randomizer from '../../utils/randomizer'
import './style.scss';
import win from '../../assets/audio/win.mp3';
import error from '../../assets/audio/error.mp3';

class App extends Component {
  state = {
    score: 0,
    scorePoints: 5,
    round: 0,
    roundEnded: false,
    data: birdsData,
    selectedBird: randomizer(birdsData[0].length),
  }

  nextLevelHandler = () => {
    this.setState({selectedBird: randomizer(birdsData[0].length)})
  }

  birdSelectHandler = (event, id) => {
    const { target } = event
    const { selectedBird, roundEnded } = this.state
    const audio = document.createElement('audio')
    audio.volume = 0.5
    if (!roundEnded && selectedBird !== (id - 1)) {
      target.firstChild.style.backgroundColor = '#ee5f5b'
      audio.src = error
    } else if (!roundEnded) {
      target.firstChild.style.backgroundColor = '#62c462'
      audio.src = win
      this.setState((prevState) => ({
        roundEnded: true,
      }));
    }
    audio.play()
  }

  render() {
    const selectedBird = this.state.data[this.state.round][this.state.selectedBird]
    console.log(`Right answer is: ${selectedBird.name}`)
    return (
      <div className="container">
        <Header score={this.state.score} round={this.state.round} />
        <RandomBird selectedBird={selectedBird}/>
        <div className="row mb-2">
          <BirdsList data={this.state.data} onBirdSelect={this.birdSelectHandler}/>
          <BirdInfo />
          <button
           className={!this.state.roundEnded ? 'btn' : 'btn active'}
           onClick={this.nextLevelHandler}
          >
            Next level
          </button>
        </div>
      </div>
    );
  }
}

export default App;
