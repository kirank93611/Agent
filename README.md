# CS-AI: AI-Powered Operations Platform

Transform your operational workflows with AI-powered automation. Achieve higher CSAT scores, streamline compliance processes, and empower your team to focus on strategic initiatives.

## 🚀 Features

- 📈 95%+ CSAT Achievement Rate
- 🔒 Automated Compliance Checks
- ⚡ Operational Task Management
- 🤖 AI-Powered Support Automation
- 📊 Real-time Analytics
- 🔄 Workflow Optimization

## 🛠 Tech Stack

### Frontend
- React.js
- Material-UI (MUI)
- Framer Motion
- React Router
- Context API

### Backend
- Node.js
- Express
- PostgreSQL
- Prisma ORM
- Redis
- JWT Authentication

## 🏗 Project Structure

```
cs-ai/
├── frontend/          # React frontend application
│   ├── public/        # Static files
│   └── src/
│       ├── components/# Reusable components
│       ├── views/     # Page components
│       ├── routes/    # Route configurations
│       └── theme/     # MUI theme customization
│
└── backend/           # Node.js backend application
    ├── src/
    │   ├── prisma/   # Database schema and migrations
    │   └── routes/   # API routes
    └── tests/        # Backend tests
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL
- Redis
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cs-ai.git
   cd cs-ai
   ```

2. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   
   # Configure environment variables
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Backend Setup**
   ```bash
   cd backend
   npm install
   
   # Configure environment variables
   cp .env.example .env
   # Edit .env with your configuration
   
   # Initialize database
   npx prisma migrate dev
   ```

### Environment Configuration

#### Frontend (.env)
Required environment variables for the frontend:
```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_API_VERSION=v1
REACT_APP_AUTH_TOKEN_KEY=auth_token
```

#### Backend (.env)
Required environment variables for the backend:
```env
PORT=5000
DATABASE_URL="postgresql://username:password@localhost:5432/cs_ai_db"
JWT_SECRET=your_jwt_secret_here
OPENAI_API_KEY=your_openai_api_key_here
```

### Running the Application

1. **Start the Backend**
   ```bash
   cd backend
   npm run dev
   ```

2. **Start the Frontend**
   ```bash
   cd frontend
   npm start
   ```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 🧪 Testing

```bash
# Run frontend tests
cd frontend
npm test

# Run backend tests
cd backend
npm test
```

## 📝 Development Guidelines

1. **Code Style**
   - Follow ESLint configuration
   - Use Prettier for code formatting
   - Follow component naming conventions

2. **Git Workflow**
   - Create feature branches from `develop`
   - Use conventional commits
   - Submit PRs for review

3. **Environment Variables**
   - Never commit actual .env files
   - Update .env.example when adding new variables
   - Document all environment variables

## 🔐 Security

- All sensitive data must be stored in environment variables
- Follow security best practices for API endpoints
- Implement rate limiting for API routes
- Use secure session management

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support, email support@example.com or join our Slack channel. 