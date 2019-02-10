<template>
  <div>
    <div v-for="data in myData" v-bind:key="data.id" class="card">
      <div class="card-content">
        <p class="title is-4">
          <a v-bind:href="data.svn_url">{{data.name}}</a>
        </p>
        <p class="subtitle is-6">Stars : {{data.stargazers_count}}</p>
        <div class="content">{{data.description}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import axios from 'axios'

@Component({
  props: { url: String },
})
export default class Projets extends Vue {
  public myData: object[] = []

  public mounted() {
    this.loadData()
  }

  public loadData() {
    axios
      .get(this.$props.url, {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
        params: {
          per_page: 100,
        },
      })
      .then(response => {
        this.myData = response.data
      })
  }
}
</script>
