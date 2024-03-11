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
    const contactPromise = services.get('classes/Contact')

    Promise.allSettled([announcementPromise, contactPromise]).then((result) => {
      const announcementData = result[0];
      const contactData = result[1];
      if (announcementData.status === 'fulfilled') {
        this.announcements = announcementData.value.data.results;
      }
      if (contactData.status === 'fulfilled') {
        this.contacts = contactData.value.data.results;
      }
    }).finally(() => {
      this.isLoading = false;
    })
  }
});
