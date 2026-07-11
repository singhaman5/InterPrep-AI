# InterPrep.AI

<p align="center">
  <img src="https://img.shields.io/badge/React-18-blue?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-18-green?logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-4.18-black?logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Firebase-auth-orange?logo=firebase&logoColor=white" alt="Firebase" />
  <img src="https://img.shields.io/badge/OpenRouter-AI-purple?logo=ai&logoColor=white" alt="OpenRouter" />
</p>

A modern AI-powered interview practice platform built with React, Node.js, Express, MongoDB, Firebase authentication, and OpenRouter AI integration.

## 🚀 Project Overview

InterviewIQ.AI helps users prepare for technical interviews with resume analysis, role-based question generation, and mock interview tracking. The app supports Google sign-in, resume uploading, and intelligent question generation based on user profile and resume content.

## 📦 Features

- Google authentication with Firebase
- Resume upload and AI-powered resume parsing
- Role and experience-based interview question generation
- Interview history tracking
- JWT-based authentication with secure cookies
- MongoDB persistence for users and interview sessions
- Responsive modern UI built with React and Tailwind CSS

## 🧭 Folder Structure

- `client/` — React frontend
- `server/` — Express backend

## ⚙️ Prerequisites

- Node.js v18+ or newer
- npm
- MongoDB account or connection string
- Firebase project and Google OAuth credentials
- OpenRouter API key

## 🔧 Environment Variables

Create `.env` files for both `client` and `server` with the following values.

### `server/.env`

```env
PORT=8000
MONGODB_URL=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
OPENROUTER_API_KEY=<your-openrouter-api-key>
```

### `client/.env`

```env
VITE_FIREBASE_API_KEY=<your-firebase-api-key>
VITE_FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>
VITE_FIREBASE_PROJECT_ID=<your-firebase-project-id>
VITE_FIREBASE_STORAGE_BUCKET=<your-firebase-storage-bucket>
VITE_FIREBASE_MESSAGING_SENDER_ID=<your-firebase-messaging-sender-id>
VITE_FIREBASE_APP_ID=<your-firebase-app-id>
```

> Note: The frontend uses Vite env variables prefixed with `VITE_`.

## 🧪 Installation

Clone the repository:

```bash
git clone <your-github-repo-url>.git
cd 3.interviewIQ
```

Install dependencies for both client and server:

```bash
cd client
npm install
cd ../server
npm install
```

## ▶️ Running the Project

Start the backend server:

```bash
cd server
npm run dev
```

Start the frontend app:

```bash
cd ../client
npm run dev
```

The frontend typically runs at `http://localhost:5173` or the next available port.

## ✅ Recommended Workflow

1. Set up the environment variables in `server/.env` and `client/.env`
2. Start the backend first
3. Start the frontend
4. Visit the app in the browser
5. Sign in with Google and begin using the resume analysis and interview features

## 🛠️ Development Notes

- Backend routes are defined under `server/routes`
- AI integration is handled in `server/services/openRouter.service.js`
- Resume parsing uses `pdfjs-dist` on the backend
- Redux state management is configured in `client/src/redux`

## 📁 Important Files

- `server/index.js` — Express app entrypoint
- `server/controllers/auth.controller.js` — Google auth and logout
- `server/controllers/interview.controller.js` — resume analysis and question generation
- `client/src/App.jsx` — main React routes and initial auth state
- `client/src/pages/Home.jsx` — landing page UI
- `client/src/components/Step1SetUp.jsx` — interview setup form

## 🧾 Notes

- Ensure the backend URL in `client/src/App.jsx` points to your running server
- Cookies are used for authentication, so make sure `withCredentials: true` is enabled in Axios requests
- If OpenRouter returns safety metadata, the backend sanitizes it before parsing JSON

---

## 📬 Contact

If you have questions, bug reports, or collaboration ideas, feel free to reach out.

- **Author:** Aman Singh
- **Project:** InterviewIQ.AI

---

## ⭐ Support

If you find this project useful, please consider giving it a star on GitHub. Your support helps improve the app and reach more users.

---

## ❤️ Made with love by Aman Singh

> "Build something people love and share it with the world."
