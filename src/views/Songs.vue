<template>
  <div>
    <h2 class="title">Songs Recommendation</h2>
    <div class="columns">
      <div class="column">
        <h3 class="subtitle">Spotify</h3>
        <iframe
          v-for="(source, index) in trackData"
          :src="source"
          :key="index"
          width="300"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        >
        </iframe>
      </div>
      <div class="column">
        <h3 class="subtitle">Youtube</h3>
        <iframe
          v-for="(source, index) in youtubeData"
          width="560"
          height="315"
          :src="source"
          :key="index"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Songs.ts">
</script>