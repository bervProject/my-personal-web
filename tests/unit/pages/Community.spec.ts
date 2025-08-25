import { expect, describe, it } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import HomePage from '@/views/CommunityPage.vue';

describe('CommunityPage.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(HomePage, {
      global: {
        stubs: ['router-link', 'router-view'],
        mocks: {
          $t: () => {}
        }
      }
    });

    const allSubtitles = wrapper.findAll('h4');

    const subtitles : string[] = [];

    allSubtitles.forEach(subtitle => {
      if (subtitle.classes().includes('title'))
      {
        subtitles.push(subtitle.text());
      }
    });

    expect(subtitles).toStrictEqual(['navigation.community', 'Contributions']);
  });
});
