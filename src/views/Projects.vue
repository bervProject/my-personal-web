<template>
  <div>
    <h2 class="title">
      Projects
    </h2>
    <h3 class="subtitle">
      My Projects collection from Github
    </h3>
    <b-tabs
      position="is-centered"
      type="is-toggle"
      size="is-small"
    >
      <b-tab-item
        icon="github"
        icon-pack="fab"
        label="Github - Personal"
      >
        <github url="https://api.github.com/users/berviantoleo/repos" />
      </b-tab-item>
      <b-tab-item
        icon="github"
        icon-pack="fab"
        label="Github - My Personal Projects"
      >
        <github url="https://api.github.com/orgs/bervProject/repos" />
      </b-tab-item>
      <b-tab-item
        icon="github"
        icon-pack="fab"
        label="Github - My University Projects"
      >
        <github
          url="https://api.github.com/orgs/berv-uni-project/repos"
        />
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script lang="ts" src="./Projects.ts"></script>
