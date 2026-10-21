import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const WCAG_AA_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'];

const pages = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
];

for (const { name, path } of pages) {
    test(`${name} (${path}) has no WCAG 2.1 AA violations`, async ({ page }) => {
        await page.goto(path, { waitUntil: 'networkidle' });

        const results = await new AxeBuilder({ page }).withTags(WCAG_AA_TAGS).analyze();

        // Surface the offending selectors in the failure message for quick triage.
        const summary = results.violations.map((v) => ({
            id: v.id,
            impact: v.impact,
            help: v.help,
            nodes: v.nodes.map((n) => n.target).flat(),
        }));

        expect(summary, JSON.stringify(summary, null, 2)).toEqual([]);
    });
}
