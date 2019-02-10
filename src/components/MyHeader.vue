<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img src="../assets/logo.png" width="112" height="28">
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
  </nav>
</template>

<script lang="ts" scoped>
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class MyHeader extends Vue {
  @Watch('$route')
  public closeBurger(): void {
    const burger = document.getElementById('burger')
    if (burger) {
      burger.classList.remove('is-active')
      const target = burger.dataset.target
      if (target) {
        const $target = document.getElementById(target)
        if ($target) {
          $target.classList.remove('is-active')
        }
      }
    }
  }

  public burgerClick(): void {
    const burger = document.getElementById('burger')
    if (burger) {
      burger.classList.toggle('is-active')
      const target = burger.dataset.target
      if (target) {
        const $target = document.getElementById(target)
        if ($target) {
          $target.classList.toggle('is-active')
        }
      }
    }
  }
}
</script>


