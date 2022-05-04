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

import DonatePage from '@/views/DonatePage.vue';

describe('DonatePage.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(DonatePage, {
      localVue,
      i18n,
      stubs: ['router-link', 'router-view']
    });

    expect(wrapper.text()).toContain('Donate');

    const h2 = wrapper.find('h2');
    expect(h2.exists()).toBe(true);
    expect(h2.classes()).toStrictEqual(['title']);
    expect(h2.text()).toEqual('Donate');

    const img = wrapper.find('iframe');
    expect(img.exists()).toBe(true);
    const imgAttr = img.attributes();
    expect(imgAttr['src']).toBe('https://ko-fi.com/berviantoleo/?hidefeed=true&widget=true&embed=true&preview=true');
    expect(imgAttr['height']).toEqual('712');
    expect(imgAttr['title']).toEqual('berviantoleo');
  });
});
