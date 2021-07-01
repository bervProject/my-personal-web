import Vue from 'vue';
import Component from 'vue-class-component';
import ImageContainer from '@/components/ImageContainer.vue';

@Component
export class ImageModalMixins extends Vue {
  public showImageModal(url: string): void {
    this.$buefy.modal.open({
      parent: this,
      component: ImageContainer,
      props: {
        imageSrc: url,
      },
    })
  }
}

@Component
export class ImageMixins extends Vue {
  public getAssets(url: string): string {
    return `${process.env.BASE_URL}${url}`;
  }
}

