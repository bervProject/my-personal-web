<template>
  <section class="section">
    <div class="container">
      <h2 class="title">Soundcloud</h2>
      <b-field label="Item">
        <b-select v-model="perPage" expanded>
          <option
            v-for="option in perPageSelection"
            :key="option"
            :value="option"
          >
            {{ option }}
          </option>
        </b-select>
      </b-field>
      <b-pagination
        order="is-centered"
        :total="total"
        v-model="currentPage"
        :per-page="perPage"
      >
      </b-pagination>
      <div class="columns is-multiline">
        <div
          :key="item.id"
          v-for="item in paginatedItems"
          class="column is-one-third"
        >
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
  </section>
</template>

<script lang="ts" src="./FavoriteAudio.ts"></script>
