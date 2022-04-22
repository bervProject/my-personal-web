<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-header-title"><b-icon icon="book" pack="fa-solid"/>{{ $t('common.todayverse') }}</h3>
    </div>
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