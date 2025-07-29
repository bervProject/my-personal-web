import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';

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

    return {
      isMenuActive,
      toggleMenu,
      availableLocales,
      currentLocale,
      switchLanguage
    };
  },
  data() {
    return {};
  },
});
