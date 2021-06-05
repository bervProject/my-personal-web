import { shallowMount } from '@vue/test-utils';
import MyHeader from '../../src/components/MyHeader.vue';

describe('MyHeader.vue', () => {
  it('Render correctly', () => {
    const msg = 'Experience';
    const wrapper = shallowMount(MyHeader);
    expect(wrapper.text()).toContain(msg);
  });
});
