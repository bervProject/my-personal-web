import ImageContainer from '@/components/ImageContainer.vue';

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
  return `${import.meta.env.BASE_URL}${url}`;
}
