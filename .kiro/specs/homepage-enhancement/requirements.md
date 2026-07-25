# Homepage Enhancement — Requirements

## Overview

Transform the personal website homepage from a static digital business card into an engaging, interactive portfolio that immediately communicates expertise, surfaces live content, and reflects the craftsmanship of the developer behind it.

The site is built with Vue 3 + TypeScript, Oruga UI / Bulma, Pinia, vue-router, and a Back4App (Parse) backend. Dynamic content (blog posts, certifications, announcements) is fetched via axios. A dark/light theme system using CSS custom properties is already in place.

---

## Requirements

### 1. Hero Section & Value Proposition

**REQ-1.1** The hero section MUST display an updated tagline that communicates the developer's core specialisations: system migration and modernisation, cloud architecture, and DevSecOps.

**REQ-1.2** The hero section MUST include two CTA buttons rendered below the bio text:
- A primary button: **"Read My Blog"** — navigates to the Dev.to profile (external link, opens in new tab).
- A secondary button: **"View GitHub"** — links to the GitHub profile (external link, opens in new tab).

**REQ-1.3** The hero section MUST include a lightweight typing animation that cycles through a short list of role/skill phrases (e.g. *Navigating Backend Development...*, *Deploying Microservices...*, *Executing Cloud Migrations...*).

**REQ-1.4** The hero section MUST remain readable and correctly styled in both light and dark mode.

**REQ-1.5** The hero section MUST be responsive and render correctly on mobile, tablet, and desktop viewports.

---

### 2. Featured Projects / Case Studies Section

**REQ-2.1** A "Featured Projects" section MUST be added between the hero bio and the community badges section.

**REQ-2.2** The section MUST display 2–3 project cards. Each card MUST include:
- Project title
- Short description (1–3 sentences covering the problem, approach, and outcome)
- A list of relevant technology tags (e.g. .NET, PostgreSQL, Docker)
- An optional link to a live URL or repository (rendered as "View Project" or "View Repo")

**REQ-2.3** Project data MUST be defined as static content within the component (no additional back-end endpoint is required for the initial implementation).

**REQ-2.4** Cards MUST respect the existing card theming (CSS custom properties: `--card-bg`, `--border-color`, `--shadow`).

**REQ-2.5** The section MUST be responsive using Bulma's column grid (`is-multiline`).

---

### 3. Latest Blog Posts Preview

**REQ-3.1** A "Latest Thoughts" section MUST be added to the homepage, positioned below the Featured Projects section.

**REQ-3.2** The section MUST automatically fetch and display the **3 most recent** Dev.to articles for the developer's username using the existing Dev.to API (`https://dev.to/api/articles?username=berviantoleo&per_page=3`).

**REQ-3.3** Each article preview MUST display:
- Cover / social image (if available)
- Article title (linked to the article URL, opens in new tab)
- Published date
- Tag list

**REQ-3.4** A loading state MUST be shown while the API call is in progress, using the existing `o-loading` component pattern.

**REQ-3.5** A "See all posts" button MUST be rendered below the cards, linking to the Dev.to profile.

**REQ-3.6** The existing `DevToPost` component already fetches 9 posts. A new slim variant (or a `per_page` prop) SHOULD be used so only 3 posts are fetched for the homepage preview, avoiding an over-fetch.

---

### 4. Community & Credentials Section Cleanup

**REQ-4.1** The existing Credly badge list MUST be split into two tiers:
- **Active / Current** — badges whose associated programme year is current or non-expired.
- **Past Honours** — badges that are explicitly expired or from prior years.

**REQ-4.2** Active badges MUST be displayed prominently in the main community section (current behaviour).

**REQ-4.3** Past Honours MUST be placed inside a collapsible `<details>` / accordion element with the label *"Past Honours"*, collapsed by default, so they remain discoverable without breaking visual polish.

**REQ-4.4** The AWS Community Builder image and any other non-Credly community affiliations MUST remain visible in the active section.

**REQ-4.5** The section MUST continue to work correctly after the Credly embed script re-initialises (`credlyBadge.init()`).

---

### 5. Technology Stack & Focus Topic Hover Interactions

**REQ-5.1** Focus Topics MUST be rendered as interactive tag-style elements (Bulma `.tag`) instead of a plain `<ul>` list.

**REQ-5.2** Technology Stack items MUST also be rendered as interactive tag-style elements.

**REQ-5.3** Tags MUST have a smooth hover state that slightly elevates the element (CSS `transform: translateY`) and changes the background to a highlighted variant, using `transition` for smoothness.

**REQ-5.4** Hover transitions MUST respect the current dark/light theme using the existing CSS custom properties.

**REQ-5.5** Focus Topics and Technology Stack tags MUST be keyboard-focusable and have a visible focus ring for accessibility (WCAG 2.1 AA minimum).

---

### 6. Non-Functional Requirements

**REQ-6.1** All new API calls MUST be guarded with error handling; failures MUST degrade gracefully (section hidden or an empty state shown) without breaking the rest of the page.

**REQ-6.2** No new third-party dependencies MAY be introduced without explicit approval. All animations MUST use native CSS transitions or the Web Animations API.

**REQ-6.3** All new text visible to the user MUST be added to the existing i18n message files (`en.json`, `id.json`) so the site remains fully translatable.

**REQ-6.4** TypeScript types MUST be used for all new component data properties and props; `any[]` SHOULD be replaced with explicit interfaces where new code is introduced.

**REQ-6.5** All new components and logic MUST follow the existing `.vue` / `.ts` file-pair pattern used throughout the project.
