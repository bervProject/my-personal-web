import { get } from '@/services';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'BlogPage',
  metaInfo: {
    title: 'My Blogs'
  },
})
export default class BlogPage extends Vue {
  public blogs: object[] = []
  public isLoading: boolean = false;

  mounted(): void {
    this.isLoading = true;
    get("berviantoleo/bervdata/blogs").then(result => {
      this.blogs = result.data;
    }).catch(err => {
      console.error(err);
    }).finally(() => {
      this.isLoading = false;
    })
  }
}