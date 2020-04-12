<template>
  <b-navbar fixed-top type="is-primary">
    <template slot="brand">
      <b-navbar-item tag="router-link" to="/">
        <img src="../assets/my-logo.png" />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-dropdown label="Experience">
        <b-navbar-item tag="router-link" to="/education">Education</b-navbar-item>
        <b-navbar-item tag="router-link" to="/experience">Work Experience</b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-dropdown label="My Work">
        <b-navbar-item tag="router-link" to="/portofolio">Portofolio</b-navbar-item>
        <b-navbar-item tag="router-link" to="/projects">Projects</b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-dropdown label="About Me">
        <b-navbar-item tag="router-link" to="/favorite-audio">Favorite Audio</b-navbar-item>
        <b-navbar-item tag="router-link" to="/about">Contact</b-navbar-item>
      </b-navbar-dropdown>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <b-button
            icon-pack="fab"
            icon-left="github"
            type="is-light"
            tag="a"
            href="https://github.com/bervProject/my-personal-web"
          >
            <strong>Github</strong>
          </b-button>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>


