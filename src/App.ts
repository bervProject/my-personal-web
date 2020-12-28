import MyHeader from '@/components/MyHeader.vue';
import MyFooter from '@/components/MyFooter.vue';

import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    MyHeader,
    MyFooter,
  },
})
export default class App extends Vue {}
