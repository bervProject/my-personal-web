<template>
<div>
  <h2 class="title">Experience</h2>
    <div class="timeline is-centered">
        <header class="timeline-header">
            <span class="tag is-medium is-primary">Now</span>
        </header>
        <div v-for="item in eduData" class="timeline-item is-primary" :key="item.id">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <p class="heading">{{item.date}}</p>
                <p class="title is-4">{{item.job}} @ {{item.department}}</p>
                <p class="subtitle is-5">{{item.description}}</p>
            </div>
        </div>
        <header class="timeline-header">
            <span class="tag is-medium is-primary">Born</span>
        </header>
    </div>
</div>
</template>

<script lang="ts" src="./Experience.ts">
</script>
