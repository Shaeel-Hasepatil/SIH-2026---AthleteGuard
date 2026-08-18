# AthleteGuard Roadmap

## Phase 0 — Hackathon Demo (36 hours)
- Squat exercise only
- Rule-based joint-angle thresholds for form scoring
- Rep counter
- In-browser webcam + MediaPipe, no video storage
- Basic React UI showing live feedback

## Phase 1 — Post-Hackathon MVP
- Add 2–3 more exercises (e.g., push-up, lunge)
- Session history stored in MongoDB (keypoint/angle data only, not video)
- Basic user accounts

## Phase 2 — ML-Based Form Classification
- Replace rule-based thresholds with a trained model for form quality scoring
- Validate scoring against sports-science literature / expert-labeled data
- Address 2D single-camera pose estimation accuracy limitations (occlusion, depth ambiguity)

## Phase 3 — Coach Dashboard & Training Load
- Coach-facing view for monitoring multiple athletes
- Training-load tracking over time
- Data model and architecture updated to support multi-user coach relationships

## Out of Scope for Hackathon Demo
- Multi-exercise ML classification
- Coach dashboard
- Long-term training-load analytics
- Mobile app
