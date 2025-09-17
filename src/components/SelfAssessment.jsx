import React, { useState } from 'react';
import './SelfAssessment.css';

const SelfAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      text: "Over the last 2 weeks, how often have you felt little interest or pleasure in doing things?",
      options: ["Not at all", "Several days", "More than half the days", "Nearly every day"]
    },
    {
      id: 2,
      text: "How often have you felt down, depressed, or hopeless?",
      options: ["Not at all", "Several days", "More than half the days", "Nearly every day"]
    },
    {
      id: 3,
      text: "How often have you had trouble falling or staying asleep, or sleeping too much?",
      options: ["Not at all", "Several days", "More than half the days", "Nearly every day"]
    },
    {
      id: 4,
      text: "How often have you felt tired or had little energy?",
      options: ["Not at all", "Several days", "More than half the days", "Nearly every day"]
    },
    {
      id: 5,
      text: "How often have you had poor appetite or overeaten?",
      options: ["Not at all", "Several days", "More than half the days", "Nearly every day"]
    },
    {
      id: 6,
      text: "How often have you felt bad about yourself - or that you are a failure or have let yourself or your family down?",
      options: ["Not at all", "Several days", "More than half the days", "Nearly every day"]
    },
    {
      id: 7,
      text: "How often have you had trouble concentrating on things, such as reading the newspaper or watching television?",
      options: ["Not at all", "Several days", "More than half the days", "Nearly every day"]
    },
    {
      id: 8,
      text: "How often have you been moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?",
      options: ["Not at all", "Several days", "More than half the days", "Nearly every day"]
    },
    {
      id: 9,
      text: "How often have you had thoughts that you would be better off dead, or of hurting yourself in some way?",
      options: ["Not at all", "Several days", "More than half the days", "Nearly every day"]
    }
  ];

  const handleAnswer = (answer) => {
    const newAnswers = { 
      ...answers, 
      [currentQuestion]: answer 
    };
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateResults = () => {
    const scores = {
      'Not at all': 0,
      'Several days': 1,
      'More than half the days': 2,
      'Nearly every day': 3
    };
    
    const totalScore = Object.values(answers).reduce((sum, answer) => {
      return sum + (scores[answer] || 0);
    }, 0);
    
    if (totalScore <= 4) {
      return { 
        level: "Low", 
        score: totalScore,
        message: "Your responses suggest minimal symptoms of depression. You appear to be managing well. Continue practicing self-care and maintaining healthy habits.",
        suggestion: "Keep up with your current routines and consider regular check-ins with yourself."
      };
    } else if (totalScore <= 9) {
      return { 
        level: "Mild", 
        score: totalScore,
        message: "You might be experiencing some mild symptoms of depression. This is common and manageable with the right strategies.",
        suggestion: "Consider trying relaxation techniques, regular exercise, and maintaining social connections."
      };
    } else if (totalScore <= 14) {
      return { 
        level: "Moderate", 
        score: totalScore,
        message: "Your responses indicate moderate symptoms of depression. Many people experience this level of symptoms during stressful periods.",
        suggestion: "You might benefit from speaking with a counselor or mental health professional. Consider reaching out to campus resources."
      };
    } else if (totalScore <= 19) {
      return { 
        level: "Moderately Severe", 
        score: totalScore,
        message: "Your responses suggest moderately severe symptoms of depression. It's important to take these symptoms seriously.",
        suggestion: "We recommend connecting with a mental health professional. Your campus health center can provide resources and support."
      };
    } else {
      return { 
        level: "Severe", 
        score: totalScore,
        message: "Your responses indicate significant symptoms of depression. Please know that help is available and you don't have to face this alone.",
        suggestion: "We strongly recommend speaking with a mental health professional as soon as possible. Consider reaching out to emergency resources if you're in crisis."
      };
    }
  };

  const restartAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    const results = calculateResults();
    return (
      <div className="assessment-results">
        <h3>Assessment Complete</h3>
        <div className="results-summary">
          <p className="score-display">Your score: <span>{results.score}</span>/27</p>
          <div className={`result-level ${results.level.toLowerCase().replace(' ', '-')}`}>
            <h4>{results.level} Impact</h4>
          </div>
        </div>
        
        <div className="results-message">
          <p>{results.message}</p>
        </div>
        
        <div className="results-suggestion">
          <h5>Recommendation:</h5>
          <p>{results.suggestion}</p>
        </div>
        
        <div className="resources-section">
          <h5>Resources:</h5>
          <ul>
            <li>Campus Counseling Center: (555) 123-HELP</li>
            <li>Crisis Text Line: Text HOME to 741741</li>
            <li>National Suicide Prevention Lifeline: 988</li>
          </ul>
        </div>
        
        <div className="results-actions">
          <button className="retake-btn" onClick={restartAssessment}>
            Retake Assessment
          </button>
          <button className="resources-btn">
            View Resources
          </button>
        </div>
        
        <div className="assessment-disclaimer">
          <p><small>Note: This assessment is not a diagnostic tool. It's designed to help you reflect on your mental health. For a professional evaluation, please consult a healthcare provider.</small></p>
        </div>
      </div>
    );
  }

  return (
    <div className="self-assessment">
      <h3>Mental Health Check-in</h3>
      <p className="assessment-description">This assessment helps you reflect on your mental wellbeing over the past two weeks.</p>
      
      <div className="assessment-progress">
        <div className="progress-bar-container">
          <div 
            className="progress-bar" 
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
        <p className="progress-text">Question {currentQuestion + 1} of {questions.length}</p>
      </div>
      
      <div className="question-container">
        <div className="question">
          <p>{questions[currentQuestion].text}</p>
        </div>
        
        <div className="answer-options">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className={`option-btn ${answers[currentQuestion] === option ? 'selected' : ''}`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      
      <div className="navigation-buttons">
        {currentQuestion > 0 && (
          <button 
            className="nav-btn prev-btn"
            onClick={() => setCurrentQuestion(currentQuestion - 1)}
          >
            Previous
          </button>
        )}
        
        {currentQuestion < questions.length - 1 && answers[currentQuestion] && (
          <button 
            className="nav-btn next-btn"
            onClick={() => setCurrentQuestion(currentQuestion + 1)}
          >
            Next
          </button>
        )}
        
        {currentQuestion === questions.length - 1 && answers[currentQuestion] && (
          <button 
            className="nav-btn submit-btn"
            onClick={() => setShowResults(true)}
          >
            See Results
          </button>
        )}
      </div>
    </div>
  );
};

export default SelfAssessment;