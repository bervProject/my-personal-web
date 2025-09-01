import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false);

  const toggleTheme = () => {
    isDark.value = !isDark.value;
    updateTheme();
  };

  const updateTheme = () => {
    document.documentElement.classList.remove('dark-mode', 'light-mode');
    if (isDark.value) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.add('light-mode');
    }
  };

  // Initialize theme on store creation
  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      isDark.value = savedTheme === 'dark';
    } else {
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    updateTheme();
  };

  // Save theme preference
  const saveTheme = () => {
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
  };

  return {
    isDark,
    toggleTheme,
    initTheme,
    saveTheme,
  };
});
