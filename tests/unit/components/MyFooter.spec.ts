import { expect, describe, it } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import { createPinia } from 'pinia';
import MyFooter from '@/components/MyFooter.vue';

describe('MyFooter.vue', () => {
  it('Render correctly the version', () => {
    const pinia = createPinia();
    const wrapper = shallowMount(MyFooter, {
      global: {
        plugins: [pinia],
        stubs: [
          'router-link',
          'router-view',
          'o-icon',
          'o-button'
        ]
      }
    });
    expect(wrapper.text()).toContain('1.0.0');
  });

  it('Render version from package.json', () => {
    const pinia = createPinia();
    const wrapper = shallowMount(MyFooter, {
      global: {
        plugins: [pinia],
        stubs: [
          'router-link',
          'router-view',
          'o-icon',
          'o-button'
        ]
      }
    });
    expect(wrapper.text()).toContain('1.0.0');
  });
});
