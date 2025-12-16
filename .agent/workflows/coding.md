---
description: Execute the coding phase, verification, and delivery.
---
1. Read `.agent/rules/agents.md` for the latest coding and testing standards.
2. Read the `implementation-plan.md` and `main-tasks.md` for the current project.
3. **Coding**: Implement the features as described in the plan.
4. **Documentation**: Mark tasks as `[x]` in `main-tasks.md` *synchronously* as you complete them.
5. **Verification**: 
   - Run the application (create a server if needed).
   - Save screenshots, logs, or test results to `[app-name]/docs/evidence/`.
6. **Delivery**: 
   - Create a `dev_log.md` in `[app-name]/docs/logs/` detailing the session.
   - `git push` the branch.
   - `gh pr create` immediately.
7. **MANDATORY COMPLIANCE CHECK**:
   - Read `[app-name]/docs/tasks/main-tasks.md` one last time. Are all completed items checked? If no, fix it.
   - View `[app-name]/docs/evidence/`. Is there a file there? If no, stop and create one.
   - Did you output the PR link?
8. Notify the user that the PR is ready for review.
