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

import ImageContainer from '@/components/ImageContainer.vue';

describe('ImageContainer.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(ImageContainer, {
      localVue,
      i18n,
      stubs: ['router-link', 'router-view']
    });
    const figure = wrapper.find('figure');
    expect(figure.exists()).toBe(true);
    expect(figure.classes()).toStrictEqual(['image']);

    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(img.attributes()['alt']).toBe('Image Container');
  });
});
