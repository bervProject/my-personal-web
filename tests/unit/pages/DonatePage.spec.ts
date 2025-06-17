import { expect, describe, it } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import DonatePage from '@/views/DonatePage.vue';

describe('DonatePage.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(DonatePage, {
      global: {
        stubs: ['router-link', 'router-view'],
        mocks: {
          $t: () => {}
        }
      }
    });

    expect(wrapper.text()).toContain('');

    const h2 = wrapper.find('h2');
    expect(h2.exists()).toBe(true);
    expect(h2.classes()).toStrictEqual(['title']);
    expect(h2.text()).toEqual('');

    const img = wrapper.find('iframe');
    expect(img.exists()).toBe(true);
    const imgAttr = img.attributes();
    expect(imgAttr['src']).toBe('https://ko-fi.com/berviantoleo/?hidefeed=true&widget=true&embed=true&preview=true');
    expect(imgAttr['height']).toEqual('712');
    expect(imgAttr['title']).toEqual('berviantoleo');
  });
});
