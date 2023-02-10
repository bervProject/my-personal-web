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

import HomePage from '@/views/CommunityPage.vue';

describe('CommunityPage.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(HomePage, {
      localVue,
      i18n,
      stubs: ['router-link', 'router-view']
    });

    expect(wrapper.text()).toContain('Community');

    const allSubtitles = wrapper.findAll('h4');

    const subtitles : string[] = [];

    allSubtitles.wrappers.forEach(subtitle => {
      if (subtitle.classes().includes('title'))
      {
        subtitles.push(subtitle.text());        
      }
    });

    expect(subtitles).toStrictEqual(['Community', 'Contributions']);
  });
});
