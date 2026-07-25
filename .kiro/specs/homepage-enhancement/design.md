# Homepage Enhancement — Design

## Overview

This document describes the technical design for all five homepage enhancement areas. It maps each requirement to a concrete implementation decision, covering component structure, data flow, styling approach, and accessibility considerations.

---

## 1. Page Layout & Section Order

The updated `HomePage.vue` section order will be:

```
1. Announcements (existing)
2. Hero Section  ← updated
3. Featured Projects  ← new
4. Latest Blog Posts  ← new
5. Focus Topics & Technology Stacks  ← refactored to tags
6. Community & Credentials  ← reorganised
```

No routing changes are required. All new content lives within the existing `/` route.

---

## 2. Hero Section

### 2.1 Updated Copy & CTA Buttons

The bio `<p>` block in `HomePage.vue` is updated in place. The two CTA buttons use Oruga's `<o-button>` component to stay consistent with the rest of the UI:

```html
<o-button tag="a" variant="primary" href="https://dev.to/berviantoleo" target="_blank" rel="noopener noreferrer">
  {{ $t('hero.ctaBlog') }}
</o-button>
<o-button tag="a" variant="light" href="https://github.com/berviantoleo" target="_blank" rel="noopener noreferrer">
  {{ $t('hero.ctaGitHub') }}
</o-button>
```

Both keys are added to `en.json` and `id.json`.

### 2.2 Typing Animation

A self-contained composable `src/composables/useTypingEffect.ts` handles the animation logic. It keeps the template clean and is reusable.

**Interface:**
```ts
// src/composables/useTypingEffect.ts
export function useTypingEffect(phrases: string[], options?: {
  typingSpeed?: number;   // ms per character, default 80
  pauseDuration?: number; // ms to hold completed phrase, default 1800
  deletingSpeed?: number; // ms per character when deleting, default 40
}): { displayText: Ref<string> }
```

The composable cycles through phrases using `setInterval`/`setTimeout`, toggling between a typing and deleting state. It is cleaned up in `onUnmounted` to prevent memory leaks.

The animated text is rendered inside a `<span>` in the hero section with a blinking cursor implemented purely in CSS:

```html
<span class="typing-text">{{ displayText }}</span><span class="typing-cursor" aria-hidden="true">|</span>
```

```scss
.typing-cursor {
  animation: blink 0.7s step-end infinite;
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
```

The `aria-hidden="true"` cursor is excluded from the accessibility tree. The static tagline beneath remains readable at all times so screen readers receive full context without depending on the animation.

---

## 3. Featured Projects Section

### 3.1 New Component

A new component pair is created:

- `src/components/FeaturedProjects.vue`
- `src/components/FeaturedProjects.ts`

This keeps the separation consistent with the rest of the project.

### 3.2 Data Shape

Project data is defined as a static typed array inside `FeaturedProjects.ts`:

```ts
interface Project {
  title: string;
  description: string;
  tags: string[];
  url?: string;       // live demo or article
  repoUrl?: string;   // GitHub repository
}

const projects: Project[] = [ /* 2–3 entries */ ];
```

No API call is made. Content is authored directly in the component.

### 3.3 Template Structure

Each project is rendered as a Bulma `.card` inside a responsive `columns is-multiline` grid. On desktop, cards sit in a 3-column layout (`is-4`); on mobile they stack full-width.

```html
<div class="columns is-multiline">
  <div class="column is-4" v-for="project in projects" :key="project.title">
    <div class="card featured-project-card">
      <div class="card-content">
        <h5 class="title is-5">{{ project.title }}</h5>
        <p class="description">{{ project.description }}</p>
        <div class="tags mt-3">
          <span class="tag is-primary is-light" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
        </div>
      </div>
      <footer class="card-footer" v-if="project.url || project.repoUrl">
        <a v-if="project.url" :href="project.url" target="_blank" class="card-footer-item">
          {{ $t('projects.viewProject') }}
        </a>
        <a v-if="project.repoUrl" :href="project.repoUrl" target="_blank" class="card-footer-item">
          {{ $t('projects.viewRepo') }}
        </a>
      </footer>
    </div>
  </div>
</div>
```

---

## 4. Latest Blog Posts Preview

### 4.1 Reuse DevToPost with a New Prop

The existing `DevToPost` component already handles the fetch, loading state, card layout, and "Show More" button. Rather than duplicating it, a `limit` prop is added:

```ts
// DevToPost.ts — updated props
props: {
  username: String,
  limit: {
    type: Number,
    default: 9,
  },
},
```

