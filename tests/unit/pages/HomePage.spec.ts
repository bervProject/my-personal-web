import { expect, describe, it } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import HomePage from '@/views/HomePage.vue';

describe('HomePage.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(HomePage, {
      global: {
        stubs: [
          'router-link',
          'router-view',
          'o-icon',
          'o-button',
          'o-notification',
          'o-table',
          'o-table-column',
        ],
        mocks: {
          $t: () => {}
        }
      }
    });

    expect(wrapper.text()).toContain('I\'m a Software Engineer.');

    const allSubtitles = wrapper.findAll('h4');

    const subtitles : string[] = [];

    allSubtitles.forEach(subtitle => {
      if (subtitle.classes().includes('title'))
      {
        subtitles.push(subtitle.text());
      }
    });

    expect(subtitles).toStrictEqual(['Focus Topics', 'Technology Stacks', 'navigation.community']);
  });
});
