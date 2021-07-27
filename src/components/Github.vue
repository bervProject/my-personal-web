<template>
  <div
    class="columns is-multiline"
    style="min-height: 300px"
  >
    <b-loading
      v-model="isLoading"
      :is-full-page="false"
    >
      <b-icon
        pack="fas"
        icon="sync-alt"
        size="is-large"
        custom-class="fa-spin"
      />
    </b-loading>
    <div
      v-for="data in myData"
      :key="data.id"
      class="column is-half"
    >
      <b-collapse
        class="card"
        animation="slide"
        aria-id="contentIdForA11y3"
      >
        <template #trigger="props">
          <div
            class="card-header"
            role="button"
            aria-controls="contentIdForA11y3"
          >
            <div class="card-header-title">
              <p class="title is-4">
                <a :href="data.svn_url">
                  {{ data.name }} |
                  <b-icon
                    icon="star"
                    type="is-warning"
                  />
                  : {{ data.stargazers_count }}
                </a>
              </p>
            </div>
            <a class="card-header-icon">
              <b-icon :icon="props.open ? 'angle-down' : 'angle-up'" />
            </a>
          </div>
        </template>
        <div class="card-content">
          <div class="content">
            <ul>
              <li>
                Created At:
                <strong>{{ showComplete(data.created_at) }}</strong>
              </li>
              <li>
                Last Update:
                <strong>{{ showComplete(data.updated_at) }}</strong>
              </li>
              <li>
                Fork: <b-icon pack="fas" icon="check" type="is-success" v-if="data.fork" /> <b-icon v-else pack="fas" icon="times" type="is-danger" />
              </li>
            </ul>
            <p>{{ data.description }}</p>
            <h4 class="title">
              Owner Info
            </h4>
            <article class="media">
              <figure class="media-left">
                <p class="image is-128x128" @click="showImageModal(data.owner.avatar_url)">
                  <img
                    :alt="data.owner.login"
                    class="is-rounded"
                    :src="data.owner.avatar_url"
                  >
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    <a :href="data.owner.html_url">{{ data.owner.login }}</a>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <footer class="card-footer">
          <a
            :href="data.svn_url"
            class="card-footer-item"
          ><b-icon
            pack="fab"
            icon="github"
          />Repository</a>
        </footer>
      </b-collapse>
    </div>
  </div>
</template>

<script lang="ts" src="./Github.ts"></script>
