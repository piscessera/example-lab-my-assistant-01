---
description: Execute the coding phase, verification, and delivery.
---
1. Read `AGENTS.md` for the latest coding and testing standards.
2. Read the `implementation-plan.md` and `main-tasks.md` for the current project.
3. **Coding**: Implement the features as described in the plan.
4. **Documentation**: Mark tasks as `[x]` in `main-tasks.md` *synchronously* as you complete them.
5. **Verification**: 
   - Run the application (create a server if needed).
   - Verify functionality using tools (browser_subagent, run_command).
   - **Evidence**: Save screenshots, logs, or test results to `[app-name]/docs/evidence/`.
6. **Delivery**: 
   - Create a `dev_log.md` in `[app-name]/docs/logs/` detailing the session.
   - `git push` the branch.
   - `gh pr create` immediately.
7. Notify the user that the PR is ready for review.
