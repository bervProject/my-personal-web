import { expect, describe, it } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import HomePage from '@/views/CommunityPage.vue';

describe('CommunityPage.vue', () => {
  it('renders the community page headings', () => {
    const wrapper = shallowMount(HomePage, {
      global: {
        stubs: ['router-link', 'router-view'],
      }
    });

    const subtitles = wrapper.findAll('h4').filter((subtitle) => subtitle.classes().includes('title')).map((subtitle) => subtitle.text());

    expect(subtitles).toStrictEqual(['Community', 'Contributions']);
  });
});
