import { config } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import { beforeEach, vi } from 'vitest';

const i18n = createI18n()
config.global.plugins = [i18n]

beforeEach(() => {
  const storage = {};
  vi.stubGlobal('localStorage', {
    getItem: vi.fn((key) => storage[key] || null),
    setItem: vi.fn((key, value) => { storage[key] = value.toString(); }),
    removeItem: vi.fn((key) => { delete storage[key]; }),
    clear: vi.fn(() => { Object.keys(storage).forEach(key => delete storage[key]); }),
  });
});

