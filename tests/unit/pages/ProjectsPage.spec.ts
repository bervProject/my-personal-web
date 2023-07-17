import { shallowMount } from '@vue/test-utils';
import ProjectsPage from '@/views/ProjectsPage.vue';

describe('ProjectsPage.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(ProjectsPage, {
      global: {
        stubs: [
          'router-link',
          'router-view',
          'o-tabs',
          'o-tab-item'
        ]
      }
    });

    const title = wrapper.find('h2');
    const subtitle = wrapper.find('h3');

    expect(title.text()).toEqual('Projects');
    expect(title.classes()).toStrictEqual(['title']);
    expect(subtitle.text()).toEqual('My Projects collection from Github');
    expect(subtitle.classes()).toStrictEqual(['subtitle']);

    const bTabs = wrapper.find('o-tabs-stub');
    expect(bTabs.exists()).toBe(true);
    const tabsAttr = bTabs.attributes();
    expect(tabsAttr['position']).toEqual('centered');
    expect(tabsAttr['type']).toEqual('toggle');
    expect(tabsAttr['size']).toEqual('small');
  });
});
