import { expect, describe, it, vi, beforeEach } from 'vitest';
import { flushPromises, shallowMount } from '@vue/test-utils';
import services from '@/services';
import ExperiencePage from '@/views/ExperiencePage.vue';

vi.mock('@/services', () => ({
  default: {
    get: vi.fn(),
  },
}));

describe('ExperiencePage.vue', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('loads experience, education, and research data and formats dates', async () => {
    vi.mocked(services.get)
      .mockResolvedValueOnce({ data: { results: [{ title: 'Work' }] } })
      .mockResolvedValueOnce({ data: { results: [{ title: 'Edu' }] } })
      .mockResolvedValueOnce({ data: { results: [{ title: 'Research' }] } });

    const wrapper = shallowMount(ExperiencePage, {
      global: {
        stubs: ['router-link', 'router-view', 'o-loading', 'o-table', 'o-table-column', 'o-icon', 'o-button'],
      },
    });

    expect(services.get).toHaveBeenCalledWith('classes/Experience?order=-startDate');
    expect(services.get).toHaveBeenCalledWith('classes/Education?order=-startDate');
    expect(services.get).toHaveBeenCalledWith('classes/Research');

    await flushPromises();

    expect(wrapper.vm.workData).toEqual([{ title: 'Work' }]);
    expect(wrapper.vm.eduData).toEqual([{ title: 'Edu' }]);
    expect(wrapper.vm.researchData).toEqual([{ title: 'Research' }]);
    expect(wrapper.vm.showMonthYearOnly('2024-01-01')).toBe('January 2024');
    expect(wrapper.vm.showAgo('2024-01-01', '2024-02-01')).toContain('month');
    expect(wrapper.vm.getDomain('https://example.com/path')).toBe('example.com');
  });

  it('handles partial settlement without breaking', async () => {
    vi.mocked(services.get)
      .mockRejectedValueOnce(new Error('boom'))
      .mockResolvedValueOnce({ data: { results: [{ title: 'Edu' }] } })
      .mockResolvedValueOnce({ data: { results: [{ title: 'Research' }] } });

    const wrapper = shallowMount(ExperiencePage, {
      global: {
        stubs: ['router-link', 'router-view', 'o-loading', 'o-table', 'o-table-column', 'o-icon', 'o-button'],
      },
    });

    await flushPromises();

    expect(wrapper.vm.workData).toEqual([]);
    expect(wrapper.vm.eduData).toEqual([{ title: 'Edu' }]);
    expect(wrapper.vm.researchData).toEqual([{ title: 'Research' }]);
  });
});
