# Git & GitHub Operational Guidelines

## 1. Always Use SSH for GitHub Remotes
- Whenever pushing a repository, cloning a project, or adding a GitHub remote:
  - **Convert HTTPS to SSH**: If given an HTTPS URL (e.g. `https://github.com/<owner>/<repo>.git`), automatically convert it to SSH format (`git@github.com:<owner>/<repo>.git`).
  - **Set Remote URL**: Use `git remote add origin git@github.com:<owner>/<repo>.git` (or `git remote set-url origin git@github.com:<owner>/<repo>.git`).

## 2. Prevent Interactive Authentication Hangs
- Do NOT use GitHub HTTPS remotes for push/fetch operations.
- HTTPS triggers Windows `git-credential-manager` dialogs or browser OAuth requests that block background commands indefinitely.
- The user's machine has active SSH key authentication (`~/.ssh/id_ed25519`) configured with GitHub (`arpitrangerrr-cell`).

## 3. Autonomous Execution
- When given Git repository URLs or push instructions, initialize, configure remote with SSH, commit, and push immediately without pausing for interactive confirmation.

