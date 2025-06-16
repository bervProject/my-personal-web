import { expect, describe, it } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import PortofolioPage from '@/views/PortofolioPage.vue';

describe('PortofolioPage.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(PortofolioPage, {
      global: {
        stubs: [
          'router-link',
          'router-view',
          'o-tabs',
          'o-tab-item'
        ]
      }
    });

    expect(wrapper.text()).toContain('Portofolio');

    const bTabs = wrapper.find('o-tabs-stub');
    expect(bTabs.exists()).toBe(true);
    const tabsAttr = bTabs.attributes();
    expect(tabsAttr['position']).toEqual('centered');
    expect(tabsAttr['type']).toEqual('toggle');
  });
});
