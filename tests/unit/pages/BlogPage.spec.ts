import { createLocalVue, shallowMount } from '@vue/test-utils';
import Buefy from 'buefy';
import VueI18n from 'vue-i18n';
import messages from '@/messages';

// create an extended `Vue` constructor
const localVue = createLocalVue()
// install plugins as normal
localVue.use(Buefy);
localVue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
});

import BlogPage from '@/views/BlogPage.vue';

describe('BlogPage.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(BlogPage, {
      localVue,
      i18n,
      stubs: ['router-link', 'router-view']
    });

    expect(wrapper.text()).toContain('Blogs');

    expect(wrapper.classes()).toStrictEqual(['section']);

    const bTable = wrapper.find('b-table-stub');

    const bTableAttr = bTable.attributes();
    expect(bTableAttr['data']).toBe('');
    expect(bTableAttr['columns']).toBe('');

    const allTitles = wrapper.findAll('h2');
    expect(allTitles.exists()).toBe(true);
    const titles : string[] = [];
    allTitles.wrappers.forEach(title => {
      expect(title.classes()).toStrictEqual(['title']);
      titles.push(title.text());
    });
    expect(titles).toStrictEqual(['Blogs', 'Dev.to Posts']);
  });
});
