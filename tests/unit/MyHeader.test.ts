import { shallowMount } from '@vue/test-utils';
import { createLocalVue } from '@vue/test-utils';
import Buefy from 'buefy';
// create an extended `Vue` constructor
const localVue = createLocalVue()
// install plugins as normal
localVue.use(Buefy);

import MyHeader from '../../src/components/MyHeader.vue';

describe('MyHeader.vue', () => {
  it('Render correctly', () => {
    const msg = 'Experience';
    const wrapper = shallowMount(MyHeader, {
      localVue,
      stubs: ['router-link', 'router-view']
    });
    expect(wrapper.text()).toContain(msg);
  });
});
