import MyFooter from '@/components/MyFooter.vue';
import SideBar from '@/components/SideBar.vue';
import { defineComponent } from 'vue';

const allTitle = 'Bervianto Leo Pratama\'s Website';
const allDescription = 'Bervianto Leo Pratama\'s Personal Website.';
const imageSite = `${process.env.BASE_URL}assets/my-logo.png`
export default defineComponent({
  components: {
    MyFooter,
    SideBar,
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
});
