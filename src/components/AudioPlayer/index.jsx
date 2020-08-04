import React, { Component } from 'react';
import H5AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import win from '../../assets/audio/win.mp3';
import './style.scss';

class AudioPlayer extends Component {
  render() {
    return (
      <div className="audio-player">
        <H5AudioPlayer
          src={win}
          volume={0.8}
          autoPlay={false}
          autoPlayAfterSrcChange={false}
          showJumpControls={false}
          showDownloadProgress={false}
          customAdditionalControls={[]}
          customProgressBarSection={
            [
              RHAP_UI.CURRENT_TIME,
              RHAP_UI.PROGRESS_BAR,
              RHAP_UI.DURATION,
            ]}
        />
      </div>
    );
  }
}

export default AudioPlayer;
