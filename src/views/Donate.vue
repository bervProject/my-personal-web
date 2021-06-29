<template>
  <div>
    <h2 class="title">
      Donate
    </h2>
    <iframe
      src="https://ko-fi.com/berviantoleo/?hidefeed=true&widget=true&embed=true&preview=true"
      style="border: none; width: 100%; padding: 4px; background: #f7f7f7"
      height="712"
      title="berviantoleo"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'Donate',
})
export default class Donate extends Vue {}
</script>
