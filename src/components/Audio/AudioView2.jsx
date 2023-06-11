import PropTypes from 'prop-types';
import { useRef, useEffect, useState } from 'react'
import { SpeakerWaveIcon } from '@heroicons/react/24/outline';
import { PlayCircleIcon, PauseCircleIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion'

const AudioView2 = ({ audio, audioData, image }) => {
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
    <div className='group relative max-w-full max-h-full'>
      <audio src={audio} ref={audioPlayerRef} />

      <div className='absolute inset-0 bg-black opacity-50 rounded-2xl' />
      <img src={image} alt='image' className='object-contain w-full rounded-2xl' />
      <div className='absolute top-0 left-0 p-4 text-white'>
        {isPlaying ?<SpeakerWaveIcon className='h-6 w-6 md:h-8 md:w-8 animate-pulse' /> : <SpeakerWaveIcon className='h-6 w-6 md:h-8 md:w-8 group-hover:scale-110' /> }

      </div>
      <div className='absolute inset-0 flex flex-col items-center justify-center text-white p-5'>
        <h2 className='uppercase font-source-sans-pro font-bold text-4xl'>{title}</h2>
        <p>{author}</p>

        <div>
          {!isPlaying ? (
            <PlayCircleIcon
              className='h-12 w-12 text-white cursor-pointer rounded-full transition-all duration-300 hover:scale-125'
              ref={playButtonRef}
              onClick={playAudio}
            />
          ) : (
            <PauseCircleIcon
              className='h-12 w-12 text-white cursor-pointer rounded-full transition-all duration-300 hover:scale-125'
              ref={pauseButtonRef}
              onClick={pauseAudio}
            />
          )}
        </div>
        <div className='flex justify-between w-full absolute bottom-4 font-extralight'>
          <div className='text-left left-0 pl-2'>{formatTime(currentTime)}</div>
          <div className='text-right right-0 pr-2'>{formatTime(duration)}</div>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 w-full h-4 overflow-hidden rounded-b-3xl cursor-pointer' ref={progressBarRef} onClick={handleProgressBarClick}>
        <div className='bg-gray-100 h-full rounded-b-3xl'>
          <motion.div className='h-full bg-primary-green' style={{ width: `${(currentTime / duration) * 100}%` }}></motion.div>
        </div>
      </div>
    </div>
  )
}
export default AudioView2

AudioView2.propTypes = {
  audio: PropTypes.string,
  audioData: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    type: PropTypes.string,
  })
}