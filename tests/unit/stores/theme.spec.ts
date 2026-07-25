import { beforeEach, describe, expect, it, vi } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { useThemeStore } from '@/stores/theme';

describe('theme store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    document.documentElement.className = '';
    localStorage.clear();
    vi.stubGlobal('matchMedia', vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })));
  });

  it('initializes from saved theme preference and persists updates', () => {
    localStorage.setItem('theme', 'dark');

    const store = useThemeStore();
    store.initTheme();

    expect(store.isDark).toBe(true);
    expect(document.documentElement.classList.contains('dark-mode')).toBe(true);
    expect(document.documentElement.classList.contains('light-mode')).toBe(false);

    store.toggleTheme();
    expect(store.isDark).toBe(false);
    expect(document.documentElement.classList.contains('light-mode')).toBe(true);

    store.saveTheme();
    expect(localStorage.getItem('theme')).toBe('light');
  });

  it('falls back to system preference when no saved theme exists', () => {
    vi.stubGlobal('matchMedia', vi.fn().mockImplementation((query: string) => ({
      matches: true,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })));

    const store = useThemeStore();
    store.initTheme();

    expect(store.isDark).toBe(true);
    expect(document.documentElement.classList.contains('dark-mode')).toBe(true);
  });
});
