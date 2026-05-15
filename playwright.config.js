// @ts-check
import { defineConfig, devices } from '@playwright/test';

const projects = [
  {
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] },
  },
  {
    name: 'firefox',
    use: { ...devices['Desktop Firefox'] },
  },
  ...(process.env.CI ? [] : [{
    name: 'webkit',
    use: { ...devices['Desktop Safari'] },
  }]),
];

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
      ['html'],
      ['allure-playwright']
  ], 
  use: {
    trace: 'on-first-retry',
  },

  projects,
});