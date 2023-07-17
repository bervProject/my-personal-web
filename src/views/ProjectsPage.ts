import { defineComponent } from 'vue';
import GithubList from '@/components/GithubList.vue';

export default defineComponent({
  components: {
    GithubList,
  },
  name: 'ProjectsPage',
  metaInfo: {
    title: 'Projects'
  },
});
