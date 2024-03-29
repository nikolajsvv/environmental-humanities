import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import { SpeakerWaveIcon } from '@heroicons/react/24/outline';
import { PlayCircleIcon, PauseCircleIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion'
import AudioFullView from './AudioFullView';

const AudioComponent = ({ audioFile, content, backgroundImage  }) => {
  const { title, author } = content;

  const playButtonRef = useRef(null);
  const pauseButtonRef = useRef(null);
  const audioPlayerRef = useRef(null);
  const progressBarRef = useRef(null);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showFullView, setShowFullView] = useState(false);

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

  const handleViewClick = () => {
    setShowFullView(!showFullView);
  };

  return (
    <>
    <motion.div className='group relative w-full pb-[75%] overflow-hidden rounded-2xl shadow-md shadow-mud'
      initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
      <audio src={audioFile} ref={audioPlayerRef}/>

      <motion.img
            src={backgroundImage} 
            alt={title} 
            loading="lazy" 
            className='absolute inset-0 object-cover w-full h-full rounded-2xl transform transition-transform duration-500 group-hover:scale-105'
        />      
      <div className='absolute inset-0 bg-black opacity-50 rounded-2xl'/>

      <div className='absolute top-0 left-0 p-4 text-gray-400 flex items-center'>
        {isPlaying ?<SpeakerWaveIcon className='h-6 w-6 md:h-8 md:w-8 animate-pulse text-gray-300' /> : <SpeakerWaveIcon className='h-6 w-6 md:h-8 md:w-8 group-hover:scale-110 group-hover:text-gray-300' /> }
      </div>

      <div className='absolute inset-0 items-center justify-center text-light-beige p-5 flex flex-col space-y-2 overflow-y-auto'>
        <h2 className='uppercase font-source-sans-pro font-bold text-xl sm:text-2xl lg:text-4xl text-center'>{title}</h2>
        <p className='text-light-orange text-sm md:text-md'>{author}</p>
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
        <p className='cursor-pointer p-4 font-extralight hover:font-normal hover:text-light-orange' onClick={handleViewClick}>Transcript</p>
        <div className='flex justify-between w-full absolute bottom-4 font-extralight'>
          <div className='text-left left-0 pl-2'>{formatTime(currentTime)}</div>
          <div className='text-right right-0 pr-2'>{formatTime(duration)}</div>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 w-full h-4 overflow-hidden rounded-b-3xl cursor-pointer' ref={progressBarRef} onClick={handleProgressBarClick}>
        <div className='h-full bg-dark-green rounded-b-3xl'>
          <motion.div className='h-full bg-light-orange' style={{ width: `${(currentTime / duration) * 100}%` }}></motion.div>
        </div>
      </div>
    </motion.div>
    <AnimatePresence>
        {showFullView && (
          <motion.div
            key='modal'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 pt-10 backdrop-blur-sm overlay' onClick={() => setShowFullView}>
            <AudioFullView content={content} onClose={() => setShowFullView(false)}/>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default AudioComponent

AudioComponent.propTypes = {
  audioFile: PropTypes.string,
  content: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    type: PropTypes.string,
  }),
  backgroundImage: PropTypes.string
}