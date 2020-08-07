import React, { Component } from 'react';
import './style.scss';

class Result extends Component {
  render() {
    const { gameEnded, score, startNewGame } = this.props
    const victory = (
      <div className="lead text-center">
        Вы прошли викторину и набрали {score} из 30 возможных баллов
      </div>
    )
    const flawlessVictory = (
      <div className="lead text-center">
        Вы прошли викторину и набрали максимальные 30 баллов
      </div>
    )
    return gameEnded ? (
      <div className="jumbotron result">
        <h1 className="display-3 text-center">Поздравляем!</h1>
        { (score === 30) ? flawlessVictory : victory } 
        <hr className="my-4" />
        <button className="btn btn-try-again" onClick={startNewGame}> Попробовать ещё раз!</button>
      </div>
    ) : false ;
  }
}

export default Result;
