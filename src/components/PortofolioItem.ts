import { Component } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { ImageMixins, ImageModalMixins } from '@/mixins';

@Component({
  props: {
    items: Array,
  },
  name: 'PortofolioItem'
})
export default class PortofolioItem extends mixins(ImageMixins, ImageModalMixins) {
}
