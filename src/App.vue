<template>
  <div>
    <my-header></my-header>
    <section class="section">
      <div class="container">
        <router-view/>
      </div>
    </section>
    <my-footer></my-footer>
  </div>
</template>

<script lang="ts">
import MyHeader from '@/components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue'

import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    MyHeader,
    MyFooter,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import '~bulma-timeline';
@import '~bulma/sass/utilities/_all';

$primary: #e64a19;
$primary-invert: findColorInvert($primary);

$navbar-background-color: #e64a19;
$navbar-item-color: $white;
$navbar-dropdown-arrow: $white;
$navbar-box-shadow-color: $black;
$navbar-dropdown-background-color: $primary;
$navbar-divider-background-color: $black;

$footer-background-color: $primary;

$link: $black;
$link-invert: $white;
$link-focus-border: $black;

$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert)
);

@import '~bulma';
@import '~buefy/src/scss/buefy';
</style>
