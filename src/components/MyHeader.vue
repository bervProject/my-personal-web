<template>
  <b-navbar fixed-top centered shadow type="is-white" wrapper-class="container">
    <template #brand>
      <b-navbar-item tag="router-link" to="/">
        <img src="../assets/my-logo.png" alt="website logo" />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item tag="router-link" to="/experience">
        {{ $t('navigation.experience') }}
      </b-navbar-item>
      <b-navbar-dropdown label="My Work">
        <b-navbar-item tag="router-link" to="/portofolio">
          Portofolio
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="/projects">
          Projects
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-dropdown :label="$t('navigation.others')">
        <b-navbar-item tag="router-link" to="/blog"> Blog </b-navbar-item>
        <b-navbar-item tag="router-link" to="/songs">
          Songs Recommendation
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="/favorite-audio">
          Favorite Audio
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-dropdown :label="$t('navigation.aboutme')">
        <b-navbar-item tag="router-link" to="/certification">
          {{ $t('navigation.certification') }}
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="/about"> {{ $t('navigation.contact') }} </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-item tag="router-link" to="/donate">
        {{ $t('navigation.donate') }}
      </b-navbar-item>
    </template>
    <template #end>
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
