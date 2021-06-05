<template>
  <div>
    <h2 class="title">
      Certification
    </h2>
    <div class="columns">
      <div class="column is-6">
        <h3 class="subtitle">
          Certification <strong>(Role Based)</strong>
        </h3>
        <div class="columns is-multiline">
          <div
            v-for="cert of certIdRoleBased"
            :key="cert"
            class="column is-4"
          >
            <div
              data-iframe-width="150"
              data-iframe-height="270"
              :data-share-badge-id="cert"
              data-share-badge-host="https://www.credly.com"
            />
          </div>
        </div>
      </div>
      <div class="column is-6">
        <h3 class="subtitle">
          Certification <strong>(Fundamental)</strong>
        </h3>
        <div class="columns is-multiline">
          <div
            v-for="cert of certIdFundamental"
            :key="cert"
            class="column is-4"
          >
            <div
              data-iframe-width="150"
              data-iframe-height="270"
              :data-share-badge-id="cert"
              data-share-badge-host="https://www.credly.com"
            />
          </div>
        </div>
      </div>
    </div>
    <script
      type="application/javascript"
      defer
      src="https://cdn.credly.com/assets/utilities/embed.js"
    />
  </div>
</template>

<script lang="ts" src="./Certification.ts">
</script>