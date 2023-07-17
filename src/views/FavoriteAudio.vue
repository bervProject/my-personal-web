<template>
  <div>
    <section class="section">
      <h2 class="title">
        Soundcloud
      </h2>
      <o-field label="Item">
        <o-select
          v-model="perPage"
          expanded
        >
          <option
            v-for="option in perPageSelection"
            :key="option"
            :value="option"
          >
            {{ option }}
          </option>
        </o-select>
      </o-field>
      <o-pagination
        v-model:current="currentPage"
        order="centered"
        :total="total"
        :per-page="perPage"
      />
      <div class="columns is-multiline">
        <div
          v-for="item in paginatedItems"
          :key="item.id"
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
            />
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <h3 class="title">
        Tune in
      </h3>
      <iframe
        title="tunein"
        src="https://tunein.com/embed/player/s163092/"
        style="width: 100%; height: 100px; overflow: hidden; border: 0px"
      />
    </section>
  </div>
</template>

<script lang="ts" src="./FavoriteAudio.ts"></script>
