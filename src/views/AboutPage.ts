import { Component, Vue } from 'vue-property-decorator';
import { get } from '@/services';

@Component({
  name: 'AboutPage',
  metaInfo: {
    title: 'About Me',
  },
})
export default class AboutPage extends Vue {
  public contacts: object[] = [];
  public isLoading: boolean = false;

  mounted(): void {
    this.isLoading = true;
    get('berviantoleo/bervdata/contacts')
      .then(result => {
        this.contacts = result.data;
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}
