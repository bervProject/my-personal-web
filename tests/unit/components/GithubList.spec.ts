import { describe, expect, it, vi, beforeEach } from 'vitest';
import { flushPromises, mount } from '@vue/test-utils';
import axios from 'axios';
import GithubList from '@/components/GithubList.vue';

vi.mock('axios');

describe('GithubList.vue', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('loads GitHub data and formats dates', async () => {
    vi.mocked(axios.get).mockResolvedValue({ data: [{ id: 1 }] });

    const wrapper = mount(GithubList, {
      props: { url: 'https://api.github.com/repos/demo/repo' },
      global: {
        stubs: ['o-table', 'o-table-column', 'o-icon', 'o-button'],
      },
    });

    expect(axios.get).toHaveBeenCalledWith('https://api.github.com/repos/demo/repo', {
      headers: { Accept: 'application/vnd.github.v3+json' },
      params: { per_page: 100 },
    });

    await flushPromises();

    expect(wrapper.vm.myData).toEqual([{ id: 1 }]);
    expect(wrapper.vm.isLoading).toBe(false);
    expect(wrapper.vm.showComplete('2024-01-02T03:04:05Z')).toMatch(/02 January 2024, \d{2}:\d{2}:\d{2}/);
  });

  it('does nothing when url is missing', async () => {
    const wrapper = mount(GithubList, {
      props: { url: '' },
      global: {
        stubs: ['o-table', 'o-table-column', 'o-icon', 'o-button'],
      },
    });

    expect(axios.get).not.toHaveBeenCalled();
    expect(wrapper.vm.myData).toEqual([]);
  });
});
