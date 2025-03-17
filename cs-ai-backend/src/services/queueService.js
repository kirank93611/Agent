import { Queue, Worker } from 'bullmq';
import Redis from 'ioredis';
import { PrismaClient } from '@prisma/client';
import aiService from './aiService.js';

const prisma = new PrismaClient();
const connection = new Redis(process.env.REDIS_URL);

class QueueService {
  constructor() {
    this.taskQueue = new Queue('ai-tasks', {
      connection,
      defaultJobOptions: {
        removeOnComplete: true,
        removeOnFail: false,
      },
    });

    this.initializeWorker();
  }

  initializeWorker() {
    const worker = new Worker('ai-tasks', async (job) => {
      const { id, userId, task } = job.data;

      try {
        let result;
        switch (task.type) {
          case 'FOLLOW_UP':
            result = await aiService.suggestFollowUp(task.conversation);
            break;
          case 'AUTO_REPLY':
            result = await aiService.generateResponse(task.query, task.context);
            break;
          case 'SUMMARIZE':
            result = await aiService.generateSummary(task.conversation);
            break;
          case 'ANALYZE':
            result = await aiService.analyzeQuery(task.query);
            break;
          default:
            throw new Error('Unknown task type');
        }

        // Update task status in database
        await prisma.aITask.update({
          where: { id },
          data: {
            status: 'COMPLETED',
            result,
            completedAt: new Date()
          }
        });

        return result;
      } catch (error) {
        console.error(`Task Processing Error (${id}):`, error);
        
        await prisma.aITask.update({
          where: { id },
          data: {
            status: 'FAILED',
            result: { error: error.message },
            completedAt: new Date()
          }
        });

        throw error;
      }
    }, { connection });

    worker.on('completed', (job) => {
      console.log(`Job ${job.id} completed successfully`);
    });

    worker.on('failed', (job, error) => {
      console.error(`Job ${job.id} failed:`, error);
    });
  }

  async addTask({ id, userId, task, executeAt }) {
    const jobOptions = {
      jobId: id,
      delay: executeAt ? new Date(executeAt).getTime() - Date.now() : 0
    };

    await this.taskQueue.add('process-task', { id, userId, task }, jobOptions);
  }

  async getTaskStatus(taskId) {
    const job = await this.taskQueue.getJob(taskId);
    if (!job) return null;
    
    return {
      id: job.id,
      status: await job.getState(),
      progress: job.progress,
      returnvalue: job.returnvalue,
      failedReason: job.failedReason,
    };
  }
}

export default new QueueService(); 