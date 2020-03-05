<template>
  <div class="content">
    <h2>Contact</h2>    
    <div class="columns is-multiline">
      <div class="column">
        <div class="card">
          <div class="card-content">
            <h3>Short Bio</h3>
            <h5>Name</h5>
            <p>Bervianto Leo Pratama</p>
            <h5>Current Job</h5>
            <p>Backend Developer</p>
            <h5>Interest Technology</h5>
            <p>Web Development & Mobile Development</p>
            <h5>Address</h5>
            <b-icon pack="fa" icon="home" size="is-small"></b-icon>
            <span>Jalan Cipaku Indah VIII, Cidadap, Bandung</span>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-content">
            <h3>Media Social</h3>
            <p class="buttons are-medium">
              <a href="mailto:bervianto.leo@gmail.com" class="button is-info is-outlined">
                <span class="icon">
                  <b-icon pack="fa" icon="envelope"></b-icon>
                </span>
                <span>Email</span>
              </a>
              <a
                :href="contact.address"
                class="button is-info is-outlined"
                v-bind:key="contact.id"
                v-for="contact in contacts"
              >
                <span class="icon">
                  <b-icon pack="fab" :icon="contact.icon"></b-icon>
                </span>
                <span>{{contact.title}}</span>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="column">
        <h3>Certification</h3>
        <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="61a336e9-92a7-4c8c-aeee-a5c07bf3fae5" data-share-badge-host="https://www.youracclaim.com"></div><script type="application/javascript" defer src="//cdn.youracclaim.com/assets/utilities/embed.js"></script>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./About.ts">
</script>
