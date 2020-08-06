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
    const { roundEnded, round } = this.state
    if (roundEnded && round < 5) {
      this.setState((prevState) => ({
        round: prevState.round + 1,
        roundEnded: false,
        scorePoints: 5,
        selectedBird: randomizer(birdsData[0].length),
      }));
      this.clearIndicators()
    }
  }

  clearIndicators = () => {
    const indicatorsList = document.querySelectorAll('.answer-indicator');
    indicatorsList.forEach((indicator) => {
      indicator.style.background = null;
    });
  }

  birdSelectHandler = (event, id) => {
    const { target } = event
    const { selectedBird, roundEnded } = this.state
    const audio = document.createElement('audio')
    audio.volume = 0.5
    if (!roundEnded && selectedBird !== (id - 1)) {
      target.firstChild.style.backgroundColor = '#ee5f5b'
      audio.src = error
      this.setState((prevState) => ({ scorePoints: prevState.scorePoints - 1 }));
    } else if (!roundEnded) {
      target.firstChild.style.backgroundColor = '#62c462'
      audio.src = win
      this.setState((prevState) => ({
        score: prevState.score + this.state.scorePoints,
        roundEnded: true,
      }));
    }
    audio.play()
  }

  render() {
    const { data, round, selectedBird, score, roundEnded } = this.state
    const selectedBirdData = data[round][selectedBird]
    console.log(`Right answer is: ${selectedBirdData.name}`)
    return (
      <div className="container">
        <Header score={score} round={round} />
        <RandomBird selectedBird={selectedBirdData}/>
        <div className="row mb-2">
          <BirdsList data={data} round={round} onBirdSelect={this.birdSelectHandler}/>
          <BirdInfo />
          <button
           className={!roundEnded ? 'btn' : 'btn active'}
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
