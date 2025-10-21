import React, { useState, useRef, useEffect } from 'react';
import { FiPlay, FiPause, FiVolume2, FiVolumeX } from 'react-icons/fi';
import './CustomAudioPlayer.css';

const CustomAudioPlayer = ({ audioFile, title, onEnded }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  // Toggle play/pause
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => {
        console.error("Audio play failed:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  // Handle time update
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  // Handle loaded metadata
  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  // Handle seek
  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  // Handle volume change
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
    setIsMuted(newVolume === 0);
  };

  // Toggle mute
  const toggleMute = () => {
    if (isMuted) {
      audioRef.current.volume = volume || 0.7;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  // Format time (seconds to MM:SS)
  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Reset player when audio file changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      setIsPlaying(false);
      setCurrentTime(0);
    }
  }, [audioFile]);

  return (
    <div className="custom-audio-player">
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={audioFile}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => {
          setIsPlaying(false);
          if (onEnded) onEnded();
        }}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />
      
      {/* Player header with title and play button */}
      <div className="player-header">
        <h4 className="player-title">{title}</h4>
        <button 
          onClick={togglePlay} 
          className="play-pause-btn"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <FiPause size={18} /> : <FiPlay size={18} />}
        </button>
      </div>
      
      {/* Progress bar */}
      <div className="progress-container">
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
          className="progress-slider"
          style={{
            background: `linear-gradient(to right, var(--accent-primary) ${(currentTime / duration) * 100}%, var(--border-color) ${(currentTime / duration) * 100}%)`
          }}
        />
      </div>
      
      {/* Time display and volume controls */}
      <div className="player-controls">
        <div className="time-display">
          <span>{formatTime(currentTime)}</span>
          <span>/</span>
          <span>{formatTime(duration)}</span>
        </div>
        
        <div className="volume-controls">
          <button 
            onClick={toggleMute} 
            className="volume-btn"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <FiVolumeX size={16} /> : <FiVolume2 size={16} />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-slider"
          />
        </div>
      </div>
    </div>
  );
};

// Default props
CustomAudioPlayer.defaultProps = {
  onEnded: () => {},
};

export default CustomAudioPlayer;