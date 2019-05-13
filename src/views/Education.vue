<template>
  <div>
    <h1 class="title">Education</h1>
    <div class="timeline is-centered">
      <header class="timeline-header">
        <span class="tag is-medium is-primary">Now</span>
      </header>
      <div v-for="item in eduData" v-bind:key="item.id" class="timeline-item is-primary">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <p class="heading">{{item.date}}</p>
          <p class="title is-4">{{item.degree}} at {{item.location}}</p>
          <p class="subtitle is-5">{{item.description}}</p>
        </div>
      </div>
      <header class="timeline-header">
        <span class="tag is-medium is-primary">Born</span>
      </header>
    </div>
  </div>
</template>

<script lang="ts" src="./Education.ts">
</script>
