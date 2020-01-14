<template>
  <b-navbar fixed-top type="is-primary">
      <template slot="brand">
        <b-navbar-item tag="router-link" to="/">
          <img src="../assets/my-logo.png" />
        </b-navbar-item>
      </template>
      <template slot="end">
          <b-navbar-item tag="router-link" to="/">Home</b-navbar-item>
          <b-navbar-item tag="router-link" to="/education">Education</b-navbar-item>
          <b-navbar-item tag="router-link" to="/experience">Experience</b-navbar-item>
          <b-navbar-item tag="router-link" to="/portofolio">Portofolio</b-navbar-item>
          <b-navbar-item tag="router-link" to="/projects">Projects</b-navbar-item>
          <b-navbar-item tag="router-link" to="/about">About</b-navbar-item>
      </template>
  </b-navbar>
</template>


