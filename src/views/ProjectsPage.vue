<template>
  <div>
    <h2 class="title">Projects</h2>
    <h3 class="subtitle">My Projects collection from Github</h3>
    <o-tabs position="centered" type="toggle" size="small">
      <o-tab-item icon="github" icon-pack="fab" label="Github - Personal">
        <github-list url="https://api.github.com/users/berviantoleo/repos" />
      </o-tab-item>
      <o-tab-item
        icon="github"
        icon-pack="fab"
        label="Github - My Personal Projects"
      >
        <github-list url="https://api.github.com/orgs/bervProject/repos" />
      </o-tab-item>
      <o-tab-item
        icon="github"
        icon-pack="fab"
        label="Github - My University Projects"
      >
        <github-list url="https://api.github.com/orgs/berv-uni-project/repos" />
      </o-tab-item>
    </o-tabs>
  </div>
</template>

<script lang="ts" src="./ProjectsPage.ts"></script>
