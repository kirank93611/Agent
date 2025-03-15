# CS-AI Dashboard

A modern, responsive dashboard application built with React, Vite, and Material-UI.

## Features

- 🚀 Built with Vite.js for lightning-fast development
- 🎨 Material-UI components with custom theme
- 📱 Fully responsive design
- 🔐 Authentication system
- 🎯 Dashboard with multiple views:
  - Overview
  - Customers
  - Account
  - Settings
- 🌙 Modern sidebar navigation
- ⚡ Lazy-loaded routes for optimal performance

## Tech Stack

- React 18
- Vite
- Material-UI v5
- React Router v6
- Framer Motion for animations

## Project Structure

```
cs-ai/
├── src/
│   ├── components/
│   │   ├── dashboard/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── TopNav.jsx
│   │   │   └── ...
│   │   └── common/
│   ├── views/
│   │   ├── Landing.jsx
│   │   ├── Login.jsx
│   │   └── ...
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

## Theme Configuration

The application uses a custom Material-UI theme with:

- Primary color: #1a365d
- Sidebar background: #1F2937
- Warning/Action buttons: #ED6C02
- Custom typography settings
- Responsive breakpoints

## Getting Started

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

4. Build for production
```bash
npm run build
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Environment Setup

Make sure you have:
- Node.js 16+ installed
- npm 7+ or yarn installed
- Modern browser with ES6 support

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
