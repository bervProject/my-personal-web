import { Component, Vue } from 'vue-property-decorator';
import services from '@/services';

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
    services.get('classes/Contact')
      .then(result => {
        this.contacts = result.data.results;
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}
