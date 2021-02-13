<template>
  <div class="columns is-multiline">
    <div
      class="column is-one-quarter"
      v-for="item in items"
      v-bind:key="item.id"
    >
      <div class="card">
        <div class="card-image">
          <figure class="image is-square">
            <img :src="getPic(item.smallImage)" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <img class="is-rounded" :src="getPic(item.icon)" alt="Icon">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-6">{{ item.title }}</p>
            </div>
          </div>
          <div class="content">{{ item.description }}</div>
        </div>
        <footer class="card-footer" v-if="item.repository">
          <a
            :href="item.repository.github"
            class="card-footer-item"
            v-if="item.repository.github"
            ><b-icon pack="fab" icon="github" size="is-small"></b-icon>Github</a
          >
          <a
            :href="item.repository.gitlab"
            class="card-footer-item"
            v-if="item.repository.gitlab"
            >Gitlab</a
          >
          <a
            class="card-footer-item"
            v-if="item.repository.playstore"
            :href="`https://play.google.com/store/apps/details?id=${item.repository.playstore}&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1`"
          >
            <img
              alt="Get it on Google Play"
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            />
          </a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./PortofolioItem.ts"></script>
