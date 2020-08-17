<template>
  <div>
    <b-notification type="is-info">
      <p>
        <b>Welcome to Bervianto Leo Pratama's site!</b>
      </p>
      <p>
        Please also visit my another site here:
        <a
          href="https://berviantoleo.my.id"
        >berviantoleo.my.id</a>
      </p>
    </b-notification>
    <div class="card">
      <div class="card-image">
        <b-carousel>
          <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
            <b-image :src="getAssets(carousel.image)" ratio="16by9"></b-image>
          </b-carousel-item>
        </b-carousel>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img class="is-rounded" src="../assets/images/me.jpg" alt="My image" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">Bervianto Leo Pratama</p>
            <p class="subtitle is-6">@berviantoleo</p>
          </div>
        </div>
        <div class="content is-medium">
          <b-taglist>
            <b-tag rounded size="is-medium" type="is-primary">Web & Mobile Developer</b-tag>
            <b-tag rounded size="is-medium" type="is-warning">Cyber Security Enthusiasts</b-tag>
            <b-tag rounded size="is-medium" type="is-success">Institut Teknologi Bandung</b-tag>
          </b-taglist>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Home.ts">
</script>

