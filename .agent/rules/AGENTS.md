# Development Guidelines

## General Best Practices
- **Code Quality**: Write clean, readable, and maintainable code. Use meaningful variable and function names.
- **Consistency**: Follow the existing coding style and conventions of the project.
- **Documentation**: Comment complex logic and properties. Keep documentation up-to-date.
- **Error Handling**: Implement robust error handling. Don't simply suppress errors; log or handle them gracefully.
- **Modularity**: Keep functions and components small and focused on a single responsibility (SRP).
- **Version Control**: Write clear and descriptive commit messages.
- **Other**: Each file line of code not more than 1,000 line of codes. If more than 1,000 line of codes, split it into multiple files.

## Project Structure
- **Root Directory**: The root workspace should only contain configuration files (e.g., `README.md`, `.gitignore`, `AGENTS.md`) and documentation.
- **Application Source**: All application source code must be contained within a dedicated subdirectory named after the application (e.g., `my-app/`, `app-assistant/`). Do not place source code files directly in the root workspace.
- **Separation of Concerns**: For projects with distinct frontend and backend components, organize them into dedicated subdirectories within the main application folder (e.g., `app-name/frontend` and `app-name/backend`) to maintain clear boundaries.

## Documentation Standards
- **Comprehensive Docs**: Maintain detailed documentation for every stage of development. This includes:
    - **Tasks**: Clearly defined atomic units of work.
    - **Analysis & Research**: Notes on technical decisions, alternatives considered, and architectural rationale.
    - **Acceptance Criteria**: Verifiable conditions that must be met for a task to be complete.
    - **Implementation Plan**: A sequenced list of steps to execute the solution.
    - **Lessons Learned**: Insights gained during the process to prevent future issues.
    - **Retrospectives**: Periodic reviews of the workflow to identify improvements.
- **Continuous Updates**: Documentation is a living artifact. Updates must happen **synchronously** with work. If a task is done, check it off immediately. If a design decision changes, update the requirements immediately.
- **Working Logs**: Maintain a `dev_log.md` or session log that records chronological actions, decisions, and outcomes for the current work session. This is different from a Retrospective (which is better for feelings/process improvement).
- **Directory Structure**: Organize documentation within a `docs/` directory in the application folder (e.g., `app-name/docs/`). Recommended structure:
    - `tasks/`: Task tracking and checklists.
    - `analysis/`: Research, requirements, and design analysis.
    - `plans/`: Implementation plans and execution steps.
    - `retrospectives/`: Lessons learned and retrospective logs.
    - `logs/`: Chronological development working logs.
    - `evidence/`: Screenshots, logs, and test results verifying functionality.

## Safety Rules
- **No Dangerous Commands**: Do not use commands that can cause irreversible data loss or system instability (e.g., `rm -rf /`, formatting drives) without explicit, confirmed user authorization.
- **No Force Operations**: Avoid using `--force` or hard reset commands in git unless specifically instructed and the consequences are fully understood.
- **Merge Request/Pull Request Protocol**: Never auto-approve merge requests or pull requests. All code changes must be reviewed and approved by the user before merging.

## Testing Standards
- **Build Integrity**: Always ensure that the application builds successfully after any changes.
- **Runtime Verification**: Verify that the application can run and start up correctly. Do not assume code works just because it compiles.
- **Evidence Collection**: Gather and save visual evidence (screenshots), test cases, and test results in the project workspace (in `docs/evidence/`). This ensures verifiable proof of functionality.

## Development Workflow

### 1. Pre-Development Checklist
Do not start coding immediately. Ensure the following checklist is complete before writing any code:
- [ ] **Requirements**: Clear understanding of what needs to be built.
- [ ] **Analysis & Research**: Investigation of identifying potential solutions, libraries, or architectural decisions.
- [ ] **Tasks Breakdown**: Detailed list of specific tasks to complete.
- [ ] **Acceptance Criteria**: Definition of done for each task.
- [ ] **Plan**: A step-by-step implementation plan.

### 2. Coding Phase
- **User Initiation**: Do not start the actual coding process automatically. Wait for a specific user command or action to begin implementation.
- **Step-by-Step Implementation**: Follow the plan created in the pre-development phase.

### 3. Post-Coding & Review
- **Immediate Delivery**: Upon completing the coding phase and local verification, **immediately** push the branch and create a Pull Request (PR). Do not wait for the user to ask "Where is the PR?".
- **Manual Review**: **Do not auto-accept or merge the PR.** The user must strictly review the code and manually manage the approval and merge process.
- **Exit Criteria**: Before ending a turn or turn series, verify:
    1.  [ ] Did I update `main-tasks.md`?
    2.  [ ] Did I save evidence to `docs/evidence/`?
    3.  [ ] Did I push the code and create a PR?
