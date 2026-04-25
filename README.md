# Task Management System (MERN Stack)

A full-stack Task Management application built with **Next.js (Frontend)** and **Express.js + MongoDB (Backend)**.

---

## 🚀 Features

- User Authentication (Register/Login)
- JWT-based Secure Login System
- Create / Update / Delete Tasks
- Task Dashboard
- Protected Routes
- Responsive UI
- Secure API with validation & rate limiting

---

## 🛠️ Tech Stack

### Frontend:

- Next.js
- React.js
- Tailwind CSS

### Backend:

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication

---

## 📁 Project Structure

/frontend → Next.js App
/backend → Express API Server

---

## ⚙️ Setup Instructions

## 1. Clone Repository

```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

## 2. Backend Setup

```bash
cd backend
npm install
```

### Create `.env` file:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Run backend:

```bash
npm run dev
```

Backend runs on:
http://localhost:4000

---

## 3. Frontend Setup

```bash
cd frontend
npm install
```

### Create `.env.local`:

```
VITE_API_URL=http://localhost:4000
```

### Run frontend:

```bash
npm run dev
```

Frontend runs on:
http://localhost:5173

---

## 🔐 Security Features

- Password hashing using bcrypt
- JWT authentication
- HTTP-only cookie storage
- Input validation & sanitization
- Rate limiting on auth routes
- Protected API routes

---

## 📊 API Endpoints

### Auth

- POST /auth/register
- POST /auth/login
- POST /auth/refresh

### Tasks

- GET /tasks
- POST /tasks
- PUT /tasks/:id
- DELETE /tasks/:id
