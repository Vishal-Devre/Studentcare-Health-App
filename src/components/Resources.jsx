import React, { useState, useRef, useEffect } from "react";
import {
  FiPlay,
  FiClock,
  FiBookOpen,
  FiHeadphones,
  FiActivity,
  FiHeart,
  FiX,
  FiPause,
  FiVolume2,
} from "react-icons/fi";
import "./Resources.css";

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState("meditation");
  const [selectedVideo, setSelectedVideo] = useState(null);

  // 🔹 YouTube Resource Categories
  const resourceCategories = {
    meditation: [
      {
        id: 1,
        title: "5-Minute Morning Meditation",
        description:
          "Start your day with peaceful mindfulness and intention setting",
        duration: "5 min",
        level: "Beginner",
        type: "video",
        youtubeId: "SRyh893Jxwo",
        thumbnail: "https://img.youtube.com/vi/SRyh893Jxwo/mqdefault.jpg",
      },
      {
        id: 2,
        title: "Mindfulness for Anxiety",
        description: "Grounding techniques for managing anxious thoughts",
        duration: "10 min",
        level: "Beginner",
        type: "video",
        youtubeId: "Zi7N45BqR9s",
        thumbnail: "https://img.youtube.com/vi/Zi7N45BqR9s/mqdefault.jpg",
      },
      {
        id: 3,
        title: "Sleep Meditation",
        description: "Guided relaxation for better sleep quality",
        duration: "15 min",
        level: "All Levels",
        type: "video",
        youtubeId: "aEqlQvczMJQ",
        thumbnail: "https://img.youtube.com/vi/aEqlQvczMJQ/mqdefault.jpg",
      },
      // New meditation videos
      {
        id: 10,
        title: "Guided Meditation for Focus",
        description: "Improve concentration and mental clarity",
        duration: "12 min",
        level: "All Levels",
        type: "video",
        youtubeId: "pdyTkv6V1dw",
        thumbnail: "https://img.youtube.com/vi/pdyTkv6V1dw/mqdefault.jpg",
      },
      {
        id: 11,
        title: "Quick Meditation for Students",
        description: "Short meditation perfect for study breaks",
        duration: "5 min",
        level: "Beginner",
        type: "video",
        youtubeId: "SNqYG95j_UQ",
        thumbnail: "https://img.youtube.com/vi/SNqYG95j_UQ/mqdefault.jpg",
      },
    ],
    breathing: [
      {
        id: 4,
        title: "Box Breathing Technique",
        description: "Military-grade breathing for instant calm",
        duration: "4 min",
        level: "Beginner",
        type: "video",
        youtubeId: "tEmt1Znux58",
        thumbnail: "https://img.youtube.com/vi/tEmt1Znux58/mqdefault.jpg",
      },
      {
        id: 5,
        title: "4-7-8 Breathing Exercise",
        description: "Dr. Weil's relaxation breathing method",
        duration: "5 min",
        level: "Intermediate",
        type: "video",
        youtubeId: "gLJ5Cfhgizk",
        thumbnail: "https://img.youtube.com/vi/gLJ5Cfhgizk/mqdefault.jpg",
      },
      // New breathing videos
      {
        id: 12,
        title: "Instant Calm Breathing",
        description: "Quick breathing exercise for immediate relaxation",
        duration: "3 min",
        level: "Beginner",
        type: "video",
        youtubeId: "7xWYwF1q-Ms",
        thumbnail: "https://img.youtube.com/vi/7xWYwF1q-Ms/mqdefault.jpg",
      },
    ],
    stress: [
      {
        id: 6,
        title: "Progressive Muscle Relaxation",
        description: "Release tension from head to toe systematically",
        duration: "12 min",
        level: "All Levels",
        type: "video",
        youtubeId: "1nZEdqcGVzo",
        thumbnail: "https://img.youtube.com/vi/1nZEdqcGVzo/mqdefault.jpg",
      },
      {
        id: 7,
        title: "Quick Stress Relief",
        description: "Immediate techniques for stressful moments",
        duration: "7 min",
        level: "Beginner",
        type: "video",
        youtubeId: "u9Q1Qz5qo5M",
        thumbnail: "https://img.youtube.com/vi/u9Q1Qz5qo5M/mqdefault.jpg",
      },
      // New stress relief video
      {
        id: 13,
        title: "5-Minute Stress Relief",
        description: "Quick techniques to reduce stress instantly",
        duration: "5 min",
        level: "Beginner",
        type: "video",
        youtubeId: "_IfbUjoFdkk",
        thumbnail: "https://img.youtube.com/vi/_IfbUjoFdkk/mqdefault.jpg",
      },
    ],
    movement: [
      {
        id: 8,
        title: "Study Break Stretches",
        description: "Quick stretches for long study sessions",
        duration: "8 min",
        level: "Beginner",
        type: "video",
        youtubeId: "2L2lnxIcNmo",
        thumbnail: "https://img.youtube.com/vi/2L2lnxIcNmo/mqdefault.jpg",
      },
      {
        id: 9,
        title: "Yoga for Mental Clarity",
        description: "Gentle yoga flow to clear your mind",
        duration: "20 min",
        level: "Intermediate",
        type: "video",
        youtubeId: "v7AYKMP6rOE",
        thumbnail: "https://img.youtube.com/vi/v7AYKMP6rOE/mqdefault.jpg",
      },
    ],
  };
  // 🔹 Articles
  const articles = [
    {
      id: 1,
      title: "Understanding Academic Stress",
      description:
        "Learn how to identify and manage stress related to your studies",
      readTime: "8 min read",
      category: "Stress Management",
    },
    {
      id: 2,
      title: "Building Healthy Sleep Habits",
      description:
        "Practical tips for improving your sleep schedule as a student",
      readTime: "6 min read",
      category: "Wellness",
    },
    {
      id: 3,
      title: "Social Anxiety in College",
      description:
        "Strategies for navigating social situations and making connections",
      readTime: "10 min read",
      category: "Anxiety",
    },
  ];

  // 🔹 Podcasts (without audio files)
  const podcasts = [
    {
      id: 1,
      title: "Mindful Breathing Exercise",
      episode: "Guided breathing for relaxation",
      duration: "8:45",
      category: "Relaxation",
    },
    {
      id: 2,
      title: "Sleep Meditation Guide",
      episode: "Gentle guidance for better sleep",
      duration: "15:30",
      category: "Sleep",
    },
    {
      id: 3,
      title: "Nature Sounds: Ocean Waves",
      episode: "Calming ocean waves for focus",
      duration: "30:00",
      category: "Nature",
    },
  ];

  const playVideo = (video) => setSelectedVideo(video);
  const closeVideo = () => setSelectedVideo(null);

  // 🔹 Mood Tracker states
  const [moodEntries, setMoodEntries] = useState([]);
  const [currentMood, setCurrentMood] = useState(3);
  const [journalEntry, setJournalEntry] = useState("");

  const trackMood = () => {
    const newEntry = {
      id: Date.now(),
      mood: currentMood,
      note: journalEntry,
      timestamp: new Date().toLocaleDateString(),
    };
    setMoodEntries([...moodEntries, newEntry]);
    setJournalEntry("");
    setCurrentMood(3);
  };

  // 🔹 Breathing Exercise states
  const [breathingActive, setBreathingActive] = useState(false);
  const [breathingPhase, setBreathingPhase] = useState("inhale");
  const [breathCount, setBreathCount] = useState(0);
  const breathingIntervalRef = useRef(null);

  const startBreathing = () => {
    setBreathingActive(true);
    setBreathCount(0);

    const phases = ["inhale", "hold", "exhale", "rest"];
    let currentPhaseIndex = 0;

    breathingIntervalRef.current = setInterval(() => {
      if (!breathingActive) {
        clearInterval(breathingIntervalRef.current);
        return;
      }
      setBreathingPhase(phases[currentPhaseIndex]);
      if (phases[currentPhaseIndex] === "exhale") {
        setBreathCount((prev) => prev + 1);
      }
      currentPhaseIndex = (currentPhaseIndex + 1) % phases.length;
    }, 4000);
  };

  const stopBreathing = () => {
    setBreathingActive(false);
    setBreathingPhase("inhale");
    if (breathingIntervalRef.current) {
      clearInterval(breathingIntervalRef.current);
    }
  };

  // Clean up interval on component unmount
  useEffect(() => {
    return () => {
      if (breathingIntervalRef.current) {
        clearInterval(breathingIntervalRef.current);
      }
    };
  }, []);

  return (
    <section id="resources" className="resources-section">
      {/* Video Modal */}
      {selectedVideo && (
        <div className="video-modal-overlay">
          <div className="video-modal">
            <div className="modal-header">
              <h3>{selectedVideo.title}</h3>
              <button className="close-btn" onClick={closeVideo}>
                <FiX size={24} />
              </button>
            </div>
            <div className="video-container">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={selectedVideo.title}
              ></iframe>
            </div>
            <div className="video-info">
              <p>{selectedVideo.description}</p>
              <div className="video-meta">
                <span className="duration">{selectedVideo.duration}</span>
                <span className="level">{selectedVideo.level}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container">
        <div className="resources-header">
          <h2 className="section-title">Wellness Resource Library</h2>
          <p className="section-subtitle">
            Therapeutic content designed to help you relax, focus, and find
            balance during your studies
          </p>
        </div>

        {/* 🔹 Video Resources */}
        <div className="resources-category">
          <div className="category-header">
            <div className="category-title">
              <FiPlay className="category-icon" />
              <h3>Therapeutic Videos</h3>
            </div>
            <div className="category-tabs">
              {Object.keys(resourceCategories).map((category) => (
                <button
                  key={category}
                  className={`tab-btn ${
                    activeCategory === category ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="resources-grid">
            {resourceCategories[activeCategory].map((resource) => (
              <div key={resource.id} className="resource-card video-card">
                <div className="resource-thumbnail">
                  <img src={resource.thumbnail} alt={resource.title} />
                  <div
                    className="play-overlay"
                    onClick={() => playVideo(resource)}
                  >
                    <FiPlay size={24} />
                  </div>
                  <div className="duration-badge">
                    <FiClock size={12} />
                    <span>{resource.duration}</span>
                  </div>
                </div>
                <div className="resource-content">
                  <h4>{resource.title}</h4>
                  <p>{resource.description}</p>
                  <div className="resource-meta">
                    <span className="level-badge">{resource.level}</span>
                    <button
                      className="play-btn"
                      onClick={() => playVideo(resource)}
                    >
                      Watch
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 Articles Section */}
        <div className="resources-category">
          <div className="category-header">
            <div className="category-title">
              <FiBookOpen className="category-icon" />
              <h3>Articles & Guides</h3>
            </div>
          </div>

          <div className="articles-grid">
            {articles.map((article) => (
              <div key={article.id} className="resource-card article-card">
                <div className="article-icon">
                  <FiBookOpen size={24} />
                </div>
                <div className="resource-content">
                  <span className="article-category">{article.category}</span>
                  <h4>{article.title}</h4>
                  <p>{article.description}</p>
                  <div className="resource-meta">
                    <span className="read-time">
                      <FiClock size={12} />
                      {article.readTime}
                    </span>
                    <button className="read-btn">Read Article</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 Podcasts Section */}
        <div className="resources-category">
          <div className="category-header">
            <div className="category-title">
              <FiHeadphones className="category-icon" />
              <h3>Podcasts & Audio</h3>
            </div>
          </div>

          <div className="podcasts-grid">
            {podcasts.map((podcast) => (
              <div key={podcast.id} className="resource-card podcast-card">
                <div className="podcast-icon">
                  <FiHeadphones size={24} />
                </div>
                <div className="resource-content">
                  <span className="podcast-category">{podcast.category}</span>
                  <h4>{podcast.title}</h4>
                  <p className="episode-title">{podcast.episode}</p>

                  <div className="resource-meta">
                    <span className="podcast-duration">
                      <FiClock size={12} />
                      {podcast.duration}
                    </span>
                    <button className="listen-btn" disabled>
                      <FiVolume2 size={14} />
                      Audio Not Available
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 Emergency Resources */}
        <div className="emergency-resources">
          <div className="emergency-header">
            <FiHeart className="emergency-icon" />
            <h3>Immediate Support Resources</h3>
          </div>
          <div className="emergency-content">
            <div className="emergency-item">
              <h4>National Suicide Prevention Lifeline</h4>
              <p>Call 988 for free and confidential support</p>
              <span>Available 24/7</span>
            </div>
            <div className="emergency-item">
              <h4>Crisis Text Line</h4>
              <p>Text HOME to 741741 from anywhere in the US</p>
              <span>Free, 24/7 support</span>
            </div>
            <div className="emergency-item">
              <h4>Emergency Services</h4>
              <p>Call 911 for immediate emergency assistance</p>
              <span>For life-threatening situations</span>
            </div>
          </div>
        </div>

        {/* 🔹 Wellness Tools */}
        <div className="wellness-tools">
          <h3>Interactive Wellness Tools</h3>
          <div className="tools-grid">
            {/* Mood Tracker */}
            <div className="tool-card">
              <FiActivity className="tool-icon" />
              <h4>Mood Tracker</h4>
              <p>Track your daily mood patterns and identify triggers</p>

              <div className="mood-tracker">
                <div className="mood-scale">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      className={`mood-btn ${
                        currentMood === num ? "selected" : ""
                      }`}
                      onClick={() => setCurrentMood(num)}
                    >
                      {num}
                    </button>
                  ))}
                </div>
                <div className="mood-labels">
                  <span>Very Sad</span>
                  <span>Neutral</span>
                  <span>Very Happy</span>
                </div>
                <textarea
                  placeholder="Add a note about your mood..."
                  value={journalEntry}
                  onChange={(e) => setJournalEntry(e.target.value)}
                  className="mood-journal"
                />
                <button className="tool-btn" onClick={trackMood}>
                  Save Entry
                </button>

                {moodEntries.length > 0 && (
                  <div className="mood-history">
                    <h5>Recent Entries</h5>
                    {moodEntries.slice(-3).map((entry) => (
                      <div key={entry.id} className="mood-entry">
                        <span>Mood: {entry.mood}/5</span>
                        <p>{entry.note}</p>
                        <span className="entry-date">{entry.timestamp}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Breathing Exercises */}
            <div className="tool-card">
              <FiHeart className="tool-icon" />
              <h4>Breathing Exercises</h4>
              <p>Practice guided breathing to calm your mind</p>
              {!breathingActive ? (
                <button className="tool-btn" onClick={startBreathing}>
                  Start Exercise
                </button>
              ) : (
                <div className="breathing-exercise">
                  <div className={`breathing-circle ${breathingPhase}`}>
                    {breathingPhase.toUpperCase()}
                  </div>
                  <p>Cycle Count: {breathCount}</p>
                  <button className="tool-btn stop" onClick={stopBreathing}>
                    Stop
                  </button>
                </div>
              )}
            </div>

            {/* Journal Prompts */}
            <div className="tool-card">
              <FiBookOpen className="tool-icon" />
              <h4>Journal Prompts</h4>
              <p>Guided writing exercises for reflection</p>
              <div className="journal-prompts">
                <button className="prompt-btn">Today's Gratitude</button>
                <button className="prompt-btn">
                  What made you smile today?
                </button>
                <button className="prompt-btn">One thing I'm proud of</button>
                <button className="prompt-btn">
                  Something I'm looking forward to
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
