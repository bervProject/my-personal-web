import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'MyFooter'
})
export default class MyFooter extends Vue {
  protected version: string = process.env.VUE_APP_VERSION || '0';
}
