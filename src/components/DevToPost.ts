import axios from 'axios';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DevToPost',
  props: {
    username: String,
  },
  data() {
    return {
      isLoading: false,
      posts: [],
    };
  }
  , mounted() {
    this.isLoading = true;
    axios.get(`https://dev.to/api/articles?username=${this.username}&per_page=9`).then(result => {
      this.posts = result.data;
    }).catch(error => {
      console.error(error);
    }).finally(() => {
      this.isLoading = false;
    })
  }
});