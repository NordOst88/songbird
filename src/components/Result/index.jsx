import React, { Component } from 'react';
import './style.scss';
import chickenWin from '../../assets/img/chicken-win.png';

class Result extends Component {
  render() {
    const { gameEnded, score, startNewGame } = this.props
    const victory = (
      <div className="lead text-center">
        Вы прошли викторину и набрали <b>{score}</b> из <b>30</b> возможных баллов
      </div>
    )
    const flawlessVictory = (
      <div className="lead text-center">
        <p>Вы одержали победу и набрали максимальные <b>30</b> баллов</p>
        <img className="img-win" src={chickenWin} style={{width: '200px'}} alt="winner"/>
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
