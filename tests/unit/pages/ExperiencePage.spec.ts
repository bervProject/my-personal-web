import { expect, describe, it } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import ExperiencePage from '@/views/ExperiencePage.vue';

describe('ExperiencePage.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(ExperiencePage, {
      global: {
        stubs: [
          'router-link',
          'router-view',
          'o-loading',
          'o-table',
          'o-table-column',
          'o-icon',
          'o-button'
        ],
        mocks: {
          $t: () => {}
        }
      }
    });

    expect(wrapper.text()).toContain('');

    const bLoading = wrapper.find('o-loading-stub');
    expect(bLoading.exists()).toBe(true);
    const tabsAttr = bLoading.attributes();
    expect(tabsAttr['animation']).toEqual(undefined);

    const allSubtitles = wrapper.findAll('h3');
    const allSubs : string[] = [];
    allSubtitles.forEach((subs) => {
      expect(subs.classes()).toStrictEqual(['subtitle']);
      allSubs.push(subs.text());
    });
    expect(allSubs).toStrictEqual(['experience.workexperience', 'experience.education', 'experience.research_list']);
  });
});
