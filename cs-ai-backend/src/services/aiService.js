import openai from '../config/openai.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class AIService {
  async generateResponse(query, history = []) {
    try {
      const messages = [
        { role: 'system', content: 'You are a helpful customer support AI assistant.' },
        ...history.map(msg => ({
          role: msg.role.toLowerCase(),
          content: msg.content
        })),
        { role: 'user', content: query }
      ];

      const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages,
        temperature: 0.7,
        max_tokens: 500
      });

      return completion.data.choices[0].message.content;
    } catch (error) {
      console.error('OpenAI API Error:', error);
      throw new Error('Failed to generate AI response');
    }
  }

  async analyzeQuery(query) {
    try {
      const analysis = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'Analyze the following customer query and provide category, sentiment, and priority.'
          },
          {
            role: 'user',
            content: query
          }
        ],
        temperature: 0.3,
        max_tokens: 200
      });

      return JSON.parse(analysis.data.choices[0].message.content);
    } catch (error) {
      console.error('Query Analysis Error:', error);
      throw new Error('Failed to analyze query');
    }
  }

  async generateSummary(conversation) {
    try {
      const messages = conversation.map(msg => `${msg.role}: ${msg.content}`).join('\n');
      
      const summary = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'Summarize the following conversation concisely.'
          },
          {
            role: 'user',
            content: messages
          }
        ],
        temperature: 0.3,
        max_tokens: 150
      });

      return summary.data.choices[0].message.content;
    } catch (error) {
      console.error('Summary Generation Error:', error);
      throw new Error('Failed to generate summary');
    }
  }

  async suggestFollowUp(conversation) {
    try {
      const messages = conversation.map(msg => `${msg.role}: ${msg.content}`).join('\n');
      
      const suggestion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'Suggest a follow-up action or question based on this conversation.'
          },
          {
            role: 'user',
            content: messages
          }
        ],
        temperature: 0.7,
        max_tokens: 100
      });

      return suggestion.data.choices[0].message.content;
    } catch (error) {
      console.error('Follow-up Suggestion Error:', error);
      throw new Error('Failed to suggest follow-up');
    }
  }
}

export default new AIService(); 