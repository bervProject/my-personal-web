<template>
  <div>
    <h1 class="title">Projects</h1>
    <b-tabs position="is-centered" class="block">
      <b-tab-item label="Github - Personal">
        <github url="https://api.github.com/users/berviantoleo/repos"></github>
      </b-tab-item>
      <b-tab-item label="Github - My Personal Projects">
        <github url="https://api.github.com/orgs/bervProject/repos"></github>
      </b-tab-item>
      <b-tab-item label="Github - My University Projects">
        <github url="https://api.github.com/orgs/berv-uni-project/repos"></github>
      </b-tab-item>
      <b-tab-item label="Github - My Portofolio Projects">
        <github url="https://api.github.com/orgs/berv-porto-project/repos"></github>
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Github from '@/components/Github.vue'

@Component({
  components: {
    Github,
  },
})
export default class Projets extends Vue {}
</script>

