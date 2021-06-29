import { Component, Vue } from 'vue-property-decorator';

@Component({
  props: {
    items: Array,
  },
  name: 'PortofolioItem'
})
export default class PortofolioItem extends Vue {
  public getPic(url: string): string {
    return `${process.env.BASE_URL}${url}`;
  }
}
