import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'ImageContainer',
  props: ['imageSrc']
})
export default class ImageContainer extends Vue {
}
