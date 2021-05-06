<template>
  <div>
    <section class="section">
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
              :title="`soundcloud-${item.id}`"
              style="overflow: hidden; border: 0px"
              allow="autoplay"
              :src="item.srcAudio"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <h3 class="title">Tune in</h3>
      <iframe
        title="tunein"
        src="https://tunein.com/embed/player/s163092/"
        style="width: 100%; height: 100px; overflow: hidden; border: 0px"
      ></iframe>
    </section>
  </div>
</template>

<script lang="ts" src="./FavoriteAudio.ts"></script>
