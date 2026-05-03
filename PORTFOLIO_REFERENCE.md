# Raj Gupta Portfolio Reference

This document is the implementation reference for the portfolio build requested in `codex_exact_replica_prompt.md`. It defines the structure, visual system, motion system, reusable components, image slot mapping, interaction rules, and the concrete file layout for the static multi-page site.

## 1. Site Map

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Cinematic landing page with hero, selected projects, about preview, skills accordion, milestone counters, journal preview |
| About | `about.html` | Expanded biography, milestones, certifications marquee, role cards, journal preview |
| Projects | `projects.html` | Projects overview page with hero and staggered editorial grid |
| Project Detail | `project-detail.html` | Reusable single-project template for future expansion |
| Journal | `journal.html` | Journal archive page with hero and 5-post grid |
| Journal Detail | `journal-detail.html` | Reusable long-form article template |
| Contact | `contact.html` | Contact hero, floating-label form, success state, connected footer content |

## 2. Design Tokens

### Core Palette

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#0a0a0a` | Primary page background |
| `--color-bg-secondary` | `#111111` | Section blocks, cards, overlay surfaces |
| `--color-bg-tertiary` | `#151515` | Alternate panel background |
| `--color-text` | `#f2ede4` | Main text |
| `--color-text-muted` | `#8e877d` | Labels, subdued copy |
| `--color-text-dim` | `#4b4742` | Watermark, low emphasis text |
| `--color-border` | `rgba(255, 255, 255, 0.07)` | Default borders |
| `--color-border-strong` | `rgba(255, 255, 255, 0.18)` | Hover/focus borders |
| `--color-overlay` | `rgba(0, 0, 0, 0.5)` | Generic image overlay |
| `--color-overlay-heavy` | `rgba(0, 0, 0, 0.68)` | Hero/contact overlays |
| `--color-accent-soft` | `#d6c0a2` | Minor accents, shimmer, rules |

### Typography

| Token | Value |
|---|---|
| `--font-display` | `'Playfair Display', Georgia, serif` |
| `--font-body` | `'DM Sans', 'Inter', sans-serif` |
| `--font-mono` | `'DM Sans', 'Inter', sans-serif` |
| `--text-hero` | `clamp(64px, 11vw, 148px)` |
| `--text-h1` | `clamp(48px, 7vw, 96px)` |
| `--text-h2` | `clamp(34px, 5vw, 64px)` |
| `--text-h3` | `clamp(24px, 3vw, 34px)` |
| `--text-body-lg` | `clamp(18px, 1.8vw, 22px)` |
| `--text-body` | `clamp(15px, 1.4vw, 18px)` |
| `--text-small` | `14px` |
| `--text-label` | `11px` |
| `--text-nav` | `13px` |

### Spacing + Layout

| Token | Value |
|---|---|
| `--section-y` | `clamp(80px, 10vw, 160px)` |
| `--section-y-tight` | `clamp(56px, 7vw, 96px)` |
| `--container-x` | `clamp(24px, 5vw, 80px)` |
| `--container-narrow` | `min(860px, calc(100vw - 2 * var(--container-x)))` |
| `--max-width` | `1280px` |
| `--radius-sm` | `3px` |
| `--radius-pill` | `999px` |
| `--nav-height` | `84px` |
| `--footer-watermark` | `clamp(80px, 15vw, 200px)` |

### Motion

| Token | Value |
|---|---|
| `--ease-smooth` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` |
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `--duration-fast` | `0.25s` |
| `--duration-base` | `0.5s` |
| `--duration-slow` | `0.8s` |

### Z-Index Layers

| Token | Value |
|---|---|
| `--z-base` | `0` |
| `--z-card` | `10` |
| `--z-nav` | `100` |
| `--z-overlay` | `1000` |
| `--z-transition` | `9000` |
| `--z-cursor` | `9999` |

## 3. Animation Inventory

| Animation | Trigger | Elements | Behavior | Timing / Easing | Implementation |
|---|---|---|---|---|---|
| Page reveal | Page load | `#pt-overlay` | Fade overlay from visible to hidden | `600ms`, `ease` | `js/page-transition.js` |
| Page exit | Internal nav clicks | `#pt-overlay` | Fade overlay in before navigation | `350ms` | `js/page-transition.js` |
| Nav backdrop | Scroll `> 60px` | Shared nav | Transparent to blurred dark panel | `400ms` | `js/nav.js` |
| Overlay menu open | Menu click | Full-screen nav | Translate from top with opacity/staggered links | `600ms`, `var(--ease-out)` | `js/nav.js` |
| Hero parallax | Window scroll | `.hero-bg img` | Translate image downward at `0.35` multiplier | RAF-based | `js/hero-parallax.js` |
| Scroll indicator | Hero idle / initial viewport | Hero arrow | Looping vertical bounce, hidden after scroll | `1.8s` infinite | `css/animations.css` + `js/hero-parallax.js` |
| Scroll reveal | Section enters viewport | `.reveal`, `.reveal-stagger > *` | Fade/slide from `48px` below | `0.8s`, `var(--ease-out)` | `js/scroll-reveal.js` |
| Counter animation | Stat enters viewport | `.stat-number` | Count `0 -> target`, append `+` when needed | `1800ms`, easeOutQuad | `js/counter.js` |
| Accordion expand | Row click | `.accordion-row` | Single-open behavior, content max-height reveal, icon rotation | `600ms`, `var(--ease-smooth)` | `js/accordion.js` |
| Horizontal drag | Mouse drag | Homepage project strip | Drag to scroll, cursor grab/grabbing | Immediate | `js/projects-strip.js` |
| Project card hover | Mouse hover | Project cards | Image scale, CTA fade, subtle lift | `0.6s`, `var(--ease-smooth)` | CSS |
| Journal card hover | Mouse hover | Journal cards | Lift, slight darken, title underline | `0.35s` | CSS |
| Marquee | Idle | Certification pill rows | Infinite horizontal loop in opposite directions | `28s` and `34s` linear infinite | CSS + `js/marquee.js` |
| Custom cursor | Mouse move / hover interactive | Dot + ring | Dot direct follow, ring lerp, expand on hover | Continuous RAF | `js/cursor.js` |
| Contact form success | Valid submit | Form / success message | Hide form, fade success in, reset | `300ms` + `3s` delay | `js/contact.js` |
| Coming soon shimmer | Idle | Project 4 image overlay | Soft pulsing sheen | `2.6s` infinite | CSS |

