# Staged Change Review — jay.developer redesign

---

## Critical

### 1. `tailwind.config.js` — `content` array removed
The entire `content: [...]` array was deleted and not replaced. Tailwind v3 requires this to scan source files and determine which utility classes to emit. Without it, production builds (`npm run build`) will purge every utility class and the site will have no styling in production. Dev mode may appear fine due to the Vite watcher, which hides this.

**Fix:** Restore the `content` array:
```js
content: [
  './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
  './storage/framework/views/*.php',
  './resources/views/**/*.blade.php',
  './resources/js/**/*.vue',
],
```

---

### 2. `Skills.vue` — teal pill logic is broken
`isTeal(group.skill)` checks for a `.skill` key that doesn't exist on any group object. The data structure (from both the controller and the mockup) uses `group.teal` (a boolean flag). `TEAL_GROUPS.has(undefined)` is always `false`, so no group will ever render with teal pills.

**Fix:** Either check `group.teal` directly (matching the mockup), or confirm the controller actually sends a `skill` key on each group and update `TEAL_GROUPS` to match those values.

```vue
<!-- Option A — use the teal boolean from the data -->
:class="group.teal ? 'bg-teal-dim text-teal border border-teal-border' : 'bg-accent-dim text-accent border border-accent-deep'"
```

---

### 3. `Home.vue` — stale unused props still declared
`defineProps` still declares `sectionHeaderContainerClass`, `sectionHeaderClass`, `subContainerStylingClass`, `subContainerContentStylingClass`, `subContainerContentSpacerClass`, `footerStylingClass`, and `verticalAlignClass`. None of these are passed down to any component anymore. If the Laravel controller still sends them, they're silently ignored. If the controller is ever cleaned up to stop sending them, Vue will throw prop validation warnings for any that are marked `required: true`.

**Fix:** Remove all seven stale prop declarations from `Home.vue`'s `defineProps`.

---

### 4. `app.blade.php` — `font-sans` overrides the intended font
`<body class="font-sans antialiased bg-bg">` applies `font-sans`, which resolves to **Figtree** (from the existing `theme.extend.fontFamily.sans` in `tailwind.config.js`). A Tailwind class selector has higher specificity than the `body {}` element rule in `app.css`, so `font-family: 'Segoe UI', system-ui, sans-serif` set in the CSS is overridden. The page renders in Figtree, not the design-system font.

**Fix:** Replace `font-sans` with `font-ui` on the `<body>` tag (the `ui` font family was added to the Tailwind config in this same change):
```html
<body class="font-ui antialiased bg-bg">
```

---

## Should Fix

### Inline styles — convert to Tailwind classes

All components apply many inline styles that have direct Tailwind equivalents. Below is the full list, grouped by component.

#### `Home.vue` — Nav

| Element | Current inline style | Tailwind equivalent |
|---|---|---|
| `<nav>` | `height: 60px; padding: 0 28px` | `h-[60px] px-7` |
| Logo `<span>` | `font-size: 16px; letter-spacing: -0.01em; margin-right: auto` | `text-base tracking-tight mr-auto` |
| Nav link `<a>` | `font-size: 13px; padding: 6px 14px` | `text-[13px] px-3.5 py-1.5` |

#### `About.vue`

| Element | Current inline style | Tailwind equivalent |
|---|---|---|
| Eyebrow `<div>` | `font-size: 11px; letter-spacing: 0.12em; margin-bottom: 14px` | `text-[11px] tracking-[0.12em] mb-3.5` |
| Bio card `<div>` | `padding: 22px 24px; font-size: 13px; line-height: 1.75; color: var(--color-text-secondary)` | `px-6 py-[22px] text-[13px] leading-[1.75] text-text-secondary` |
| Avatar card `<div>` | `padding: 24px 16px` | `py-6 px-4` |
| Avatar circle `<div>` | `width: 72px; height: 72px; border: 2px solid var(--color-accent-deep); font-size: 24px` | `w-[72px] h-[72px] border-2 border-accent-deep text-2xl` |
| Name `<div>` | `font-size: 13px` | `text-[13px]` |
| Location `<div>` | `font-size: 11px; color: var(--color-text-tertiary)` | `text-[11px] text-text-tertiary` |
| Status dot `<span>` | `width: 6px; height: 6px; flex-shrink: 0` | `w-1.5 h-1.5 shrink-0` |

#### `Resume.vue`

| Element | Current inline style | Tailwind equivalent |
|---|---|---|
| Eyebrow `<div>` | `font-size: 11px; letter-spacing: 0.12em; margin-bottom: 14px` | `text-[11px] tracking-[0.12em] mb-3.5` |
| Outer container `<div>` | `padding: 28px` | `p-7` |
| Paper frame `<div>` | `background: #faf9f7; border-radius: 8px; width: 100%; padding: 8px` | `bg-[#faf9f7] rounded-lg w-full p-2` |
| Resume `<img>` | `width: 100%; height: auto; display: block; border-radius: 4px` | `w-full h-auto block rounded` |
| Download `<a>` | `font-size: 13px` | `text-[13px]` |

