import MyHeader from '@/components/MyHeader.vue';
import MyFooter from '@/components/MyFooter.vue';

import { Component, Vue } from 'vue-property-decorator';

const allTitle = 'Bervianto Leo Pratama\'s Website';
const allDescription = 'Bervianto Leo Pratama\'s Personal Website.';
const imageSite = `${process.env.BASE_URL}assets/my-logo.png`
@Component({
  components: {
    MyHeader,
    MyFooter,
  },
  name: "App",
  metaInfo: {
    title: 'Home',
    titleTemplate: '%s | Bervianto Leo Pratama\'s Website',
    meta: [
      { name: 'og:title', content: allTitle },
      { name: 'og:description', content: allDescription },
      { name: 'og:site_name', content: 'Berv Project' },
      { name: 'og:image', content: imageSite },
      { name: 'twitter:title', content: allTitle },
      { name: 'twitter:description', content: allDescription },
      { name: 'twitter:site', content: '@berviantoleo' },
      { name: 'twitter:image', content: imageSite },
      { name: 'twitter:image:alt', content: 'Bervianto Leo\'s Image Site' }
    ]
  },
})
export default class App extends Vue {}
