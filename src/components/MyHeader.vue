<template>
  <div class="container mt-4">
    <router-link to="/" class="title m-3">| {{ $t('common.home') }} |</router-link>
    <router-link to="/certification" class="title m-3">| {{ $t('common.certification') }} |</router-link>
    <router-link to="/songs" class="title m-3">| {{ $t('navigation.favoritesong') }} |</router-link>
  </div>
</template>

<script lang="ts" src="./MyHeader.ts">
</script>
