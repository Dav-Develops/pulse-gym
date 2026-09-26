# PULSE PERFORMANCE - Elite Multi-Page Gym Web App

A high-performance modern React + Vite web application converted from the multi-page single-file architecture of `pulse_performance_multi_page_gym.html`.

## Features

- **Multi-Page Routing**: Complete client-side routing with `react-router-dom` across:
  - **Home** (`/`): High-energy hero, 3D interactive neon emblem, stats counter, facility highlights.
  - **About Us** (`/about`): Legacy & philosophy, high-performance training standards, and interactive Coach Profiles modal.
  - **Classes** (`/classes` or `/projects`): Filterable class catalog by intensity (HIIT, Strength, Combat, Mind) and embedded interactive BMI & Caloric Expenditure Calculator.
  - **Schedule** (`/schedule` or `/skills`): Dynamic weekly timetable filtered by day of the week with seat booking modal integration.
  - **Membership** (`/membership` or `/technologies`): Interactive monthly/annual billing toggle (Save 20%) with plan comparison and trial activation.
  - **Contact & Free Trial** (`/contact`): 7-Day trial pass application form, venue operating info, and interactive FAQ accordion.
  - **Authentication** (`/login`, `/register`): Dark neon glassmorphic login and sign-up with Redux state persistence.
- **Interactive Modals**:
  - Class Seat Reservation Modal (prefilled class title & time slot).
  - Trainer Biography Modal (coach background, specialties, and credentials).
- **Interactive Health Metric**:
  - Live BMI & Maintenance Calorie calculator with real-time health category classification.
- **Redux State Management**:
  - UI Slice: Modals, active filters, billing toggle, toast alerts.
  - Auth Slice: User session, JWT token, login/register thunks.
  - Camera Slice: 3D scene controls.
- **3D Visualization**:
  - Interactive Three.js + React Three Fiber animated neon wireframe emblem.
- **Styling**:
  - Dark-mode glassmorphic theme with neon lime (`#CCFF00`) and cyan (`#00F0FF`) accents, custom scrollbars, and micro-interactions.
- **Backend Server (`server/`)**:
  - Express.js backend with JWT authentication, MongoDB User schema, and trial/booking endpoints.

---

## Getting Started

### 1. Client (React + Vite)

From the project root:

```bash
# Install dependencies
npm install

# Start Vite development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Backend Server (Optional)

From the `server/` directory:

```bash
cd server
npm install
npm run dev
```

Server runs on [http://localhost:5000](http://localhost:5000) (proxied via Vite on `/api`).
