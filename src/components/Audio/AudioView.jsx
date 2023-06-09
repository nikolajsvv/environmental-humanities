import PropTypes from 'prop-types';
import { useRef, useEffect, useState } from 'react';
import { PlayCircleIcon, PauseCircleIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const AudioView = ({ audio, audioData }) => {
  const { title, author } = audioData;

  const playButtonRef = useRef(null);
  const pauseButtonRef = useRef(null);
  const audioPlayerRef = useRef(null);
  const progressBarRef = useRef(null);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let audioPlayer = audioPlayerRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(audioPlayer.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audioPlayer.duration);
    };

    const handleAudioEnded = () => {
      setCurrentTime(0);
      setIsPlaying(false);
    }

    audioPlayer.addEventListener('timeupdate', handleTimeUpdate);
    audioPlayer.addEventListener('loadedmetadata', handleLoadedMetadata);
    audioPlayer.addEventListener('ended', handleAudioEnded);

    return () => {
      audioPlayer.removeEventListener('timeupdate', handleTimeUpdate);
      audioPlayer.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audioPlayer.removeEventListener('ended', handleAudioEnded);
    };
  }, []);

  const playAudio = () => {
    audioPlayerRef.current.play();
    setIsPlaying(true);
  };

  const pauseAudio = () => {
    audioPlayerRef.current.pause();
    setIsPlaying(false);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    let seconds = Math.floor(timeInSeconds - minutes * 60);
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return `${minutes}:${seconds}`;
  };

  const handleProgressBarClick = (event) => {
    const progressBar = progressBarRef.current;
    const rect = progressBar.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const progressBarWidth = rect.width;
    const seekTime = (offsetX / progressBarWidth) * duration;
    audioPlayerRef.current.currentTime = seekTime;
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full flex justify-between items-center shadow-lg rounded-t-2xl p-5 bg-green-100">
        <div className="text-left">
          <h2 className="text-2xl font-source-sans-pro uppercase font-bold">{title}</h2>
          <p className="text-lg font-source-serif-pro font-light">{author}</p>
        </div>
        <div id="audio-controls" className=''>
          {!isPlaying ? (
            <PlayCircleIcon
              className="h-12 w-12 cursor-pointer p-2 hover:scale-125 rounded-full transition-all duration-300"
              ref={playButtonRef}
              onClick={playAudio}
            />
          ) : (
            <PauseCircleIcon
              className="h-12 w-12 cursor-pointer p-2 hover:scale-125 rounded-full transition-all duration-300"
              ref={pauseButtonRef}
              onClick={pauseAudio}
            />
          )}
        </div>
      </div>

      <div id="audio-player-container" className="w-full">
        <audio src={audio} ref={audioPlayerRef} />
      </div>
      <div
        className="relative w-full h-2 bg-gray-300"
        ref={progressBarRef}
        onClick={handleProgressBarClick}
      >
        <motion.div className="h-2 bg-primary-green" style={{ width: `${(currentTime / duration) * 100}%` }}></motion.div>
      </div>
      <div className="flex w-full font-extralight text-[11px] -translate-y-6 justify-between">
        <div className="pl-2">{formatTime(currentTime)}</div>
        <div className="pr-2">{formatTime(duration)} </div>
      </div>
    </div>
  );
};

AudioView.propTypes = {
  audio: PropTypes.string,
  audioData: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    type: PropTypes.string,
  }),
};

export default AudioView;


AudioView.propTypes = {
  audio: PropTypes.string,
  audioData: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    type: PropTypes.string,
  })
}

