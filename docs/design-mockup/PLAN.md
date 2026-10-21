# Design refresh — plan

**Branch:** `design-update-2026` currently has staged/uncommitted work on top of commit `92f757c`
("Design system: tokenized UI, home page rebuild, and docs"). This plan proposes a second pass on
top of that — refining typography/hierarchy on the existing single page, and adding a new
`/projects` portfolio page. It's meant to be handed to an implementing agent along with
`NewDesignMockup.jsx` in this same folder.

## Where things stand today

- **Old live site** (`docs/20260706-josephcollier-dev-live.png`/`.html`): light theme, plain
  stacked sections, no real visual identity.
- **Currently staged** (`Home.vue`, `About.vue`, `Skills.vue`, `Contact.vue`, `Footer.vue`): a dark
  theme with a real token system (see `tailwind.config.js` — `bg`, `bg-surface`, `bg-raised`,
  `border`, `text-primary/secondary/tertiary`, `accent` purple, `teal`). Card-based sections:
  Nav → About → Resume → Skills → Contact → Footer. This is a solid base — the plan below builds on
  it rather than replacing it.
- **Bug found in the uncommitted diff:** `Home.vue` line 57-58 has *both* versions of the desktop
  nav wordmark commented out, so the nav currently renders no logo text on desktop (only "J.C." on
  mobile). Fix this regardless of which direction is taken — see "Nav.vue" below.

## Decisions from the interview

1. **Visual direction:** keep the dark theme and purple/teal tokens as-is. "Stand out" means *read
   as more valuable and professional*, not a new color identity.
2. **Reference point:** NYT — professionalism via typographic hierarchy and restraint, not flashy
   graphics.
3. **Portfolio content:** real projects exist now — 3D printing, electronics, and a workshop
   reorganization. These are maker/physical builds (photo-driven), not web-app demos with live
   URLs.
4. **Site structure:** keep Resume/Skills/About/Contact as the single-page scroll — that part
   works. The portfolio does **not** belong there; it becomes its own route, `/projects`.

## Design plan

**Color** — unchanged, reusing the existing tokens exactly (this is a typography/hierarchy pass,
not a palette change):
`bg #0f0f11` · `bg-surface #16161a` · `border #2a2a32` · `text-primary #e8e4f0` ·
`text-secondary #9994aa` · `accent #7f77dd` · `teal #1d9e75`.

**Type** — this is the actual lever for "more professional." Three roles, and notably the first one
already exists unused in `tailwind.config.js`:

- **Editorial serif — `font-resume` (Georgia)**: already defined in the Tailwind config
  (`fontFamily.resume`) but currently applied to nothing. Georgia was NYT's own web body serif for
  over a decade, so this is a well-grounded, zero-new-dependency choice. Use it for the Hero
  name/headline, the About bio paragraph (it's effectively a short personal essay — read as
  editorial, not UI chrome), and all portfolio project titles/decks/body copy.
- **UI sans — Figtree (existing default)**: unchanged. Stays on nav, buttons, pills, eyebrows,
  labels, meta rows — i.e. all "chrome," matching how NYT keeps navigation/bylines in sans while
  headlines/body run serif.
