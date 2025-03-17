import { PineconeClient } from '@pinecone-database/pinecone';
import { encode } from 'gpt-3-encoder';
import openai from '../config/openai.js';

class VectorService {
  constructor() {
    this.pinecone = new PineconeClient();
    this.initialize();
  }

  async initialize() {
    await this.pinecone.init({
      environment: process.env.PINECONE_ENVIRONMENT,
      apiKey: process.env.PINECONE_API_KEY,
    });
    this.index = this.pinecone.Index(process.env.PINECONE_INDEX);
  }

  async generateEmbedding(text) {
    try {
      const response = await openai.createEmbedding({
        model: 'text-embedding-ada-002',
        input: text,
      });
      return response.data.data[0].embedding;
    } catch (error) {
      console.error('Embedding Generation Error:', error);
      throw new Error('Failed to generate embedding');
    }
  }

  async storeConversation(conversation) {
    try {
      const messages = conversation.messages;
      const vectors = await Promise.all(
        messages.map(async (message) => {
          const embedding = await this.generateEmbedding(message.content);
          return {
            id: message.id,
            values: embedding,
            metadata: {
              conversationId: conversation.id,
              userId: conversation.userId,
              content: message.content,
              role: message.role,
              timestamp: message.createdAt
            }
          };
        })
      );

      await this.index.upsert({
        upsertRequest: {
          vectors
        }
      });

      return true;
    } catch (error) {
      console.error('Store Conversation Vector Error:', error);
      throw new Error('Failed to store conversation vectors');
    }
  }

  async getRelevantHistory(userId, query, limit = 5) {
    try {
      const queryEmbedding = await this.generateEmbedding(query);
      
      const queryResponse = await this.index.query({
        queryRequest: {
          vector: queryEmbedding,
          topK: limit,
          filter: {
            userId: { $eq: userId }
          },
          includeMetadata: true
        }
      });

      return queryResponse.matches.map(match => ({
        content: match.metadata.content,
        role: match.metadata.role,
        score: match.score
      }));
    } catch (error) {
      console.error('Get Relevant History Error:', error);
      throw new Error('Failed to retrieve relevant history');
    }
  }
}

export default new VectorService(); 