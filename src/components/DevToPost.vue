<template>
  <div class="columns is-multiline">
    <b-loading v-model="isLoading"></b-loading>
    <div v-for="(post, index) in posts" class="column is-4" :key="index">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="post.social_image" alt="dev.to image" />
          </figure>
        </div>
        <div class="card-content">
          <div class="content">
            <a :href="post.url"><h5 class="subtitle">{{ post.title }}</h5></a>
            <p>
              <b-tag-taglist>
                <b-tag
                  type="is-info"
                  v-for="(tag, index) in post.tag_list"
                  :key="index"
                  >{{ tag }}</b-tag
                >
              </b-tag-taglist>
            </p>
            <p>{{ new Date(post.published_timestamp).toLocaleDateString() }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-12">
      <b-button tag="a" expanded href="https://dev.to/berviantoleo">
        Show More
      </b-button>
    </div>
  </div>
</template>

<script lang="ts" src="./DevToPost.ts">
</script>