- **Utility mono — system stack (`font-mono`, Tailwind's built-in default, no new font load)**: new,
  small addition. Used only for portfolio project meta (category/date tags) to add a
  documentation/build-log texture appropriate for an engineer's portfolio. Not applied to the
  existing skill pills — those stay as they are.

No new webfonts are loaded. `font-resume` already exists in config; `font-mono` is Tailwind's
built-in default (available even though not in the `extend` block).

**Layout**

- *Resume site (unchanged route, single page):* section order is now **Hero → Resume → Skills →
  About → Contact** (About moved after Skills per feedback — it reads better as a closing/personal
  note rather than the opener now that Hero carries the introduction). Hero = serif name, sans
  role/dateline, availability pill (reuses the existing teal status-dot pattern from Contact), two
  CTAs: "View Portfolio" (→ `/projects`) and "Download Resume" (→ existing resume PDF — no accent
  marks in copy, matches the rest of the site's plain-ASCII convention). About's avatar/name card
  becomes a compact "facts" card (location, focus areas) instead of repeating the name now that
  Hero carries it.
- *Nav bar:* drop the "joseph.collier" wordmark entirely — it's redundant with the Hero name, and
  was actively cramped at mobile widths. Nav is just the link row, right-aligned, with the link
  order following the new section order: `resume · skills · about · projects · contact · github`.
  Give the nav more right padding than left (e.g. `pr-11` vs `pl-7`) so the last link ("github")
  doesn't end up under the scrollbar on desktop Chrome/macOS. Each anchor link should actually
  scroll to its section (`scroll-mt-16` already exists on the section elements for this — keep
  using it so the sticky nav doesn't cover the target). From `/projects`, the resume/skills/about
  links become real navigations back to `/` with a hash (e.g. `/#resume`) rather than in-page
  anchors, since it's a different route.
- *Portfolio (`/projects`, new route):* an editorial masthead header, one featured/lead project
  (large photo + serif headline + deck — NYT lead-story treatment), then a grid of secondary
  project cards below (photo, serif title, sans category/date meta, serif one-line deck, mono tag
  chips). Three real categories to seed: 3D Printing, Electronics, Workshop.

**Also proposed (optional, flag for your review):** the Skills section currently renders ~20
category cards stacked vertically (see `HomeController::index`) — it's the single biggest
"overwhelming wall of text" element working against "looks professional." Proposal: a condensed
"Top Skills" row (8-10 pills) with a "View full skill set" expand toggle that reveals the existing
full categorized list. This is presentation-only — no data changes needed beyond flagging ~8-10
skills as "top" in the existing array structure.

## Proposed file structure

```
resources/js/
  Components/
    Nav.vue                 NEW — extracted from Home.vue; fixes the logo bug; shared by
                             Home.vue and the new Projects.vue; "projects" becomes a real link
                             (/projects) instead of an anchor, others stay #anchors
    Hero.vue                 NEW — name / role / dateline / availability / CTAs
    About.vue                 MODIFIED — bio card unchanged; avatar+name card → compact facts card
    Resume.vue                unchanged
    Skills.vue                 MODIFIED (optional) — add top-skills row + expand toggle
    Contact.vue                 unchanged
    Footer.vue                   unchanged
    Projects/
      PortfolioMasthead.vue        NEW — /projects page header
      FeaturedProject.vue           NEW — lead story treatment
      ProjectCard.vue                 NEW — grid card
  Pages/
    Home.vue                 MODIFIED — composes Nav + Hero + About + Resume + Skills + Contact +
                              Footer; inline nav markup removed in favor of Nav.vue
    Projects.vue              NEW — composes Nav + PortfolioMasthead + FeaturedProject +
                               grid of ProjectCard + Footer
```

**Backend**

- `routes/web.php`: add `GET /projects` → new controller action, rendering `Inertia::render('Projects', [...])`.
- New `App\Http\Controllers\ProjectsController` (or a `projects()` method on `HomeController`) —
  start with a hardcoded array in the controller, same pattern as `$skills` in `HomeController`
  today. A real `Project` model/CMS table is a reasonable future step once the section is proven
  out, not needed for this round.
- Project shape: `{ category, title, deck, date, tags: string[], image, liveUrl?, repoUrl? }`.
  `liveUrl`/`repoUrl` are optional since maker projects mostly won't have either — a project may
  instead have zero links, in which case the card just shows photo + copy (write-up only).

## Assumptions to double check before implementation

- Photos for the 3 seed projects aren't gathered yet — mockup uses placeholder blocks captioned
  "swap with project photography." You'll need at least one good photo per project before this
  ships for real.
- Copy in the mockup (project titles/decks) is placeholder phrasing based on the three categories
  you mentioned — replace with your actual project names/descriptions.
- Skills condensation (above) is my suggestion, not something you confirmed — easy to skip if you'd
  rather leave Skills as-is.

## 4-6 hour implementation roadmap

Ranked for a single focused session. Times assume the mockup above is the accepted design (no
further back-and-forth on layout) and normal familiarity with this Laravel/Inertia/Vue/Tailwind
stack. Do the tiers in order — each is a stable stopping point if time runs out.

**Tier 1 — Foundation (~1-1.5 hr, do first, highest impact-per-minute)**

| Item | Time | Impact | Why it's first |
|---|---|---|---|
| Fix the nav logo bug + commit staged design-system work as baseline | 10-15 min | High | Currently broken (blank nav on desktop); everything else builds on this being clean |
| Extract `Nav.vue`, drop the wordmark, fix right padding/scrollbar overlap | 30-40 min | Medium | Needed by both pages; cheap now, annoying to retrofit later |
| Add `Hero.vue` (serif name, role, availability badge, CTAs) | 45-60 min | **Highest** | The single biggest "reads as more professional" lever — there's currently no headline moment at all |
| Reorder sections (Resume → Skills → About → Contact) + apply Georgia to Hero/About | 20-30 min | Medium | Mostly markup reordering + class changes, tokens already exist |

**Tier 2 — The actual ask: portfolio content (~2-2.5 hr, highest total value)**

| Item | Time | Impact | Why it's second |
|---|---|---|---|
| `/projects` route: controller, `Projects.vue`, masthead, featured project, card grid | 1.5-2 hr | **Highest** | This is the thing you actually said you wanted ("flesh out my portfolio") — everything in Tier 1 is polish, this is new substance |
| Cross-page nav wiring (`/#resume` etc. from `/projects`) | 15 min | Medium | Small but breaks the "feels like one site" illusion if skipped |
| Placeholder → real copy pass for the 3 seed projects (titles/decks you write) | 15-30 min | High | Cheap once you decide what to say; the mockup's placeholder text is not far off but is generic |

**Tier 3 — Professionalism signals (~1-1.5 hr, do if time remains)**

| Item | Time | Impact | Notes |
|---|---|---|---|
| Skills condensation (top-skills row + expand toggle) | 45-60 min | Medium-High | Fixes the single most "unpolished" element on the current page (20-category wall); optional but strongly recommended |
| About "facts" card (location/focus/currently) | 20 min | Low-Medium | Small visual win, mostly bundled into Tier 1's About work already |
| Accessibility pass: visible focus states, alt text on project photos, `aria-expanded` on skills toggle | 20-30 min | Medium | Cheap, and "keyboard/screen-reader works" is itself a quiet signal of engineering quality |

**Tier 4 — Cut first if you're short on time (~30-60 min, lowest ROI this round)**

| Item | Time | Impact | Notes |
|---|---|---|---|
| SEO/meta for the new `/projects` route (title, og:description) | 15-20 min | Low | Matters once the portfolio is real and worth indexing, not urgent day one |
| Feature test for `/projects` returning 200 (Pest, matches existing patterns) | 15 min | Low | Good practice, invisible to visitors |
| Motion/micro-interactions (hover states beyond what's already in the mockup, scroll reveals) | 30-60 min | Low, some downside | The NYT reference you picked argues for restraint here — more animation risks reading *less* professional, not more |

**The one thing outside this estimate entirely:** real photos for the 3 projects. That's not
build time, it's yours — but it's the highest-leverage single input into how the portfolio actually
lands, more than any of the above. Worth doing before or in parallel with Tier 2, since the card
layout in the mockup is designed around having a real image, not the placeholder gradient.

**If you only have 4 hours:** Tier 1 + Tier 2's route/grid (skip real copy polish and Tier 3/4).
You'll have a genuinely upgraded resume page and a working (if placeholder-content) portfolio.
**If you have the full 6:** add Tier 3 in full. Tier 4 is very skippable this round.

## Next steps

1. Review `NewDesignMockup.jsx` (and the rendered preview) against this plan.
2. Decide what to do with the current branch: commit the staged design-system work (with the nav
   logo bug fixed) as the baseline this builds on, or toss it — if tossed, keep a note of why in a
   `.md` file per your instructions rather than just deleting.
3. Hand this plan + the JSX mockup to an implementing agent on a new branch.
