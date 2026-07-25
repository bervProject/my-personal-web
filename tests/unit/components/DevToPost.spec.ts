import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { flushPromises, mount } from '@vue/test-utils';
import axios from 'axios';
import DevToPost from '@/components/DevToPost.vue';

vi.mock('axios');

describe('DevToPost.vue', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('loads posts and exposes preview mode for small limits', async () => {
    vi.mocked(axios.get).mockResolvedValue({ data: [{ title: 'Hello' }] });

    const wrapper = mount(DevToPost, {
      props: { username: 'tester', limit: 3 },
      global: {
        stubs: ['o-loading', 'o-button'],
      },
    });

    expect(axios.get).toHaveBeenCalledWith('https://dev.to/api/articles?username=tester&per_page=3');

    await flushPromises();

    expect(wrapper.vm.isPreviewMode).toBe(true);
    expect(wrapper.vm.posts).toEqual([{ title: 'Hello' }]);
    expect(wrapper.vm.isLoading).toBe(false);
  });

  it('handles request failures without crashing', async () => {
    vi.mocked(axios.get).mockRejectedValue(new Error('boom'));

    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    mount(DevToPost, {
      props: { username: 'tester', limit: 9 },
      global: {
        stubs: ['o-loading', 'o-button'],
      },
    });

    await flushPromises();

    expect(consoleErrorSpy).toHaveBeenCalled();
  });
});
