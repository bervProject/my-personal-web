import { Component, Vue } from 'vue-property-decorator';
import services from '@/services';
@Component({
  name: 'MyHeader',
})
export default class MyHeader extends Vue {
  protected data: Array<any> = [
    {
      id: 'en',
      lang: 'English'
    },
    {
      id: 'id',
      lang: 'Bahasa Indonesia'
    }
  ];

  protected announcements = [];

  mounted(): void {
    const announcementPromise = services.get("classes/Announcement");
    Promise.allSettled([announcementPromise]).then((result) => {
      const announcementData = result[0];
      if (announcementData.status === 'fulfilled') {
        this.announcements = announcementData.value.data.results;
      }
    })
  }
}