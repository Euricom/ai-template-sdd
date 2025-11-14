# Spec Initialization: Mock Data Setup

## Feature Description
Mock data setup for Agent Hub Phase 1 MVP

## Context
This is for Agent Hub - a Next.js application where users can post their Claude Code agent files (.md files) and browse files posted by others. This is Phase 1 (MVP) which is frontend-only with mock data.

The initial project setup (Phase 0) has been completed with Next.js 15.5.6, React 19.2.0, TypeScript strict mode, Tailwind CSS v4, and oxlint. The folder structure includes /app, /components, /lib, and /public directories.

**Product Documentation Available:**
- Mission: agent-os/product/mission.md
- Roadmap: agent-os/product/roadmap.md
- Tech Stack: agent-os/product/tech-stack.md

**Tech Stack:**
- Next.js 15.5.6 (App Router)
- TypeScript strict mode
- React 19.2.0
- Tailwind CSS v4
- No database/auth (Phase 1 uses mock data)

**Context from Previous Specs:**
- The initial setup spec explicitly EXCLUDED /lib/mock-data.ts as it was meant to be a separate spec
- Phase 1 features (homepage gallery, detail page, upload form) will need this mock data
- The /lib directory already exists and is ready for mock data

## Specification Created
Date: 2025-11-11
