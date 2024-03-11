import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(App, {
      global: {
        stubs: [
          'router-link',
          'router-view',
          'my-footer',
          // 'side-bar'
        ]
      }
    });

    // const header = wrapper.find('side-bar-stub');
    // expect(header.exists()).toBe(true);
    const footer = wrapper.find('my-footer-stub');
    expect(footer.exists()).toBe(true);
    const section = wrapper.find('section');
    expect(section.exists()).toBe(true);
    expect(section.classes()).toStrictEqual(['section']);
    const routerView = wrapper.find('router-view-stub');
    expect(routerView.exists()).toBe(true);
  });
});
