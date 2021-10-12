<template>
  <div>
    <b-notification type="is-info">
      <p>
        <strong>{{
          $t('home.welcome', { name: 'Bervianto Leo Pratama' })
        }}</strong>
      </p>
      <p
        v-html="
          $t('home.contactme', { email: 'mailto:bervianto.leo@gmail.com' })
        "
      ></p>
    </b-notification>
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img
                class="is-rounded"
                src="../assets/images/me.jpg"
                alt="My image"
              />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">Bervianto Leo Pratama</p>
            <p class="subtitle is-6">@berviantoleo</p>
          </div>
        </div>
        <div class="content is-medium">
          <h4 class="title">{{ $t('home.whoami') }}</h4>
          <b-taglist>
            <b-tag rounded size="is-medium" type="is-primary">
              Backend Developer
            </b-tag>
            <b-tag rounded size="is-medium" type="is-warning">
              Cyber Security Enthusiasts
            </b-tag>
            <b-tag rounded size="is-medium" type="is-warning">
              Microservices
            </b-tag>
            <b-tag rounded size="is-medium" type="is-dark">
              Institut Teknologi Bandung
            </b-tag>
          </b-taglist>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-image">
        <b-carousel pause-info-type="is-black">
          <b-carousel-item
            v-for="(carousel, i) in carousels"
            :key="i"
            @click="showImageModal(carousel.image)"
          >
            <b-image :src="getAssets(carousel.image)" ratio="16by9" />
          </b-carousel-item>
        </b-carousel>
      </div>
    </div>
    <verse-random></verse-random>
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>
