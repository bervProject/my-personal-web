import { expect, describe, it, beforeEach } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import { createPinia } from 'pinia';
import App from '@/App.vue';

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

describe('App.vue', () => {
  it('Render correctly', () => {
    const pinia = createPinia();
    const wrapper = shallowMount(App, {
      global: {
        plugins: [pinia],
        stubs: [
          'router-link',
          'router-view',
          'my-footer',
          // 'side-bar'
          'o-notification',
          'o-table',
          'o-table-column',
          'o-icon'
        ],
        mocks: {
          $t: () => {}
        }
      }
    });

    // const header = wrapper.find('side-bar-stub');
    // expect(header.exists()).toBe(true);
    const footer = wrapper.find('my-footer-stub');
    expect(footer.exists()).toBe(true);
    const section = wrapper.find('section');
    expect(section.exists()).toBe(true);
    expect(section.classes()).toStrictEqual(['section']);
    const routerView = wrapper.find('router-view-stub');
    expect(routerView.exists()).toBe(true);
  });
});
