<template>
  <div class="columns is-multiline">
    <o-loading v-model="isLoading"></o-loading>
    <div v-for="(post, index) in posts" class="column is-4" :key="index">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="post.social_image" alt="dev.to image" />
          </figure>
        </div>
        <div class="card-content">
          <div class="content">
            <a :href="post.url" target="_blank"><h5 class="subtitle">{{ post.title }}</h5></a>
            <div>
              <div class="tags">
                <span
                  class="tag is-primary"
                  v-for="(tag, index) in post.tag_list"
                  :key="index"
                  >{{ tag }}</span
                >
              </div>
            </div>
            <p>{{ new Date(post.published_timestamp).toLocaleDateString() }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-12">
      <o-button tag="a" expanded variant="primary" href="https://dev.to/berviantoleo">
        Show More
      </o-button>
    </div>
  </div>
</template>

<script lang="ts" src="./DevToPost.ts">
</script>
