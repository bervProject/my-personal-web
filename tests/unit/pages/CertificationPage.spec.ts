import { expect, describe, it } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import CertificationPage from '@/views/CertificationPage.vue';

describe('CertificationPage.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(CertificationPage, {
      global: {
        stubs: [
          'router-link',
          'router-view',
          'o-icon',
          'o-button',
          'o-notification',
          'o-table',
          'o-table-column',
        ],
        mocks: {
          $t: () => {}
        }
      }
    });

    expect(wrapper.text()).toContain('');
  });
});
