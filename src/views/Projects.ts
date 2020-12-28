import { Component, Vue } from 'vue-property-decorator';
import Github from '@/components/Github.vue';

@Component({
  components: {
    Github,
  },
})
export default class Projets extends Vue {}
