import axios from 'axios';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'DevToPost',
})
export default class DevToPost extends Vue {
  @Prop({default: ''})
  public username!: string;
  public isLoading: boolean = false;
  public posts: Array<object> = [];
  public mounted() {
    this.isLoading = true;
    axios.get(`https://dev.to/api/articles?username=${this.username}&per_page=9`).then(result => {
      this.posts = result.data;
    }).catch(error => {
      console.error(error);
    }).finally(() => {
      this.isLoading = false;
    })
  }
}