#### `Skills.vue`

| Element | Current inline style | Tailwind equivalent |
|---|---|---|
| Eyebrow `<div>` | `font-size: 11px; letter-spacing: 0.12em; margin-bottom: 14px` | `text-[11px] tracking-[0.12em] mb-3.5` |
| Skill group card `<div>` | `padding: 18px 20px; margin-bottom: 14px` | `px-5 py-[18px] mb-3.5` |
| Group label `<div>` | `font-size: 11px; letter-spacing: 0.03em; margin-bottom: 12px` | `text-[11px] tracking-[0.03em] mb-3` |
| Pills container `<div>` | `gap: 6px` | `gap-1.5` |
| Pill `<span>` | `font-size: 11px; padding: 4px 12px; cursor: default` | `text-[11px] px-3 py-1 cursor-default` |

#### `Contact.vue`

| Element | Current inline style | Tailwind equivalent |
|---|---|---|
| `<section>` | `min-height: 280px` | `min-h-[280px]` |
| Eyebrow `<div>` | `font-size: 11px; letter-spacing: 0.12em; margin-bottom: 14px` | `text-[11px] tracking-[0.12em] mb-3.5` |
| Status bar `<div>` | `gap: 8px; padding: 10px 16px; margin-bottom: 20px` | `gap-2 px-4 py-2.5 mb-5` |
| Status dot `<span>` | `width: 6px; height: 6px; flex-shrink: 0` | `w-1.5 h-1.5 shrink-0` |
| Status text `<span>` | `font-size: 12px` | `text-xs` |
| Contact grid `<div>` | `gap: 20px` | `gap-5` |
| Email card `<div>` | `padding: 24px` | `p-6` |
| Card label `<div>` | `font-size: 11px; letter-spacing: 0.1em; margin-bottom: 8px` | `text-[11px] tracking-[0.1em] mb-2` |
| Email `<a>` | `font-size: 13px; letter-spacing: 0.02em; text-decoration: none; border-bottom: 1px solid var(--color-accent-deep); padding-bottom: 2px` | `text-[13px] tracking-[0.02em] no-underline border-b border-accent-deep pb-0.5` |
| Logo card `<div>` | `padding: 24px; gap: 8px` | `p-6 gap-2` |
| Logo text `<div>` | `font-size: 20px` | `text-xl` |
| Location `<div>` | `font-size: 11px; letter-spacing: 0.08em` | `text-[11px] tracking-[0.08em]` |

#### `Footer.vue`

| Element | Current inline style | Tailwind equivalent |
|---|---|---|
| `<footer>` | `padding: 20px 28px; font-size: 12px; letter-spacing: 0.04em` | `px-7 py-5 text-xs tracking-[0.04em]` |

---

### `app.blade.php` — missing `scroll-smooth` on `<html>`
The QA checklist (PROMPT 10, item 6) calls for `scroll-smooth` on the `<html>` element so anchor-link scrolling to sections is animated. It's missing entirely.

**Fix:**
```html
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
```

---

## Nice to Have

### 1. `Footer.vue` — hardcoded copyright year
`© 2026 joseph collier` hardcodes the year. In Vue templates, `{{ new Date().getFullYear() }}` works directly and keeps this accurate without future edits.

---

### 2. `Skills.vue` — pill hover effects not in the spec
Pills have `hover:bg-teal-border hover:text-white` and `hover:bg-accent-deep hover:text-white` applied, but pills are non-interactive (`cursor: default`). The mockup and `.cursorrules` specify no hover behaviour on pills. Hover effects on non-interactive elements is confusing UX. Remove the hover classes or remove `cursor-default` and decide intentionally.

---

### 3. Repeated eyebrow pattern — candidate for a shared component
The exact same eyebrow `<div>` pattern appears identically in `About.vue`, `Resume.vue`, `Skills.vue`, and `Contact.vue`. Consider extracting it into a tiny `<Eyebrow>` component or a single `@layer components` CSS class (`.eyebrow`) to avoid drift between the four copies.

---

### 4. `Contact.vue` — missing `<script setup>` block
The entire `<script setup>` block was deleted. The component works without it, but every other SFC in the project uses `<script setup>` and Vue 3 conventions expect it. Adding an empty `<script setup></script>` keeps the file consistent.

---

### 5. `Resume.vue` — `VueEasyLightbox` left in but props for it removed
`VueEasyLightbox` and its `visibleRef`/`indexRef`/`showImg`/`onHide` logic were kept (good). However, the `resumeUrl` download link is added with `v-if="resumeUrl"` but `resumeUrl` is never passed from `Home.vue` — it's declared in `Home.vue`'s props but the component call is `<Resume :resume-url="resumeUrl ?? null" />` which does pass it through. Verify the Laravel controller also sends this prop; if not, the download link will silently never appear.
