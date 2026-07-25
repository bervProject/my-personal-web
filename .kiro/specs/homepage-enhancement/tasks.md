# Homepage Enhancement — Tasks

## Implementation Plan

Tasks are ordered so that foundation work (composables, i18n, shared component changes) lands before the view-layer wiring that depends on them. Each task is independently verifiable by building the project (`yarn build`) and visually inspecting the result in the dev server.

---

- [x] 1. Add i18n keys for all new user-facing strings

  **Files:** `src/messages/en.json`, `src/messages/id.json`

  Add the following keys to both locale files. Use translated Indonesian equivalents in `id.json`.

  | Key | English value |
  |-----|---------------|
  | `hero.tagline` | `"A Software Engineer specializing in seamless system migration, modernisation, and building resilient cloud architectures."` |
  | `hero.ctaBlog` | `"Read My Blog"` |
  | `hero.ctaGitHub` | `"View GitHub"` |
  | `home.featuredProjects` | `"Featured Projects"` |
  | `home.latestThoughts` | `"Latest Thoughts"` |
  | `home.pastHonours` | `"Past Honours"` |
  | `projects.viewProject` | `"View Project"` |
  | `projects.viewRepo` | `"View Repo"` |

  _Verify:_ The app compiles without missing-key warnings in the console.

---

- [x] 2. Create the `useTypingEffect` composable

  **File:** `src/composables/useTypingEffect.ts` (new file)

  Implement a composable that:
  - Accepts a `phrases: string[]` array and an optional options object (`typingSpeed`, `deletingSpeed`, `pauseDuration`).
  - Returns a single reactive `displayText: Ref<string>`.
  - Cycles through phrases: types each character, pauses at full phrase, deletes each character, then advances to the next phrase.
  - Uses `setTimeout` internally and cleans up all pending timers in `onUnmounted`.

  _Verify:_ Import the composable in a temporary test component and confirm the text cycles correctly in the browser.

---

- [x] 3. Update the Hero section in `HomePage.vue` and `HomePage.ts`

  **Files:** `src/views/HomePage.vue`, `src/views/HomePage.ts`

  **`HomePage.ts`:**
  - Import `useTypingEffect` from `@/composables/useTypingEffect`.
  - Call it inside `setup()` with the phrase list:
    ```
    "Navigating Backend Development..."
    "Deploying Microservices..."
    "Executing Cloud Migrations..."
    "Designing Resilient Cloud Architectures..."
    "Strengthening Systems with DevSecOps..."
    ```
  - Expose `displayText` to the template.

  **`HomePage.vue`:**
  - Replace the static tagline `"I'm a Software Engineer. A person who loves to code as arts."` with the updated copy using `$t('hero.tagline')`.
  - Add the `<span class="typing-text">` + `<span class="typing-cursor" aria-hidden="true">` block below the tagline.
  - Add the two CTA `<o-button>` elements (primary "Read My Blog", light "View GitHub") in a `<div class="buttons mt-4">` wrapper.
  - Add the scoped `<style lang="scss">` block with the `.typing-cursor` blink keyframe animation.
  - Add `@media (prefers-reduced-motion: reduce)` rule that disables the cursor animation.

  _Verify:_ Hero section renders updated tagline, cycling typed text, and both CTA buttons in light and dark mode.

---

- [x] 4. Create the `FeaturedProjects` component

  **Files:** `src/components/FeaturedProjects.ts` (new), `src/components/FeaturedProjects.vue` (new)

  **`FeaturedProjects.ts`:**
  - Define a `Project` TypeScript interface: `{ title, description, tags, url?, repoUrl? }`.
  - Define the static `projects: Project[]` array with 2–3 entries representing real or representative work (e.g. a microservices migration, a CI/CD pipeline build, a cloud architecture project using .NET / PostgreSQL / Docker).
  - Register the component with `name: 'FeaturedProjects'`.

  **`FeaturedProjects.vue`:**
  - Render a `columns is-multiline` grid.
  - Each project is a Bulma `.card featured-project-card` inside a `column is-4` column.
  - Card contains: title (`h5.title.is-5`), description (`p`), tags (`div.tags` with `span.tag.is-primary.is-light`), and conditional card footer with "View Project" / "View Repo" links.
  - Add a scoped `<style>` block that styles `.featured-project-card` using `var(--card-bg)`, `var(--border-color)`, and `var(--shadow)`.

  _Verify:_ Component renders 2–3 cards correctly in both themes with no console errors.

---

