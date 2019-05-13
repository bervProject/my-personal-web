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

<style lang="scss" src="./App.scss">
</style>
