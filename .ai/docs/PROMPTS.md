# PROMPTS.md — joseph.collier Rebuild Prompt Sequence
# Use these in order inside Cursor's Composer (Agent mode).
# Each prompt is self-contained. Paste one at a time and let the agent finish before moving on.
# The .cursorrules file in this repo sets all design constraints — the agent will follow them automatically.

---

## PROMPT 1 — Tailwind token extension

```
Update tailwind.config.js to extend the theme with the custom design tokens defined in .cursorrules.

Add them all under theme.extend.colors using the token names as keys (bg, bg-surface, bg-raised,
border, border-strong, text-primary, text-secondary, text-tertiary, accent, accent-deep, accent-dim,
teal, teal-dim, teal-border). Use the exact hex values from .cursorrules.

Also add the following to theme.extend.fontFamily:
  ui: ['Segoe UI', 'system-ui', 'sans-serif']
  resume: ['Georgia', 'serif']

Do not remove any existing theme config. Only extend.
```

---

## PROMPT 2 — Global CSS variables + base styles

```
In resources/css/app.css, after the existing Tailwind directives, add a :root block that declares
CSS custom properties matching every color token in .cursorrules (e.g. --color-bg, --color-accent, etc.).

Then add these base styles scoped to body:
- background: var(--color-bg)
- color: var(--color-text-primary)
- font-family: 'Segoe UI', system-ui, sans-serif
- font-size: 14px
- -webkit-font-smoothing: antialiased

Do not touch any existing Tailwind utility classes or the @layer directives.
```

---

## PROMPT 3 — Nav component

```
In resources/js/Pages/Home.vue, replace the existing navbar markup with the following design.
Keep all existing Vue/Inertia/Ziggy logic (links, auth props, etc.) — only change the HTML and classes.

Nav spec:
- height: 60px, sticky top-0, z-50, border-b using border token, bg using bg token
- padding: 0 28px, flex row, align-items center
- Logo: text reads "joseph" + an accent-coloured "." + "collier". Font size 16px, weight 700,
  letter-spacing -0.01em. Pushes nav links to the right (margin-right: auto on logo).
- Links: about · resume · skills · contact · github (github opens in new tab)
  - 13px, color text-secondary, hover → text-primary + bg-raised background, border-radius 6px
  - padding 6px 14px each, transition all 0.15s
- Active section highlighting: use IntersectionObserver in onMounted to track which section
  is currently visible and apply bg-raised + text-primary to the matching nav link.

Anchor hrefs: #about, #resume, #skills, #contact, and https://github.com/josephcollierdev for github.
```

---

## PROMPT 4 — About section

```
Rewrite the About section in resources/js/Pages/Home.vue to match this layout.
Preserve the biographyText prop — render it as HTML using v-html (it contains <br> tags).

Section wrapper: id="about", border-b using border token, scroll-mt-16.
Inner padding: 40px 28px.
Eyebrow: "about me" — 11px, weight 600, letter-spacing 0.12em, uppercase, color accent, margin-bottom 14px.

Two-column grid: 1fr + 180px, gap 20px, align-items start.

Left — bio card:
  - bg-surface, border, border-radius 12px, padding 22px 24px
  - text: 13px, line-height 1.75, color text-secondary

Right — avatar card:
  - bg-surface, border, border-radius 12px
  - flex column, align center, justify center, gap 12px, padding 24px 16px
  - Avatar circle: 72px × 72px, border-radius 50%, bg accent-dim, border 2px accent-deep
    contains the letter "J", font-size 24px, weight 700, color accent
  - Name: "joseph collier", 13px, weight 600, color text-primary, text-center
  - Location: small teal dot (6px circle, bg teal) + "Brooklyn, NY", 11px, color text-tertiary

On screens < 640px: stack the grid to a single column.
```

---

## PROMPT 5 — Resume section

```
Rewrite the Resume section in resources/js/Pages/Home.vue.

Section wrapper: id="resume", border-b, scroll-mt-16.
Inner padding: 40px 28px.
Eyebrow: "resume" — same eyebrow style as About.

Outer container: bg-surface, border, border-radius 12px, padding 28px,
flex column, align-items center, gap 20px.

Inside, render the two existing resume images (resume-2024-r2-1_medium.webp and
resume-2024-r2-2_medium.webp) from storage, each wrapped in a "paper" div:
- bg: #faf9f7, border-radius 8px, width 100%, max-width 440px
- padding 8px (just a frame — the image fills it)
- img: width 100%, height auto, display block, border-radius 4px

Remove any old placeholder text or blur-bar markup entirely.
Preserve the v-if that conditionally shows the download link if a resumeUrl prop exists.
```

---

## PROMPT 6 — Skills section

