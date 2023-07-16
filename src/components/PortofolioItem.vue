<template>
  <div class="columns is-multiline">
    <div
      v-for="item in items"
      :key="item.id"
      class="column is-one-quarter"
    >
      <div class="card">
        <div class="card-image">
          <figure class="image is-square">
            <img
              :src="item.smallImage"
              alt="Placeholder image"
            >
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <img
                  class="is-rounded"
                  :src="item.icon"
                  alt="Icon"
                >
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-6">
                {{ item.title }}
              </p>
            </div>
          </div>
          <div class="content">
            {{ item.description }}
          </div>
        </div>
        <footer
          v-if="item.repository"
          class="card-footer"
        >
          <a
            v-if="item.repository.github"
            :href="item.repository.github"
            class="card-footer-item"
          ><o-button
            icon-pack="fab"
            icon-left="github"
          >Github</o-button></a>
          <a
            v-if="item.repository.gitlab"
            :href="item.repository.gitlab"
            class="card-footer-item"
          ><o-button
            icon-pack="fab"
            icon-left="gitlab"
          >Gitlab</o-button></a>
          <a
            v-if="item.repository.playstore"
            class="card-footer-item"
            :href="`https://play.google.com/store/apps/details?id=${item.repository.playstore}&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1`"
          >
            <img
              alt="Get it on Google Play"
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            >
          </a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./PortofolioItem.ts"></script>
