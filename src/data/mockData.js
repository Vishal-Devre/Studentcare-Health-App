// src/data/mockData.js
export const mockUsers = [
  {
    id: 1,
    email: "vishaldevre528@gmail.com",
    password: "Pass@123", // Make sure this is exactly 'password123'
    name: "Demo Student",
    studentId: "S123456",
  },
];

export const relaxationVideos = {
  meditation: [
    {
      id: 1,
      title: "5-Minute Meditation",
      youtubeId: "inpc4DmBxh4",
      duration: "5 min",
    },
    {
      id: 2,
      title: "Mindfulness for Anxiety",
      youtubeId: "Zi7N45BqR9s",
      duration: "10 min",
    },
    {
      id: 3,
      title: "Sleep Meditation",
      youtubeId: "aEqlQvczMJQ",
      duration: "15 min",
    },
  ],
  breathing: [
    {
      id: 4,
      title: "Box Breathing Technique",
      youtubeId: "tEmt1Znux58",
      duration: "4 min",
    },
    {
      id: 5,
      title: "4-7-8 Breathing Exercise",
      youtubeId: "gLJ5Cfhgizk",
      duration: "5 min",
    },
  ],
  stress: [
    {
      id: 6,
      title: "Quick Stress Relief",
      youtubeId: "u9Q1Qz5qo5M",
      duration: "7 min",
    },
    {
      id: 7,
      title: "Progressive Muscle Relaxation",
      youtubeId: "1nZEdqcGVzo",
      duration: "12 min",
    },
  ],
};

export const emergencyContacts = [
  { name: "National Suicide Prevention Lifeline", number: "988" },
  { name: "Crisis Text Line", number: "Text HOME to 741741" },
  { name: "Emergency Services", number: "911" },
];

export const aiResponses = {
  greetings: [
    "Hello there! How are you feeling today?",
    "Hi! I'm here to listen. What's on your mind?",
    "Welcome back! How can I support you today?",
  ],
  stress: [
    "It sounds like you're dealing with a lot of pressure. Have you tried any breathing exercises?",
    "Academic stress can be overwhelming. Remember to take breaks and practice self-care.",
    "What specific aspects are causing you the most stress? Sometimes talking about it helps.",
  ],
  anxiety: [
    "Anxiety can make things feel overwhelming. Let's focus on one thing at a time.",
    "Have you noticed any patterns in when your anxiety tends to increase?",
    "Remember that these feelings are temporary. Would you like to try a grounding exercise?",
  ],
  default: [
    "I'm here to listen. Could you tell me more about what you're experiencing?",
    "Thank you for sharing that. How has this been affecting your daily life?",
    "I understand this is difficult. What do you think might help you feel better?",
  ],
};
