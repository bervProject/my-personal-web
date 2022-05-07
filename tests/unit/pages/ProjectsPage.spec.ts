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

import ProjectsPage from '@/views/ProjectsPage.vue';

describe('ProjectsPage.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(ProjectsPage, {
      localVue,
      i18n,
      stubs: ['router-link', 'router-view']
    });

    const title = wrapper.find('h2');
    const subtitle = wrapper.find('h3');

    expect(title.text()).toEqual('Projects');
    expect(title.classes()).toStrictEqual(['title']);
    expect(subtitle.text()).toEqual('My Projects collection from Github');
    expect(subtitle.classes()).toStrictEqual(['subtitle']);

    const bTabs = wrapper.find('b-tabs-stub');
    expect(bTabs.exists()).toBe(true);
    const tabsAttr = bTabs.attributes();
    expect(tabsAttr['position']).toEqual('is-centered');
    expect(tabsAttr['type']).toEqual('is-toggle');
    expect(tabsAttr['size']).toEqual('is-small');
    const bTabItems = bTabs.findAll('b-tab-item-stub');
    expect(bTabItems.wrappers.length).toEqual(3);
  });
});
