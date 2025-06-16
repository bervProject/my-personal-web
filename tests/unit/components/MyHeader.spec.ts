import { expect, describe, it } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import MyHeader from '@/components/MyHeader.vue';

describe('MyHeader.vue', () => {
  it('Render correctly the version', () => {
    const wrapper = shallowMount(MyHeader, {
      global: {
        stubs: [
          'router-link',
          'router-view'
        ],
        mocks: {
          $t: () => {}
        }
      }
    });
    const renderedClasses = wrapper.classes();
    expect(renderedClasses).toContain('container');
    expect(renderedClasses).toContain('mt-4');
  });
 
});
