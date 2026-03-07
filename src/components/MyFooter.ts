import { defineComponent } from 'vue';
import { useThemeStore } from '@/stores/theme';
import { storeToRefs } from 'pinia';
import packageJson from '../../package.json';
import services from '@/services';

export default defineComponent({
  name: 'MyFooter',
  setup() {
    const themeStore = useThemeStore();
    const { isDark } = storeToRefs(themeStore);
    
    return {
      isDark
    };
  },
  data() {
    return {
      version: packageJson.version,
      contacts: [] as Array<any>,
      isLoadingContacts: false,
    };
  },
  mounted() {
    this.isLoadingContacts = true;
    services.get('classes/Contact').then(result => {
      this.contacts = result.data.results;
    }).catch(err => {
      console.error(err);
    }).finally(() => {
      this.isLoadingContacts = false;
    })
  },
});