The `per_page` parameter in the API call is replaced with `this.limit`. The "Show More" button is hidden when `limit` is set to a value less than 9 (i.e. it is in preview mode), replaced with a "See all posts →" link.

Usage on the homepage:

```html
<!-- HomePage.vue -->
<section class="section">
  <h4 class="title">{{ $t('home.latestThoughts') }}</h4>
  <dev-to-post username="berviantoleo" :limit="3" />
</section>
```

This approach avoids creating a duplicate component while keeping the full blog page unaffected (it continues to pass no `limit` prop, defaulting to 9).

---

## 5. Community & Credentials Reorganisation

### 5.1 Badge Categorisation

Badge IDs in `HomePage.ts` are split into two arrays:

```ts
activeCommunityList: string[]   // current-year badges (2025)
pastCommunityList: string[]     // prior-year badges (2023, 2024)
```

The split is purely by data — no structural change to how Credly renders the badge `<div>` elements.

### 5.2 Template Structure

The active badges render exactly as today. Past badges are wrapped in a native `<details>` element, which requires zero JavaScript and degrades gracefully in all browsers:

```html
<details class="past-honours">
  <summary class="past-honours__summary">
    {{ $t('home.pastHonours') }}
  </summary>
  <div class="columns is-multiline mt-3">
    <div class="column is-3" v-for="badge in pastCommunityList" :key="badge">
      <div :data-iframe-width="150" :data-iframe-height="270"
           :data-share-badge-id="badge"
           data-share-badge-host="https://www.credly.com"></div>
    </div>
  </div>
</details>
```

The `credlyBadge.init()` call in `updated()` and `mounted()` already re-scans the DOM, so it will correctly initialise badges inside the `<details>` element.

### 5.3 Styling

```scss
.past-honours__summary {
  cursor: pointer;
  font-weight: 600;
  color: var(--primary-color);
  padding: 0.5rem 0;
  list-style: none; // remove default triangle on Safari

  &::-webkit-details-marker { display: none; }

  &::before {
    content: '▶ ';
    transition: transform 0.2s ease;
    display: inline-block;
  }
}

details[open] .past-honours__summary::before {
  transform: rotate(90deg);
}
```

---

## 6. Tag Hover Interactions

### 6.1 Tag Rendering

Both Focus Topics and Technology Stacks lists (`<ul>`) are replaced with Bulma `.tags` containers holding individual `.tag` spans. Keyboard accessibility is handled by adding `tabindex="0"` to each span and a matching `:focus` style.

```html
<div class="tags">
  <span
    class="tag is-medium topic-tag"
    v-for="topic in focusTopics"
    :key="topic"
    tabindex="0"
    :aria-label="topic"
  >{{ topic }}</span>
</div>
```

### 6.2 CSS Hover & Focus Styles

Added to `HomePage.vue`'s scoped `<style>` block:

```scss
.topic-tag {
  cursor: default;
  transition: transform 0.18s ease, background-color 0.18s ease, box-shadow 0.18s ease;

  &:hover,
  &:focus {
    transform: translateY(-3px);
    background-color: var(--primary-color) !important;
    color: #ffffff !important;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
}
```

`@media (prefers-reduced-motion: reduce)` disables the transform for users who have opted out of motion:

```scss
@media (prefers-reduced-motion: reduce) {
  .topic-tag {
    transition: background-color 0.18s ease;
    &:hover, &:focus { transform: none; }
  }
}
```

---

## 7. i18n Keys

All new user-facing strings are added to both `src/messages/en.json` and `src/messages/id.json`.

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

---

## 8. File Change Summary

| File | Change type | Notes |
|------|-------------|-------|
| `src/views/HomePage.vue` | Modified | Updated hero copy, add CTA buttons, typing animation, tag lists, latest posts section, badge accordion |
| `src/views/HomePage.ts` | Modified | Add `useTypingEffect`, split badge arrays, import `FeaturedProjects` |
| `src/components/FeaturedProjects.vue` | New | Project cards template |
| `src/components/FeaturedProjects.ts` | New | Static project data + `Project` interface |
| `src/components/DevToPost.vue` | Modified | Conditional "Show More" / "See all posts" button |
| `src/components/DevToPost.ts` | Modified | Add `limit` prop, use it in `per_page` API param |
| `src/composables/useTypingEffect.ts` | New | Typing animation composable |
| `src/messages/en.json` | Modified | Add all new i18n keys |
| `src/messages/id.json` | Modified | Add translated values for new keys |
