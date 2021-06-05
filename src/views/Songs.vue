<template>
  <div>
    <h2 class="title">
      Songs Recommendation
    </h2>
    <div class="columns">
      <div class="column">
        <h3 class="subtitle">
          Spotify
        </h3>
        <iframe
          v-for="(source, index) in trackData"
          :key="index"
          :src="source"
          :title="`Spotify ${index}`"
          width="300"
          height="380"
          style="background-color: transparent; border: 0px;"
          allow="encrypted-media"
        />
      </div>
      <div class="column">
        <h3 class="subtitle">
          Youtube
        </h3>
        <iframe
          v-for="(source, index) in youtubeData"
          :key="index"
          width="560"
          height="315"
          :src="source"
          :title="`YouTube video player ${index}`"
          style="border: 0px;"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Songs.ts">
</script>