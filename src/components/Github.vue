<template>
  <div class="columns is-multiline" style="min-height: 300px">
    <b-loading :active.sync="isLoading" :is-full-page="false">
      <b-icon
        pack="fas"
        icon="sync-alt"
        size="is-large"
        custom-class="fa-spin"
      ></b-icon>
    </b-loading>
    <div v-for="data in myData" v-bind:key="data.id" class="column is-half">
      <b-collapse class="card" animation="slide" aria-id="contentIdForA11y3">
        <div
          slot="trigger"
          slot-scope="props"
          class="card-header"
          role="button"
          aria-controls="contentIdForA11y3"
        >
          <div class="card-header-title">
            <p class="title is-4">
              <a v-bind:href="data.svn_url">
                {{ data.name }} |
                <b-icon icon="star" type="is-warning"></b-icon>
                : {{ data.stargazers_count }}
              </a>
            </p>
          </div>
          <a class="card-header-icon">
            <b-icon :icon="props.open ? 'angle-down' : 'angle-up'"></b-icon>
          </a>
        </div>
        <div class="card-content">
          <div class="content">
            <ul>
              <li>
                Created At:
                <strong>{{ data.created_at | moment('DD MMMM YYYY, HH:mm:ss') }}</strong>
              </li>
              <li>
                Last Update:
                <strong>{{ data.updated_at | moment('DD MMMM YYYY, HH:mm:ss') }}</strong>
              </li>
            </ul>
            <p>{{ data.description }}</p>
            <h4 class="title">
              Owner Info
            </h4>
            <article class="media">
              <figure class="media-left">
                <p class="image is-128x128">
                  <img
                    :alt="data.owner.login"
                    class="is-rounded"
                    :src="data.owner.avatar_url"
                  />
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
          <a :href="data.svn_url" class="card-footer-item"
            ><b-icon pack="fab" icon="github"></b-icon>Repository</a
          >
        </footer>
      </b-collapse>
    </div>
  </div>
</template>

<script lang="ts" src="./Github.ts"></script>
