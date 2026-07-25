<template>
  <div class="columns is-multiline">
    <div
      class="column is-4"
      v-for="project in projects"
      :key="project.title"
    >
      <div class="card featured-project-card">
        <div class="card-content">
          <h5 class="title is-5">{{ project.title }}</h5>
          <p class="description">{{ project.description }}</p>
          <div class="tags mt-3">
            <span
              class="tag is-primary is-light"
              v-for="tag in project.tags"
              :key="tag"
            >{{ tag }}</span>
          </div>
        </div>
        <footer class="card-footer" v-if="project.url || project.repoUrl">
          <a
            v-if="project.url"
            :href="project.url"
            target="_blank"
            rel="noopener noreferrer"
            class="card-footer-item"
          >
            {{ $t('projects.viewProject') }}
          </a>
          <a
            v-if="project.repoUrl"
            :href="project.repoUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="card-footer-item"
          >
            {{ $t('projects.viewRepo') }}
          </a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./FeaturedProjects.ts">
</script>

<style scoped lang="scss">
.featured-project-card {
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow);
  height: 100%;
  display: flex;
  flex-direction: column;

  .card-content {
    flex: 1;
  }

  .description {
    font-size: 0.925rem;
    line-height: 1.6;
  }
}
</style>
