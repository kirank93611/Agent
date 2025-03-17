import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

const aiService = {
  // Get AI response for user query
  getResponse: async (userId, query) => {
    try {
      const response = await axios.post(`${API_URL}/ai/respond`, {
        user_id: userId,
        query
      });
      return response.data;
    } catch (error) {
      console.error('Error getting AI response:', error);
      throw error;
    }
  },

  // Store conversation in vector DB
  storeConversation: async (userId, conversation) => {
    try {
      const response = await axios.post(`${API_URL}/ai/store-conversation`, {
        user_id: userId,
        conversation
      });
      return response.data;
    } catch (error) {
      console.error('Error storing conversation:', error);
      throw error;
    }
  },

  // Get conversation history
  getHistory: async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/ai/get-history/${userId}`);
      return response.data.history;
    } catch (error) {
      console.error('Error getting conversation history:', error);
      throw error;
    }
  },

  // Schedule AI task
  scheduleTask: async (userId, task, executeAt) => {
    try {
      const response = await axios.post(`${API_URL}/ai/schedule-task`, {
        user_id: userId,
        task,
        execute_at: executeAt
      });
      return response.data;
    } catch (error) {
      console.error('Error scheduling task:', error);
      throw error;
    }
  }
};

export default aiService; 