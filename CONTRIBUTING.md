# Contributing to AthleteGuard

Quick rules so 6 people can push code without stepping on each other during the hackathon.

## 1. Never push directly to `main`
`main` should always be in a working, demo-able state.

## 2. Branch naming
Branch off `main` using this pattern:

```
feature/<short-description>
fix/<short-description>
docs/<short-description>
```

Examples:
- `feature/pose-estimation`
- `feature/rep-counter`
- `feature/backend-api`
- `fix/squat-angle-threshold`
- `docs/pitch-deck`

## 3. Workflow

```bash
git checkout main
git pull origin main
git checkout -b feature/your-feature-name

# ... make changes ...

git add .
git commit -m "Add squat angle detection logic"
git push origin feature/your-feature-name
```

Then open a Pull Request into `main` on GitHub.

## 4. Pull Requests
- Keep PRs small and focused on one thing
- Write a one-line description of what changed and why
- During the hackathon crunch, self-merge is fine if no one's around to review — just don't merge broken code
- Delete the branch after merging

## 5. Commits
- Commit often, in small logical chunks
- Write clear messages: `Add rep counter hook` not `update stuff`

## 6. Before you push
- Make sure `npm start` / `npm run dev` still runs without errors
- Don't commit `.env`, `node_modules/`, or any secrets/API keys

## 7. Conflicts
If you get a merge conflict:
```bash
git checkout main
git pull origin main
git checkout feature/your-branch
git merge main
# resolve conflicts in your editor, then:
git add .
git commit
git push
```

When in doubt, ask in the team chat before force-pushing anything.
