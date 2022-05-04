import { createLocalVue, shallowMount } from '@vue/test-utils';
import Buefy from 'buefy';
import VueI18n from 'vue-i18n';
import messages from '@/messages';

// create an extended `Vue` constructor
const localVue = createLocalVue()
// install plugins as normal
localVue.use(Buefy);
localVue.use(Buefy);
localVue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
});

import App from '@/App.vue';

describe('App.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(App, {
      localVue,
      i18n,
      stubs: ['router-link', 'router-view']
    });

    const header = wrapper.find('my-header-stub');
    expect(header.exists()).toBe(true);
    const footer = wrapper.find('my-footer-stub');
    expect(footer.exists()).toBe(true);
    const section = wrapper.find('section');
    expect(section.exists()).toBe(true);
    expect(section.classes()).toStrictEqual(['section']);
    const routerView = wrapper.find('router-view-stub');
    expect(routerView.exists()).toBe(true);
  });
});
