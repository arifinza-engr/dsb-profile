---
description: Repository Information Overview
alwaysApply: true
---

# PT. Duta Samudera Bahari Website Information

## Summary

A Next.js-based corporate website for PT. Duta Samudera Bahari, a company specializing in maritime crew recruitment, training, and placement services. The website showcases company services, news, gallery, and contact information.

## Structure

- **src/app**: Next.js app router pages and layouts
- **src/components**: Reusable UI components organized by type
- **src/content**: Static content and data files
- **src/lib**: Utility functions, constants, and types
- **public**: Static assets like images and icons

## Language & Runtime

**Language**: TypeScript
**Version**: TypeScript 5.x
**Framework**: Next.js 16.0.0
**React Version**: 19.2.0
**Build System**: Next.js built-in
**Package Manager**: npm

## Dependencies

**Main Dependencies**:

- next (16.0.0): React framework
- react (19.2.0): UI library
- react-dom (19.2.0): DOM renderer for React
- date-fns (4.1.0): Date utility library
- lucide-react (0.548.0): Icon library
- class-variance-authority (0.7.1): UI styling utility
- tailwind-merge (3.3.1): Tailwind CSS utility

**Development Dependencies**:

- typescript (5.x): TypeScript compiler
- eslint (9.x): Code linting
- tailwindcss (4.x): CSS framework
- @types/react (19.x): React type definitions
- @types/node (20.x): Node.js type definitions

## Build & Installation

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint
```

## Main Files & Resources

**Entry Points**:

- src/app/page.tsx: Homepage component
- src/app/layout.tsx: Root layout component

**Configuration Files**:

- next.config.ts: Next.js configuration
- tsconfig.json: TypeScript configuration
- package.json: Project dependencies and scripts

**Key Data Files**:

- src/content/data.json: Company and gallery information
- src/lib/constants.ts: Application constants and content

## Project Structure

The website follows Next.js App Router architecture with TypeScript and Tailwind CSS for styling. It's organized into logical sections including homepage, services, news, gallery, and contact pages. The application uses static data from JSON files and constants, with components structured by functionality (layout, sections, UI).
