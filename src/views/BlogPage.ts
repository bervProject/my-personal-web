import services from '@/services';
import { Component, Vue } from 'vue-property-decorator';
import DevToPost from '@/components/DevToPost.vue';

@Component({
  name: 'BlogPage',
  metaInfo: {
    title: 'My Blogs'
  },
  components: {
    DevToPost,
  },
})
export default class BlogPage extends Vue {
  public blogs: object[] = []
  public isLoading: boolean = false;

  mounted(): void {
    this.isLoading = true;
    services.get("classes/Blog").then(result => {
      this.blogs = result.data.results;
    }).catch(err => {
      console.error(err);
    }).finally(() => {
      this.isLoading = false;
    })
  }
}