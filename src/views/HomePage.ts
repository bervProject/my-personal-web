import { defineComponent } from 'vue';
import services from '@/services';

export default defineComponent({
  setup() {
    const { useScriptTag } = require('@vueuse/core');
    useScriptTag('https://cdn.credly.com/assets/utilities/embed.js');
  },
  data() {
    return {
      carousels: [
        { image: 'assets/home/intro.jpg' },
        { image: 'assets/home/intro-2.jpg' },
        { image: 'assets/home/intro-4.jpg' },
        { image: 'assets/home/intro-3.jpg' },
        { image: 'assets/home/intro-5.jpg' },
      ],
      announcements: [],
      blogs: [],
      communityList: [
        "3b7ccdc9-6787-487c-957b-fa729f76520f",
        "8cad11b0-12d7-4193-b51a-11a0c75de467",
        "4c1544dc-271b-404e-974a-f991320ab9d8"
      ],
      contacts: [],
      isLoading: false,
    }
  },
  name: 'HomePage',
  metaInfo: {
    title: 'Home',
    meta: [
      { name: 'description', content: 'Bervianto Leo Pratama\'s Personal Website.' },
    ]
  },
  mounted(): void {
    this.isLoading = true;
    const announcementPromise = services.get("classes/Announcement");
    const contactPromise = services.get('classes/Contact');
    const blogPromise = services.get("classes/Blog");

    Promise.allSettled([announcementPromise, contactPromise, blogPromise]).then((result) => {
      const announcementData = result[0];
      const contactData = result[1];
      const blogData = result[2];
      if (announcementData.status === 'fulfilled') {
        this.announcements = announcementData.value.data.results;
      }
      if (contactData.status === 'fulfilled') {
        this.contacts = contactData.value.data.results;
      }
      if (blogData.status === 'fulfilled') {
        this.blogs = blogData.value.data.results;
      }
    }).finally(() => {
      this.isLoading = false;
    })
  }
});
