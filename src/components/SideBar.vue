<template>
  <aside class="sidenav menu">
    <div class="section">
      <figure class="image is-128x128">
        <img class="is-rounded" src="../assets/images/me.jpg" />
      </figure>
      <router-link to="/"
        ><h2 class="subtitle">Bervianto Leo P</h2></router-link
      >
      <o-select v-model="$i18n.locale" placeholder="Select a name">
        <option v-for="option in $i18n.availableLocales" :value="option" :key="`locale-${option}`">
          {{ option }}
        </option>
      </o-select>
      <p class="menu-label">{{ $t('navigation.experience') }}</p>
      <ul class="menu-list">
        <li>
          <router-link to="/experience">{{
            $t('navigation.experience')
          }}</router-link>
        </li>
        <li>
          <router-link to="/portofolio">{{
            $t('navigation.portofolio')
          }}</router-link>
        </li>
        <li>
          <router-link to="/projects">{{
            $t('navigation.projects')
          }}</router-link>
        </li>
      </ul>
      <p class="menu-label">{{ $t('navigation.community') }}</p>
      <ul class="menu-list">
        <li>
          <router-link to="/community">{{
            $t('navigation.community')
          }}</router-link>
        </li>
        <li>
          <router-link to="/community/speaking">{{
            $t('navigation.speaking')
          }}</router-link>
        </li>
        <li>
          <router-link to="/community/blog">{{
            $t('navigation.blog')
          }}</router-link>
        </li>
      </ul>
      <p class="menu-label">{{ $t('navigation.aboutme') }}</p>
      <ul class="menu-list">
        <li>
          <router-link to="/certification">{{
            $t('navigation.certification')
          }}</router-link>
        </li>
        <li>
          <router-link to="/about">{{ $t('navigation.contact') }}</router-link>
        </li>
      </ul>
      <p class="menu-label">{{ $t('navigation.others') }}</p>
      <ul class="menu-list">
        <li>
          <router-link to="/donate">{{ $t('navigation.donate') }}</router-link>
        </li>
        <li>
          <router-link to="/favorite-audio">{{
            $t('navigation.favoritesong')
          }}</router-link>
        </li>
        <li>
          <router-link to="/songs">{{
            $t('navigation.songrecommendation')
          }}</router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>

<style scoped>
.sidenav {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 250px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: var(--surface-color);
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
}
</style>