import { defineComponent } from 'vue';
import services from '@/services';

export default defineComponent({
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
    const announcementPromise = services.get("classes/Announcement");
    Promise.allSettled([announcementPromise]).then((result) => {
      const announcementData = result[0];
      if (announcementData.status === 'fulfilled') {
        this.announcements = announcementData.value.data.results;
      }
    })
  }
});
