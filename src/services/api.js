// src/services/api.js (optional - you can delete this file entirely)
// Mock API functions for frontend-only operation

export const authAPI = {
  login: async (credentials) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock response - in a real app, this would come from your backend
    return {
      user: {
        id: 1,
        email: credentials.email,
        name: "Demo Student",
        studentId: "S123456"
      },
      token: "mock-jwt-token"
    };
  },

  signup: async (userData) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock response
    return {
      user: {
        id: Date.now(),
        ...userData
      },
      token: "mock-jwt-token"
    };
  },

  verifyToken: async (token) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Mock response
    return {
      id: 1,
      email: "demo@student.edu",
      name: "Demo Student",
      studentId: "S123456"
    };
  },
};
