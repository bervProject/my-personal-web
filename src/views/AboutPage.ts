import { defineComponent } from 'vue';
import services from '@/services';

export default defineComponent({
  name: 'AboutPage',
  metaInfo: {
    title: 'About Me',
  },
  data() {
    const contacts : any[] = [];
    return {
      contacts,
      isLoading: false,
    };
  },
  mounted(): void {
    this.isLoading = true;
    services.get('classes/Contact')
      .then((result : any) => {
        this.contacts = result.data.results;
      })
      .catch((err: Error) => {
        console.error(err);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
});