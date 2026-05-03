# PrimeOps

Welcome to the **PrimeOps** website repository! PrimeOps is a digital infrastructure and AI automation agency dedicated to building robust backend integrations, AI-powered workflows, and scalable systems for businesses.

## Overview

This repository contains the source code for the PrimeOps landing page and its integrated services, including the comprehensive Digital Infrastructure Audit form and interactive components that demonstrate our capabilities.

### Key Capabilities & Integrations
- **AI Automation:** Custom AI solutions leveraging tools like Vapi AI webhooks.
- **Backend Architecture:** Automated workflows utilizing n8n, Airtable, and Supabase.
- **Scheduling & Communication:** Automated appointment scheduling and confirmation using Cal.com and WhatsApp Cloud API.

## Tech Stack

- **Frontend Environment:** React 19, TypeScript, Vite
- **Styling & Animation:** Tailwind CSS, Framer Motion
- **Backend Proxy:** Node.js, Express, `node-fetch`, `express-rate-limit.`
- **Routing:** React Router DOM
- **Deployment:** Netlify

## Project Structure

```text
PrimeOps/
├── public/                 # Static assets
├── server/                 # Express backend / proxy server
│   └── proxy.js            # Main backend file
├── src/                    # Frontend source code
│   ├── components/         # Reusable React components (Hero, AuditForm, Demo, Services, etc.)
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Application pages (Home, Audit)
│   ├── App.tsx             # Main application component
│   ├── index.css           # Global styles and Tailwind imports
│   └── main.tsx            # Entry point
├── package.json            # Project dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.ts          # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Olamide7/primeops-site.git
   cd PrimeOps
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Environment Variables:
   Copy `.env.example` to `.env` and fill in the required environment variables for your local setup.

### Development Scripts

- **`npm run dev:frontend`**: Starts the Vite frontend development server.
- **`npm run dev`**: Starts the backend proxy server using `nodemon` for auto-reloading.
- **`npm run netlify:dev`**: Runs the Netlify CLI development server (recommended for testing serverless functions/proxy together).
- **`npm run build`**: Compiles TypeScript and builds the frontend for production.
- **`npm start`**: Runs the backend proxy server in production mode.

## Deployment

This site is configured to be deployed on **Netlify**. Ensure that the necessary environment variables are set in your Netlify dashboard before triggering a production build.

---
*Developed by the PrimeOps Team.*
