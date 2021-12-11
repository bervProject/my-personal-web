<template>
  <div>
    <div class="columns is-multiline">
      <div class="column is-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-header-title">{{ $t('home.whoami') }}</h4>
          </div>
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
      </div>
      <div class="column is-6">
        <verse-random></verse-random>
      </div>
      <div class="column is-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-header-title">{{ $t('common.gallery') }}</h4>
          </div>
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
      </div>
      <div class="column is-6">
        <h2 class="title">{{ $t('common.announcement') }}</h2>
        <div class="card" v-if="!isLoading && announcements.length == 0">
          <div class="card-content">
            <div class="has-text-centered">
              <b-icon icon="inbox" size="is-large" />
              <h3 class="subtitle">Not have any announcement yet.</h3>
            </div>
          </div>
        </div>
        <b-notification
          v-for="(announcement, index) in announcements"
          :key="index"
          :type="`is-${announcement.level}`"
        >
          <p>{{ announcement.main }}</p>
        </b-notification>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>
