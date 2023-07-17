import { shallowMount } from '@vue/test-utils';
import ImageContainer from '@/components/ImageContainer.vue';

describe('ImageContainer.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(ImageContainer, {
      global: {
        stubs: ['router-link', 'router-view']
      }
    });
    const figure = wrapper.find('figure');
    expect(figure.exists()).toBe(true);
    expect(figure.classes()).toStrictEqual(['image']);

    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(img.attributes()['alt']).toBe('Image Container');
  });
});
