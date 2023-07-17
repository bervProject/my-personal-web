import { shallowMount } from '@vue/test-utils';
import MyFooter from '@/components/MyFooter.vue';

describe('MyFooter.vue', () => {
  it('Render correctly the version', () => {
    const currentVersion = process.env.VUE_APP_VERSION;
    const msg = currentVersion;
    const wrapper = shallowMount(MyFooter, {
      global: {
        stubs: [
          'router-link',
          'router-view',
          'o-icon',
          'o-button'
        ]
      }
    });
    expect(wrapper.text()).toContain(msg);
  });

  it('Render 0 when not have VUE_APP_VERSION', () => {
    process.env.VUE_APP_VERSION = undefined;
    const msg = '0';
    const wrapper = shallowMount(MyFooter, {
      global: {
        stubs: [
          'router-link',
          'router-view',
          'o-icon',
          'o-button'
        ]
      }
    });
    expect(wrapper.text()).toContain(msg);
  });
});
