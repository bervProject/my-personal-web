import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MyFooter',
  data() {
    return {
      version: import.meta.env.VITE_APP_VERSION || '0',
    };
  },
});
