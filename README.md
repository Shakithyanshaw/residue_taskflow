# Task Management System (Full Stack)

A full-stack Task Management application built using:

- **Frontend:** Next.js (React)
- **Backend:** Express.js (Node.js)
- **Database:** MongoDB
- **Authentication:** JWT

---

## 🚀 Live Demo
[https://prescripto.vercel.app/](https://residue-taskflow.vercel.app/)

---

## 🚀 Features

- User Registration & Login
- Secure JWT Authentication
- Protected Routes
- Create, Read, Update, Delete Tasks
- User-specific task management
- Responsive UI (Next.js)
- Error & loading states

---

## 🛠️ Tech Stack

### Frontend

- Next.js
- React.js
- Tailwind CSS / CSS Modules

### Backend

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcryptjs

---

## 📁 Project Structure

```
project/
│── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
│── frontend/
│   ├── components/
│   ├── pages/ or app/
│   ├── services/ (API calls)
│   └── styles/
```

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```bash
git clone <your-repo-url>
cd project
```

---

## 🔧 Backend Setup

```bash
cd backend
npm install
```

Create `.env`:

```env
PORT=4000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm start
```

Backend runs on:
http://localhost:4000

---

## 💻 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:
http://localhost:5173

---

## 🔐 API Endpoints

### Auth

- POST /api/user/register
- POST /api/user/login
- GET /api/user/me
- PUT /api/user/profile
- PUT /api/user/password

### Tasks (Protected)

- GET /api/tasks/gp
- POST /api/tasks/gp
- GET /api/tasks/:id/gp
- PUT /api/tasks/:id/gp
- DELETE /api/tasks/:id/gp

---

## 🔑 Authentication

Send token in headers:

```
Authorization: Bearer <token>
```

---

## 🛡️ Security Features

- Password hashing (bcrypt)
- JWT authentication
- Protected routes
- User-based authorization
- Input validation

---

## 🚀 Deployment

### Backend

- Render / Railway / Vercel

### Frontend

- Vercel (recommended for Next.js)

Steps:

1. Deploy backend
2. Add environment variables
3. Deploy frontend
4. Update API base URL

---

## 📄 .env.example

### Backend

```
MONGODB_URL=
JWT_SECRET=
```

### Frontend

```
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```

---

## 📌 Future Improvements

- Rate limiting
- Refresh tokens
- Input sanitization
- Role-based access
- Notifications / reminders

---

## 📬 Conclusion

This is a complete full-stack Task Management System with secure authentication, clean architecture, and scalable design.
