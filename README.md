# 🌙 BlogOrbit - Personal Blogging Platform

A modern, full-stack blogging platform built by **moon**.

## 🚀 Features

- ✅ User Authentication (JWT-based)
- ✅ Create, Edit, Delete Blog Posts
- ✅ Comment System with Replies
- ✅ Dark/Light Theme Support
- ✅ Responsive Design
- ✅ Real-time Statistics
- ✅ Post Moderation Tools
- ✅ Rich Text Editor

## 🛠️ Tech Stack

### Frontend
- React 19
- React Router
- Axios
- Tailwind CSS
- React Hot Toast

### Backend
- Node.js
- Express
- MongoDB (Mongoose)
- JWT Authentication
- bcryptjs

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- npm or yarn

### Setup Instructions

1. **Clone the repository**
```bash
cd BlogOrbit-main
```

2. **Install Backend Dependencies**
```bash
cd backend
npm install
```

3. **Install Frontend Dependencies**
```bash
cd frontend
npm install
```

4. **Configure Environment Variables**

Create a `.env` file in the `backend` folder:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
PORT=5000
```

5. **Start the Application**

**Backend (Terminal 1):**
```bash
cd backend
npm start
```

**Frontend (Terminal 2):**
```bash
cd frontend
npm start
```

6. **Access the Application**
Open your browser and navigate to: `http://localhost:3000`

## 📁 Project Structure

```
BlogOrbit-main/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   └── utils/
│   └── package.json
└── README.md
```

## 🎯 Usage

1. **Sign Up**: Create a new account
2. **Login**: Access your dashboard
3. **Create Posts**: Write and publish blog posts
4. **Manage Content**: Edit or delete your posts
5. **Interact**: Comment on posts and reply to comments
6. **Customize**: Switch between light and dark themes

## 🔐 Security Features

- Password encryption with bcryptjs
- JWT-based authentication
- Protected API routes
- Input sanitization
- CORS configuration

## 📝 License

MIT License

## 👤 Author

**moon** 🌙

---

Built with ❤️ by moon
