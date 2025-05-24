#!/usr/bin/env bun
/**
 * Script to create a new model with Prisma
 * Usage: bun run model:create <ModelName>
 * 
 * This script will:
 * 1. Add the model to schema.prisma
 * 2. Create a migration
 * 3. Generate Prisma client
 */

import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

// Get model name from command line arguments
const modelName = process.argv[2];

if (!modelName) {
  console.error('Please provide a model name');
  console.log('Usage: bun run model:create <ModelName>');
  process.exit(1);
}

// Capitalize first letter for model name
const capitalizedModelName = modelName.charAt(0).toUpperCase() + modelName.slice(1);

// Path to Prisma schema
const schemaPath = path.join(process.cwd(), 'prisma/schema.prisma');

// Check if schema.prisma exists
if (!fs.existsSync(schemaPath)) {
  console.error('Prisma schema not found. Please run "bun run prisma:init" first.');
  process.exit(1);
}

// Read current schema
const schema = fs.readFileSync(schemaPath, 'utf8');

// Create model template
const modelTemplate = `
model ${capitalizedModelName} {
  id        String   @id @default(uuid())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  // Add your fields here
  // Example:
  // name      String
  // email     String  @unique
  // isActive  Boolean @default(true)
  
  @@map("${modelName.toLowerCase()}s")
}
`;

// Append model to schema
fs.writeFileSync(schemaPath, schema + modelTemplate);

console.log(`✅ Model ${capitalizedModelName} added to schema.prisma`);
console.log('⚠️ Please edit the schema to add your fields before creating a migration');
console.log('');
console.log('Next steps:');
console.log('1. Edit prisma/schema.prisma to add your fields');
console.log('2. Run "bun run model:make-migration" to create a migration');
console.log('3. Run "bun run prisma:generate" to update the Prisma client');
