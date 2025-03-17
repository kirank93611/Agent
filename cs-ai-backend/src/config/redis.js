import { Redis } from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);

redis.on('error', (err) => {
  console.error('Redis Client Error:', err);
});

redis.on('connect', () => {
  console.log('Redis Client Connected');
});

export default redis; 