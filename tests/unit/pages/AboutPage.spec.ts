import { shallowMount } from '@vue/test-utils';

import AboutPage from '@/views/AboutPage.vue';

describe('AboutPage.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(AboutPage, {
      global: {
        stubs: [
          'router-link',
          'router-view',
          'o-icon'
        ]
      }
    });

    expect(wrapper.text()).toContain('Contact');

    const allTitle = wrapper.findAll('h3');
    expect(allTitle.length).toBeGreaterThan(0);
    const titles: string[] = [];
    allTitle.forEach((title) => {
      expect(title.classes()).toStrictEqual(['title']);
      titles.push(title.text());
    });
    expect(titles).toStrictEqual(['Short Bio', 'Social Media']);
  });
});
