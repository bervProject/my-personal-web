import { shallowMount } from '@vue/test-utils';
import { createLocalVue } from '@vue/test-utils';
import Buefy from 'buefy';
// create an extended `Vue` constructor
const localVue = createLocalVue()
// install plugins as normal
localVue.use(Buefy);

import MyFooter from '../../src/components/MyFooter.vue';

describe('MyFooter.vue', () => {
  it('Render correctly the version', () => {
    const currentVersion = process.env.VUE_APP_VERSION;
    const msg = currentVersion;
    const wrapper = shallowMount(MyFooter, {
      localVue,
      stubs: ['router-link', 'router-view']
    });
    expect(wrapper.text()).toContain(msg);
  });

  it('Render 0 when not have VUE_APP_VERSION', () => {
    process.env.VUE_APP_VERSION = undefined;
    const msg = '0';
    const wrapper = shallowMount(MyFooter, {
      localVue,
      stubs: ['router-link', 'router-view']
    });
    expect(wrapper.text()).toContain(msg);
  });
});
