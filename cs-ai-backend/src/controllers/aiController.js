import { PrismaClient } from '@prisma/client';
import aiService from '../services/aiService.js';
import vectorService from '../services/vectorService.js';
import queueService from '../services/queueService.js';
import cacheService from '../services/cacheService.js';

const prisma = new PrismaClient();

export const respond = async (req, res) => {
  try {
    const { user_id, query } = req.body;

    // Check cache first
    const cachedResponse = await cacheService.get(`query:${user_id}:${query}`);
    if (cachedResponse) {
      return res.json({ response: cachedResponse, source: 'cache' });
    }

    // Get conversation history
    const history = await vectorService.getRelevantHistory(user_id, query);
    
    // Generate AI response
    const response = await aiService.generateResponse(query, history);
    
    // Store conversation
    const conversation = await prisma.conversation.create({
      data: {
        userId: user_id,
        messages: {
          create: [
            {
              content: query,
              role: 'USER'
            },
            {
              content: response,
              role: 'ASSISTANT'
            }
          ]
        }
      }
    });

    // Store in vector DB
    await vectorService.storeConversation(conversation);

    // Cache the response
    await cacheService.set(`query:${user_id}:${query}`, response);

    res.json({ response, source: 'ai' });
  } catch (error) {
    console.error('AI Response Error:', error);
    res.status(500).json({ error: 'Failed to generate AI response' });
  }
};

export const storeConversation = async (req, res) => {
  try {
    const { user_id, conversation } = req.body;
    
    // Store in PostgreSQL
    const storedConversation = await prisma.conversation.create({
      data: {
        userId: user_id,
        messages: {
          create: conversation.map(msg => ({
            content: msg.text,
            role: msg.role.toUpperCase()
          }))
        }
      }
    });

    // Store in vector DB
    await vectorService.storeConversation(storedConversation);

    res.json({ message: 'Conversation stored successfully' });
  } catch (error) {
    console.error('Store Conversation Error:', error);
    res.status(500).json({ error: 'Failed to store conversation' });
  }
};

export const getHistory = async (req, res) => {
  try {
    const { userId } = req.params;
    
    const conversations = await prisma.conversation.findMany({
      where: { userId },
      include: {
        messages: true
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 10
    });

    res.json({ history: conversations });
  } catch (error) {
    console.error('Get History Error:', error);
    res.status(500).json({ error: 'Failed to retrieve conversation history' });
  }
};

export const scheduleTask = async (req, res) => {
  try {
    const { user_id, task, execute_at } = req.body;
    
    // Create task in database
    const aiTask = await prisma.aITask.create({
      data: {
        userId: user_id,
        type: task.type,
        data: task,
        scheduledFor: execute_at
      }
    });

    // Add to queue
    await queueService.addTask({
      id: aiTask.id,
      userId: user_id,
      task: task,
      executeAt: execute_at
    });

    res.json({ message: 'Task scheduled successfully' });
  } catch (error) {
    console.error('Schedule Task Error:', error);
    res.status(500).json({ error: 'Failed to schedule task' });
  }
}; 