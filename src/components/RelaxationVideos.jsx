// src/components/RelaxationVideos.jsx
import React, { useState } from 'react';
import './RelaxationVideos.css';

const RelaxationVideos = () => {
  const [selectedCategory, setSelectedCategory] = useState('meditation');

  const videoCategories = {
    meditation: [
      { id: 1, title: '5-Minute Meditation', youtubeId: 'inpc4DmBxh4', duration: '5 min' },
      { id: 2, title: 'Mindfulness for Anxiety', youtubeId: 'Zi7N45BqR9s', duration: '10 min' },
      { id: 3, title: 'Sleep Meditation', youtubeId: 'aEqlQvczMJQ', duration: '15 min' }
    ],
    breathing: [
      { id: 4, title: 'Box Breathing Technique', youtubeId: 'tEmt1Znux58', duration: '4 min' },
      { id: 5, title: '4-7-8 Breathing Exercise', youtubeId: 'gLJ5Cfhgizk', duration: '5 min' }
    ],
    stress: [
      { id: 6, title: 'Quick Stress Relief', youtubeId: 'u9Q1Qz5qo5M', duration: '7 min' },
      { id: 7, title: 'Progressive Muscle Relaxation', youtubeId: '1nZEdqcGVzo', duration: '12 min' }
    ]
  };

  return (
    <div className="videos-container">
      <div className="videos-header">
        <h3>Relaxation Content</h3>
        <div className="category-tabs">
          {Object.keys(videoCategories).map(category => (
            <button
              key={category}
              className={`tab-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="videos-grid">
        {videoCategories[selectedCategory].map(video => (
          <div key={video.id} className="video-card">
            <div className="video-thumbnail">
              <img 
                src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`} 
                alt={video.title}
              />
              <div className="play-overlay">▶</div>
            </div>
            <div className="video-info">
              <h4>{video.title}</h4>
              <span className="video-duration">{video.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelaxationVideos;