```markdown
# CampusNova - Smart University Operating System

A complete full-stack SaaS platform for modern university management with role-based dashboards, real-time analytics, and an innovation incubation hub.

## Features

### 🎓 For Students
- Attendance tracking
- Marks and assignments
- Placement portal
- Startup incubation
- Academic analytics
- Gamification (XP, badges, leaderboards)

### 👨‍🏫 For Teachers
- Attendance management
- Marks upload
- Assignment creation
- Student monitoring
- Startup idea review

### 👨‍👩‍👧 For Parents
- Child's attendance
- Marks and assignments
- Notices and alerts
- Teacher remarks

### ⚙️ For Admins
- Complete system management
- Department, year, section creation
- User management
- Analytics dashboard
- Notification system

## Tech Stack

### Frontend
- React 18 + Vite
- Tailwind CSS
- React Router DOM
- Framer Motion
- Axios
- Recharts
- Lucide React Icons

### Backend
- Node.js + Express
- MongoDB
- JWT Authentication
- bcrypt
- REST APIs

## Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB
- npm or yarn

### Installation

#### 1. Clone the repository
\`\`\`bash
git clone https://github.com/SkZaraSultana/campusnova.git
cd campusnova
\`\`\`

#### 2. Setup Backend
\`\`\`bash
cd server
npm install
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret
npm run dev
\`\`\`

#### 3. Setup Frontend
\`\`\`bash
cd client
npm install
cp .env.example .env
npm run dev
\`\`\`

Frontend: http://localhost:5173
Backend: http://localhost:5000

## Project Structure

```
campusnova/
├── client/                 # React + Vite frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── layouts/        # Layout components
│   │   ├── pages/          # Page components
│   │   ├── dashboards/     # Dashboard layouts
│   │   ├── context/        # Context API
│   │   ├── hooks/          # Custom hooks
│   │   ├── services/       # API services
│   │   ├── utils/          # Utilities
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/                 # Express backend
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── controllers/        # Route handlers
│   ├── middleware/         # Auth & validation
│   ├── config/             # Configuration
│   ├── utils/              # Utilities
│   ├── server.js
│   └── package.json
│
└── README.md
```

## Development Phases

### Phase 1: ✅ Project Setup
- React + Vite configuration
- Express backend setup
- MongoDB connection
- Folder structure
- Environment variables

### Phase 2: 🔐 Authentication System
- User models (Student, Teacher, Parent, Admin)
- JWT authentication
- Role-based access control
- Protected routes

### Phase 3: 🔑 Login System
- 4-role login page
- Modern card-based UI
- Role-based redirection

### Phase 4: 📊 Dashboard Layouts
- Responsive sidebar
- Top navigation
- Profile dropdown
- Dark/Light mode
- Glassmorphism UI

### Phase 5-8: Dashboard Features
- Student Dashboard
- Teacher Dashboard
- Parent Dashboard
- Admin Dashboard

### Phase 9: 💡 Innovation Hub
- Startup idea submission
- Mentor assignment
- Idea review system

### Phase 10: 📈 Analytics
- Recharts integration
- Department performance
- Attendance analytics
- Placement analytics

## API Documentation

[API docs will be added in Phase 2]

## Contributing

This is an educational project. Feel free to fork and contribute!

## License

MIT

## Author

**SkZaraSultana**

---

Built with ❤️ for modern universities
```
