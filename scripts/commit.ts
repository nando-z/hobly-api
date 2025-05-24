#!/usr/bin/env bun
/**
 * Sleek Git Commit Script
 * Usage: bun run commit "Your commit message"
 * 
 * This script provides a standardized way to create commits with prefixes
 * and emojis for better readability and consistency.
 */

import { execSync } from 'child_process';
import * as readline from 'readline';

// Available commit types with emojis
const COMMIT_TYPES = {
  feat: '✨ feat',      // New feature
  fix: '🐛 fix',        // Bug fix
  docs: '📚 docs',      // Documentation
  style: '💎 style',    // Code style/formatting
  refactor: '♻️ refactor', // Code refactoring
  perf: '🚀 perf',      // Performance improvements
  test: '🧪 test',      // Tests
  build: '🛠️ build',    // Build system
  ci: '⚙️ ci',          // CI/CD
  chore: '🧹 chore',    // Chores/maintenance
  revert: '⏪ revert',  // Revert changes
};

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Get commit message from command line arguments or prompt user
const commitMessage = process.argv[2];

if (!commitMessage) {
  console.log('❌ Please provide a commit message');
  console.log('Usage: bun run commit "Your commit message"');
  process.exit(1);
}

// Display available commit types
console.log('\n📋 Available commit types:');
Object.entries(COMMIT_TYPES).forEach(([key, value]) => {
  console.log(`  ${value}: ${key}`);
});

// Prompt for commit type
rl.question('\n🔤 Enter commit type (default: feat): ', (type) => {
  // Use default if empty
  const commitType = type ? type.toLowerCase() : 'feat';
  
  // Check if valid commit type
  if (!Object.keys(COMMIT_TYPES).includes(commitType)) {
    console.log(`❌ Invalid commit type: ${commitType}`);
    rl.close();
    process.exit(1);
  }
  
  // Format commit message with emoji prefix
  const formattedMessage = `${COMMIT_TYPES[commitType]}: ${commitMessage}`;
  
  console.log(`\n📝 Commit message: "${formattedMessage}"`);
  
  // Confirm commit
  rl.question('\n✅ Proceed with commit? (Y/n): ', (answer) => {
    if (answer.toLowerCase() === 'n') {
      console.log('❌ Commit aborted');
      rl.close();
      return;
    }
    
    try {
      // Execute git commit
      execSync(`git commit -m "${formattedMessage}"`, { stdio: 'inherit' });
      console.log('✅ Commit successful!');
      
      // Ask if user wants to push
      rl.question('\n🚀 Push changes to remote? (y/N): ', (pushAnswer) => {
        if (pushAnswer.toLowerCase() === 'y') {
          try {
            execSync('git push', { stdio: 'inherit' });
            console.log('✅ Push successful!');
          } catch (error) {
            console.error('❌ Push failed:', error);
          }
        }
        rl.close();
      });
    } catch (error) {
      console.error('❌ Commit failed:', error);
      rl.close();
    }
  });
});
