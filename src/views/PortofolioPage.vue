<template>
  <div>
    <h2 class="title">
      Portofolio
    </h2>
    <b-tabs
      position="is-centered"
      type="is-toggle"
      expanded
    >
      <b-tab-item label="Mobile">
        <portofolio-item :items="mobileData" />
      </b-tab-item>
      <b-tab-item label="Web">
        <portofolio-item :items="webData" />
      </b-tab-item>
      <b-tab-item label="Desktop">
        <portofolio-item :items="desktopData" />
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script lang="ts" src="./PortofolioPage.ts"></script>
