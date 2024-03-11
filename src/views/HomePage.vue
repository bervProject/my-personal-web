<template>
  <div>
  <section classs="section">
        <o-notification
          aria-role="listitem"
          closable
          v-for="(announcement, index) in announcements"
          :key="index"
          variant="warning"
        >
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
              I'm a Software Engineer. A person who loves to code as arts.
            </p>
          </div>
        </div>
      </article>
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
          </section>

<section class="hero is-small is-info">
  <div class="hero-body">
    <div class="content">
              <h3 class="title">Social Media</h3>
              <p class="buttons are-small">
                <a
                  href="mailto:bervianto.leo@gmail.com"
                  class="button is-outlined"
                >
                  <span class="icon">
                    <o-icon pack="fa" icon="envelope" />
                  </span>
                  <span>Email</span>
                </a>
                <a
                  v-for="contact in contacts"
                  :key="contact.id"
                  :href="contact.address"
                  target="_blank"
                  class="button is-outlined"
                >
                  <span class="icon">
                    <o-icon pack="fab" :icon="contact.icon" />
                  </span>
                  <span>{{ contact.title }}</span>
                </a>
              </p>
            </div>
  </div>
</section>
  </div>
</template>

<script lang="ts" src="./HomePage.ts"></script>
