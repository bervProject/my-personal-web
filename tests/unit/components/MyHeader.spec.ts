import { expect, describe, it } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import { createPinia } from 'pinia';
import MyHeader from '@/components/MyHeader.vue';

describe('MyHeader.vue', () => {
  it('Render correctly the version', () => {
    const pinia = createPinia();
    const wrapper = shallowMount(MyHeader, {
      global: {
        plugins: [pinia],
        stubs: [
          'router-link',
          'router-view',
          'o-icon',
          'o-button',
          'o-dropdown',
          'o-dropdown-item'
        ],
        mocks: {
          $t: () => {},
          $i18n: {
            locale: 'en',
            availableLocales: ['en', 'id']
          }
        }
      }
    });
    const renderedClasses = wrapper.classes();
    expect(renderedClasses).toContain('navbar');
  });
 
});
