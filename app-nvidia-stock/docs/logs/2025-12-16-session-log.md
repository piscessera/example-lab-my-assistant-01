# Development Working Log: Nvidia Stock App

## Session: 2025-12-16

### 1. **Initialization & Planning**
-   **Structure**: Created project directory `app-nvidia-stock` and `docs/` structure (`analysis`, `tasks`, `plans`).
-   **Requirements**: Defined core features (Week trend, Chart, Current Price) and "Wow" aesthetics (Nvidia Green, Glassmorphism).
-   **Task List**: Created `docs/tasks/main-tasks.md` with Pre-Development, Development, and Post-Development phases.

### 2. **Research Phase**
-   **Decision**: User requested **Yahoo Finance API**.
-   **Constraint**: Identified CORS issue with using Yahoo Finance API directly in the browser.
-   **Solution**: Selected `corsproxy.io` as the client-side proxy solution for the MVP.
-   **Updates**: Updated `requirements.md` and `main-tasks.md` to reflect these technical decisions.

### 3. **Implementation Phase**
-   **Plan**: Created `docs/plans/implementation-plan.md` outlining the file structure and logic flow.
-   **Coding**:
    -   `index.html`: Scaffolding with CDN links for Chart.js and Phosphor Icons.
    -   `style.css`: Implemented Cyberpunk/Dark Mode theme with CSS variables and glassmorphism cards.
    -   `app.js`: logical implementation:
        -   Fetch data from `query1.finance.yahoo.com` via proxy.
        -   Calculate percentage change.
        -   Render Chart.js instance with gradient fills.
    -   *Self-Correction*: Marked development tasks as completed in `main-tasks.md`.

-   **Verification & Testing**
    -   **Action**: Started local server `npx serve ./app-nvidia-stock -p 3000`.
    -   **Result**: 
        -   Visuals: Confirmed "Wow" factor design (Dark mode, Green glow).
        -   Data: Confirmed real-time price ($176.67 at time of test) and negative trend logic (Red styling).
        -   **Evidence**: Saved screenshot to `docs/evidence/verification_screenshot.png`.
    -   **Documentation**: Created `README.md` with run instructions.

### 5. **Oversights & Corrections**
-   **Issue 1**: Forgot to mark "Finalize Design Concept" as done updates in task list.
    -   *Fix*: Updated `main-tasks.md`.
-   **Issue 2**: Forgot to push code and create PR immediately after coding.
    -   *Fix*: 
        -   Created branch `feature/nvidia-stock-app`.
        -   Pushed changes to origin.
        -   Created Pull Request #1 via `gh pr create`.
