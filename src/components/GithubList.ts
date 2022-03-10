import { Component } from 'vue-property-decorator';
import axios from 'axios';
import moment from 'moment';
import { mixins } from 'vue-class-component';
import { ImageModalMixins } from '@/mixins';

@Component({
  props: { url: String },
  name: 'GithubList'
})
export default class GithubList extends mixins(ImageModalMixins) {
  public myData: object[] = [];
  public isLoading: boolean = false;
  public openedDetails: Array<object> = [];
  public showDetailIcon: boolean = true;

  public mounted() {
    this.isLoading = true;
    this.loadData();
  }

  public loadData() {
    axios
      .get(this.$props.url, {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
        params: {
          per_page: 100,
        },
      })
      .then(response => {
        this.isLoading = false;
        this.myData = response.data;
      })
      .catch(reason => {
        this.isLoading = false;
      });
  }

  showComplete(date: string): string {
    return moment(date).format('DD MMMM YYYY, HH:mm:ss');
  }
}
