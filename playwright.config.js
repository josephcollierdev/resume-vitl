import { defineConfig, devices } from '@playwright/test';

/**
 * Accessibility audit runner. Boots the two servers the Inertia app needs
 * (Laravel for routing, Vite for assets) and points Chromium at the PHP server.
 * See tests/a11y/wcag.spec.js.
 */
export default defineConfig({
    testDir: './tests/a11y',
    fullyParallel: true,
    reporter: 'list',
    use: {
        baseURL: 'http://127.0.0.1:8000',
        trace: 'on-first-retry',
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
    webServer: [
        {
            command: 'php artisan serve --port=8000',
            url: 'http://127.0.0.1:8000',
            reuseExistingServer: !process.env.CI,
            timeout: 120_000,
        },
        {
            command: 'npm run dev',
            url: 'http://127.0.0.1:5173',
            reuseExistingServer: !process.env.CI,
            timeout: 120_000,
        },
    ],
});
