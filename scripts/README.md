# Hobly API Scripts

This directory contains utility scripts for the Hobly API project.

## Available Scripts

### Model Management

- **create-model.ts**: Create a new Prisma model
  ```bash
  pnpm run model:create <ModelName>
  ```

### Database Management

- **seed.ts**: Seed the database with initial data
  ```bash
  pnpm run db:seed
  ```

### Git Workflow

- **commit.ts**: Create standardized git commits with prefixes and emojis
  ```bash
  pnpm run commit "Your commit message"
  ```

## Commit Types

When using the commit script, you can choose from the following commit types:

| Type     | Emoji | Description               |
|----------|-------|---------------------------|
| feat     | ✨    | New feature               |
| fix      | 🐛    | Bug fix                   |
| docs     | 📚    | Documentation             |
| style    | 💎    | Code style/formatting     |
| refactor | ♻️    | Code refactoring          |
| perf     | 🚀    | Performance improvements  |
| test     | 🧪    | Tests                     |
| build    | 🛠️    | Build system              |
| ci       | ⚙️    | CI/CD                     |
| chore    | 🧹    | Chores/maintenance        |
| revert   | ⏪    | Revert changes            |
