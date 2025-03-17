import redis from '../config/redis.js';

class CacheService {
  constructor() {
    this.defaultTTL = 3600; // 1 hour
  }

  async get(key) {
    try {
      const value = await redis.get(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error('Cache Get Error:', error);
      return null;
    }
  }

  async set(key, value, ttl = this.defaultTTL) {
    try {
      await redis.set(
        key,
        JSON.stringify(value),
        'EX',
        ttl
      );
      return true;
    } catch (error) {
      console.error('Cache Set Error:', error);
      return false;
    }
  }

  async delete(key) {
    try {
      await redis.del(key);
      return true;
    } catch (error) {
      console.error('Cache Delete Error:', error);
      return false;
    }
  }

  async clearPattern(pattern) {
    try {
      const keys = await redis.keys(pattern);
      if (keys.length > 0) {
        await redis.del(keys);
      }
      return true;
    } catch (error) {
      console.error('Cache Clear Pattern Error:', error);
      return false;
    }
  }
}

export default new CacheService(); 