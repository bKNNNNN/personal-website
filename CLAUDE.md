# CLAUDE.md - Personal Website

## Project Overview

Pierrick's personal website built with Astro.

## Tech Stack

- **Framework**: Astro
- **Styling**: TailwindCSS
- **Backend**: Convex (serverless)
- **Language**: TypeScript

## Code Guidelines

- ALL code in English (variables, functions, comments, logs)
- Run `/review-changes` before every git commit

## Commands

```bash
npm install       # Install dependencies
npm run dev       # Start dev server
npm run build     # Production build
```

---

## Workflow

- **Branch**: `<type>/<issue-number>-<description>` from `main`
- **Commit**: `<type>: <description>` (English, lowercase, max 72 chars)
- **PR**: Link with `Closes #XX`, squash merge, delete branch
- **Board**: Issues tracked in GitHub Project "claude-apps"
- **Labels**: `/setup-labels` to configure, `type/*` + `size/*` required per issue
