<template>
  <div>
    <h2 class="title">{{ $t('common.certification') }}</h2>
    <div class="card">
      <div class="card-header">
        <div class="card-header-title">
          <h3 class="subtitle">{{ $t('common.active_certification') }}</h3>
        </div>
      </div>
      <div class="card-content">
        <div class="columns">
          <div class="column is-6">
            <h4 class="subtitle">{{ $t('common.certification') }} (Role Based)</h4>
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
            <h4 class="subtitle">{{ $t('common.certification') }} (Fundamental)</h4>
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
              <div class="column is-4">
                <a href="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/49384407">
                  <b-image
                    src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/49384407"
                    alt="Google Cloud Digital Leder"
                    ratio="1by1"
                    rounded
                  ></b-image>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <a
          class="card-footer-item"
          href="https://www.credly.com/users/bervianto-leo-pratama"
          >{{ $t('common.seemore') }}</a
        >
      </footer>
    </div>
    <script
      type="application/javascript"
      defer
      src="https://cdn.credly.com/assets/utilities/embed.js"
    />
  </div>
</template>

<script lang="ts" src="./CertificationPage.ts" />
