import axios from 'axios';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DevToPost',
  props: {
    username: String,
  },
  data() {
    const posts : any[] = [];
    return {
      isLoading: false,
      posts,
    };
  }
  , mounted() {
    this.isLoading = true;
    axios.get(`https://dev.to/api/articles?username=${this.username}&per_page=9`).then(result => {
      this.posts = result.data;
    }).catch((error: Error) => {
      console.error(error);
    }).finally(() => {
      this.isLoading = false;
    })
  }
});