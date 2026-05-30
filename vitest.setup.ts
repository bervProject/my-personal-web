import { config } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import { beforeEach, vi } from 'vitest';

const i18n = createI18n()
config.global.plugins = [i18n]

beforeEach(() => {
  const storage: Record<string, string> = {};
  vi.stubGlobal('localStorage', {
    getItem: vi.fn((key: string) => storage[key] || null),
    setItem: vi.fn((key: string, value: string) => { storage[key] = value.toString(); }),
    removeItem: vi.fn((key: string) => { delete storage[key]; }),
    clear: vi.fn(() => { Object.keys(storage).forEach(key => delete storage[key]); }),
    key: vi.fn((index: number) => Object.keys(storage)[index] || null),
    length: 0,
  });
});
