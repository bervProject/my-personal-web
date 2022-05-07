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

import ExperiencePage from '@/views/ExperiencePage.vue';

describe('ExperiencePage.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(ExperiencePage, {
      localVue,
      i18n,
      stubs: ['router-link', 'router-view']
    });

    expect(wrapper.text()).toContain('Experience');

    const bLoading = wrapper.find('b-loading-stub');
    expect(bLoading.exists()).toBe(true);
    const tabsAttr = bLoading.attributes();
    expect(tabsAttr['animation']).toEqual('fade');

    const allSubtitles = wrapper.findAll('h3');
    const allSubs : string[] = [];
    allSubtitles.wrappers.forEach((subs) => {
      expect(subs.classes()).toStrictEqual(['subtitle']);
      allSubs.push(subs.text());
    });
    expect(allSubs).toStrictEqual(['Work Experience', 'Education', 'Research List']);
  });
});
