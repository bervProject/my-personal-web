import { expect, describe, it } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import { createPinia } from 'pinia';
import HomePage from '@/views/HomePage.vue';

describe('HomePage.vue', () => {
  it('renders the main sections and translated labels', () => {
    const pinia = createPinia();

    const wrapper = shallowMount(HomePage, {
      global: {
        plugins: [pinia],
        stubs: [
          'router-link',
          'router-view',
          'o-icon',
          'o-button',
          'o-notification',
          'o-table',
          'o-table-column',
        ],
      }
    });

    expect(wrapper.text()).toContain('A Software Engineer specializing in seamless system migration, modernisation, and building resilient cloud architectures.');

    const subtitles = wrapper.findAll('h4').filter((subtitle) => subtitle.classes().includes('title')).map((subtitle) => subtitle.text());

    expect(subtitles).toEqual(['Featured Projects', 'Latest Thoughts', 'Focus Topics', 'Technology Stacks', 'Community']);
  });
});