## 4. Component List

| Component | Appears On | Notes |
|---|---|---|
| Shared nav | All pages | Injected via JS, active link state, overlay menu, desktop + mobile modes |
| Hero section | All main pages | Full-bleed background image, overlay, label, headline, optional body copy, parallax |
| Section intro | Home/About/Projects/Journal | Label + heading + optional action link |
| Homepage project strip | Home | Drag-to-scroll horizontal cards |
| About split section | Home | Image left, copy + counters right |
| Accordion row | Home | One-open-at-a-time services list |
| Milestone stat block | Home/About | Animated counters with label |
| Marquee row | About | Repeating certification/identity pills |
| Role card | About | Portrait card with name/title |
| Project card | Home/Projects | Overlay metadata, CTA, optional tags/GitHub |
| Journal card | Home/About/Journal | Image, category, title |
| Contact form | Contact | Floating labels, validation, success state |
| Shared footer | All pages | Email feature, nav columns, social links, watermark |
| Page transition overlay | All pages | Fade between internal navigation |
| Custom cursor | All non-touch pages | Dot + ring with hover state |

## 5. Image Slot Map

Source assets were supplied in `Assests/` and will be normalized into `assets/` for the finished site. The normalized names below are the ones used in markup so Raj can replace them later without editing HTML structure.

| Slot | Final File | Planned Source | Target Usage | Recommended Ratio / Notes |
|---|---|---|---|---|
| Home hero | `assets/hero-home.png` | `Gemini_Generated_Image_gp6eefgp6eefgp6e.png` | `index.html` hero | Portrait crop, cinematic monochrome |
| About hero | `assets/hero-about.png` | `Gemini_Generated_Image_jnq8a7jnq8a7jnq8.png` | `about.html` hero | Wide silhouette, warm gradient |
| Projects hero | `assets/hero-projects.avif` | `WDp2Zq4B8pE5m242xYYTOrQA4.avif` | `projects.html` hero | Wide editorial image |
| Journal hero | `assets/hero-journal.avif` | `ZNnj2toPGisdyf6eClzPnuV72fM.avif` | `journal.html` hero | Wide atmospheric image |
| Contact hero | `assets/hero-contact.avif` | `BYTBcqFikmPNhvjQYU7pi3ciyI.avif` | `contact.html` hero + form background | Dark cinematic frame |
| About portrait | `assets/about-portrait.png` | `Gemini_Generated_Image_gp6eefgp6eefgp6e.png` | Homepage about split and role card | Portrait crop |
| Project 1 | `assets/project-1.avif` | `WDp2Zq4B8pE5m242xYYTOrQA4.avif` | SnapTools | Landscape |
| Project 2 | `assets/project-2.avif` | `qWafyJa8F6xJsc3zslvSVczRiac.avif` | Background Remover | Landscape or portrait crop |
| Project 3 | `assets/project-3.avif` | `r1Q4APz4TNMV5x9oKRYscAL06c.avif` | Text Cleaner | Landscape |
| Project 4 | `assets/project-4.avif` | `vDS2R7LCoOompxmBq9rV6LicTqI.avif` | Coming soon | Flexible placeholder |
| Journal 1 | `assets/journal-1.avif` | `vLFNQftWxn8GlWaCrxJpZKWD10.avif` | AI article | 16:10 card crop |
| Journal 2 | `assets/journal-2.avif` | `mq1HgIRqnDetOlR0yUFJ40kEIT4.avif` | Building article | 16:10 card crop |
| Journal 3 | `assets/journal-3.avif` | `ZNnj2toPGisdyf6eClzPnuV72fM.avif` | Creativity article | 16:10 card crop |
| Optional logo | `assets/logo.svg` | none supplied | Nav branding | Fallback text `RG` if absent |

