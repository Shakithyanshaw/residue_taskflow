# Task Management System – Phase 1 Plan

## 1. Backend Choice Justification

For this project, I chose **Express.js (Node.js)** as the backend framework.

### Reason:

- Lightweight and fast for REST API development
- Easy integration with MongoDB using Mongoose
- Flexible middleware system (authentication, validation)
- Large ecosystem and community support
- Suitable for scalable and modular API design

---

2. Frontend Choice Justification

For the frontend, I chose Next.js (React framework).

### Reason:

-Built-in routing system
-Server-side rendering (better performance & SEO)
-Easy API integration with backend
-Component-based architecture for reusable UI
-Ideal for modern full-stack applications

## 3. Architecture Overview

### High-Level Architecture:

Frontend (Next.js) → Backend API (Express.js) → Database (MongoDB)

### Backend Structure:

- **Routes Layer** → Handles API endpoints
- **Controller Layer** → Business logic
- **Middleware Layer** → Authentication (JWT)
- **Models Layer** → Mongoose schemas (User, Task)
- **Database Layer** → MongoDB

### Flow:

1. User registers/logs in → receives JWT
2. JWT is sent in Authorization header
3. Middleware verifies token and attaches user
4. User performs CRUD operations on tasks
5. Each task is linked to the authenticated user

---

## 4. Security Considerations

### Authentication & Authorization

- JWT-based authentication
- Protected routes using middleware
- Users can only access their own tasks

### Data Protection

- Password hashing using bcrypt
- Sensitive data excluded (password not returned)

### Input Validation

- Email validation using validator
- Password minimum length enforcement
- Basic request validation in controllers

### Error Handling

- Proper status codes (400, 401, 404, 500)
- No sensitive stack traces exposed

### Potential Improvements

- Add rate limiting (prevent brute force attacks)
- Add input sanitization (prevent XSS, NoSQL injection)
- Use HTTP-only cookies for token storage (better security)
- Add Helmet for security headers
- Implement refresh tokens

---

## 5. Better Tech Choices (Optional Improvements)

- **TypeScript** → Better type safety and maintainability
- **Zod/Joi** → Strong schema validation
- **Redis** → Token/session management
- **Docker** → Containerized deployment
- **Winston/Morgan** → Logging system

---

## 6. Summary

This architecture ensures:

- Secure authentication
- Clean separation of concerns
- Scalable backend structure
- Maintainable and production-ready API design
