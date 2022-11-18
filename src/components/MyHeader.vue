<template>
  <b-navbar fixed-top shadow type="is-white" wrapper-class="container">
    <template #brand>
      <b-navbar-item tag="router-link" to="/">
        <img src="../assets/my-logo.png" alt="website logo" />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-dropdown :label="$t('navigation.experience')">
        <b-navbar-item tag="router-link" to="/experience">
          {{ $t('navigation.experience') }}
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="/portofolio">
          {{ $t('navigation.portofolio') }}
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="/projects">
          {{ $t('navigation.projects') }}
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="/speaking">
          {{ $t('navigation.speaking') }}
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-dropdown :label="$t('navigation.aboutme')">
        <b-navbar-item tag="router-link" to="/certification">
          {{ $t('navigation.certification') }}
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="/about">
          {{ $t('navigation.contact') }}
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-dropdown :label="$t('navigation.others')">
        <b-navbar-item tag="router-link" to="/blog">
          {{ $t('navigation.blog') }}
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="/donate">
          {{ $t('navigation.donate') }}
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="/favorite-audio">
          {{ $t('navigation.favoritesong') }}
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="/songs">
          {{ $t('navigation.songrecommendation') }}
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>
    <template #end>
      <b-dropdown
        append-to-body
        aria-role="menu"
        max-height="200"
        position="is-bottom-left"
        scrollable
        trap-focus
      >
        <template #trigger>
          <a class="navbar-item" role="button">
            <b-icon type="is-dark" icon="bell" />
            <b-tag rounded type="is-primary" v-if="announcements.length > 0">{{
              announcements.length
            }}</b-tag>
          </a>
        </template>
        <b-dropdown-item
          aria-role="listitem"
          v-for="(announcement, index) in announcements"
          :key="index"
        >
          <div v-html="announcement.main" />
        </b-dropdown-item>
      </b-dropdown>
      <b-navbar-item tag="div">
        <b-select v-model="$i18n.locale" placeholder="Select a name">
          <option v-for="option in data" :value="option.id" :key="option.id">
            {{ option.lang }}
          </option>
        </b-select>
      </b-navbar-item>
      <b-navbar-item tag="div">
        <div class="buttons">
          <b-button
            icon-pack="fab"
            icon-left="github"
            type="is-light"
            tag="a"
            href="https://github.com/bervProject/my-personal-web"
          >
            <strong>Github</strong>
          </b-button>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang="ts" src="./MyHeader.ts">
</script>
