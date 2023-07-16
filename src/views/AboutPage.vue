<template>
  <div>
    <div class="card">
      <div class="card-header">
        <div class="card-header-title">
          <p class="title">Contact</p>
        </div>
      </div>
      <div class="card-content">
        <div class="columns">
          <div class="column">
            <div class="columns">
              <div class="column">
                <div class="content">
                  <h3 class="title">Short Bio</h3>
                  <h5>Current Job</h5>
                  <p>Software Engineer</p>
                  <h5>Interest Technology / Interest Topic</h5>
                  <ul>
                    <li>Web Development</li>
                    <li>Backend Development</li>
                    <li>Microservices</li>
                    <li>Cloud Computing</li>
                    <li>Cyber Security</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="content">
              <h3 class="title">Social Media</h3>
              <p class="buttons are-small">
                <a
                  href="mailto:bervianto.leo@gmail.com"
                  class="button is-dark is-outlined"
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
                  class="button is-dark is-outlined"
                >
                  <span class="icon">
                    <o-icon pack="fab" :icon="contact.icon" />
                  </span>
                  <span>{{ contact.title }}</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./AboutPage.ts"></script>
