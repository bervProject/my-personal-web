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
        <p>This page is in maintenance mode. I want to integrate multiple certification platform credentials results into one place. I sincerely apologize for the cause. Temporarily, you may visit this <a target="_blank" href="https://berviantoleo.notion.site/ef316480dc26422288dfa4a7243148e4?v=e43417c72903440bb29cc534eadd95e4">notion page</a>, which I update the page manually.</p>
      </div>
      <footer class="card-footer">
        <a
          class="card-footer-item"
          target="_blank"
          href="https://www.credly.com/users/bervianto-leo-pratama"
          >{{ $t('common.seemore') }}</a
        >
      </footer>
    </div>
  </div>
</template>

<script lang="ts" src="./CertificationPage.ts" />
