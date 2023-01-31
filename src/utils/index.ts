import ImageContainer from '@/components/ImageContainer.vue';
import Vue from 'vue';

export function showImageModal(this: any, url: string): void {
  this.$buefy.modal.open({
    parent: this,
    component: ImageContainer,
    props: {
      imageSrc: url,
    },
  });
}

export function getAssets(url: string): string {
  return `${process.env.BASE_URL}${url}`;
}
