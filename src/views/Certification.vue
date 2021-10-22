<template>
  <div>
    <h2 class="title">Certification</h2>
    <div class="columns">
      <div class="column is-6">
        <div class="card">
          <div class="card-header">
            <div class="card-header-title">Certification (Role Based)</div>
          </div>
          <div class="card-content">
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
          <footer class="card-footer">
            <a
              class="card-footer-item"
              href="https://www.credly.com/users/bervianto-leo-pratama"
              >See more</a
            >
          </footer>
        </div>
      </div>
      <div class="column is-6">
        <div class="card">
          <div class="card-header">
            <div class="card-header-title">Certification (Fundamental)</div>
          </div>
          <div class="card-content">
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
