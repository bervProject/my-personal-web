<template>
  <div class="columns is-multiline" style="min-height: 300px">
    <b-loading :active.sync="isLoading" :is-full-page="false">
      <b-icon pack="fas" icon="sync-alt" size="is-large" custom-class="fa-spin"></b-icon>
    </b-loading>
    <div v-for="data in myData" v-bind:key="data.id" class="column is-half">
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

<script lang="ts" src="./Github.ts">
</script>
