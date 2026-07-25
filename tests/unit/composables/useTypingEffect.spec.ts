import { describe, expect, it, vi, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { defineComponent, nextTick } from 'vue';
import { useTypingEffect } from '@/composables/useTypingEffect';

describe('useTypingEffect', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('returns an empty display text for an empty phrase list', () => {
    const TestComponent = defineComponent({
      setup() {
        return useTypingEffect([]);
      },
      template: '<div>{{ displayText }}</div>',
    });

    const wrapper = mount(TestComponent);
    expect(wrapper.text()).toBe('');
  });

  it('types and deletes phrases over time', async () => {
    vi.useFakeTimers();

    const TestComponent = defineComponent({
      setup() {
        return useTypingEffect(['Hi', 'Bye'], { typingSpeed: 10, pauseDuration: 20, deletingSpeed: 5 });
      },
      template: '<div>{{ displayText }}</div>',
    });

    const wrapper = mount(TestComponent);

    expect(wrapper.text()).toBe('');

    vi.advanceTimersByTime(10);
    await nextTick();
    expect(wrapper.text()).toBe('H');

    vi.advanceTimersByTime(10);
    await nextTick();
    expect(wrapper.text()).toBe('Hi');

    vi.advanceTimersByTime(20);
    vi.advanceTimersByTime(5);
    await nextTick();
    expect(wrapper.text()).toBe('');
  });
});
