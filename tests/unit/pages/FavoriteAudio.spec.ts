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

import FavoriteAudio from '@/views/FavoriteAudio.vue';

describe('FavoriteAudio.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(FavoriteAudio, {
      localVue,
      i18n,
      stubs: ['router-link', 'router-view']
    });

    const title = wrapper.find('h2');
    const subtitle = wrapper.find('h3');

    expect(title.text()).toEqual('Soundcloud');
    expect(title.classes()).toStrictEqual(['title']);
    expect(subtitle.text()).toEqual('Tune in');
    expect(subtitle.classes()).toStrictEqual(['title']);

    const allIframes = wrapper.findAll('iframe');

    const iframeTunein = allIframes.wrappers.find(wrapper => wrapper.attributes()['title'] === 'tunein');
    expect(iframeTunein).toBeTruthy();
    const tabsAttr = iframeTunein!.attributes();
    expect(tabsAttr['title']).toEqual('tunein');
    expect(tabsAttr['src']).toEqual('https://tunein.com/embed/player/s163092/');
  });
});
