import { Component, Vue } from 'vue-property-decorator';
import GithubList from '@/components/GithubList.vue';

@Component({
  components: {
    GithubList,
  },
  name: 'ProjectsPage',
  metaInfo: {
    title: 'Projects'
  },
})
export default class ProjectsPage extends Vue {}
