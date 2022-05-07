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

import AboutPage from '@/views/AboutPage.vue';

describe('AboutPage.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(AboutPage, {
      localVue,
      i18n,
      stubs: ['router-link', 'router-view']
    });

    expect(wrapper.text()).toContain('Contact');

    const allTitle = wrapper.findAll('h3');
    expect(allTitle.exists()).toBe(true);
    const titles : string[] = [];
    allTitle.wrappers.forEach((title) => {
      expect(title.classes()).toStrictEqual(['title']);
      titles.push(title.text());
    });
    expect(titles).toStrictEqual(['Short Bio', 'Social Media']);

    const scriptTag = wrapper.find('script');
    expect(scriptTag.exists()).toBe(true);
    const scriptAttr = scriptTag.attributes();
    expect(scriptAttr['src']).toBe('https://platform.twitter.com/widgets.js');
    expect(scriptAttr['charset']).toEqual('utf-8');
    expect(scriptAttr['type']).toEqual('application/javascript');
  });
});
