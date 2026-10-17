# Project Guidelines

## Git & GitHub Operations
- **Always use SSH remotes**: Always use `git@github.com:<owner>/<repo>.git` instead of HTTPS. If an HTTPS URL is provided, automatically convert it to SSH.
- **Prevent Credential Manager stalls**: Do not push or pull via HTTPS because Git Credential Manager hangs in background execution waiting for browser sign-in. Use existing SSH keys (`~/.ssh/id_ed25519`).
- **Autonomous workflow**: Execute Git operations (init, add, commit, push) end-to-end without stopping for unnecessary confirmation prompts.
