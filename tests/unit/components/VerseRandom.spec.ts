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

import VerseRandom from '@/components/VerseRandom.vue';

describe('VerseRandom.vue', () => {
  it('Render initial component correctly', () => {
    const msg = 'No Verse for Today';
    const wrapper = shallowMount(VerseRandom, {
      localVue,
      i18n,
      stubs: ['router-link', 'router-view']
    });
    expect(wrapper.text()).toContain(msg);
  });
});
