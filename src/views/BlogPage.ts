import services from '@/services';
import DevToPost from '@/components/DevToPost.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BlogPage',
  metaInfo: {
    title: 'My Blogs'
  },
  components: {
    DevToPost,
  },
  data() {
    return {

      blogs: [],
      isLoading: false,
    };
  },
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
});