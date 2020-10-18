import React from 'react';
import H5AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import './style.scss';

const AudioPlayer = ({ audioSrc, playerRef }) => (
  <div className="audio-player">
    <H5AudioPlayer
      crossorigin="use-credentials"
      src={audioSrc}
      volume={0.8}
      autoPlay={false}
      autoPlayAfterSrcChange={false}
      showJumpControls={false}
      showDownloadProgress={false}
      customAdditionalControls={[]}
      ref={playerRef}
      customProgressBarSection={[RHAP_UI.CURRENT_TIME, RHAP_UI.PROGRESS_BAR, RHAP_UI.DURATION]}
    />
  </div>
);

export default AudioPlayer;
