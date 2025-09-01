import { defineComponent } from 'vue';
import { useThemeStore } from '@/stores/theme';
import { storeToRefs } from 'pinia';
import packageJson from '../../package.json';

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
    };
  },
});
