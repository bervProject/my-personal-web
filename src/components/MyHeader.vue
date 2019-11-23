<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="../assets/my-logo.png" />
        </router-link>
        <a
          id="burger"
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click="burgerClick"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <router-link class="navbar-item" to="/">Home</router-link>
          <router-link class="navbar-item" to="/education">Education</router-link>
          <router-link class="navbar-item" to="/experience">Experience</router-link>
          <router-link class="navbar-item" to="/portofolio">Portofolio</router-link>
          <router-link class="navbar-item" to="/projects">Projects</router-link>
          <router-link class="navbar-item" to="/about">About</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" scoped src="./MyHeader.ts">
</script>


