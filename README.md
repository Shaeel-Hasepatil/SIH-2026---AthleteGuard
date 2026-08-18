# AthleteGuard

Computer-vision-based sports performance and injury-prevention system built around pose estimation, rep counting, form scoring, and training-load monitoring.

Built for **Smart India Hackathon 2026** — Software Edition — under the **Fitness & Sports** theme.

## Problem Statement

Athletes and fitness trainees frequently perform exercises with poor form, increasing injury risk and reducing training effectiveness. Access to real-time, expert-level movement feedback is limited outside of professional coaching setups. AthleteGuard uses in-browser pose estimation to give real-time form feedback, rep counts, and training-load insights without specialized hardware.

## Hackathon Demo Scope (36 hours)

- Single exercise: **squat** only
- Rule-based joint-angle thresholds (no ML model training in this phase)
- Rep counting + basic form score (good / needs improvement)
- Live webcam feed in browser, no video storage

> Anything outside this list (multi-exercise support, ML-based form classification, coach dashboard, long-term training-load analytics) is roadmap, not demo. See `docs/roadmap.md`.

## Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React (browser-based) |
| Pose Estimation | MediaPipe (in-browser) |
| Backend | Node.js / Express |
| Database | MongoDB |

## Project Structure

```
AthleteGuard/
├── frontend/           # React app, MediaPipe integration, UI
│   └── src/
│       ├── components/
│       ├── hooks/
│       └── utils/
├── backend/            # Node.js API server
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── config/
├── docs/                # Pitch deck, gap-analysis, roadmap, consent/privacy notes
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (local instance or Atlas connection string)

### Setup

```bash
# clone
git clone <repo-url>
cd AthleteGuard

# frontend
cd frontend
npm install
npm start

# backend (in a new terminal)
cd backend
npm install
npm run dev
```

Create a `.env` file in `backend/` based on `.env.example` with your MongoDB URI and any other secrets. Never commit `.env`.

## Team Roles

| Area | Owner |
|---|---|
| Frontend / UI | TBD |
| Pose Estimation (MediaPipe) | TBD |
| Backend API | TBD |
| Rep Counting / Scoring Logic | TBD |
| Database / Data Model | TBD |
| Pitch, Docs, Demo Prep | TBD |

Fill this table in once roles are assigned — the SIH review process expects clear 6-member role coverage.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for branch naming and PR workflow.

## Privacy & Consent

Camera access requires explicit user consent before any pose data is processed. No raw video is stored or transmitted to the backend — only derived joint-angle/keypoint data, and only with the user's opt-in. See `docs/privacy-notice.md`.
