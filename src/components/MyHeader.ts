import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useThemeStore } from '@/stores/theme';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'MyHeader',
  setup() {
    const isMenuActive = ref(false);
    const toggleMenu = () => {
      isMenuActive.value = !isMenuActive.value;
    };

    const { locale } = useI18n();

    const availableLocales = ['en', 'id']; // Customize based on your supported languages
    const currentLocale = ref(locale.value);

    const switchLanguage = (lang: string) => {
      locale.value = lang;
      currentLocale.value = lang;
    };

    // Theme management
    const themeStore = useThemeStore();
    const { isDark } = storeToRefs(themeStore);
    
    const toggleTheme = () => {
      themeStore.toggleTheme();
      themeStore.saveTheme();
    };

    return {
      isMenuActive,
      toggleMenu,
      availableLocales,
      currentLocale,
      switchLanguage,
      isDark,
      toggleTheme
    };
  },
  data() {
    return {};
  },
});
