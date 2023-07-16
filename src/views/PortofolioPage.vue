<template>
  <div>
    <h2 class="title">
      Portofolio
    </h2>
    <o-tabs
      position="centered"
      type="toggle"
      expanded
    >
      <o-tab-item label="Mobile">
        <portofolio-item :items="mobileData" />
      </o-tab-item>
      <o-tab-item label="Web">
        <portofolio-item :items="webData" />
      </o-tab-item>
      <o-tab-item label="Desktop">
        <portofolio-item :items="desktopData" />
      </o-tab-item>
    </o-tabs>
  </div>
</template>

<script lang="ts" src="./PortofolioPage.ts"></script>
