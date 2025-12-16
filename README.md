# Lab My Assistant 01

This repository serves as a workspace for AI-assisted development, enforcing strict protocols for quality, documentation, and verification.

## 📜 Development Guidelines (.agent/rules/agents.md)

All agents working in this repository must strictly adhere to the rules defined in `.agent/rules/agents.md`. Key pillars include:

*   **Documentation First**: Tasks, analysis, and plans must be created *before* coding.
*   **Synchronous Updates**: Documentation (task lists, logs) must be updated in real-time as work progresses.
*   **Evidence Collection**: Testing is not complete without proof. Screenshots, logs, and test results must be saved to `docs/evidence/`.
*   **Immediate Delivery**: Work is not "done" until it is pushed and a Pull Request is created.
*   **Safety**: No dangerous commands or auto-merging.

## 🤖 Workflow Shortcodes

To streamline the development process, use the following shortcodes to trigger standard workflows:

| Command | Description |
| :--- | :--- |
| `/task` | **Start Pre-Development**: Setup requirements, task breakdown, and implementation plans. |
| `/coding` | **Execute Coding Phase**: Implement features, verify with evidence, and verify via PR. |
| `/retrospective` | **Reflect**: Generate a retrospective log (feelings/process). |
| `/feedback` | **Align**: Solicit user feedback on the recent session. |
| `/learn` | **Improve**: Update `AGENTS.md` rules based on lessons learned. |

## 📂 Repository Structure

- `.agent/workflows/`: Definitions for the shortcode workflows.
- `.agent/rules/agents.md`: The single source of truth for development rules.
- `[app-name]/`: Source code for individual applications (e.g., `app-nvidia-stock`).
