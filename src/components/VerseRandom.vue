<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <h2 v-if="haveData" class="title">
          {{ reference }}
        </h2>
        <p>
          {{ verse }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./VerseRandom.ts">
</script>