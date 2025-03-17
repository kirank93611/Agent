# CS-AI Dashboard

A modern, responsive dashboard application with AI-powered customer support automation built with React, Vite, and Material-UI.

## Features

- 🤖 AI-powered customer support automation
- 🧠 Vector-based conversation memory
- 🔄 Automated task scheduling and processing
- 🚀 Built with Vite.js for lightning-fast development
- 🎨 Material-UI components with custom theme
- 📱 Fully responsive design
- 🔐 Authentication system
- 🎯 Dashboard with multiple views:
  - Overview
  - Customers
  - Account
  - Settings
  - AI Chat Interface
- 🌙 Modern sidebar navigation
- ⚡ Lazy-loaded routes for optimal performance

## Tech Stack

### Frontend
- React 18
- Vite
- Material-UI v5
- React Router v6
- Framer Motion for animations

### Backend
- Node.js
- Express.js
- PostgreSQL (via NeonDB/Supabase)
- Prisma ORM
- JWT Authentication
- Redis (via Upstash)
- BullMQ for queue processing
- OpenAI/OpenRouter for AI capabilities
- Pinecone for vector embeddings
- Docker for containerization

## Project Structure

### Frontend (cs-ai)
```
cs-ai/
├── src/
│   ├── components/
│   │   ├── dashboard/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── TopNav.jsx
│   │   │   └── ...
│   │   ├── ai/
│   │   │   ├── ChatInterface.jsx
│   │   │   ├── MessageList.jsx
│   │   │   ├── ResponseBubble.jsx
│   │   │   └── AITypingIndicator.jsx
│   │   └── common/
│   ├── views/
│   │   ├── Landing.jsx
│   │   ├── Login.jsx
│   │   ├── AIChat.jsx
│   │   └── ...
│   ├── services/
│   │   ├── aiService.js
│   │   ├── authService.js
│   │   └── api.js
│   ├── theme.js
│   ├── routes.jsx
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

### Backend (cs-ai-backend)
```
cs-ai-backend/
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.js
├── src/
│   ├── config/
│   │   ├── env.js
│   │   ├── redis.js
│   │   ├── pinecone.js
│   │   └── openai.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── customerController.js
│   │   └── aiController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── errorHandler.js
│   │   ├── rateLimit.js
│   │   └── validate.js
│   ├── services/
│   │   ├── authService.js
│   │   ├── aiService.js
│   │   ├── vectorService.js
│   │   ├── queueService.js
│   │   └── cacheService.js
│   ├── queues/
│   │   ├── taskQueue.js
│   │   └── processors/
│   ├── utils/
│   │   ├── logger.js
│   │   ├── helpers.js
│   │   └── embeddings.js
│   └── app.js
├── docker/
│   ├── Dockerfile
│   └── docker-compose.yml
├── tests/
│   ├── integration/
│   └── unit/
├── .env
├── .gitignore
├── package.json
└── README.md
```

## API Endpoints

### AI Endpoints
- `POST /api/ai/respond` - Get AI response for user query
- `POST /api/ai/store-conversation` - Store conversation in vector DB
- `GET /api/ai/get-history/:userId` - Retrieve conversation history
- `POST /api/ai/schedule-task` - Schedule AI tasks

### Auth Endpoints
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/refresh` - Refresh access token

## Environment Variables

### Frontend
```env
VITE_API_URL=http://localhost:3001
VITE_WS_URL=ws://localhost:3001
```

### Backend
```env
# Server
PORT=3001
NODE_ENV=development

# Database
DATABASE_URL=postgresql://...

# Redis
REDIS_URL=redis://...

# AI Services
OPENAI_API_KEY=sk-...
PINECONE_API_KEY=...
PINECONE_ENVIRONMENT=...

# Auth
JWT_SECRET=your-secret-key
```

## Getting Started

### Frontend Setup
1. Clone the repository
```bash
git clone <repository-url>
cd cs-ai
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

### Backend Setup
1. Navigate to backend directory
```bash
cd cs-ai-backend
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
# Edit .env with your configurations
```

4. Run Prisma migrations
```bash
npx prisma migrate dev
```

5. Start the server
```bash
npm run dev
```

### Docker Setup
```bash
cd cs-ai-backend
docker-compose up -d
```

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npx prisma studio` - Open Prisma database GUI
- `npx prisma migrate dev` - Run database migrations
- `npm test` - Run tests
- `npm run lint` - Run ESLint

## Environment Setup

Make sure you have:
- Node.js 16+ installed
- npm 7+ or yarn installed
- PostgreSQL 13+ installed and running
- Redis installed and running
- Modern browser with ES6 support

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
