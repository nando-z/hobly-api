# Hobly API

A robust backend API for Hobly - Services for managing relationships.

## Overview

Hobly API is built with Express.js and TypeScript, providing a secure and scalable backend infrastructure for relationship management services. The API uses MongoDB for data storage and implements various security measures to ensure data integrity and protection.

## Features

- **Express.js Framework**: Fast, unopinionated, minimalist web framework for Node.js
- **TypeScript Support**: Strong typing for better code quality and developer experience
- **MongoDB Integration**: Flexible document database for storing relationship data
- **Security Measures**:
  - Helmet for securing HTTP headers
  - XSS protection
  - MongoDB query sanitization
  - Rate limiting to prevent abuse
- **Authentication**: JWT-based authentication system
- **API Validation**: Request validation using express-validator
- **Hot Reloading**: Development environment with hot reloading for faster development

## Tech Stack

- **Runtime**: Node.js with Bun
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Bun runtime
- MongoDB instance

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/hobly-api.git
   cd hobly-api
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   DATABASE_URL=mongodb://localhost:27017/hobly
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

## API Documentation

API endpoints are organized by functionality:

- `/api/v1/auth` - Authentication endpoints
- `/api/v1/users` - User management
- `/api/v1/relationships` - Relationship management

Detailed API documentation will be available soon.

## Project Structure

```
hobly-api/
├── server/
│   ├── controller/    # Request handlers
│   ├── module/        # Business logic modules
│   ├── routes/        # API routes
│   ├── types/         # TypeScript type definitions
│   ├── index.ts       # Main application setup
│   └── server.ts      # Server initialization
├── .env               # Environment variables
├── .gitignore         # Git ignore file
├── package.json       # Project dependencies
├── tsconfig.json      # TypeScript configuration
└── README.md          # Project documentation
```

## Development

Run the development server with hot reloading:

```bash
pnpm dev
```

## Testing

Run tests using Bun:

```bash
pnpm test
```

## License

This project is licensed under the ISC License.

## Authors

- Ahmed Khalid
- Nand-z

---

Built with ❤️ for better relationship management
