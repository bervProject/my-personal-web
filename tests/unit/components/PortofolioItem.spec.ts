import { shallowMount } from '@vue/test-utils';
import PortofolioItem from '@/components/PortofolioItem.vue';

describe('PortofolioItem.vue', () => {
    it('Render initial component correctly', () => {
        const msg = 'Github';
        const wrapper = shallowMount(PortofolioItem, {
            global: {
                stubs: [
                    'router-link',
                    'router-view',
                    'o-button'
                ],
            },
            props: {
                items: [{
                    id: 1,
                    title: 'Hello World!',
                    repository: {
                        github: 'http://localhost'
                    }
                }]
            }
        });
        expect(wrapper.text()).toContain(msg);
        expect(wrapper.text()).toContain('Hello World!');
    });
});
