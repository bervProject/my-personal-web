import { expect, describe, it } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import BlogPage from '@/views/BlogPage.vue';

describe('BlogPage.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(BlogPage, {
      global: {
        stubs: [
          'router-link',
          'router-view',
          'o-table',
          'o-table-column',
          'o-icon'
        ],
      }
    });

    expect(wrapper.text()).toContain('Blogs');

    expect(wrapper.classes()).toStrictEqual(['section']);

    const bTable = wrapper.find('o-table-stub');

    const bTableAttr = bTable.attributes();
    expect(bTableAttr['data']).toBe('');
    expect(bTableAttr['columns']).toBe(undefined);

    const allTitles = wrapper.findAll('h2');
    expect(allTitles.length).toBeGreaterThan(0);
    const titles : string[] = [];
    allTitles.forEach(title => {
      expect(title.classes()).toStrictEqual(['title']);
      titles.push(title.text());
    });
    expect(titles).toStrictEqual(['Blogs', 'Dev.to Posts']);
  });
});
