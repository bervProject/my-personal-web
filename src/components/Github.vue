<template>
  <div class="columns is-multiline" style="min-height: 300px">
    <b-loading :active.sync="isLoading" :is-full-page="false">
      <b-icon pack="fas" icon="sync-alt" size="is-large" custom-class="fa-spin"></b-icon>
    </b-loading>
    <div v-for="data in myData" v-bind:key="data.id" class="column is-one-third">
      <div class="card">
        <div class="card-content">
          <p class="title is-4">
            <a v-bind:href="data.svn_url">{{data.name}}</a>
          </p>
          <p class="subtitle is-6">Stars : {{data.stargazers_count}}</p>
          <div class="content">{{data.description}}</div>
        </div>
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
  public isLoading: boolean = false

  public mounted() {
    this.isLoading = true
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
        this.isLoading = false
        this.myData = response.data
      }).catch(reason => {
        this.isLoading = false
      })
  }
}
</script>
