<template>
  <section class="section">
    <div class="columns is-multiline">
      <div class="column">
        <div class="content">
          <h2 class="title">Soundcloud</h2>
          <div class="columns is-multiline">
            <div :key="item.id" v-for="item in favAudio" class="column is-one-third">
              <div class="box">
                <iframe
                  width="100%"
                  height="166"
                  scrolling="no"
                  frameborder="no"
                  allow="autoplay"
                  :src="item.srcAudio"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" src="./FavoriteAudio.ts">
</script>