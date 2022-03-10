import { Component } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { ImageModalMixins, ImageMixins } from '@/mixins';
import VerseRandom from '../components/VerseRandom.vue';
@Component({
  name: 'HomePage',
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
export default class HomePage extends mixins(ImageModalMixins, ImageMixins) {
  public carousels = [
    { image: 'assets/home/intro.jpg' },
    { image: 'assets/home/intro-2.jpg' },
    { image: 'assets/home/intro-4.jpg' },
    { image: 'assets/home/intro-3.jpg' },
    { image: 'assets/home/intro-5.jpg' },
  ];

}
