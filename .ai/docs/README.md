# jay.developer — Cursor Rebuild Package

Drop these three files into the **root** of your Laravel project before starting.

```
your-project/
├── .cursorrules   ← agent design constraints (auto-loaded by Cursor)
├── PROMPTS.md     ← 10 ordered prompts to paste into Composer
├── MOCKUP.jsx     ← visual + annotation reference (read-only, never import)
└── ...
```

## How to use

1. **Open Cursor** in your project root.
2. Open **Composer** (Cmd+I / Ctrl+I) and switch to **Agent** mode.
3. Paste prompts from `PROMPTS.md` **one at a time**, in order (1 → 10).
4. Wait for each prompt to fully finish before pasting the next.
5. If the agent drifts from the design, paste the relevant section of `MOCKUP.jsx` as context.

## File purposes

| File | Purpose |
|------|---------|
| `.cursorrules` | Sets all colour tokens, typography rules, layout rules, and stack constraints. Cursor loads this automatically — you never need to reference it explicitly in prompts. |
| `PROMPTS.md` | 10 scoped prompts. Each one targets a single component or concern. Keeping them separate prevents the agent from losing context mid-task. |
| `MOCKUP.jsx` | Annotated React reference. Every inline style has a comment showing the equivalent Tailwind class. Use it to sanity-check the agent's output. |

## Tips

- If a prompt produces an unexpected result, paste the corresponding section from `MOCKUP.jsx`
  as additional context and ask the agent to reconcile.
- Prompts 1–2 (token setup) must run before any component prompts.
- Prompt 9 (mobile) and Prompt 10 (QA) are best run last, after all components are done.
- The agent works on `resources/js/Pages/Home.vue` for most prompts.
  If your file is at a different path, update the path in each prompt before pasting.
