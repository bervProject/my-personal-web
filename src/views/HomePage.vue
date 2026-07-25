<template>
  <div>
    <section classs="section">
      <o-notification aria-role="listitem" closable v-for="(announcement, index) in announcements" :key="index"
        variant="warning">
        <div v-html="announcement.main" />
      </o-notification>
    </section>
    <section class="section">
      <article class="media">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="https://gravatar.com/avatar/19465cfc93b7dcd66bd8933e90b7be07e0b23413ec0522eb7933edc015fd1ab4" />
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>Bervianto Leo Pratama</strong>
              <br>
              {{ $t('hero.tagline') }}
            </p>
            <p>
              <span class="typing-text">{{ displayText }}</span><span class="typing-cursor" aria-hidden="true">|</span>
            </p>
            <div class="buttons mt-4">
              <o-button tag="a" variant="primary" href="https://dev.to/berviantoleo" target="_blank" rel="noopener noreferrer">
                {{ $t('hero.ctaBlog') }}
              </o-button>
              <o-button tag="a" variant="light" href="https://github.com/berviantoleo" target="_blank" rel="noopener noreferrer">
                {{ $t('hero.ctaGitHub') }}
              </o-button>
            </div>
          </div>
        </div>
      </article>
    </section>
    <section class="section">
      <h4 class="title">{{ $t('home.featuredProjects') }}</h4>
      <featured-projects />
    </section>
    <section class="section">
      <h4 class="title">{{ $t('home.latestThoughts') }}</h4>
      <dev-to-post username="berviantoleo" :limit="3" />
    </section>
    <section class="section">
      <div class="content is-medium">
        <div class="columns is-multiline">
          <div class="column is-6">
            <h4 class="title">Focus Topics</h4>
            <div class="tags">
              <span
                class="tag is-medium topic-tag"
                v-for="topic in focusTopics"
                :key="topic"
                tabindex="0"
                :aria-label="topic"
              >{{ topic }}</span>
            </div>
          </div>
          <div class="column is-6">
            <h4 class="title">Technology Stacks</h4>
            <div class="tags">
              <span
                class="tag is-medium topic-tag"
                v-for="tech in techStacks"
                :key="tech"
                tabindex="0"
                :aria-label="tech"
              >{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <h4 class="title">
        {{ $t('navigation.community') }}
      </h4>
      <div class="columns is-multiline">
        <div class="column is-3">
          <div class="columns is-multiline">
            <div class="column is-12">
              <a target="_blank"
                href="https://builder.aws.com/connect/community/community-builders">
                <figure class="image is-2by1">
                  <img :src="communityImage" alt="Community Builder" />
                </figure>
              </a>
            </div>

          </div>
        </div>
        <div class="column is-3" v-for="community of activeCommunityList" :key="community">
          <div :data-iframe-width="150" :data-iframe-height="270" :data-share-badge-id="community"
            data-share-badge-host="https://www.credly.com"></div>
        </div>
        <div class="column is-12">
          <details class="past-honours">
            <summary class="past-honours__summary">{{ $t('home.pastHonours') }}</summary>
            <div class="columns is-multiline mt-3">
              <div class="column is-3" v-for="community of pastCommunityList" :key="community">
                <div :data-iframe-width="150" :data-iframe-height="270" :data-share-badge-id="community"
                  data-share-badge-host="https://www.credly.com"></div>
              </div>
            </div>
          </details>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" src="./HomePage.ts"></script>

<style lang="scss" scoped>
.typing-cursor {
  animation: blink 0.7s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .typing-cursor {
    animation: none;
  }
}

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

@media (prefers-reduced-motion: reduce) {
  .topic-tag {
    transition: background-color 0.18s ease;
    &:hover, &:focus { transform: none; }
  }
}

.past-honours__summary {
  cursor: pointer;
  font-weight: 600;
  color: var(--primary-color);
  padding: 0.5rem 0;
  list-style: none;

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
</style>
