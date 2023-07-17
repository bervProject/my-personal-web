import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MyFooter',
  data() {
    return {
      version: process.env.VUE_APP_VERSION || '0',
    };
  },
});
