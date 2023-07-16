import axios from 'axios';
import moment from 'moment';
import { defineComponent } from 'vue';

export default defineComponent({
  props: { url: String },
  name: 'GithubList',
  data() {
    return {
      myData: [],
      isLoading: false,
      openedDetails: [],
      showDetailIcon: true,
    }
  },
  mounted() {
    this.isLoading = true;
    this.loadData();
  },
  methods: {
    loadData() {
      if (!this.url) {
        return;
      }
      axios
        .get(this.url, {
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
    },
    showComplete(date: string): string {
      return moment(date).format('DD MMMM YYYY, HH:mm:ss');
    }
  }
});
