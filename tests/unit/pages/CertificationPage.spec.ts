import { shallowMount } from '@vue/test-utils';
import CertificationPage from '@/views/CertificationPage.vue';

describe('CertificationPage.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(CertificationPage, {
      global: {
        stubs: [
          'router-link',
          'router-view',
        ],
        mocks: {
          $t: () => {}
        }
      }
    });

    expect(wrapper.text()).toContain('This page is in maintenance mode');

    const footer = wrapper.find('footer');

    expect(footer.exists()).toBe(true);
    expect(footer.classes()).toStrictEqual(['card-footer']);
  });
});
