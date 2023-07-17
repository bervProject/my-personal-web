import { shallowMount } from '@vue/test-utils';
import FavoriteAudio from '@/views/FavoriteAudio.vue';

describe('FavoriteAudio.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(FavoriteAudio, {
      global: {
        stubs: [
          'router-link',
          'router-view',
          'o-field',
          'o-select',
          'o-pagination'
        ],
        mocks: {
          $t: () => {}
        }
      }
    });

    const title = wrapper.find('h2');
    const subtitle = wrapper.find('h3');

    expect(title.text()).toEqual('Soundcloud');
    expect(title.classes()).toStrictEqual(['title']);
    expect(subtitle.text()).toEqual('Tune in');
    expect(subtitle.classes()).toStrictEqual(['title']);

    const allIframes = wrapper.findAll('iframe');

    const iframeTunein = allIframes.find(wrapper => wrapper.attributes()['title'] === 'tunein');
    expect(iframeTunein).toBeTruthy();
    const tabsAttr = iframeTunein!.attributes();
    expect(tabsAttr['title']).toEqual('tunein');
    expect(tabsAttr['src']).toEqual('https://tunein.com/embed/player/s163092/');
  });
});
