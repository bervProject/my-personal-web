<template>
  <div>
    <div class="main">
      <my-header />
      <section class="section">
        <router-view />
      </section>
      <my-footer />
    </div>
  </div>
</template>

<script lang="ts" src="./App.ts"></script>

<style lang="scss" src="./App.scss"></style>
