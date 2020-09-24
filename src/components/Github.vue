<template>
  <div class="columns is-multiline" style="min-height: 300px">
    <b-loading :active.sync="isLoading" :is-full-page="false">
      <b-icon pack="fas" icon="sync-alt" size="is-large" custom-class="fa-spin"></b-icon>
    </b-loading>
    <div v-for="data in myData" v-bind:key="data.id" class="column is-half">
      <b-collapse class="card" animation="slide" aria-id="contentIdForA11y3">
        <div
          slot="trigger"
          slot-scope="props"
          class="card-header"
          role="button"
          aria-controls="contentIdForA11y3"
        >
          <div class="card-header-title">
            <p class="title is-4">
              <a v-bind:href="data.svn_url">
                {{data.name}} |
                <b-icon icon="star" type="is-warning"></b-icon>
                : {{data.stargazers_count}}
              </a>
            </p>
          </div>
          <a class="card-header-icon">
            <b-icon :icon="props.open ? 'angle-down' : 'angle-up'"></b-icon>
          </a>
        </div>
        <div class="card-content">
          <div class="content">{{data.description}}</div>
        </div>
      </b-collapse>
    </div>
  </div>
</template>

<script lang="ts" src="./Github.ts">
</script>
