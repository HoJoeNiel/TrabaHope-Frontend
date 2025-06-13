# 🚀 TrabaHope – AI-Powered Job Platform

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Firebase Auth](https://img.shields.io/badge/Firebase-Auth-FFCA28?logo=firebase)](https://firebase.google.com/)

TrabaHope is an intelligent hiring platform connecting **job seekers** and **recruiters** through AI-enhanced matching. Featuring resume analysis, smart recommendations, and real-time application tracking, it transforms traditional job searching into a personalized experience.

**Live Demo**: Coming soon...

![TrabaHope Dashboard Preview](https://via.placeholder.com/800x400?text=Dashboard+Screenshot)

## ✨ Key Features

### 👤 Job Seeker Experience
- **AI Job Matching**: Get recommended jobs based on resume analysis
- **Application Tracker**: Real-time status updates (Applied → Interview → Hired)
- **Resume Insights**: AI-powered feedback on missing skills and improvements
- **Career Suggestions**: Personalized career path recommendations
- **Interview Management**: Accept/decline invitations
- **Profile Builder**: Add work experience and contact details
- **Favorites System**: Save interesting job postings
- **Dashboard Analytics**: Track application success rates and trends

### 🧑‍💼 Recruiter Portal
- **Job Posting Manager**: Create and edit job listings
- **AI Candidate Ranking**: Automatically prioritize applicants by match score
- **Application Pipeline**: Manage candidates (Hire/Reject/Interview)
- **Interview Scheduling**: Coordinate interviews within platform
- **Resume Access**: Direct PDF viewing of applicant resumes
- **Company Analytics**: Dashboard with job performance metrics

### 🤖 AI Capabilities
- **Resume-Job Matching**: Cosine similarity scoring with vector embeddings
- **Candidate Ranking**: Intelligent applicant prioritization
- **Resume Analysis**: Skill gap identification and profile suggestions
- **Career Recommendations**: Data-driven career path suggestions

## 🛠️ Tech Stack

### Core Framework
- React 19 + TypeScript
- React Router Dom (Navigation)
- Tanstack Query (Data Fetching and Mutation)
- Zustand (State Management)

### Styling & UI
- Tailwind CSS (Utility-first CSS)
- Shadcn/UI (Accessible Components)
- Material UI (Supplementary Components)

### Services
- Firebase Authentication (User Management)
- Cloudinary (Resume/Image Storage)
- AI Backend (Python-based recommendation engine)

## 🧩 Project Structure
```bash

src/
├── components/   # Reusable UI components
├── helpers/      # Helper functions
├── hooks/        # Custom hooks
├── lib/          # Utility functions 
├── mocks/        # Mock data
├── pages/        # Route-based pages
├── schema/       # Schema for yup form validation
├── services/     # API clients and service wrappers
├── store/        # Zustand state stores
├── types/        # TypeScript interfaces