```
Rewrite the Skills section in resources/js/Pages/Home.vue.
The skillsData array is passed as a prop from the controller.

Section wrapper: id="skills", border-b, scroll-mt-16.
Inner padding: 40px 28px.
Eyebrow: "skills" — same eyebrow style.

For each skill group, render a card:
- bg-surface, border, border-radius 12px, padding 18px 20px, margin-bottom 14px

Inside each card:
- Group label: 11px, weight 600, color text-secondary, letter-spacing 0.03em, margin-bottom 12px
- Pills container: flex wrap, gap 6px
- Each pill: border-radius 20px, padding 4px 12px, font-size 11px, weight 500, no cursor pointer

Pill colour logic (two variants):
  DEFAULT:  bg accent-dim, color accent, border 1px accent-deep
  TEAL:     bg teal-dim, color teal, border 1px teal-border

Apply TEAL variant to any group whose skill key is "security-authorizations" or "cyber-certs".
All other groups use DEFAULT.
```

---

## PROMPT 7 — Contact section

```
Rewrite the Contact section in resources/js/Pages/Home.vue.

Section wrapper: id="contact", scroll-mt-16. No border-b (it's the last section before footer).
Inner padding: 40px 28px. Min-height so the section doesn't feel cramped: min-height 280px.
Eyebrow: "contact" — same eyebrow style.

Status bar (above the grid):
- flex row, gap 8px, align-items center
- bg teal-dim, border 1px teal-border, border-radius 8px, padding 10px 16px, margin-bottom 20px
- Small teal dot (6px, bg teal) + text: "Available for projects & remote work"
  text: 12px, weight 500, color teal

Two-column grid: 1fr 1fr, gap 20px.

Left card — Email:
  - bg-surface, border, border-radius 12px, padding 24px
  - Label: "Email" — 11px, weight 600, color text-tertiary, uppercase, letter-spacing 0.1em, margin-bottom 8px
  - Link: josephcollier.contact@gmail.com
    color accent, font-size 13px, letter-spacing 0.02em, no text-decoration,
    border-bottom 1px accent-deep, padding-bottom 2px, hover → color text-primary

Right card — Logo:
  - bg-surface, border, border-radius 12px, padding 24px
  - flex column, align center, justify center, gap 8px
  - "joseph" + accent-coloured "." + "dev" — font-size 20px, weight 700, color text-primary
  - "Brooklyn · NYC" — 11px, color text-tertiary, letter-spacing 0.08em

On screens < 640px: stack grid to single column.
```

---

## PROMPT 8 — Footer

```
Replace the existing footer in resources/js/Pages/Home.vue with:

- padding: 20px 28px
- text-align center
- font-size 12px, color text-tertiary, letter-spacing 0.04em
- border-top 1px border token
- Text: "© 2026 joseph collier · fullstack & cybersecurity"

Remove the old sticky/fixed positioning. The footer should be normal document flow.
Remove any nested "music" div or hidden elements that existed in the original markup.
```

---

## PROMPT 9 — Mobile polish pass

```
Do a responsive pass over resources/js/Pages/Home.vue for viewports < 640px (Tailwind sm: breakpoint).

Apply these specific fixes:
1. Nav: hide the full logo text, show "J.C." instead (add sm:hidden / hidden sm:block spans).
2. About grid: switch to single column (grid-cols-1 below sm, grid-cols-[1fr_180px] at sm+).
3. Contact grid: switch to single column below sm.
4. Skills pills: ensure pill font-size stays 11px — don't scale down further on mobile.
5. Section inner padding: reduce to 24px 16px on mobile, 40px 28px on sm+.
6. Resume pages: remove the 440px max-width cap on mobile — let them be full width.

Do not change anything else. Only add responsive variants to existing classes/styles.
```

---

## PROMPT 10 — Final QA checklist

```
Do a final review pass on resources/js/Pages/Home.vue and fix any of the following if found:

1. Any hardcoded colour hex that isn't from the token list in .cursorrules → replace with the
   correct Tailwind token class or CSS variable.
2. Any font-weight above 700 → reduce to 700.
3. Any box-shadow or drop-shadow utility → remove it.
4. Any gradient class (bg-gradient-*, from-*, to-*, via-*) → remove it.
5. Any position: fixed or Tailwind fixed class on non-nav elements → change to sticky or static.
6. Confirm the nav has scroll-smooth on the <html> element (add to app.blade.php if missing).
7. Confirm each section has the correct scroll-mt-16 class for sticky-nav offset.
8. Confirm the github link opens target="_blank" rel="noopener noreferrer".
9. Confirm no section has both a border-b and is immediately followed by another element
   with border-t — that would double the divider line.
10. Run `npm run build` and confirm no Tailwind purge warnings about the custom token classes.
    If any token classes are missing from the safelist, add them to the safelist array in
    tailwind.config.js.

Report what you changed.
```
