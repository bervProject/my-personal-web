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

import HomePage from '@/views/HomePage.vue';

describe('HomePage.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(HomePage, {
      localVue,
      i18n,
      stubs: ['router-link', 'router-view']
    });

    expect(wrapper.text()).toContain('Who am I?');

    const allSubtitles = wrapper.findAll('h6');

    const subtitles : string[] = [];

    allSubtitles.wrappers.forEach(subtitle => {
      expect(subtitle.classes()).toStrictEqual(['title']);
      subtitles.push(subtitle.text());
    });

    expect(subtitles).toStrictEqual(['Focus Topics', 'Technology Stacks']);
  });
});