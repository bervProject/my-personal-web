import { expect, describe, it, vi, beforeEach } from 'vitest';
import { flushPromises, shallowMount } from '@vue/test-utils';
import services from '@/services';
import BlogPage from '@/views/BlogPage.vue';

vi.mock('@/services', () => ({
  default: {
    get: vi.fn(),
  },
}));

describe('BlogPage.vue', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('loads blog entries and clears loading state', async () => {
    vi.mocked(services.get).mockResolvedValue({ data: { results: [{ title: 'Blog' }] } });

    const wrapper = shallowMount(BlogPage, {
      global: {
        stubs: ['router-link', 'router-view', 'o-table', 'o-table-column', 'o-icon'],
      },
    });

    expect(services.get).toHaveBeenCalledWith('classes/Blog');

    await flushPromises();

    expect(wrapper.vm.blogs).toEqual([{ title: 'Blog' }]);
    expect(wrapper.vm.isLoading).toBe(false);
  });

  it('handles request failures without crashing', async () => {
    vi.mocked(services.get).mockRejectedValue(new Error('boom'));
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    shallowMount(BlogPage, {
      global: {
        stubs: ['router-link', 'router-view', 'o-table', 'o-table-column', 'o-icon'],
      },
    });

    await flushPromises();

    expect(consoleErrorSpy).toHaveBeenCalled();
  });
});
