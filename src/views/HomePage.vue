<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <p class="title">
          I'm a Software Engineer. A person who loves to code as arts.
        </p>
      </div>
    </section>
    <section class="section">
      <div class="content is-medium">
        <div class="columns is-multiline">
          <div class="column is-6">
            <h4 class="title">Focus Topics</h4>
            <ul>
              <li>Backend Development</li>
              <li>DevOps</li>
              <li>Microservices</li>
              <li>Cloud Computing</li>
              <li>Cyber Security</li>
              <li>DevSecOps</li>
              <li>Software Architecture</li>
              <li>Cloud Architecture</li>
            </ul>
          </div>
          <div class="column is-6">
            <h4 class="title">Technology Stacks</h4>
            <ul>
              <li>.NET</li>
              <li>SQL Server</li>
              <li>PostgreSQL</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>
      </div>
      <o-dropdown>
        <template #trigger="{ active }">
          <o-button variant="primary">
            <span>Notification</span>
            <o-icon :icon="active ? 'caret-up' : 'caret-down'"></o-icon>
          </o-button>
        </template>
        <o-dropdown-item
          aria-role="listitem"
          v-for="(announcement, index) in announcements"
          :key="index"
        >
          <div v-html="announcement.main" />
        </o-dropdown-item>
      </o-dropdown>
    </section>
  </div>
</template>

<script lang="ts" src="./HomePage.ts"></script>
