import { expect, describe, it } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import SongsPage from '@/views/SongsPage.vue';

describe('SongsPage.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(SongsPage, {
      global: {
        stubs: ['router-link', 'router-view']
      }
    });

    expect(wrapper.text()).toContain('Songs Recommendation');

    const allSubtitles = wrapper.findAll('h3');

    const subtitles: string[] = [];

    allSubtitles.forEach(subtitle => {
      expect(subtitle.classes()).toStrictEqual(['subtitle']);
      subtitles.push(subtitle.text());
    });

    expect(subtitles).toStrictEqual(['Spotify', 'Youtube']);
  });
});
