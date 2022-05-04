import { createLocalVue, shallowMount } from '@vue/test-utils';
import Buefy from 'buefy';
import VueI18n from 'vue-i18n';
import messages from '@/messages';

// create an extended `Vue` constructor
const localVue = createLocalVue()
// install plugins as normal
localVue.use(Buefy);
localVue.use(Buefy);
localVue.use(VueI18n);
const i18n = new VueI18n({
    locale: 'en', // set locale
    messages, // set locale messages
});

import PortofolioItem from '@/components/PortofolioItem.vue';

describe('PortofolioItem.vue', () => {
    it('Render initial component correctly', () => {
        const msg = 'Github';
        const wrapper = shallowMount(PortofolioItem, {
            localVue,
            i18n,
            stubs: ['router-link', 'router-view'],
            propsData: {
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
