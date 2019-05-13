<template>
  <div class="content">
    <h1>Contact</h1>
    <div class="columns is-multiline">
      <div class="column">
        <div class="card">
          <div class="card-content">
            <h2>Short Bio</h2> 
            <h5>Name</h5>
            <p>Bervianto Leo Pratama</p>    
            <h5>Current Job</h5>
            <p>Backend Developer</p>  
            <h5>Interest Technology</h5>
            <p>Web Development & Mobile Development </p>  
            <h5>Address</h5>   
            <b-icon pack="fa" icon="home" size="is-small"></b-icon>
            <span>Jalan Cipaku Indah VIII, Cidadap, Bandung</span>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-content">
            <h2>Media Social</h2>
            <p class="buttons are-small">
              <a
                href="mailto:bervianto.leo@gmail.com"
                class="button is-small is-primary is-outlined"
              >
                <span class="icon">
                  <b-icon pack="fa" icon="envelope"></b-icon>
                </span>
                <span>Email</span>
              </a>
              <a
                :href="contact.address"
                class="button is-primary is-outlined"
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
    </div>
  </div>
</template>

<script lang="ts" src="./About.ts">
</script>
