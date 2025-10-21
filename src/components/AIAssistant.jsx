import React, { useState, useRef, useEffect } from 'react';
import { useCrisis } from '../contexts/CrisisContext';
import { FiSend, FiMessageCircle, FiX, FiMinimize, FiMaximize } from 'react-icons/fi';
import './AIAssistant.css';

const AIAssistant = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { detectCrisis } = useCrisis();
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom when new messages are added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!isTyping && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isTyping, isMinimized]);

  // Pre-defined AI responses based on keywords
  const getAIResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Crisis detection
    if (detectCrisis(userMessage)) {
      return {
        text: "I'm really concerned about what you're sharing. It's important to talk to someone who can help right away. Would you like me to connect you with crisis resources?",
        type: "crisis",
        urgent: true
      };
    }

    // Greetings
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      const greetings = [
        "Hello there! How are you feeling today?",
        "Hi! I'm here to listen. What's on your mind?",
        "Welcome back! How can I support you today?"
      ];
      return { text: greetings[Math.floor(Math.random() * greetings.length)], type: "greeting" };
    }

    // Stress-related
    if (lowerMessage.includes('stress') || lowerMessage.includes('stressed') || lowerMessage.includes('pressure')) {
      const stressResponses = [
        "It sounds like you're dealing with a lot of pressure. Have you tried any breathing exercises? They can help calm your nervous system.",
        "Academic stress can be overwhelming. Remember to take breaks and practice self-care. What specifically is causing you stress?",
        "Stress is a natural response to challenges. Sometimes breaking tasks into smaller steps can make them more manageable. Would that help?"
      ];
      return { text: stressResponses[Math.floor(Math.random() * stressResponses.length)], type: "stress" };
    }

    // Anxiety-related
    if (lowerMessage.includes('anxious') || lowerMessage.includes('anxiety') || lowerMessage.includes('worry') || lowerMessage.includes('nervous')) {
      const anxietyResponses = [
        "Anxiety can make things feel overwhelming. Let's focus on one thing at a time. What's the smallest step you can take right now?",
        "Have you noticed any patterns in when your anxiety tends to increase? Identifying triggers can be the first step toward managing them.",
        "Remember that these feelings are temporary. Would you like to try a simple grounding exercise? Name five things you can see around you."
      ];
      return { text: anxietyResponses[Math.floor(Math.random() * anxietyResponses.length)], type: "anxiety" };
    }

    // Depression-related
    if (lowerMessage.includes('depress') || lowerMessage.includes('sad') || lowerMessage.includes('hopeless') || lowerMessage.includes('empty')) {
      const depressionResponses = [
        "It sounds like you're going through a difficult time. Remember that what you're feeling is valid, and it's okay to ask for help.",
        "Depression can make everything feel harder. Have you been able to maintain any routines lately? Small consistent actions can help.",
        "You're not alone in feeling this way. Many students experience similar challenges. Would it help to talk about what's been going on?"
      ];
      return { text: depressionResponses[Math.floor(Math.random() * depressionResponses.length)], type: "depression" };
    }

    // Sleep-related
    if (lowerMessage.includes('sleep') || lowerMessage.includes('insomnia') || lowerMessage.includes('tired')) {
      const sleepResponses = [
        "Sleep difficulties are common when we're stressed. Have you tried establishing a relaxing bedtime routine?",
        "Quality sleep is so important for mental health. Things like limiting screen time before bed can make a big difference.",
        "Trouble sleeping can really affect your day. Would you like some suggestions for improving sleep hygiene?"
      ];
      return { text: sleepResponses[Math.floor(Math.random() * sleepResponses.length)], type: "sleep" };
    }

    // School-related
    if (lowerMessage.includes('school') || lowerMessage.includes('class') || lowerMessage.includes('exam') || lowerMessage.includes('study')) {
      const schoolResponses = [
        "Academic pressure can be intense. Remember that your worth isn't defined by your grades.",
        "It sounds like school is causing some stress. Have you talked to your professors or academic advisor about what you're experiencing?",
        "Balancing school and wellbeing is challenging. What's one small thing you could do to make your workload more manageable?"
      ];
      return { text: schoolResponses[Math.floor(Math.random() * schoolResponses.length)], type: "school" };
    }

    // Default responses
    const defaultResponses = [
      "I'm here to listen. Could you tell me more about what you're experiencing?",
      "Thank you for sharing that. How has this been affecting your daily life?",
      "I understand this is difficult. What do you think might help you feel better?",
      "It takes courage to talk about these things. Would you like to explore this further?",
      "I'm listening. What else would you like to share about how you're feeling?"
    ];
    
    return { text: defaultResponses[Math.floor(Math.random() * defaultResponses.length)], type: "default" };
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = { text: inputValue, sender: 'user', timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking and response
    setTimeout(() => {
      const aiResponse = getAIResponse(inputValue);
      const aiMessage = { 
        text: aiResponse.text, 
        sender: 'ai', 
        type: aiResponse.type,
        urgent: aiResponse.urgent || false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const clearChat = () => {
    setMessages([]);
  };

  if (isMinimized) {
    return (
      <div className="ai-assistant-minimized">
        <div className="minimized-header">
          <FiMessageCircle className="chat-icon" />
          <span>AI Assistant</span>
          <button 
            className="control-btn"
            onClick={() => setIsMinimized(false)}
            aria-label="Maximize chat"
          >
            <FiMaximize size={16} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`ai-assistant ${isExpanded ? 'expanded' : ''}`}>
      <div className="chat-header">
        <div className="header-left">
          <FiMessageCircle className="chat-icon" />
          <div className="header-text">
            <h4>Mental Health Assistant</h4>
            <p>I'm here to listen and support you</p>
          </div>
        </div>
        <div className="header-controls">
          <button 
            className="control-btn"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label={isExpanded ? "Collapse chat" : "Expand chat"}
          >
            {isExpanded ? <FiMinimize size={16} /> : <FiMaximize size={16} />}
          </button>
          <button 
            className="control-btn"
            onClick={() => setIsMinimized(true)}
            aria-label="Minimize chat"
          >
            <FiX size={16} />
          </button>
        </div>
      </div>
      
      <div className="chat-messages">
        {messages.length === 0 ? (
          <div className="welcome-message">
            <div className="welcome-icon">💬</div>
            <h4>Hello, I'm your mental health assistant</h4>
            <p>You can talk to me about anything that's on your mind - stress, anxiety, school pressure, or just how your day is going. I'm here to listen and provide support.</p>
            <div className="suggestion-chips">
              <button 
                className="suggestion-chip"
                onClick={() => setInputValue("I've been feeling really stressed about school")}
              >
                School stress
              </button>
              <button 
                className="suggestion-chip"
                onClick={() => setInputValue("I'm having trouble sleeping")}
              >
                Sleep issues
              </button>
              <button 
                className="suggestion-chip"
                onClick={() => setInputValue("I've been feeling anxious lately")}
              >
                Anxiety
              </button>
              <button 
                className="suggestion-chip"
                onClick={() => setInputValue("I'm feeling overwhelmed with coursework")}
              >
                Overwhelmed
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="chat-controls">
              <button className="clear-chat-btn" onClick={clearChat}>
                Clear Chat
              </button>
            </div>
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender} ${message.urgent ? 'urgent' : ''}`}>
                <div className="message-content">
                  <div className="message-bubble">
                    <p>{message.text}</p>
                  </div>
                  <span className="message-time">{formatTime(message.timestamp)}</span>
                </div>
                {message.sender === 'ai' && (
                  <div className="ai-avatar">
                    <span>AI</span>
                  </div>
                )}
              </div>
            ))}
          </>
        )}
        {isTyping && (
          <div className="message ai typing">
            <div className="ai-avatar">
              <span>AI</span>
            </div>
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} className="scroll-anchor" />
      </div>

      <div className="chat-input-container">
        <div className="chat-input">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message here..."
            disabled={isTyping}
            maxLength={500}
          />
          <div className="input-actions">
            {inputValue.length > 0 && (
              <span className="char-count">{inputValue.length}/500</span>
            )}
            <button 
              onClick={handleSend} 
              disabled={!inputValue.trim() || isTyping}
              className="send-button"
              aria-label="Send message"
            >
              <FiSend size={18} />
            </button>
          </div>
        </div>
        <p className="privacy-notice">
          <span className="lock-icon">🔒</span>
          This chat is private and anonymous. Your conversations are not stored.
        </p>
      </div>
    </div>
  );
};

export default AIAssistant;