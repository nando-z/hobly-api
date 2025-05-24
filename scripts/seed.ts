#!/usr/bin/env bun
/**
 * Database seeder script
 * Usage: bun run db:seed
 * 
 * This script populates the database with initial data
 */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');
  
  try {
    // Add your seeding logic here
    // Example:
    
    // Create users
    /*
    const user1 = await prisma.user.upsert({
      where: { email: 'admin@example.com' },
      update: {},
      create: {
        email: 'admin@example.com',
        name: 'Admin User',
        role: 'ADMIN',
        // Add other fields as needed
      },
    });
    
    console.log('Created user:', user1.email);
    */
    
    console.log('✅ Seeding completed successfully');
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
