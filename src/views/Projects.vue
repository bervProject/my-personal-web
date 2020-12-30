<template>
  <div>
    <h2 class="title">Projects</h2>
    <b-tabs position="is-centered" type="is-boxed" size="is-small">
      <b-tab-item label="Github - Personal">
        <github url="https://api.github.com/users/berviantoleo/repos"></github>
      </b-tab-item>
      <b-tab-item label="Github - My Personal Projects">
        <github url="https://api.github.com/orgs/bervProject/repos"></github>
      </b-tab-item>
      <b-tab-item label="Github - My University Projects">
        <github
          url="https://api.github.com/orgs/berv-uni-project/repos"
        ></github>
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script lang="ts" src="./Projects.ts"></script>
