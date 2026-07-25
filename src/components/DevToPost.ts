import axios from 'axios';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DevToPost',
  props: {
    username: String,
    limit: {
      type: Number,
      default: 9,
    },
  },
  data() {
    const posts : any[] = [];
    return {
      isLoading: false,
      posts,
    };
  },
  computed: {
    isPreviewMode(): boolean {
      return this.limit < 9;
    },
  },
  mounted() {
    this.isLoading = true;
    axios.get(`https://dev.to/api/articles?username=${this.username}&per_page=${this.limit}`).then(result => {
      this.posts = result.data;
    }).catch((error: Error) => {
      console.error(error);
    }).finally(() => {
      this.isLoading = false;
    })
  }
});