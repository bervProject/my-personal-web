import { shallowMount } from '@vue/test-utils';
import { createLocalVue } from '@vue/test-utils';
import Buefy from 'buefy';
import VueI18n from 'vue-i18n';
import messages from '../../src/messages';

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

import MyHeader from '../../src/components/MyHeader.vue';

describe('MyHeader.vue', () => {
  it('Render correctly', () => {
    const msg = 'Experience';
    const wrapper = shallowMount(MyHeader, {
      localVue,
      i18n,
      stubs: ['router-link', 'router-view']
    });
    expect(wrapper.text()).toContain(msg);
  });
});
