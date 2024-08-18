import { createClient } from 'redis';

const client = createClient({
  url: 'redis://localhost:6379', 
});

client.on('error', (err) => console.error('Redis Client Error:', err));

async function connectRedis() {
  try {
    await client.connect();
    console.log('Connected to Redis');
  } catch (err) {
    console.error('Failed to connect to Redis:', err);
  }
}

connectRedis();

export default client;

