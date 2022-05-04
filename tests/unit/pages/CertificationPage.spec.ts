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

import CertificationPage from '@/views/CertificationPage.vue';

describe('CertificationPage.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(CertificationPage, {
      localVue,
      i18n,
      stubs: ['router-link', 'router-view']
    });

    expect(wrapper.text()).toContain('Certification');

    const footer = wrapper.find('footer');

    expect(footer.exists()).toBe(true);
    expect(footer.classes()).toStrictEqual(['card-footer']);
    expect(footer.text()).toEqual('See More');

    const scriptTag = wrapper.find('script');
    expect(scriptTag.exists()).toBe(true);
    const scriptAttr = scriptTag.attributes();
    expect(scriptAttr['src']).toBe('https://cdn.credly.com/assets/utilities/embed.js');
    expect(scriptAttr['type']).toEqual('application/javascript');
  });
});
