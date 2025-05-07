# Turborepo Monorepo

A modern full-stack application using Turborepo, pnpm workspaces, React, and Express.

## Project Structure

```
├── apps/
│   ├── client/         # React + TypeScript + Vite frontend
│   └── server/         # Express.js backend
├── packages/
│   ├── ui/             # Shared UI components
│   └── utils/          # Shared utilities
```

## Tech Stack

- **Package Manager**: pnpm
- **Monorepo Tool**: Turborepo
- **Frontend**: React 19, TypeScript, Vite, TailwindCSS 4
- **Backend**: Express.js
- **Linting**: ESLint 9

## Getting Started

### Prerequisites

- Node.js (v18.18.0 or higher)
- pnpm (v10.10.0 or higher)

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Start both client and server in development mode
pnpm start

# Start only the client
pnpm --filter @apps/client dev

# Start only the server
pnpm --filter @apps/server start
```

### Building

```bash
# Build all packages and applications
pnpm build

# Build a specific app
pnpm --filter @apps/client build
```

### Linting

```bash
# Lint all packages and applications
pnpm lint
```

## Workspace Structure

- **apps/client**: React frontend built with Vite
- **apps/server**: Express.js backend
- **packages/ui**: Shared UI components (WIP)
- **packages/utils**: Shared utilities used across applications

## Scripts

- `pnpm start`: Start both client and server
- `pnpm build`: Build all packages and applications
- `pnpm lint`: Lint all packages and applications
- `pnpm test`: Run tests across all packages and applications

## License

ISC
