import { Component, Vue } from 'vue-property-decorator';
import Github from '@/components/Github.vue';

@Component({
  components: {
    Github,
  },
  name: 'Projects'
})
export default class Projects extends Vue {}
