import { Component } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { ImageModalMixins, ImageMixins } from '@/mixins';
import { get } from '@/services';
import VerseRandom from '../components/VerseRandom.vue';
@Component({
  name: 'Home',
  components: {
    VerseRandom
  },
  metaInfo: {
    title: 'Home',
    meta: [
      { name: 'description', content: 'Bervianto Leo Pratama\'s Personal Website.' },
    ]
  },
})
export default class Home extends mixins(ImageModalMixins, ImageMixins) {
  public carousels = [
    { image: 'assets/home/intro.jpg' },
    { image: 'assets/home/intro-2.jpg' },
    { image: 'assets/home/intro-4.jpg' },
    { image: 'assets/home/intro-3.jpg' },
    { image: 'assets/home/intro-5.jpg' },
  ];

  protected isLoading: boolean = false;

  protected announcements = [];

  mounted(): void {
    this.isLoading = true;
    const announcementPromise = get("berviantoleo/bervdata/announcements");
    Promise.allSettled([announcementPromise]).then((result) => {
      const announcementData = result[0];
      if (announcementData.status === 'fulfilled') {
        this.announcements = announcementData.value.data;
      }
    }).finally(() => {
      this.isLoading = false;
    })
  }
}
