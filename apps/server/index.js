import express from 'express';
import cors from 'cors';
import { greet, testIntegration } from '@shared/utils';

const app = express();
const PORT = 3000;

// Enable CORS
app.use(
  cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }),
);

// Middleware to log all requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Root route for greeting
app.get('/', (req, res) => {
  const message = greet('This is greeting from common code');
  console.log(`Sending message: "${message}"`);
  res.send(message);
});

// Status route - ensure this is correctly defined
app.get('/api/status', (req, res) => {
  console.log('Status endpoint called');
  const status = {
    status: 'online',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    utilsIntegration: testIntegration(),
  };
  res.json(status);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