Notes:
- Every `<img>` element should include an `<!-- EDIT ME -->` comment immediately above it.
- Repeated source use is acceptable for now; the normalized file names make later swaps trivial.
- If any AVIF source proves unsuitable during QA, replace it with one of the remaining AVIF files without changing HTML names.

## 6. Interaction Map

| Area | Interaction | Expected Result |
|---|---|---|
| Nav links | Hover | Opacity increases to `1`, underline animates left-to-right |
| Nav | Scroll past `60px` | Blurred dark backdrop appears |
| Menu button / hamburger | Click | Full-screen overlay menu opens |
| Overlay close | Click or link selection | Overlay closes, then page transition handles navigation |
| Hero | Scroll | Background image parallax shifts downward |
| Hero arrow | Scroll past `100px` | Arrow fades out |
| Homepage project strip | Drag with mouse | Horizontal track scrolls with grab/grabbing cursor |
| Project cards | Hover | Image scales, CTA text fades in |
| About CTA / text links | Hover | Underline reveal |
| Counters | Scroll into view | Numbers animate once |
| Accordion | Click row | That row opens, others close |
| Marquee | Passive | Pills scroll continuously in opposite directions |
| Journal cards | Hover | Lift, darken image, underline title |
| Contact form | Submit invalid | Show inline error state/message |
| Contact form | Submit valid | Success message appears, form restores after delay |
| Internal page links | Click | Full-screen page fade transition |
| Interactive elements | Cursor hover | Cursor ring expands, dot fades |

## 7. File Structure

```text
D:\portfolio 3\
|-- PORTFOLIO_REFERENCE.md
|-- index.html
|-- about.html
|-- projects.html
|-- project-detail.html
|-- journal.html
|-- journal-detail.html
|-- contact.html
|-- css\
|   |-- variables.css
|   |-- reset.css
|   |-- global.css
|   |-- nav.css
|   |-- hero.css
|   |-- sections.css
|   |-- projects.css
|   |-- journal.css
|   |-- about.css
|   |-- contact.css
|   |-- footer.css
|   |-- animations.css
|   |-- cursor.css
|   `-- responsive.css
|-- js\
|   |-- site-data.js
|   |-- nav.js
|   |-- cursor.js
|   |-- scroll-reveal.js
|   |-- counter.js
|   |-- accordion.js
|   |-- marquee.js
|   |-- page-transition.js
|   |-- hero-parallax.js
|   |-- contact.js
|   |-- projects-strip.js
|   `-- init.js
|-- assets\
|   |-- hero-home.png
|   |-- hero-about.png
|   |-- hero-projects.avif
|   |-- hero-journal.avif
|   |-- hero-contact.avif
|   |-- about-portrait.png
|   |-- project-1.avif
|   |-- project-2.avif
|   |-- project-3.avif
|   |-- project-4.avif
|   |-- journal-1.avif
|   |-- journal-2.avif
|   `-- journal-3.avif
`-- output\
    `-- playwright\
```

## 8. Build Checklist

### Setup
- [ ] `PORTFOLIO_REFERENCE.md` written before implementation
- [ ] `assets/` normalized from supplied `Assests/`
- [ ] Google Fonts loaded: Playfair Display + DM Sans
- [ ] Shared CSS variables defined in `css/variables.css`

### Pages
- [ ] `index.html` built with hero, selected work, about preview, accordion, milestones, journal preview, footer
- [ ] `about.html` built with hero, body section, milestones, marquee, roles, journal preview, footer
- [ ] `projects.html` built with hero and full projects grid
- [ ] `project-detail.html` built as reusable case-study template
- [ ] `journal.html` built with hero and five-card archive
- [ ] `journal-detail.html` built as reusable editorial template
- [ ] `contact.html` built with hero/form section and connected footer content

### Shared Components + Behavior
- [ ] Shared nav injected on all pages
- [ ] Overlay menu works on desktop and mobile
- [ ] Active nav link state works per page
- [ ] Page transitions work for internal navigation
- [ ] Custom cursor enabled on non-touch devices
- [ ] Scroll reveals wired across sections
- [ ] Hero parallax wired across pages
- [ ] Scroll indicator animated and dismisses on scroll
- [ ] Homepage project strip drag-to-scroll works
- [ ] Accordion allows only one open row
- [ ] Counters animate once on entry
- [ ] Marquee loops seamlessly in both directions
- [ ] Contact form validates and shows success state

### Content + Polish
- [ ] Real personal links and contact data inserted
- [ ] All user-replaceable values marked `/* EDIT ME */` or `<!-- EDIT ME -->`
- [ ] Responsive layout tuned for `1280px`, `1024px`, `768px`, and `480px`
- [ ] No console errors on local file usage
- [ ] Layout checked in a real browser after implementation
- [ ] Any discovered spacing/overflow/interaction issues fixed

