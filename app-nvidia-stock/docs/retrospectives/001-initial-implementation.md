# Retrospective: Initial Implementation of Nvidia Stock App

**Date**: 2025-12-16
**Feature**: Weekly Stock Trend Tracker

## Summary
Successfully implemented the functionality to fetch and display Nvidia stock data using yahoo finance API via a CORS proxy. The application features a glassmorphic design and interactive charts.

## What Went Well
- **Tech Stack Choice**: Using `Chart.js` was straightforward for the line graph requirements.
- **Visuals**: The dark mode with neon green accents meets the "Wow" factor requirement.
- **Data Fetching**: The `corsproxy.io` solution successfully bypassed browser CORS restrictions for the demo.

## Challenges & Issues
- **Process Oversight**: missed the critical step of pushing the branch and opening a Pull Request immediately after coding and local verification.
    - *Impact*: User had to remind about the PR.
    - *Resolution*: Pushed branch and used `gh pr create` to automate PR creation.
- **Task Management**: Forgot to update `main-tasks.md` for the Design phase initially.

## Lessons Learned
1.  **Strict Git Workflow**: Always ensure `git push` and PR creation are the immediate next steps after `git commit`.
2.  **Documentation Sync**: Update task lists *as* work is completed, not just at the end of the session.
3.  **Proxy Stability**: Relying on a public CORS proxy is fine for a demo, but a backend proxy (e.g., Netlify Functions or Vercel) would be required for a production app to ensure reliability and security.
