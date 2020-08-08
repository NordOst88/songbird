import React, { Component } from 'react';
import birdsData from '../../data/birdsData';
import Header from '../Header';
import RandomBird from '../RandomBird';
import BirdsList from '../BirdsList';
import BirdInfo from '../BirdInfo';
import Result from '../Result';
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
    gameEnded: false,
    data: birdsData,
    currentBird: randomizer(birdsData[0].length),
    selectedBird: null,
  }

  nextLevelHandler = () => {
    const { roundEnded, round } = this.state
    if (roundEnded && round < 5) {
      this.setState((prevState) => ({
        round: prevState.round + 1,
        roundEnded: false,
        scorePoints: 5,
        currentBird: randomizer(birdsData[0].length),
        selectedBird: null,
      }));
      this.clearIndicators()
    } else if (round === 5) {
      this.setState(() => ({ gameEnded: true }));
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
    const { currentBird, roundEnded } = this.state
    const audio = document.createElement('audio')
    audio.volume = 0.5
    if (!roundEnded && currentBird !== (id - 1)) {
      target.firstChild.style.backgroundColor = '#ee5f5b'
      audio.src = error
      this.setState((prevState) => ({ scorePoints: prevState.scorePoints - 1 }));
    } else if (!roundEnded) {
      target.firstChild.style.backgroundColor = '#62c462'
      audio.src = win
      this.player.audio.current.pause()
      this.setState((prevState) => ({
        score: prevState.score + this.state.scorePoints,
        roundEnded: true,
      }));
    }
    audio.play()
    this.setState({ selectedBird: id })
  }

  createRefToPlayer = (current) => {
    this.player = current
  }

  startNewGameHandler = () => {
    this.setState((prevState) => ({
      score: 0,
      scorePoints: 5,
      round: 0,
      roundEnded: false,
      gameEnded: false,
      currentBird: randomizer(birdsData[0].length),
      selectedBird: null,
    }));
    this.clearIndicators()
  }

  render() {
    const { data, round, currentBird, score, roundEnded, selectedBird, gameEnded } = this.state
    const selectedBirdData = data[round][selectedBird - 1]
    const currentBirdData = data[round][currentBird]
    if (selectedBird === null) {
      console.log(`Right answer is: ${currentBirdData.name}`)
    }
    return (
      <div className="container">
        <Header score={score} round={round} />
        <Result score={score} startNewGame={this.startNewGameHandler} gameEnded={gameEnded} />
        <RandomBird currentBird={currentBirdData} roundEnded={roundEnded} gameEnded={gameEnded} createRef={this.createRefToPlayer} />
        <div className="row mb-2" style={{display: gameEnded ? 'none' : 'flex'}}>
          <BirdsList data={data} round={round} onBirdSelect={this.birdSelectHandler}/>
          <BirdInfo selectedBirdData={selectedBirdData}/>
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
