<template>
  <div>
    <h2 class="title">
      {{ $t('common.donate') }}
    </h2>
    <div class="columns is-multiline">
      <div class="column is-6">
        <iframe
          src="https://ko-fi.com/berviantoleo/?hidefeed=true&widget=true&embed=true&preview=true"
          style="border: none; width: 100%; padding: 4px; background: #f7f7f7"
          height="712"
          title="berviantoleo"
        />
      </div>
      <div class="column is-6">
        <iframe src="https://github.com/sponsors/berviantoleo/card" title="Sponsor berviantoleo" height="225" width="600" style="border: 0;"></iframe>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./DonatePage.ts">
</script>