- [x] 5. Add the Featured Projects section to `HomePage.vue`

  **File:** `src/views/HomePage.vue`, `src/views/HomePage.ts`

  - Register `FeaturedProjects` as a local component in `HomePage.ts`.
  - Add a new `<section class="section">` between the hero bio section and the community section containing:
    ```html
    <h4 class="title">{{ $t('home.featuredProjects') }}</h4>
    <featured-projects />
    ```

  _Verify:_ Section appears in the correct position on the homepage.

---

- [x] 6. Add `limit` prop to `DevToPost` component

  **Files:** `src/components/DevToPost.ts`, `src/components/DevToPost.vue`

  **`DevToPost.ts`:**
  - Add a `limit` prop: `{ type: Number, default: 9 }`.
  - Replace the hardcoded `per_page=9` in the API URL with `this.limit`.
  - Add a computed property `isPreviewMode` that returns `true` when `limit < 9`.

  **`DevToPost.vue`:**
  - Replace the existing "Show More" `<o-button>` with a conditional:
    - When `isPreviewMode` is `false`: render the existing `<o-button>` linking to the Dev.to profile ("Show More").
    - When `isPreviewMode` is `true`: render a plain `<o-button tag="a">` with label from `$t('home.latestThoughts')` suffix — or simply "See all posts →" — linking to `https://dev.to/berviantoleo`.

  _Verify:_ Existing blog page (if re-enabled) still shows 9 posts. When `limit=3` is passed, only 3 posts are fetched and the correct button variant renders.

---

- [x] 7. Add the Latest Blog Posts section to `HomePage.vue`

  **File:** `src/views/HomePage.vue`

  - Add a new `<section class="section">` below the Featured Projects section:
    ```html
    <h4 class="title">{{ $t('home.latestThoughts') }}</h4>
    <dev-to-post username="berviantoleo" :limit="3" />
    ```
  - The `DevToPost` component is already registered globally or can be imported as a local component — confirm and import if needed.

  _Verify:_ Section fetches and renders exactly 3 articles with title, image, date, and tags. Loading spinner appears during fetch. "See all posts" button is visible below cards.

---

- [x] 8. Replace Focus Topics and Technology Stack lists with interactive tags

  **File:** `src/views/HomePage.vue`

  - Replace both `<ul>` lists with `div.tags` containers of `span.tag.is-medium.topic-tag` elements.
  - Add `tabindex="0"` and `:aria-label="topic"` to each tag span for keyboard accessibility.
  - Add a scoped `<style lang="scss">` block (or extend the existing one) with:
    - `.topic-tag` transition rule: `transform 0.18s ease`, `background-color 0.18s ease`, `box-shadow 0.18s ease`.
    - `:hover` and `:focus` states: `translateY(-3px)`, `background-color: var(--primary-color)`, `color: #ffffff`, `box-shadow`, `outline`.
    - `@media (prefers-reduced-motion: reduce)` override that removes `transform` from hover/focus.

  _Verify:_ Tags render correctly. Hovering elevates and recolours the tag smoothly. Tab key navigates through tags with visible focus ring. Motion is suppressed when system reduced-motion preference is active.

---

- [x] 9. Reorganise the Community & Credentials section

  **Files:** `src/views/HomePage.vue`, `src/views/HomePage.ts`

  **`HomePage.ts`:**
  - Split the existing `communityList` array into:
    - `activeCommunityList`: current-year (2025) badge IDs.
    - `pastCommunityList`: prior-year (2023, 2024) badge IDs.
  - Expose both arrays to the template.

  **`HomePage.vue`:**
  - Active badges: render identically to the current layout (no visual change).
  - Past badges: wrap in a `<details class="past-honours">` element with a styled `<summary>` showing `$t('home.pastHonours')`.
  - Add scoped styles for `.past-honours__summary` including the animated `▶` indicator that rotates on `details[open]`.

  _Verify:_ Active badges display without the "Expired" label dominating the view. Clicking "Past Honours" expands the accordion and Credly badges inside initialise correctly. Section collapses by default on page load.

---

- [x] 10. Final integration check and build verification

  **No file changes** — verification only.

  - Run `yarn build` and confirm zero TypeScript errors and zero build warnings related to new code.
  - Start dev server (`yarn dev`) and manually verify:
    - [x] Hero: updated tagline, typing animation cycles, both CTA buttons work.
    - [ ] Featured Projects: 2–3 cards render with correct theming in light and dark mode.
    - [ ] Latest Thoughts: 3 Dev.to posts load with images, titles, dates, and tags.
    - [ ] Focus Topics & Tech Stack: tags render, hover/focus interactions work, reduced-motion respected.
    - [ ] Community section: active badges visible, past honours accordion collapsed by default and expandable.
    - [ ] Page is responsive at 375px, 768px, and 1280px breakpoints.
    - [ ] No regressions on `/certification` and `/songs` routes.
