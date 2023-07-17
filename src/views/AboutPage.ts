import { defineComponent } from 'vue';
import services from '@/services';

export default defineComponent({
  name: 'AboutPage',
  metaInfo: {
    title: 'About Me',
  },
  data() {
    return {
      contacts: [],
      isLoading: false,
    };
  },
  mounted(): void {
    this.isLoading = true;
    services.get('classes/Contact')
      .then(result => {
        this.contacts = result.data.results;
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
});